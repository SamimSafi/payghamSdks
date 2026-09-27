
# ConnectionStatus


## Properties

Name | Type
------------ | -------------
`accountId` | string
`connected` | boolean
`stable` | boolean
`accountStatus` | string
`engineStatus` | string
`sessionStatus` | string
`checkedAt` | Date

## Example

```typescript
import type { ConnectionStatus } from '@paygham/sdk'

// TODO: Update the object below with actual values
const example = {
  "accountId": null,
  "connected": null,
  "stable": null,
  "accountStatus": null,
  "engineStatus": null,
  "sessionStatus": null,
  "checkedAt": null,
} satisfies ConnectionStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConnectionStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


