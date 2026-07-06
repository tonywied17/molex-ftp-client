[**ZeroTransfer SDK v0.5.0**](../README.md)

***

[ZeroTransfer SDK](../README.md) / AgeRetentionPolicy

# Interface: AgeRetentionPolicy

Defined in: [src/mft/retention.ts:15](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/mft/retention.ts#L15)

Retention policy that evicts entries older than `maxAgeMs`.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="kind"></a> `kind` | `"age"` | Discriminator. | [src/mft/retention.ts:17](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/mft/retention.ts#L17) |
| <a id="maxagems"></a> `maxAgeMs` | `number` | Maximum age before an entry is considered evictable. | [src/mft/retention.ts:19](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/mft/retention.ts#L19) |
