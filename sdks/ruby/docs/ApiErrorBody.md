# Paygham::ApiErrorBody

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **code** | **String** |  |  |
| **message** | **String** |  |  |
| **details** | **Object** |  | [optional] |

## Example

```ruby
require 'paygham'

instance = Paygham::ApiErrorBody.new(
  code: VALIDATION_ERROR,
  message: Request validation failed,
  details: null
)
```

