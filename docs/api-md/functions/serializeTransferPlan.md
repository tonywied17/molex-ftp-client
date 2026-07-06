[**ZeroTransfer SDK v0.5.0**](../README.md)

***

[ZeroTransfer SDK](../README.md) / serializeTransferPlan

# Function: serializeTransferPlan()

```ts
function serializeTransferPlan(plan): string;
```

Defined in: [src/transfers/resumableBatch.ts:55](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/transfers/resumableBatch.ts#L55)

Serializes a transfer plan to JSON for persistence.

The output round-trips through [deserializeTransferPlan](deserializeTransferPlan.md), so a plan
written to disk before a batch starts can be reloaded to resume the batch
in a fresh process.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `plan` | [`TransferPlan`](../interfaces/TransferPlan.md) | Plan to serialize. |

## Returns

`string`

Stable JSON representation.
