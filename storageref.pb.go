// Code generated by protoc-gen-go. DO NOT EDIT.
// source: github.com/aperturerobotics/storageref/storageref.proto

/*
Package storageref is a generated protocol buffer package.

It is generated from these files:
	github.com/aperturerobotics/storageref/storageref.proto

It has these top-level messages:
	StorageRef
	StorageRefIPFS
	StorageRefDigest
*/
package storageref

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// StorageType contains the possible types of storage.
type StorageType int32

const (
	// StorageType_UNKNOWN holds unknown values.
	StorageType_StorageType_UNKNOWN StorageType = 0
	// StorageType_IPFS is the IPFS storage type.
	StorageType_StorageType_IPFS StorageType = 1
	// StorageRef_DIGEST references a digest in local storage only by object multihash.
	StorageType_StorageRef_DIGEST StorageType = 2
)

var StorageType_name = map[int32]string{
	0: "StorageType_UNKNOWN",
	1: "StorageType_IPFS",
	2: "StorageRef_DIGEST",
}
var StorageType_value = map[string]int32{
	"StorageType_UNKNOWN": 0,
	"StorageType_IPFS":    1,
	"StorageRef_DIGEST":   2,
}

func (x StorageType) String() string {
	return proto.EnumName(StorageType_name, int32(x))
}
func (StorageType) EnumDescriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

// IPFSRefType is an ipfs reference type.
type IPFSRefType int32

const (
	// IPFSRefType_BLOCK is the default reference type, an IPFS block.
	IPFSRefType_IPFSRefType_BLOCK IPFSRefType = 0
	// IPFSRefType_OBJECT indicates the hash refers to a IPFS merkle object.
	IPFSRefType_IPFSRefType_OBJECT IPFSRefType = 1
)

var IPFSRefType_name = map[int32]string{
	0: "IPFSRefType_BLOCK",
	1: "IPFSRefType_OBJECT",
}
var IPFSRefType_value = map[string]int32{
	"IPFSRefType_BLOCK":  0,
	"IPFSRefType_OBJECT": 1,
}

func (x IPFSRefType) String() string {
	return proto.EnumName(IPFSRefType_name, int32(x))
}
func (IPFSRefType) EnumDescriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

// StorageRef references storage.
type StorageRef struct {
	// StorageType contains the type of storage this references.
	StorageType StorageType `protobuf:"varint,1,opt,name=storage_type,json=storageType,enum=storageref.StorageType" json:"storage_type,omitempty"`
	// ObjectDigest contains the digest of the decrypted object.
	// Optional.
	ObjectDigest []byte `protobuf:"bytes,3,opt,name=object_digest,json=objectDigest,proto3" json:"object_digest,omitempty"`
	// Ipfs contains a IPFS storage reference.
	Ipfs *StorageRefIPFS `protobuf:"bytes,2,opt,name=ipfs" json:"ipfs,omitempty"`
	// Digest contains a digest-only reference (empty at the moment).
	Digest *StorageRefDigest `protobuf:"bytes,4,opt,name=digest" json:"digest,omitempty"`
}

func (m *StorageRef) Reset()                    { *m = StorageRef{} }
func (m *StorageRef) String() string            { return proto.CompactTextString(m) }
func (*StorageRef) ProtoMessage()               {}
func (*StorageRef) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *StorageRef) GetStorageType() StorageType {
	if m != nil {
		return m.StorageType
	}
	return StorageType_StorageType_UNKNOWN
}

func (m *StorageRef) GetObjectDigest() []byte {
	if m != nil {
		return m.ObjectDigest
	}
	return nil
}

func (m *StorageRef) GetIpfs() *StorageRefIPFS {
	if m != nil {
		return m.Ipfs
	}
	return nil
}

func (m *StorageRef) GetDigest() *StorageRefDigest {
	if m != nil {
		return m.Digest
	}
	return nil
}

// StorageRefIPFS references an object in IPFS.
type StorageRefIPFS struct {
	// Reference contains the referenced multihash in string form.
	Reference string `protobuf:"bytes,1,opt,name=reference" json:"reference,omitempty"`
	// IpfsRefType indicates the type of IPFS reference type this is.
	IpfsRefType IPFSRefType `protobuf:"varint,2,opt,name=ipfs_ref_type,json=ipfsRefType,enum=storageref.IPFSRefType" json:"ipfs_ref_type,omitempty"`
}

func (m *StorageRefIPFS) Reset()                    { *m = StorageRefIPFS{} }
func (m *StorageRefIPFS) String() string            { return proto.CompactTextString(m) }
func (*StorageRefIPFS) ProtoMessage()               {}
func (*StorageRefIPFS) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *StorageRefIPFS) GetReference() string {
	if m != nil {
		return m.Reference
	}
	return ""
}

func (m *StorageRefIPFS) GetIpfsRefType() IPFSRefType {
	if m != nil {
		return m.IpfsRefType
	}
	return IPFSRefType_IPFSRefType_BLOCK
}

// StorageRefDigest references an object by digest only.
type StorageRefDigest struct {
}

func (m *StorageRefDigest) Reset()                    { *m = StorageRefDigest{} }
func (m *StorageRefDigest) String() string            { return proto.CompactTextString(m) }
func (*StorageRefDigest) ProtoMessage()               {}
func (*StorageRefDigest) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{2} }

