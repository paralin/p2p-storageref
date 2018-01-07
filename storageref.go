package storageref

import (
	"context"

	"github.com/aperturerobotics/pbobject"
	"github.com/pkg/errors"
)

// ErrMissingObjectTable indicates there is no object table attached to ctx.
var ErrMissingObjectTable = errors.New("object table must be given")

// StorageRefFollower follows a storage reference.
type StorageRefImpl interface {
	// FollowRef follows the reference, getting context from ctx.
	FollowRef(ctx context.Context) (pbobject.Object, error)
}

// FollowRef follows the reference, getting context from ctx.
func (r *StorageRef) FollowRef(ctx context.Context) (pbobject.Object, error) {
	objTable := pbobject.GetObjectTable(ctx)
	if objTable == nil {
		return nil, ErrMissingObjectTable
	}

	switch r.StorageType {
	case StorageType_StorageType_IPFS:
		return r.GetIpfs().FollowRef(ctx)
	default:
		return nil, errors.Errorf("unimplemented storage reference: %s", r.StorageType.String())
	}
}

// add func to storageref called follow
// accept ctx, implStore, return pbobject.Object
