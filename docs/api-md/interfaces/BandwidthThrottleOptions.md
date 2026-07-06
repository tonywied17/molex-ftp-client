[**ZeroTransfer SDK v0.5.0**](../README.md)

***

[ZeroTransfer SDK](../README.md) / BandwidthThrottleOptions

# Interface: BandwidthThrottleOptions

Defined in: [src/transfers/BandwidthThrottle.ts:13](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/transfers/BandwidthThrottle.ts#L13)

Construction overrides for deterministic tests.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="now"></a> `now?` | () => `number` | Monotonic clock returning milliseconds since an arbitrary epoch. Defaults to `Date.now`. | [src/transfers/BandwidthThrottle.ts:15](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/transfers/BandwidthThrottle.ts#L15) |
| <a id="sleep"></a> `sleep?` | [`BandwidthSleep`](../type-aliases/BandwidthSleep.md) | Sleep implementation honoring an optional abort signal. Defaults to a `setTimeout` helper. | [src/transfers/BandwidthThrottle.ts:17](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/transfers/BandwidthThrottle.ts#L17) |
