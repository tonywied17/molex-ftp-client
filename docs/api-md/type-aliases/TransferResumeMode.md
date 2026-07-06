[**ZeroTransfer SDK v0.5.0**](../README.md)

***

[ZeroTransfer SDK](../README.md) / TransferResumeMode

# Type Alias: TransferResumeMode

```ts
type TransferResumeMode = "auto" | "require" | "off";
```

Defined in: [src/transfers/createProviderTransferExecutor.ts:67](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/transfers/createProviderTransferExecutor.ts#L67)

Resume behavior for a transfer.

- `"auto"` (default) - resume when both endpoints are capable
  (`resumeDownload` on the source, `resumeUpload` on the destination) and a
  valid checkpoint exists; otherwise transfer from scratch.
- `"require"` - throw [UnsupportedFeatureError](../classes/UnsupportedFeatureError.md) when either endpoint
  cannot resume, instead of silently restarting.
- `"off"` - never consult or write checkpoints.
