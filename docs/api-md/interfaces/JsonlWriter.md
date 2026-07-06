[**ZeroTransfer SDK v0.5.0**](../README.md)

***

[ZeroTransfer SDK](../README.md) / JsonlWriter

# Interface: JsonlWriter

Defined in: [src/mft/audit.ts:73](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/mft/audit.ts#L73)

Output sink consumed by [createJsonlAuditLog](../functions/createJsonlAuditLog.md).

## Methods

### write()

```ts
write(line): Promise<void>;
```

Defined in: [src/mft/audit.ts:75](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/mft/audit.ts#L75)

Writes a UTF-8 line that already includes a trailing newline.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `line` | `string` |

#### Returns

`Promise`\<`void`\>
