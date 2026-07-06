[**ZeroTransfer SDK v0.5.0**](../README.md)

***

[ZeroTransfer SDK](../README.md) / WebhookRetryPolicy

# Interface: WebhookRetryPolicy

Defined in: [src/mft/webhooks.ts:37](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/mft/webhooks.ts#L37)

Retry policy for webhook deliveries.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="basedelayms"></a> `baseDelayMs?` | `number` | Base delay in milliseconds. Defaults to 250. | [src/mft/webhooks.ts:41](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/mft/webhooks.ts#L41) |
| <a id="maxattempts"></a> `maxAttempts?` | `number` | Maximum number of attempts including the initial request. Defaults to 3. | [src/mft/webhooks.ts:39](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/mft/webhooks.ts#L39) |
| <a id="maxdelayms"></a> `maxDelayMs?` | `number` | Maximum delay in milliseconds. Defaults to 5000. | [src/mft/webhooks.ts:43](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/mft/webhooks.ts#L43) |
