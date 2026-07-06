[**ZeroTransfer SDK v0.5.0**](../README.md)

***

[ZeroTransfer SDK](../README.md) / createRemoteBrowser

# Function: createRemoteBrowser()

```ts
function createRemoteBrowser(options): RemoteBrowser;
```

Defined in: [src/sync/createRemoteBrowser.ts:172](https://github.com/molexxxx/zero-transfer/blob/65cf1053570c0951824d4707643e4ebaf1b50935/src/sync/createRemoteBrowser.ts#L172)

Creates a stateful directory browser around a remote file system.

The returned browser caches the most recent listing and applies sort/filter
settings on each refresh. Navigation methods return a snapshot so UI layers can
render synchronously without re-reading state.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`CreateRemoteBrowserOptions`](../interfaces/CreateRemoteBrowserOptions.md) | Browser configuration. |

## Returns

[`RemoteBrowser`](../interfaces/RemoteBrowser.md)

Stateful browser bound to the supplied file system.
