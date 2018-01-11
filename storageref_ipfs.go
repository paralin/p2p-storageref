package storageref

import (
	"context"

	"github.com/aperturerobotics/pbobject"
	"github.com/aperturerobotics/pbobject/ipfs"
	"github.com/pkg/errors"
)

// ErrMissingObjectShell indicates we are missing the IPFS file shell in the context.
var ErrMissingObjectShell = errors.New("ipfs object shell must be given")

// NewStorageRefIPFS builds a IPFS storage reference.
func NewStorageRefIPFS(ref string) *StorageRef {
	return &StorageRef{
		StorageType: StorageType_StorageType_IPFS,
		Ipfs: &StorageRefIPFS{
			ObjectHash: ref,
		},
	}
}

// FollowRef follows the reference, getting context from ctx.
func (r *StorageRefIPFS) FollowRef(ctx context.Context) (pbobject.Object, error) {
	objTable := pbobject.GetObjectTable(ctx)
	if objTable == nil {
		return nil, ErrMissingObjectTable
	}

	sh := ipfs.GetObjectShell(ctx)
	if sh == nil {
		return nil, ErrMissingObjectShell
	}

	return sh.GetProtobufObject(ctx, r.GetObjectHash())
}

// GetStorageType returns the storage type.
func (r *StorageRefIPFS) GetStorageType() StorageType {
	return StorageType_StorageType_IPFS
}

// Equals compares the two references.
func (r *StorageRefIPFS) Equals(other StorageRefImpl) bool {
	ot, ok := other.(*StorageRefIPFS)
	if !ok {
		return false
	}

	if r.IsEmpty() || ot.IsEmpty() {
		return false
	}

	return ot.GetObjectHash() == r.GetObjectHash()
}

// IsEmpty checks if the reference is empty.
func (r *StorageRefIPFS) IsEmpty() bool {
	return r.GetObjectHash() == ""
}

// _ type assertion
var _ StorageRefImpl = (*StorageRefIPFS)(nil)
