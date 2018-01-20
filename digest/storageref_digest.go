package digest

import (
	"bytes"
	"context"

	"github.com/aperturerobotics/objstore"
	"github.com/aperturerobotics/pbobject"
	"github.com/aperturerobotics/storageref"
	"github.com/pkg/errors"
)

// ErrMissingObjectStore indicates we are missing the object store stack in the context.
var ErrMissingObjectStore = errors.New("object store must be given")

// DigestImpl follows digest references.
type DigestImpl struct {
	*storageref.StorageRefDigest
	fallbackDigest []byte
}

// NewDigestImpl constructs a new DigestImpl.
func NewDigestImpl(ref *storageref.StorageRef) storageref.StorageRefImpl {
	return &DigestImpl{StorageRefDigest: ref.GetDigest(), fallbackDigest: ref.GetObjectDigest()}
}

// NewStorageRefDigest builds a digest storage reference.
func NewStorageRefDigest(ref string, objectDigest []byte) *storageref.StorageRef {
	return &storageref.StorageRef{
		StorageType:  storageref.StorageType_StorageRef_DIGEST,
		ObjectDigest: objectDigest,
		Digest:       &storageref.StorageRefDigest{},
	}
}

// FollowRef follows the reference, getting context from ctx.
func (r *DigestImpl) FollowRef(ctx context.Context, objDigest []byte, out pbobject.Object) error {
	objStore := objstore.GetObjStore(ctx)
	if objStore == nil {
		return ErrMissingObjectStore
	}

	if len(objDigest) == 0 {
		if len(r.fallbackDigest) != 0 {
			objDigest = r.fallbackDigest
		} else {
			return storageref.ErrMissingObjectHash
		}
	}

	return objStore.GetLocal(ctx, objDigest, out)
}

// GetStorageType returns the storage type.
func (r *DigestImpl) GetStorageType() storageref.StorageType {
	return storageref.StorageType_StorageRef_DIGEST
}

// Equals compares the two references.
func (r *DigestImpl) Equals(other storageref.StorageRefImpl) bool {
	ot, ok := other.(*DigestImpl)
	if !ok {
		return false
	}

	if r.IsEmpty() || ot.IsEmpty() {
		return false
	}

	return bytes.Compare(ot.fallbackDigest, r.fallbackDigest) == 0
}

// IsEmpty checks if the reference is empty.
func (r *DigestImpl) IsEmpty() bool {
	return len(r.fallbackDigest) == 0
}

func init() {
	storageref.MustRegisterStorageRefImplCtor(storageref.StorageType_StorageRef_DIGEST, NewDigestImpl)
}
