# Paygham::ConnectionStatus

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_id** | **String** |  |  |
| **connected** | **Boolean** |  |  |
| **stable** | **Boolean** |  |  |
| **account_status** | **String** |  |  |
| **engine_status** | **String** |  |  |
| **session_status** | **String** |  |  |
| **checked_at** | **Time** |  |  |

## Example

```ruby
require 'paygham'

instance = Paygham::ConnectionStatus.new(
  account_id: null,
  connected: null,
  stable: null,
  account_status: null,
  engine_status: null,
  session_status: null,
  checked_at: null
)
```

