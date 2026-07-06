[**ZeroTransfer SDK v0.5.0**](../README.md)

***

[ZeroTransfer SDK](../README.md) / composeAuditLogs

# Function: composeAuditLogs()

```ts
function composeAuditLogs(...logs): MftAuditLog;
```

Defined in: [src/mft/audit.ts:104](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/mft/audit.ts#L104)

Combines multiple audit logs into a single fan-out log.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`logs` | readonly [`MftAuditLog`](../interfaces/MftAuditLog.md)[] | Logs that should each receive every recorded entry. |

## Returns

[`MftAuditLog`](../interfaces/MftAuditLog.md)

A composite log whose `record` writes to all targets in order and
         whose `list` returns the first non-empty result.
