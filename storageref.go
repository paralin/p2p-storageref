package storageref

import (
	"context"

	"github.com/aperturerobotics/pbobject"
	"github.com/pkg/errors"
)

// ErrMissingObjectTable indicates there is no object table attached to ctx.
var ErrMissingObjectTable = errors.New("object table must be given")

// StorageRefImpl follows a storage reference.
type StorageRefImpl interface {
	// GetStorageType returns the storage type.
	GetStorageType() StorageType
	// FollowRef follows the reference, getting context from ctx.
	FollowRef(ctx context.Context) (pbobject.Object, error)
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

	switch r.GetStorageType() {
	case StorageType_StorageType_IPFS:
		return r.GetIpfs(), nil
	default:
		return nil, errors.Errorf("unrecognized storage type: %v", r.GetStorageType().String())
	}
}

// FollowRef follows the reference, getting context from ctx.
// If the reference is nil, returns nil, nil.
func (r *StorageRef) FollowRef(ctx context.Context) (pbobject.Object, error) {
	if r == nil {
		return nil, nil
	}

	impl, err := r.GetImpl()
	if err != nil {
		return nil, err
	}

	return impl.FollowRef(ctx)
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

	otherImpl, err := other.GetImpl()
	if err != nil {
		return false
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
