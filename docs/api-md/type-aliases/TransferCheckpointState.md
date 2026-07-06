[**ZeroTransfer SDK v0.5.0**](../README.md)

***

[ZeroTransfer SDK](../README.md) / TransferCheckpointState

# Type Alias: TransferCheckpointState

```ts
type TransferCheckpointState = 
  | TransferByteOffsetCheckpointState
  | TransferPartsCheckpointState;
```

Defined in: [src/transfers/TransferCheckpointStore.ts:113](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/transfers/TransferCheckpointStore.ts#L113)

Union of checkpoint state shapes. Both expose `committedBytes`.
