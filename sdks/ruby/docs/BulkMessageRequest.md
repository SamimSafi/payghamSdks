# Paygham::BulkMessageRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **whatsapp_account_id** | **String** |  |  |
| **country_code** | **String** |  | [optional] |
| **recipients** | **Array&lt;String&gt;** |  |  |
| **message** | **String** |  | [optional] |
| **content** | **String** |  | [optional] |
| **media_url** | **String** |  | [optional] |
| **media_base64** | **String** |  | [optional] |
| **media_mime_type** | **String** |  | [optional] |
| **media_filename** | **String** |  | [optional] |

## Example

```ruby
require 'paygham'

instance = Paygham::BulkMessageRequest.new(
  whatsapp_account_id: null,
  country_code: AF,
  recipients: [&quot;0787349769&quot;,&quot;+93787349770&quot;],
  message: null,
  content: null,
  media_url: null,
  media_base64: null,
  media_mime_type: null,
  media_filename: null
)
```

