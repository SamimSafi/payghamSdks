# Paygham::SendMessageRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **whatsapp_account_id** | **String** |  |  |
| **country_code** | **String** | ISO country code; required for local numbers starting with 0 | [optional] |
| **to** | **String** | Destination phone (alias: recipient) |  |
| **recipient** | **String** | Deprecated alias for to. | [optional] |
| **message** | **String** | Text body (alias: content). Optional when media is provided. | [optional] |
| **content** | **String** | Deprecated alias for message. | [optional] |
| **media_url** | **String** | Public http(s) URL for an image or PDF. Mutually exclusive with mediaBase64. | [optional] |
| **media_base64** | **String** | Base64-encoded media. Mutually exclusive with mediaUrl. | [optional] |
| **media_mime_type** | **String** | Required when mediaUrl or mediaBase64 is set. | [optional] |
| **media_filename** | **String** |  | [optional] |

## Example

```ruby
require 'paygham'

instance = Paygham::SendMessageRequest.new(
  whatsapp_account_id: null,
  country_code: AF,
  to: 0787349769,
  recipient: +93787349769,
  message: Hello from my application,
  content: null,
  media_url: null,
  media_base64: null,
  media_mime_type: null,
  media_filename: invoice.pdf
)
```

