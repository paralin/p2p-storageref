package ipfs

import (
	"context"

	"github.com/aperturerobotics/objstore"
	"github.com/aperturerobotics/pbobject"
	"github.com/aperturerobotics/storageref"
	"github.com/pkg/errors"
)

// ErrMissingObjectStore indicates we are missing the object store stack in the context.
var ErrMissingObjectStore = errors.New("object store must be given")

// ErrMissingEncryptionConfig indicates we are missing an encryption config in the context.
var ErrMissingEncryptionConfig = errors.New("encryption config must be given")

// IPFSImpl follows IPFS references.
type IPFSImpl struct {
	*storageref.StorageRefIPFS
}

// NewIPFSImpl constructs a new IPFSImpl.
func NewIPFSImpl(ref *storageref.StorageRef) storageref.StorageRefImpl {
	return &IPFSImpl{StorageRefIPFS: ref.GetIpfs()}
}

// NewStorageRefIPFS builds a IPFS storage reference.
func NewStorageRefIPFS(
	ref string,
	objectDigest []byte,
	refType storageref.IPFSRefType,
) *storageref.StorageRef {
	return &storageref.StorageRef{
		StorageType:  storageref.StorageType_StorageType_IPFS,
		ObjectDigest: objectDigest,
		Ipfs: &storageref.StorageRefIPFS{
			Reference:   ref,
			IpfsRefType: refType,
		},
	}
}

// FollowRef follows the reference, getting context from ctx.
func (r *IPFSImpl) FollowRef(
	ctx context.Context,
	objDigest []byte,
	out pbobject.Object,
	outWrapper *pbobject.ObjectWrapper,
) error {
	objStore := objstore.GetObjStore(ctx)
	if objStore == nil {
		return ErrMissingObjectStore
	}

	encConf := pbobject.GetEncryptionConf(ctx)
	if encConf == nil {
		return ErrMissingEncryptionConfig
	}

	if len(objDigest) == 0 {
		return storageref.ErrMissingObjectHash
	}

	isBlock := r.GetIpfsRefType() == storageref.IPFSRefType_IPFSRefType_BLOCK
	return objStore.GetOrFetch(
		ctx,
		objDigest,
		r.GetReference(),
		isBlock,
		out,
		outWrapper,
		*encConf,
	)
}

// GetStorageType returns the storage type.
func (r *IPFSImpl) GetStorageType() storageref.StorageType {
	return storageref.StorageType_StorageType_IPFS
}

// Equals compares the two references.
func (r *IPFSImpl) Equals(other storageref.StorageRefImpl) bool {
	ot, ok := other.(*IPFSImpl)
	if !ok {
		return false
	}

	if r.IsEmpty() || ot.IsEmpty() {
		return false
	}

	if r.GetIpfsRefType() != ot.GetIpfsRefType() {
		return false
	}

	return ot.GetReference() == r.GetReference()
}

// IsEmpty checks if the reference is empty.
func (r *IPFSImpl) IsEmpty() bool {
	return r.GetReference() == ""
}

func init() {
	storageref.MustRegisterStorageRefImplCtor(storageref.StorageType_StorageType_IPFS, NewIPFSImpl)
}
