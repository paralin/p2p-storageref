import { storageref } from './pb'

// storageRefEquals compares two storage references.
export function storageRefEquals(r1: storageref.IStorageRef, r2: storageref.IStorageRef): boolean {
    if ((!r1 && !!r2) || (!!r1 && !r2)) {
        return false
    }

    if (r1.storageType !== r2.storageType) {
        return false
    }

    if (r1.objectDigest && r2.objectDigest) {
        if (r1.objectDigest.length !== r2.objectDigest.length) {
            return false
        }

        for (let i = 0; i < r1.objectDigest.length; i++) {
            if (r1.objectDigest[i] !== r2.objectDigest[i]) {
                return false
            }
        }
    }

    switch (r1.storageType) {
        case storageref.StorageType.StorageType_IPFS:
            if (!r1.ipfs && !r2.ipfs) {
                return true
            }
            if (!r1.ipfs || !r2.ipfs) {
                return false
            }
            return r1.ipfs.objectHash === r2.ipfs.objectHash
        case storageref.StorageType.StorageType_DIGEST:
            break
        default:
            throw new Error('cannot compare storage types of kind: ' + r1.storageType)
    }

    return true
}
