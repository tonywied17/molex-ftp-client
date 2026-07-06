[**ZeroTransfer SDK v0.5.0**](../README.md)

***

[ZeroTransfer SDK](../README.md) / HttpFetch

# Type Alias: HttpFetch

```ts
type HttpFetch = (input, init?) => Promise<Response>;
```

Defined in: [src/providers/web/httpInternals.ts:20](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/providers/web/httpInternals.ts#L20)

Fetch implementation accepted by web-family providers.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` |
| `init?` | `RequestInit` |

## Returns

`Promise`\<`Response`\>
