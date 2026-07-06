[**ZeroTransfer SDK v0.5.0**](../README.md)

***

[ZeroTransfer SDK](../README.md) / SpecializedErrorDetails

# Type Alias: SpecializedErrorDetails

```ts
type SpecializedErrorDetails = Omit<ZeroTransferErrorDetails, "code"> & {
  code?: string;
};
```

Defined in: [src/errors/ZeroTransferError.ts:44](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/errors/ZeroTransferError.ts#L44)

Error construction input for subclasses that provide default codes.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `code?` | `string` | Optional override for the subclass default code. | [src/errors/ZeroTransferError.ts:46](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/errors/ZeroTransferError.ts#L46) |
