[**ZeroTransfer SDK v0.5.0**](../README.md)

***

[ZeroTransfer SDK](../README.md) / WebhookSignature

# Interface: WebhookSignature

Defined in: [src/mft/webhooks.ts:73](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/mft/webhooks.ts#L73)

Signature payload produced by [signWebhookPayload](../functions/signWebhookPayload.md).

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="digest"></a> `digest` | `string` | Hex-encoded HMAC-SHA256 digest. | [src/mft/webhooks.ts:75](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/mft/webhooks.ts#L75) |
| <a id="timestamp"></a> `timestamp` | `string` | ISO-8601 timestamp included in the signed prefix. | [src/mft/webhooks.ts:77](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/mft/webhooks.ts#L77) |
