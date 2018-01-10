package storageref

import (
	"context"

	"github.com/aperturerobotics/pbobject"
	"github.com/aperturerobotics/pbobject/ipfs"
	"github.com/pkg/errors"
)

// ErrMissingIpfsShell indicates we are missing the IPFS file shell in the context.
var ErrMissingIpfsShell = errors.New("ipfs file shell must be given")

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

	sh := ipfs.GetIpfsShell(ctx)
	if sh == nil {
		return nil, ErrMissingIpfsShell
	}

	return sh.GetProtobufObject(ctx, r.GetObjectHash())
}

// _ type assertion
var _ StorageRefImpl = (*StorageRefIPFS)(nil)
