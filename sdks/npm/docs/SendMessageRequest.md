
# SendMessageRequest


## Properties

Name | Type
------------ | -------------
`whatsappAccountId` | string
`countryCode` | string
`to` | string
`recipient` | string
`message` | string
`content` | string
`mediaUrl` | string
`mediaBase64` | string
`mediaMimeType` | string
`mediaFilename` | string

## Example

```typescript
import type { SendMessageRequest } from '@paygham/sdk'

// TODO: Update the object below with actual values
const example = {
  "whatsappAccountId": null,
  "countryCode": AF,
  "to": 0787349769,
  "recipient": +93787349769,
  "message": Hello from my application,
  "content": null,
  "mediaUrl": null,
  "mediaBase64": null,
  "mediaMimeType": null,
  "mediaFilename": invoice.pdf,
} satisfies SendMessageRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SendMessageRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


