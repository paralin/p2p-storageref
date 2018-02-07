import { storageref } from '../pb'

describe('StorageRef', () => {
    it('should encode and decode correctly', () => {
        let ref = new storageref.StorageRef({
            storageType: storageref.StorageType.StorageType_IPFS,
            ipfs: {
                objectHash: "QmZSzXADH1whB8GPBkhNRnb9HAVNoZDcmQhLxRMsRVCVwX"
            },
        })
        let enc = storageref.StorageRef.encode(ref).finish()
        let dec = storageref.StorageRef.decode(enc)
        expect(dec.toJSON()).toEqual(ref.toJSON())
    })
})
