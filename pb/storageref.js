/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.storageref = (function() {

    /**
     * Namespace storageref.
     * @exports storageref
     * @namespace
     */
    var storageref = {};

    storageref.StorageRef = (function() {

        /**
         * Properties of a StorageRef.
         * @memberof storageref
         * @interface IStorageRef
         * @property {storageref.StorageType|null} [storageType] StorageRef storageType
         * @property {Uint8Array|null} [objectDigest] StorageRef objectDigest
         * @property {storageref.IStorageRefIPFS|null} [ipfs] StorageRef ipfs
         * @property {storageref.IStorageRefDigest|null} [digest] StorageRef digest
         */

        /**
         * Constructs a new StorageRef.
         * @memberof storageref
         * @classdesc Represents a StorageRef.
         * @implements IStorageRef
         * @constructor
         * @param {storageref.IStorageRef=} [properties] Properties to set
         */
        function StorageRef(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StorageRef storageType.
         * @member {storageref.StorageType} storageType
         * @memberof storageref.StorageRef
         * @instance
         */
        StorageRef.prototype.storageType = 0;

        /**
         * StorageRef objectDigest.
         * @member {Uint8Array} objectDigest
         * @memberof storageref.StorageRef
         * @instance
         */
        StorageRef.prototype.objectDigest = $util.newBuffer([]);

        /**
         * StorageRef ipfs.
         * @member {storageref.IStorageRefIPFS|null|undefined} ipfs
         * @memberof storageref.StorageRef
         * @instance
         */
        StorageRef.prototype.ipfs = null;

        /**
         * StorageRef digest.
         * @member {storageref.IStorageRefDigest|null|undefined} digest
         * @memberof storageref.StorageRef
         * @instance
         */
        StorageRef.prototype.digest = null;

        /**
         * Creates a new StorageRef instance using the specified properties.
         * @function create
         * @memberof storageref.StorageRef
         * @static
         * @param {storageref.IStorageRef=} [properties] Properties to set
         * @returns {storageref.StorageRef} StorageRef instance
         */
        StorageRef.create = function create(properties) {
            return new StorageRef(properties);
        };

        /**
         * Encodes the specified StorageRef message. Does not implicitly {@link storageref.StorageRef.verify|verify} messages.
         * @function encode
         * @memberof storageref.StorageRef
         * @static
         * @param {storageref.IStorageRef} message StorageRef message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StorageRef.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.storageType != null && message.hasOwnProperty("storageType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.storageType);
            if (message.ipfs != null && message.hasOwnProperty("ipfs"))
                $root.storageref.StorageRefIPFS.encode(message.ipfs, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.objectDigest != null && message.hasOwnProperty("objectDigest"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.objectDigest);
            if (message.digest != null && message.hasOwnProperty("digest"))
                $root.storageref.StorageRefDigest.encode(message.digest, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StorageRef message, length delimited. Does not implicitly {@link storageref.StorageRef.verify|verify} messages.
         * @function encodeDelimited
         * @memberof storageref.StorageRef
         * @static
         * @param {storageref.IStorageRef} message StorageRef message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StorageRef.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StorageRef message from the specified reader or buffer.
         * @function decode
         * @memberof storageref.StorageRef
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {storageref.StorageRef} StorageRef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StorageRef.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storageref.StorageRef();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.storageType = reader.int32();
                    break;
                case 3:
                    message.objectDigest = reader.bytes();
                    break;
                case 2:
                    message.ipfs = $root.storageref.StorageRefIPFS.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.digest = $root.storageref.StorageRefDigest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StorageRef message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof storageref.StorageRef
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {storageref.StorageRef} StorageRef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StorageRef.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StorageRef message.
         * @function verify
         * @memberof storageref.StorageRef
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StorageRef.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.storageType != null && message.hasOwnProperty("storageType"))
                switch (message.storageType) {
                default:
                    return "storageType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.objectDigest != null && message.hasOwnProperty("objectDigest"))
                if (!(message.objectDigest && typeof message.objectDigest.length === "number" || $util.isString(message.objectDigest)))
                    return "objectDigest: buffer expected";
            if (message.ipfs != null && message.hasOwnProperty("ipfs")) {
                var error = $root.storageref.StorageRefIPFS.verify(message.ipfs);
                if (error)
                    return "ipfs." + error;
            }
            if (message.digest != null && message.hasOwnProperty("digest")) {
                var error = $root.storageref.StorageRefDigest.verify(message.digest);
                if (error)
                    return "digest." + error;
            }
            return null;
        };

        /**
         * Creates a StorageRef message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof storageref.StorageRef
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {storageref.StorageRef} StorageRef
         */
        StorageRef.fromObject = function fromObject(object) {
            if (object instanceof $root.storageref.StorageRef)
                return object;
            var message = new $root.storageref.StorageRef();
            switch (object.storageType) {
            case "StorageType_UNKNOWN":
            case 0:
                message.storageType = 0;
                break;
            case "StorageType_IPFS":
            case 1:
                message.storageType = 1;
                break;
            case "StorageType_DIGEST":
            case 2:
                message.storageType = 2;
                break;
            }
            if (object.objectDigest != null)
                if (typeof object.objectDigest === "string")
                    $util.base64.decode(object.objectDigest, message.objectDigest = $util.newBuffer($util.base64.length(object.objectDigest)), 0);
                else if (object.objectDigest.length)
                    message.objectDigest = object.objectDigest;
            if (object.ipfs != null) {
                if (typeof object.ipfs !== "object")
                    throw TypeError(".storageref.StorageRef.ipfs: object expected");
                message.ipfs = $root.storageref.StorageRefIPFS.fromObject(object.ipfs);
            }
            if (object.digest != null) {
                if (typeof object.digest !== "object")
                    throw TypeError(".storageref.StorageRef.digest: object expected");
                message.digest = $root.storageref.StorageRefDigest.fromObject(object.digest);
            }
            return message;
        };

        /**
         * Creates a plain object from a StorageRef message. Also converts values to other types if specified.
         * @function toObject
         * @memberof storageref.StorageRef
         * @static
         * @param {storageref.StorageRef} message StorageRef
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StorageRef.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.storageType = options.enums === String ? "StorageType_UNKNOWN" : 0;
                object.ipfs = null;
                object.objectDigest = options.bytes === String ? "" : [];
                object.digest = null;
            }
            if (message.storageType != null && message.hasOwnProperty("storageType"))
                object.storageType = options.enums === String ? $root.storageref.StorageType[message.storageType] : message.storageType;
            if (message.ipfs != null && message.hasOwnProperty("ipfs"))
                object.ipfs = $root.storageref.StorageRefIPFS.toObject(message.ipfs, options);
            if (message.objectDigest != null && message.hasOwnProperty("objectDigest"))
                object.objectDigest = options.bytes === String ? $util.base64.encode(message.objectDigest, 0, message.objectDigest.length) : options.bytes === Array ? Array.prototype.slice.call(message.objectDigest) : message.objectDigest;
            if (message.digest != null && message.hasOwnProperty("digest"))
                object.digest = $root.storageref.StorageRefDigest.toObject(message.digest, options);
            return object;
        };

        /**
         * Converts this StorageRef to JSON.
         * @function toJSON
         * @memberof storageref.StorageRef
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StorageRef.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StorageRef;
    })();

    /**
     * StorageType enum.
     * @name storageref.StorageType
     * @enum {string}
     * @property {number} StorageType_UNKNOWN=0 StorageType_UNKNOWN value
     * @property {number} StorageType_IPFS=1 StorageType_IPFS value
     * @property {number} StorageType_DIGEST=2 StorageType_DIGEST value
     */
    storageref.StorageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "StorageType_UNKNOWN"] = 0;
        values[valuesById[1] = "StorageType_IPFS"] = 1;
        values[valuesById[2] = "StorageType_DIGEST"] = 2;
        return values;
    })();

    storageref.StorageRefIPFS = (function() {

        /**
         * Properties of a StorageRefIPFS.
         * @memberof storageref
         * @interface IStorageRefIPFS
         * @property {string|null} [objectHash] StorageRefIPFS objectHash
         */

        /**
         * Constructs a new StorageRefIPFS.
         * @memberof storageref
         * @classdesc Represents a StorageRefIPFS.
         * @implements IStorageRefIPFS
         * @constructor
         * @param {storageref.IStorageRefIPFS=} [properties] Properties to set
         */
        function StorageRefIPFS(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StorageRefIPFS objectHash.
         * @member {string} objectHash
         * @memberof storageref.StorageRefIPFS
         * @instance
         */
        StorageRefIPFS.prototype.objectHash = "";

        /**
         * Creates a new StorageRefIPFS instance using the specified properties.
         * @function create
         * @memberof storageref.StorageRefIPFS
         * @static
         * @param {storageref.IStorageRefIPFS=} [properties] Properties to set
         * @returns {storageref.StorageRefIPFS} StorageRefIPFS instance
         */
        StorageRefIPFS.create = function create(properties) {
            return new StorageRefIPFS(properties);
        };

        /**
         * Encodes the specified StorageRefIPFS message. Does not implicitly {@link storageref.StorageRefIPFS.verify|verify} messages.
         * @function encode
         * @memberof storageref.StorageRefIPFS
         * @static
         * @param {storageref.IStorageRefIPFS} message StorageRefIPFS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StorageRefIPFS.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.objectHash != null && message.hasOwnProperty("objectHash"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.objectHash);
            return writer;
        };

        /**
         * Encodes the specified StorageRefIPFS message, length delimited. Does not implicitly {@link storageref.StorageRefIPFS.verify|verify} messages.
         * @function encodeDelimited
         * @memberof storageref.StorageRefIPFS
         * @static
         * @param {storageref.IStorageRefIPFS} message StorageRefIPFS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StorageRefIPFS.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StorageRefIPFS message from the specified reader or buffer.
         * @function decode
         * @memberof storageref.StorageRefIPFS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {storageref.StorageRefIPFS} StorageRefIPFS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StorageRefIPFS.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storageref.StorageRefIPFS();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.objectHash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StorageRefIPFS message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof storageref.StorageRefIPFS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {storageref.StorageRefIPFS} StorageRefIPFS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StorageRefIPFS.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StorageRefIPFS message.
         * @function verify
         * @memberof storageref.StorageRefIPFS
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StorageRefIPFS.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.objectHash != null && message.hasOwnProperty("objectHash"))
                if (!$util.isString(message.objectHash))
                    return "objectHash: string expected";
            return null;
        };

        /**
         * Creates a StorageRefIPFS message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof storageref.StorageRefIPFS
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {storageref.StorageRefIPFS} StorageRefIPFS
         */
        StorageRefIPFS.fromObject = function fromObject(object) {
            if (object instanceof $root.storageref.StorageRefIPFS)
                return object;
            var message = new $root.storageref.StorageRefIPFS();
            if (object.objectHash != null)
                message.objectHash = String(object.objectHash);
            return message;
        };

        /**
         * Creates a plain object from a StorageRefIPFS message. Also converts values to other types if specified.
         * @function toObject
         * @memberof storageref.StorageRefIPFS
         * @static
         * @param {storageref.StorageRefIPFS} message StorageRefIPFS
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StorageRefIPFS.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.objectHash = "";
            if (message.objectHash != null && message.hasOwnProperty("objectHash"))
                object.objectHash = message.objectHash;
            return object;
        };

        /**
         * Converts this StorageRefIPFS to JSON.
         * @function toJSON
         * @memberof storageref.StorageRefIPFS
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StorageRefIPFS.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StorageRefIPFS;
    })();

    storageref.StorageRefDigest = (function() {

        /**
         * Properties of a StorageRefDigest.
         * @memberof storageref
         * @interface IStorageRefDigest
         */

        /**
         * Constructs a new StorageRefDigest.
         * @memberof storageref
         * @classdesc Represents a StorageRefDigest.
         * @implements IStorageRefDigest
         * @constructor
         * @param {storageref.IStorageRefDigest=} [properties] Properties to set
         */
        function StorageRefDigest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new StorageRefDigest instance using the specified properties.
         * @function create
         * @memberof storageref.StorageRefDigest
         * @static
         * @param {storageref.IStorageRefDigest=} [properties] Properties to set
         * @returns {storageref.StorageRefDigest} StorageRefDigest instance
         */
        StorageRefDigest.create = function create(properties) {
            return new StorageRefDigest(properties);
        };

        /**
         * Encodes the specified StorageRefDigest message. Does not implicitly {@link storageref.StorageRefDigest.verify|verify} messages.
         * @function encode
         * @memberof storageref.StorageRefDigest
         * @static
         * @param {storageref.IStorageRefDigest} message StorageRefDigest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StorageRefDigest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified StorageRefDigest message, length delimited. Does not implicitly {@link storageref.StorageRefDigest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof storageref.StorageRefDigest
         * @static
         * @param {storageref.IStorageRefDigest} message StorageRefDigest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StorageRefDigest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StorageRefDigest message from the specified reader or buffer.
         * @function decode
         * @memberof storageref.StorageRefDigest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {storageref.StorageRefDigest} StorageRefDigest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StorageRefDigest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storageref.StorageRefDigest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StorageRefDigest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof storageref.StorageRefDigest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {storageref.StorageRefDigest} StorageRefDigest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StorageRefDigest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StorageRefDigest message.
         * @function verify
         * @memberof storageref.StorageRefDigest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StorageRefDigest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a StorageRefDigest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof storageref.StorageRefDigest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {storageref.StorageRefDigest} StorageRefDigest
         */
        StorageRefDigest.fromObject = function fromObject(object) {
            if (object instanceof $root.storageref.StorageRefDigest)
                return object;
            return new $root.storageref.StorageRefDigest();
        };

        /**
         * Creates a plain object from a StorageRefDigest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof storageref.StorageRefDigest
         * @static
         * @param {storageref.StorageRefDigest} message StorageRefDigest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StorageRefDigest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this StorageRefDigest to JSON.
         * @function toJSON
         * @memberof storageref.StorageRefDigest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StorageRefDigest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StorageRefDigest;
    })();

    return storageref;
})();

module.exports = $root;
