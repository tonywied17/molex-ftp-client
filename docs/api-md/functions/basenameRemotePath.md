[**ZeroTransfer SDK v0.5.0**](../README.md)

***

[ZeroTransfer SDK](../README.md) / basenameRemotePath

# Function: basenameRemotePath()

```ts
function basenameRemotePath(input): string;
```

Defined in: [src/utils/path.ts:105](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/utils/path.ts#L105)

Extracts the final name segment from a normalized remote path.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | Remote path to inspect. |

## Returns

`string`

The final path segment, or `/` when the input is the absolute root.

## Throws

[ConfigurationError](../classes/ConfigurationError.md) When the input contains unsafe characters.
