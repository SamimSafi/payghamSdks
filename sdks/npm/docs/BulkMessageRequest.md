
# BulkMessageRequest


## Properties

Name | Type
------------ | -------------
`whatsappAccountId` | string
`countryCode` | string
`recipients` | Array&lt;string&gt;
`message` | string
`content` | string
`mediaUrl` | string
`mediaBase64` | string
`mediaMimeType` | string
`mediaFilename` | string

## Example

```typescript
import type { BulkMessageRequest } from '@paygham/sdk'

// TODO: Update the object below with actual values
const example = {
  "whatsappAccountId": null,
  "countryCode": AF,
  "recipients": ["0787349769","+93787349770"],
  "message": null,
  "content": null,
  "mediaUrl": null,
  "mediaBase64": null,
  "mediaMimeType": null,
  "mediaFilename": null,
} satisfies BulkMessageRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkMessageRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


