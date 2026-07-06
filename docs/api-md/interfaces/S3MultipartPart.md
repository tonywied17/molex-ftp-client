[**ZeroTransfer SDK v0.5.0**](../README.md)

***

[ZeroTransfer SDK](../README.md) / S3MultipartPart

# Interface: S3MultipartPart

Defined in: [src/providers/web/S3Provider.ts:140](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/providers/web/S3Provider.ts#L140)

Single part recorded in a multipart-upload checkpoint.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="byteend"></a> `byteEnd` | `number` | Cumulative byte offset reached after this part (exclusive). | [src/providers/web/S3Provider.ts:144](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/providers/web/S3Provider.ts#L144) |
| <a id="etag"></a> `etag` | `string` | - | [src/providers/web/S3Provider.ts:142](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/providers/web/S3Provider.ts#L142) |
| <a id="partnumber"></a> `partNumber` | `number` | - | [src/providers/web/S3Provider.ts:141](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/providers/web/S3Provider.ts#L141) |
