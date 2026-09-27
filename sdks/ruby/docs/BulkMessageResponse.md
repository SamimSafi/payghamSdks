# Paygham::BulkMessageResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **success** | **Boolean** |  |  |
| **total** | **Integer** |  |  |
| **queued** | **Integer** |  |  |
| **consent_requested** | **Integer** |  |  |
| **rejected** | **Integer** |  |  |
| **results** | [**Array&lt;BulkMessageResult&gt;**](BulkMessageResult.md) |  |  |

## Example

```ruby
require 'paygham'

instance = Paygham::BulkMessageResponse.new(
  success: true,
  total: null,
  queued: null,
  consent_requested: null,
  rejected: null,
  results: null
)
```

