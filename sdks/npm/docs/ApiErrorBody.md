
# ApiErrorBody


## Properties

Name | Type
------------ | -------------
`code` | string
`message` | string
`details` | object

## Example

```typescript
import type { ApiErrorBody } from '@paygham/sdk'

// TODO: Update the object below with actual values
const example = {
  "code": VALIDATION_ERROR,
  "message": Request validation failed,
  "details": null,
} satisfies ApiErrorBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiErrorBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


