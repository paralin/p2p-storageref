/* tslint:disable */
import * as $protobuf from 'protobufjs'

/** Namespace storageref. */
export namespace storageref {
  /** Properties of a StorageRef. */
  interface IStorageRef {
    /** StorageRef storageType */
    storageType?: storageref.StorageType | null

    /** StorageRef objectDigest */
    objectDigest?: Uint8Array | null

    /** StorageRef ipfs */
    ipfs?: storageref.IStorageRefIPFS | null

    /** StorageRef digest */
    digest?: storageref.IStorageRefDigest | null
  }

  /** Represents a StorageRef. */
  class StorageRef implements IStorageRef {
    /**
     * Constructs a new StorageRef.
     * @param [properties] Properties to set
     */
    constructor(properties?: storageref.IStorageRef)

    /** StorageRef storageType. */
    public storageType: storageref.StorageType

    /** StorageRef objectDigest. */
    public objectDigest: Uint8Array

    /** StorageRef ipfs. */
    public ipfs?: storageref.IStorageRefIPFS | null

    /** StorageRef digest. */
    public digest?: storageref.IStorageRefDigest | null

    /**
     * Creates a new StorageRef instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StorageRef instance
     */
    public static create(
      properties?: storageref.IStorageRef
    ): storageref.StorageRef

    /**
     * Encodes the specified StorageRef message. Does not implicitly {@link storageref.StorageRef.verify|verify} messages.
     * @param message StorageRef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: storageref.IStorageRef,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Encodes the specified StorageRef message, length delimited. Does not implicitly {@link storageref.StorageRef.verify|verify} messages.
     * @param message StorageRef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: storageref.IStorageRef,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Decodes a StorageRef message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StorageRef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): storageref.StorageRef

    /**
     * Decodes a StorageRef message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StorageRef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): storageref.StorageRef

    /**
     * Verifies a StorageRef message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null

    /**
     * Creates a StorageRef message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StorageRef
     */
    public static fromObject(object: {
      [k: string]: any
    }): storageref.StorageRef

    /**
     * Creates a plain object from a StorageRef message. Also converts values to other types if specified.
     * @param message StorageRef
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: storageref.StorageRef,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any }

    /**
     * Converts this StorageRef to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any }
  }

  /** StorageType enum. */
  enum StorageType {
    StorageType_UNKNOWN = 0,
    StorageType_IPFS = 1,
    StorageType_DIGEST = 2
  }

  /** Properties of a StorageRefIPFS. */
  interface IStorageRefIPFS {
    /** StorageRefIPFS objectHash */
    objectHash?: string | null
  }

  /** Represents a StorageRefIPFS. */
  class StorageRefIPFS implements IStorageRefIPFS {
    /**
     * Constructs a new StorageRefIPFS.
     * @param [properties] Properties to set
     */
    constructor(properties?: storageref.IStorageRefIPFS)

    /** StorageRefIPFS objectHash. */
    public objectHash: string

    /**
     * Creates a new StorageRefIPFS instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StorageRefIPFS instance
     */
    public static create(
      properties?: storageref.IStorageRefIPFS
    ): storageref.StorageRefIPFS

    /**
     * Encodes the specified StorageRefIPFS message. Does not implicitly {@link storageref.StorageRefIPFS.verify|verify} messages.
     * @param message StorageRefIPFS message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: storageref.IStorageRefIPFS,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Encodes the specified StorageRefIPFS message, length delimited. Does not implicitly {@link storageref.StorageRefIPFS.verify|verify} messages.
     * @param message StorageRefIPFS message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: storageref.IStorageRefIPFS,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Decodes a StorageRefIPFS message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StorageRefIPFS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): storageref.StorageRefIPFS

    /**
     * Decodes a StorageRefIPFS message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StorageRefIPFS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): storageref.StorageRefIPFS

    /**
     * Verifies a StorageRefIPFS message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null

    /**
     * Creates a StorageRefIPFS message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StorageRefIPFS
     */
    public static fromObject(object: {
      [k: string]: any
    }): storageref.StorageRefIPFS

    /**
     * Creates a plain object from a StorageRefIPFS message. Also converts values to other types if specified.
     * @param message StorageRefIPFS
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: storageref.StorageRefIPFS,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any }

    /**
     * Converts this StorageRefIPFS to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any }
  }

  /** Properties of a StorageRefDigest. */
  interface IStorageRefDigest {}

  /** Represents a StorageRefDigest. */
  class StorageRefDigest implements IStorageRefDigest {
    /**
     * Constructs a new StorageRefDigest.
     * @param [properties] Properties to set
     */
    constructor(properties?: storageref.IStorageRefDigest)

    /**
     * Creates a new StorageRefDigest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StorageRefDigest instance
     */
    public static create(
      properties?: storageref.IStorageRefDigest
    ): storageref.StorageRefDigest

    /**
     * Encodes the specified StorageRefDigest message. Does not implicitly {@link storageref.StorageRefDigest.verify|verify} messages.
     * @param message StorageRefDigest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: storageref.IStorageRefDigest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Encodes the specified StorageRefDigest message, length delimited. Does not implicitly {@link storageref.StorageRefDigest.verify|verify} messages.
     * @param message StorageRefDigest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: storageref.IStorageRefDigest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Decodes a StorageRefDigest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StorageRefDigest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): storageref.StorageRefDigest

    /**
     * Decodes a StorageRefDigest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StorageRefDigest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): storageref.StorageRefDigest

    /**
     * Verifies a StorageRefDigest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null

    /**
     * Creates a StorageRefDigest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StorageRefDigest
     */
    public static fromObject(object: {
      [k: string]: any
    }): storageref.StorageRefDigest

    /**
     * Creates a plain object from a StorageRefDigest message. Also converts values to other types if specified.
     * @param message StorageRefDigest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: storageref.StorageRefDigest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any }

    /**
     * Converts this StorageRefDigest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any }
  }
}
