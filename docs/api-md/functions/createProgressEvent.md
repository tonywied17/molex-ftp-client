[**ZeroTransfer SDK v0.5.0**](../README.md)

***

[ZeroTransfer SDK](../README.md) / createProgressEvent

# Function: createProgressEvent()

```ts
function createProgressEvent(input): TransferProgressEvent;
```

Defined in: [src/services/TransferService.ts:80](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/services/TransferService.ts#L80)

Creates a progress event with elapsed time, rate, and optional percentage.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | [`ProgressEventInput`](../interfaces/ProgressEventInput.md) | Transfer id, byte count, start time, optional current time, and total bytes. |

## Returns

[`TransferProgressEvent`](../interfaces/TransferProgressEvent.md)

A normalized transfer progress event.
