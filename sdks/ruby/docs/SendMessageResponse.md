# Paygham::SendMessageResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **success** | **Boolean** |  |  |
| **message_id** | **String** |  |  |
| **status** | **String** |  |  |
| **consent_required** | **Boolean** |  | [optional] |
| **consent_url** | **String** |  | [optional] |
| **message** | **String** |  | [optional] |

## Example

```ruby
require 'paygham'

instance = Paygham::SendMessageResponse.new(
  success: true,
  message_id: msg_abc123,
  status: queued,
  consent_required: null,
  consent_url: null,
  message: null
)
```

