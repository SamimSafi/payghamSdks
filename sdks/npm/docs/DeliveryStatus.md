
# DeliveryStatus


## Properties

Name | Type
------------ | -------------
`accountId` | string
`accountStatus` | string
`pending` | number
`sent` | number
`failed` | number

## Example

```typescript
import type { DeliveryStatus } from '@paygham/sdk'

// TODO: Update the object below with actual values
const example = {
  "accountId": null,
  "accountStatus": null,
  "pending": null,
  "sent": null,
  "failed": null,
} satisfies DeliveryStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeliveryStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


