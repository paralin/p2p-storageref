package storageref

import (
	"bytes"
	"context"

	"github.com/aperturerobotics/pbobject"
	"github.com/pkg/errors"
)

// ErrMissingObjectHash indicates there is no object digest attached to the reference.
var ErrMissingObjectHash = errors.New("object hash/digest must be given")

// StorageRefImpl follows a storage reference.
type StorageRefImpl interface {
	// GetStorageType returns the storage type.
	GetStorageType() StorageType
	// FollowRef follows the reference, getting context from ctx and placing the result into out.
	FollowRef(
		ctx context.Context,
		objectDigest []byte,
		out pbobject.Object,
		outWrapper *pbobject.ObjectWrapper,
	) error
	// Equals compares the references.
	Equals(other StorageRefImpl) bool
	// String returns a string of the reference.
	String() string
	// IsEmpty checks if the storage ref is empty.
	IsEmpty() bool
}

// GetImpl returns the implementation of this storage ref.
// If the storage ref is nil, returns nil, nil
func (r *StorageRef) GetImpl() (StorageRefImpl, error) {
	if r == nil {
		return nil, nil
	}

	ctor, err := GetStorageRefImplCtor(r.GetStorageType())
	if err != nil {
		return nil, err
	}

	return ctor(r), nil
}

// FollowRef follows the reference, getting context from ctx.
// If the reference is nil, returns nil, nil.
// The inner multihash can be specified to override the one specified in the storage ref.
// Otherwise, specify nil.
func (r *StorageRef) FollowRef(
	ctx context.Context,
	objectDigest []byte,
	out pbobject.Object,
	outWrapper *pbobject.ObjectWrapper,
) error {
	if r == nil || out == nil {
		return errors.New("nil storage reference")
	}

	omh := r.GetObjectDigest()
	if objectDigest != nil {
		omh = objectDigest
	}

	impl, err := r.GetImpl()
	if err != nil {
		return err
	}

	return impl.FollowRef(ctx, omh, out, outWrapper)
}

// Equals compares two StorageRef.
// If the storage type is unknown, or the reference is nil, false will be returned.
func (r *StorageRef) Equals(other StorageRefImpl) bool {
	if r.GetStorageType() != other.GetStorageType() {
		return false
	}

	impl, err := r.GetImpl()
	if err != nil {
		return false
	}

	otherImpl := other
	if sr, ok := other.(*StorageRef); ok {
		oi, err := sr.GetImpl()
		if err != nil {
			return false
		}
		otherImpl = oi

		if sr.GetObjectDigest() != nil || r.GetObjectDigest() != nil {
			if bytes.Compare(sr.GetObjectDigest(), r.GetObjectDigest()) != 0 {
				return false
			}
		}
	}

	return impl.Equals(otherImpl)
}

// IsEmpty checks if the reference is empty.
func (r *StorageRef) IsEmpty() bool {
	if r == nil {
		return true
	}

	if r.GetStorageType() == StorageType_StorageType_UNKNOWN {
		return true
	}

	impl, err := r.GetImpl()
	if err != nil {
		return false
	}

	return impl.IsEmpty()
}

// type assertion
var _ = (StorageRefImpl)(&StorageRef{})