func init() {
	proto.RegisterType((*StorageRef)(nil), "storageref.StorageRef")
	proto.RegisterType((*StorageRefIPFS)(nil), "storageref.StorageRefIPFS")
	proto.RegisterType((*StorageRefDigest)(nil), "storageref.StorageRefDigest")
	proto.RegisterEnum("storageref.StorageType", StorageType_name, StorageType_value)
	proto.RegisterEnum("storageref.IPFSRefType", IPFSRefType_name, IPFSRefType_value)
}

func init() {
	proto.RegisterFile("github.com/aperturerobotics/storageref/storageref.proto", fileDescriptor0)
}

var fileDescriptor0 = []byte{
	// 327 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x51, 0x4b, 0x4f, 0xf2, 0x40,
	0x14, 0x65, 0xf8, 0x08, 0x09, 0xb7, 0x40, 0xfa, 0xdd, 0xef, 0x01, 0x31, 0x2c, 0x08, 0x6e, 0x08,
	0x8b, 0x92, 0xa0, 0x89, 0x89, 0xba, 0xe2, 0xa1, 0x41, 0x0c, 0x98, 0x29, 0xc6, 0x65, 0x43, 0xeb,
	0x1d, 0xac, 0x46, 0xa7, 0x99, 0x0e, 0x0b, 0x7e, 0xa7, 0x7f, 0xc8, 0xf4, 0x11, 0x3b, 0x2a, 0xbb,
	0x9e, 0x73, 0xcf, 0x3d, 0xf7, 0x9c, 0x0e, 0x9c, 0x6d, 0x43, 0xfd, 0xb4, 0xf3, 0x9d, 0x40, 0xbe,
	0x0e, 0x37, 0x11, 0x29, 0xbd, 0x53, 0xa4, 0xa4, 0x2f, 0x75, 0x18, 0xc4, 0xc3, 0x58, 0x4b, 0xb5,
	0xd9, 0x92, 0x22, 0x61, 0x7c, 0x3a, 0x91, 0x92, 0x5a, 0x22, 0x14, 0x4c, 0xef, 0x9d, 0x01, 0xb8,
	0x19, 0xe4, 0x24, 0xf0, 0x1c, 0xea, 0xf9, 0xd0, 0xd3, 0xfb, 0x88, 0xda, 0xac, 0xcb, 0xfa, 0xcd,
	0x51, 0xcb, 0x31, 0x3c, 0x72, 0xf5, 0x7a, 0x1f, 0x11, 0xb7, 0xe2, 0x02, 0xe0, 0x31, 0x34, 0xa4,
	0xff, 0x4c, 0x81, 0xf6, 0x1e, 0xc3, 0x2d, 0xc5, 0xba, 0xfd, 0xab, 0xcb, 0xfa, 0x75, 0x5e, 0xcf,
	0xc8, 0x69, 0xca, 0xa1, 0x03, 0x95, 0x30, 0x12, 0x71, 0xbb, 0xdc, 0x65, 0x7d, 0x6b, 0x74, 0x74,
	0xc0, 0x98, 0x93, 0x98, 0xdf, 0x5d, 0xb9, 0x3c, 0xd5, 0xe1, 0x29, 0x54, 0x73, 0xb7, 0x4a, 0xba,
	0xd1, 0x39, 0xbc, 0x91, 0xb9, 0xf3, 0x5c, 0xdb, 0x7b, 0x81, 0xe6, 0x57, 0x37, 0xec, 0x40, 0x4d,
	0x91, 0x20, 0x45, 0x6f, 0x41, 0xd6, 0xaa, 0xc6, 0x0b, 0x02, 0x2f, 0xa0, 0x91, 0x5c, 0xf3, 0x14,
	0x89, 0xac, 0x77, 0xf9, 0x67, 0xef, 0x34, 0x14, 0x89, 0xac, 0x77, 0xa2, 0xce, 0x41, 0x0f, 0xc1,
	0xfe, 0x1e, 0x64, 0xe0, 0x82, 0x65, 0xfc, 0x27, 0x6c, 0xc1, 0x1f, 0x03, 0x7a, 0xf7, 0xcb, 0xc5,
	0x72, 0xf5, 0xb0, 0xb4, 0x4b, 0xf8, 0xf7, 0x73, 0x37, 0x1d, 0x24, 0x37, 0x6c, 0x86, 0xff, 0xe0,
	0x77, 0xe1, 0xe8, 0x4d, 0xe7, 0xd7, 0x33, 0x77, 0x6d, 0x97, 0x07, 0x97, 0x60, 0x19, 0x21, 0x12,
	0x95, 0x01, 0xbd, 0xf1, 0xed, 0x6a, 0xb2, 0xb0, 0x4b, 0xf8, 0x1f, 0xd0, 0xa4, 0x57, 0xe3, 0x9b,
	0xd9, 0x64, 0x6d, 0x33, 0xbf, 0x9a, 0x3e, 0xfe, 0xc9, 0x47, 0x00, 0x00, 0x00, 0xff, 0xff, 0x47,
	0x0d, 0x22, 0x5b, 0x37, 0x02, 0x00, 0x00,
}
