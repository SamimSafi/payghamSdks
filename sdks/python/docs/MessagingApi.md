# paygham.MessagingApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_connection_status**](MessagingApi.md#get_connection_status) | **GET** /api/v1/messages/accounts/{whatsappAccountId}/connection-status | Check live WhatsApp connection status
[**get_delivery_status**](MessagingApi.md#get_delivery_status) | **GET** /api/v1/messages/accounts/{whatsappAccountId}/delivery-status | Get outbound delivery counts for an account
[**resume_delivery**](MessagingApi.md#resume_delivery) | **POST** /api/v1/messages/accounts/{whatsappAccountId}/resume | Requeue pending outbound messages after reconnect
[**send_bulk_messages**](MessagingApi.md#send_bulk_messages) | **POST** /api/v1/messages/bulk | Queue the same message for many recipients
[**send_message**](MessagingApi.md#send_message) | **POST** /api/v1/messages | Send a WhatsApp message using an API key


# **get_connection_status**
> ConnectionStatusResponse get_connection_status(whatsapp_account_id)

Check live WhatsApp connection status

### Example

* Api Key Authentication (apiKeyHeader):

```python
import paygham
from paygham.models.connection_status_response import ConnectionStatusResponse
from paygham.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = paygham.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with paygham.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = paygham.MessagingApi(api_client)
    whatsapp_account_id = 'whatsapp_account_id_example' # str | 

    try:
        # Check live WhatsApp connection status
        api_response = api_instance.get_connection_status(whatsapp_account_id)
        print("The response of MessagingApi->get_connection_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->get_connection_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **whatsapp_account_id** | **str**|  | 

### Return type

[**ConnectionStatusResponse**](ConnectionStatusResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection snapshot |  -  |
**401** | Authentication is missing or invalid |  -  |
**404** | The requested resource was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_delivery_status**
> DeliveryStatusResponse get_delivery_status(whatsapp_account_id)

Get outbound delivery counts for an account

### Example

* Api Key Authentication (apiKeyHeader):

```python
import paygham
from paygham.models.delivery_status_response import DeliveryStatusResponse
from paygham.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = paygham.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with paygham.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = paygham.MessagingApi(api_client)
    whatsapp_account_id = 'whatsapp_account_id_example' # str | 

    try:
        # Get outbound delivery counts for an account
        api_response = api_instance.get_delivery_status(whatsapp_account_id)
        print("The response of MessagingApi->get_delivery_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->get_delivery_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **whatsapp_account_id** | **str**|  | 

### Return type

[**DeliveryStatusResponse**](DeliveryStatusResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pending / sent / failed counts |  -  |
**401** | Authentication is missing or invalid |  -  |
**404** | The requested resource was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resume_delivery**
> ResumeDeliveryResponse resume_delivery(whatsapp_account_id)

Requeue pending outbound messages after reconnect

### Example

* Api Key Authentication (apiKeyHeader):

```python
import paygham
from paygham.models.resume_delivery_response import ResumeDeliveryResponse
from paygham.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = paygham.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with paygham.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = paygham.MessagingApi(api_client)
    whatsapp_account_id = 'whatsapp_account_id_example' # str | 

    try:
        # Requeue pending outbound messages after reconnect
        api_response = api_instance.resume_delivery(whatsapp_account_id)
        print("The response of MessagingApi->resume_delivery:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->resume_delivery: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **whatsapp_account_id** | **str**|  | 

### Return type

[**ResumeDeliveryResponse**](ResumeDeliveryResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Resume result |  -  |
**401** | Authentication is missing or invalid |  -  |
**404** | The requested resource was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_bulk_messages**
> BulkMessageResponse send_bulk_messages(idempotency_key, bulk_message_request)

Queue the same message for many recipients

### Example

* Api Key Authentication (apiKeyHeader):

```python
import paygham
from paygham.models.bulk_message_request import BulkMessageRequest
from paygham.models.bulk_message_response import BulkMessageResponse
from paygham.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = paygham.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with paygham.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = paygham.MessagingApi(api_client)
    idempotency_key = 'idempotency_key_example' # str | Stable unique key for this batch. Each recipient is deduplicated independently.
    bulk_message_request = paygham.BulkMessageRequest() # BulkMessageRequest | 

    try:
        # Queue the same message for many recipients
        api_response = api_instance.send_bulk_messages(idempotency_key, bulk_message_request)
        print("The response of MessagingApi->send_bulk_messages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->send_bulk_messages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idempotency_key** | **str**| Stable unique key for this batch. Each recipient is deduplicated independently. | 
 **bulk_message_request** | [**BulkMessageRequest**](BulkMessageRequest.md)|  | 

### Return type

[**BulkMessageResponse**](BulkMessageResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Batch accepted; inspect per-recipient results |  -  |
**400** | Request validation failed |  -  |
**401** | Authentication is missing or invalid |  -  |
**403** | The authenticated principal cannot perform this operation |  -  |
**404** | The requested resource was not found |  -  |
**409** | The request conflicts with the current resource state |  -  |
**413** | The request body is too large |  -  |
**429** | Rate or quota limit exceeded |  * Retry-After - Seconds to wait before retrying. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_message**
> SendMessageResponse send_message(idempotency_key, send_message_request)

Send a WhatsApp message using an API key

### Example

* Api Key Authentication (apiKeyHeader):

```python
import paygham
from paygham.models.send_message_request import SendMessageRequest
from paygham.models.send_message_response import SendMessageResponse
from paygham.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = paygham.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with paygham.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = paygham.MessagingApi(api_client)
    idempotency_key = 'idempotency_key_example' # str | Stable unique key for this business message. Reuse it when retrying the same request.
    send_message_request = paygham.SendMessageRequest() # SendMessageRequest | 

    try:
        # Send a WhatsApp message using an API key
        api_response = api_instance.send_message(idempotency_key, send_message_request)
        print("The response of MessagingApi->send_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagingApi->send_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idempotency_key** | **str**| Stable unique key for this business message. Reuse it when retrying the same request. | 
 **send_message_request** | [**SendMessageRequest**](SendMessageRequest.md)|  | 

### Return type

[**SendMessageResponse**](SendMessageResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Message queued or consent flow started |  -  |
**400** | Request validation failed |  -  |
**401** | Authentication is missing or invalid |  -  |
**403** | The authenticated principal cannot perform this operation |  -  |
**404** | The requested resource was not found |  -  |
**409** | The request conflicts with the current resource state |  -  |
**413** | The request body is too large |  -  |
**429** | Rate or quota limit exceeded |  * Retry-After - Seconds to wait before retrying. <br>  |
**502** | The upstream messaging service failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

