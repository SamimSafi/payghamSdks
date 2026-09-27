# Paygham::DeliveryStatus

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_id** | **String** |  |  |
| **account_status** | **String** |  |  |
| **pending** | **Integer** | QUEUED + SENDING outbound messages |  |
| **sent** | **Integer** |  |  |
| **failed** | **Integer** |  |  |

## Example

```ruby
require 'paygham'

instance = Paygham::DeliveryStatus.new(
  account_id: null,
  account_status: null,
  pending: null,
  sent: null,
  failed: null
)
```

