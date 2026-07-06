[**ZeroTransfer SDK v0.5.0**](../README.md)

***

[ZeroTransfer SDK](../README.md) / parseMlsdList

# Function: parseMlsdList()

```ts
function parseMlsdList(input, directory?): RemoteEntry[];
```

Defined in: [src/providers/classic/ftp/FtpListParser.ts:27](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/providers/classic/ftp/FtpListParser.ts#L27)

Parses an MLSD directory listing into normalized remote entries.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `input` | `string` | `undefined` | Raw MLSD response body. |
| `directory` | `string` | `"."` | Parent remote directory used to build entry paths. |

## Returns

[`RemoteEntry`](../interfaces/RemoteEntry.md)[]

Remote entries excluding the `.` and `..` pseudo entries.

## Throws

[ParseError](../classes/ParseError.md) When any listing line is malformed.
