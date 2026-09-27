
# SendMessageResponse


## Properties

Name | Type
------------ | -------------
`success` | boolean
`messageId` | string
`status` | string
`consentRequired` | boolean
`consentUrl` | string
`message` | string

## Example

```typescript
import type { SendMessageResponse } from '@paygham/sdk'

// TODO: Update the object below with actual values
const example = {
  "success": true,
  "messageId": msg_abc123,
  "status": queued,
  "consentRequired": null,
  "consentUrl": null,
  "message": null,
} satisfies SendMessageResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SendMessageResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


