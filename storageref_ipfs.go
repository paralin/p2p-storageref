package storageref

import (
	"context"

	"github.com/aperturerobotics/pbobject"
	"github.com/aperturerobotics/pbobject/ipfs"
	"github.com/pkg/errors"
)

// ErrMissingIpfsShell indicates we are missing the IPFS file shell in the context.
var ErrMissingIpfsShell = errors.New("ipfs file shell must be given")

var ipfsShellKey = &(struct{}{})

// WithIpfsShell attaches an IPFS file shell to a context.
func WithIpfsShell(parent context.Context, sh *ipfs.FileShell) context.Context {
	return context.WithValue(parent, ipfsShellKey, sh)
}

// GetIpfsShell gets the IPFS file shell from a context.
func GetIpfsShell(ctx context.Context) *ipfs.FileShell {
	v := ctx.Value(ipfsShellKey)
	if v == nil {
		return nil
	}

	return v.(*ipfs.FileShell)
}

// FollowRef follows the reference, getting context from ctx.
func (r *StorageRefIPFS) FollowRef(ctx context.Context) (pbobject.Object, error) {
	objTable := pbobject.GetObjectTable(ctx)
	if objTable == nil {
		return nil, ErrMissingObjectTable
	}

	sh := GetIpfsShell(ctx)
	if sh == nil {
		return nil, ErrMissingIpfsShell
	}

	return sh.GetProtobufObject(ctx, r.GetObjectHash())
}

// _ type assertion
var _ StorageRefImpl = (*StorageRefIPFS)(nil)
