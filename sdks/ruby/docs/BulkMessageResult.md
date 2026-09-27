# Paygham::BulkMessageResult

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **recipient** | **String** |  |  |
| **status** | **String** |  |  |
| **message_id** | **String** |  | [optional] |
| **consent_url** | **String** |  | [optional] |
| **error** | **String** |  | [optional] |
| **reason** | **String** |  | [optional] |

## Example

```ruby
require 'paygham'

instance = Paygham::BulkMessageResult.new(
  recipient: null,
  status: null,
  message_id: null,
  consent_url: null,
  error: null,
  reason: null
)
```

