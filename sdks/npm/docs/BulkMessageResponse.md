
# BulkMessageResponse


## Properties

Name | Type
------------ | -------------
`success` | boolean
`total` | number
`queued` | number
`consentRequested` | number
`rejected` | number
`results` | [Array&lt;BulkMessageResult&gt;](BulkMessageResult.md)

## Example

```typescript
import type { BulkMessageResponse } from '@paygham/sdk'

// TODO: Update the object below with actual values
const example = {
  "success": true,
  "total": null,
  "queued": null,
  "consentRequested": null,
  "rejected": null,
  "results": null,
} satisfies BulkMessageResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkMessageResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


