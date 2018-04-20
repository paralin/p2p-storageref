package inband

import (
	"bytes"
	"context"

	"github.com/aperturerobotics/pbobject"
	"github.com/aperturerobotics/storageref"
	"github.com/golang/protobuf/proto"
	"github.com/pkg/errors"
)

// ErrMissingEncryptionConfig indicates we are missing an encryption config in the context.
var ErrMissingEncryptionConfig = errors.New("encryption config must be given")

// InBandImpl follows digest references.
type InBandImpl struct {
	*storageref.StorageRefInBand
	objDigest []byte
}

// NewInBandImpl constructs a new InBandImpl.
func NewInBandImpl(ref *storageref.StorageRef) storageref.StorageRefImpl {
	return &InBandImpl{StorageRefInBand: ref.GetInBand(), objDigest: ref.GetObjectDigest()}
}

// NewStorageRefInBand builds a in-band storage reference.
func NewStorageRefInBand(objectDigest []byte, data []byte) *storageref.StorageRef {
	return &storageref.StorageRef{
		StorageType:  storageref.StorageType_StorageType_INBAND,
		ObjectDigest: objectDigest,
		InBand:       &storageref.StorageRefInBand{Data: data},
	}
}

// FollowRef follows the reference, getting context from ctx.
func (r *InBandImpl) FollowRef(ctx context.Context, objDigest []byte, out pbobject.Object) error {
	encConf := pbobject.GetEncryptionConf(ctx)
	if encConf == nil {
		return ErrMissingEncryptionConfig
	}

	// Attempt to decode and decrypt the wrapper.
	objWrapper := &pbobject.ObjectWrapper{}
	if err := proto.Unmarshal(r.GetData(), objWrapper); err != nil {
		return err
	}

	if err := objWrapper.DecodeToObject(out, *encConf); err != nil {
		return err
	}

	return nil
}

// GetStorageType returns the storage type.
func (r *InBandImpl) GetStorageType() storageref.StorageType {
	return storageref.StorageType_StorageType_DIGEST
}

// Equals compares the two references.
func (r *InBandImpl) Equals(other storageref.StorageRefImpl) bool {
	ot, ok := other.(*InBandImpl)
	if !ok {
		return false
	}

	if r.IsEmpty() || ot.IsEmpty() {
		return false
	}

	return bytes.Compare(ot.GetData(), r.GetData()) == 0
}

// IsEmpty checks if the reference is empty.
func (r *InBandImpl) IsEmpty() bool {
	return len(r.GetData()) == 0
}

func init() {
	storageref.MustRegisterStorageRefImplCtor(
		storageref.StorageType_StorageType_INBAND,
		NewInBandImpl,
	)
}
