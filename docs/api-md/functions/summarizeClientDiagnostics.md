[**ZeroTransfer SDK v0.5.0**](../README.md)

***

[ZeroTransfer SDK](../README.md) / summarizeClientDiagnostics

# Function: summarizeClientDiagnostics()

```ts
function summarizeClientDiagnostics(client): ClientDiagnostics;
```

Defined in: [src/diagnostics/index.ts:40](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/diagnostics/index.ts#L40)

Returns a redaction-safe snapshot of the providers registered with a client.

Use this when rendering a setup screen, generating a support bundle, or
asserting in tests that the expected provider factories were registered.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`TransferClient`](../classes/TransferClient.md) | Transfer client to inspect. |

## Returns

[`ClientDiagnostics`](../interfaces/ClientDiagnostics.md)

Provider id and capability snapshot tuples.

## Example

```ts
import { summarizeClientDiagnostics } from "@zero-transfer/sdk";

for (const { id, capabilities } of summarizeClientDiagnostics(client).providers) {
  console.log(`${id}: streaming=${capabilities.readStream} resume=${capabilities.resumeDownload}`);
}
```
