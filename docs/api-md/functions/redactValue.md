[**ZeroTransfer SDK v0.5.0**](../README.md)

***

[ZeroTransfer SDK](../README.md) / redactValue

# Function: redactValue()

```ts
function redactValue(value): unknown;
```

Defined in: [src/logging/redaction.ts:44](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/logging/redaction.ts#L44)

Recursively redacts strings, arrays, and plain object values.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | Arbitrary value to sanitize for diagnostics. |

## Returns

`unknown`

A redacted copy for arrays and objects, or the original primitive value.
