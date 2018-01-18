package storageref

import (
	"sync"

	"github.com/pkg/errors"
)

// ErrDuplicateImpl is returned when a duplicate storageref implementation is registered.
var ErrDuplicateImpl = errors.New("duplicate storageref implementation")

// StorageRefImplCtor constructs a implementation from a reference.
type StorageRefImplCtor = func(storageRef *StorageRef) StorageRefImpl

// storageRefImplCtorsMtx is the mutex on the storageRefImplCtors map
var storageRefImplCtorsMtx sync.RWMutex

// storageRefImplCtors contains registered implementations.
var storageRefImplCtors = make(map[StorageType]StorageRefImplCtor)

// MustRegisterStorageRefImplCtor registers a storage ref implementation constructor or panics.
// expected to be called from Init(), but can be deferred
func MustRegisterStorageRefImplCtor(storageType StorageType, impl StorageRefImplCtor) {
	if err := RegisterStorageRefImplCtor(storageType, impl); err != nil {
		panic(err)
	}
}

// RegisterStorageRefImplCtor registers a storage ref implementation constructor.
// expected to be called from Init(), but can be deferred
func RegisterStorageRefImplCtor(storageType StorageType, impl StorageRefImplCtor) error {
	storageRefImplCtorsMtx.Lock()
	defer storageRefImplCtorsMtx.Unlock()

	if _, ok := storageRefImplCtors[storageType]; ok {
		return ErrDuplicateImpl
	}

	storageRefImplCtors[storageType] = impl
	return nil
}

// GetStorageRefImplCtor returns the registered implementation of the type.
func GetStorageRefImplCtor(kind StorageType) (impl StorageRefImplCtor, err error) {
	if _, ok := StorageType_name[int32(kind)]; !ok {
		return nil, errors.Errorf("storage type unknown: %v", kind.String())
	}

	storageRefImplCtorsMtx.RLock()
	impl = storageRefImplCtors[kind]
	storageRefImplCtorsMtx.RUnlock()

	if impl == nil {
		err = errors.Errorf("unimplemented storage type: %v", kind.String())
	}
	return
}
