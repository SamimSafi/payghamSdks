# Paygham::MessagingApi

All URIs are relative to *http://localhost:3000*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_connection_status**](MessagingApi.md#get_connection_status) | **GET** /api/v1/messages/accounts/{whatsappAccountId}/connection-status | Check live WhatsApp connection status |
| [**get_delivery_status**](MessagingApi.md#get_delivery_status) | **GET** /api/v1/messages/accounts/{whatsappAccountId}/delivery-status | Get outbound delivery counts for an account |
| [**resume_delivery**](MessagingApi.md#resume_delivery) | **POST** /api/v1/messages/accounts/{whatsappAccountId}/resume | Requeue pending outbound messages after reconnect |
| [**send_bulk_messages**](MessagingApi.md#send_bulk_messages) | **POST** /api/v1/messages/bulk | Queue the same message for many recipients |
| [**send_message**](MessagingApi.md#send_message) | **POST** /api/v1/messages | Send a WhatsApp message using an API key |


## get_connection_status

> <ConnectionStatusResponse> get_connection_status(whatsapp_account_id)

Check live WhatsApp connection status

### Examples

```ruby
require 'time'
require 'paygham'
# setup authorization
Paygham.configure do |config|
  # Configure API key authorization: apiKeyHeader
  config.api_key['X-API-Key'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['X-API-Key'] = 'Bearer'
end

api_instance = Paygham::MessagingApi.new
whatsapp_account_id = 'whatsapp_account_id_example' # String | 

begin
  # Check live WhatsApp connection status
  result = api_instance.get_connection_status(whatsapp_account_id)
  p result
rescue Paygham::ApiError => e
  puts "Error when calling MessagingApi->get_connection_status: #{e}"
end
```

#### Using the get_connection_status_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ConnectionStatusResponse>, Integer, Hash)> get_connection_status_with_http_info(whatsapp_account_id)

```ruby
begin
  # Check live WhatsApp connection status
  data, status_code, headers = api_instance.get_connection_status_with_http_info(whatsapp_account_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ConnectionStatusResponse>
rescue Paygham::ApiError => e
  puts "Error when calling MessagingApi->get_connection_status_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **whatsapp_account_id** | **String** |  |  |

### Return type

[**ConnectionStatusResponse**](ConnectionStatusResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_delivery_status

> <DeliveryStatusResponse> get_delivery_status(whatsapp_account_id)

Get outbound delivery counts for an account

### Examples

```ruby
require 'time'
require 'paygham'
# setup authorization
Paygham.configure do |config|
  # Configure API key authorization: apiKeyHeader
  config.api_key['X-API-Key'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['X-API-Key'] = 'Bearer'
end

api_instance = Paygham::MessagingApi.new
whatsapp_account_id = 'whatsapp_account_id_example' # String | 

begin
  # Get outbound delivery counts for an account
  result = api_instance.get_delivery_status(whatsapp_account_id)
  p result
rescue Paygham::ApiError => e
  puts "Error when calling MessagingApi->get_delivery_status: #{e}"
end
```

#### Using the get_delivery_status_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<DeliveryStatusResponse>, Integer, Hash)> get_delivery_status_with_http_info(whatsapp_account_id)

```ruby
begin
  # Get outbound delivery counts for an account
  data, status_code, headers = api_instance.get_delivery_status_with_http_info(whatsapp_account_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <DeliveryStatusResponse>
rescue Paygham::ApiError => e
  puts "Error when calling MessagingApi->get_delivery_status_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **whatsapp_account_id** | **String** |  |  |

### Return type

[**DeliveryStatusResponse**](DeliveryStatusResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resume_delivery

> <ResumeDeliveryResponse> resume_delivery(whatsapp_account_id)

Requeue pending outbound messages after reconnect

### Examples

```ruby
require 'time'
require 'paygham'
# setup authorization
Paygham.configure do |config|
  # Configure API key authorization: apiKeyHeader
  config.api_key['X-API-Key'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['X-API-Key'] = 'Bearer'
end

api_instance = Paygham::MessagingApi.new
whatsapp_account_id = 'whatsapp_account_id_example' # String | 

begin
  # Requeue pending outbound messages after reconnect
  result = api_instance.resume_delivery(whatsapp_account_id)
  p result
rescue Paygham::ApiError => e
  puts "Error when calling MessagingApi->resume_delivery: #{e}"
end
```

#### Using the resume_delivery_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ResumeDeliveryResponse>, Integer, Hash)> resume_delivery_with_http_info(whatsapp_account_id)

```ruby
begin
  # Requeue pending outbound messages after reconnect
  data, status_code, headers = api_instance.resume_delivery_with_http_info(whatsapp_account_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ResumeDeliveryResponse>
rescue Paygham::ApiError => e
  puts "Error when calling MessagingApi->resume_delivery_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **whatsapp_account_id** | **String** |  |  |

### Return type

[**ResumeDeliveryResponse**](ResumeDeliveryResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## send_bulk_messages

> <BulkMessageResponse> send_bulk_messages(idempotency_key, bulk_message_request)

Queue the same message for many recipients

### Examples

```ruby
require 'time'
require 'paygham'
# setup authorization
Paygham.configure do |config|
  # Configure API key authorization: apiKeyHeader
  config.api_key['X-API-Key'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['X-API-Key'] = 'Bearer'
end

api_instance = Paygham::MessagingApi.new
idempotency_key = 'idempotency_key_example' # String | Stable unique key for this batch. Each recipient is deduplicated independently.
bulk_message_request = Paygham::BulkMessageRequest.new({whatsapp_account_id: 'whatsapp_account_id_example', recipients: ["0787349769", "+93787349770"]}) # BulkMessageRequest | 

begin
  # Queue the same message for many recipients
  result = api_instance.send_bulk_messages(idempotency_key, bulk_message_request)
  p result
rescue Paygham::ApiError => e
  puts "Error when calling MessagingApi->send_bulk_messages: #{e}"
end
```

#### Using the send_bulk_messages_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<BulkMessageResponse>, Integer, Hash)> send_bulk_messages_with_http_info(idempotency_key, bulk_message_request)

```ruby
begin
  # Queue the same message for many recipients
  data, status_code, headers = api_instance.send_bulk_messages_with_http_info(idempotency_key, bulk_message_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <BulkMessageResponse>
rescue Paygham::ApiError => e
  puts "Error when calling MessagingApi->send_bulk_messages_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **idempotency_key** | **String** | Stable unique key for this batch. Each recipient is deduplicated independently. |  |
| **bulk_message_request** | [**BulkMessageRequest**](BulkMessageRequest.md) |  |  |

### Return type

[**BulkMessageResponse**](BulkMessageResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## send_message

> <SendMessageResponse> send_message(idempotency_key, send_message_request)

Send a WhatsApp message using an API key

### Examples

```ruby
require 'time'
require 'paygham'
# setup authorization
Paygham.configure do |config|
  # Configure API key authorization: apiKeyHeader
  config.api_key['X-API-Key'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['X-API-Key'] = 'Bearer'
end

api_instance = Paygham::MessagingApi.new
idempotency_key = 'idempotency_key_example' # String | Stable unique key for this business message. Reuse it when retrying the same request.
send_message_request = Paygham::SendMessageRequest.new({whatsapp_account_id: 'whatsapp_account_id_example', to: '0787349769'}) # SendMessageRequest | 

begin
  # Send a WhatsApp message using an API key
  result = api_instance.send_message(idempotency_key, send_message_request)
  p result
rescue Paygham::ApiError => e
  puts "Error when calling MessagingApi->send_message: #{e}"
end
```

#### Using the send_message_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SendMessageResponse>, Integer, Hash)> send_message_with_http_info(idempotency_key, send_message_request)

```ruby
begin
  # Send a WhatsApp message using an API key
  data, status_code, headers = api_instance.send_message_with_http_info(idempotency_key, send_message_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SendMessageResponse>
rescue Paygham::ApiError => e
  puts "Error when calling MessagingApi->send_message_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **idempotency_key** | **String** | Stable unique key for this business message. Reuse it when retrying the same request. |  |
| **send_message_request** | [**SendMessageRequest**](SendMessageRequest.md) |  |  |

### Return type

[**SendMessageResponse**](SendMessageResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

