# Paygham.Api.MessagingApi

All URIs are relative to *http://localhost:3000*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetConnectionStatus**](MessagingApi.md#getconnectionstatus) | **GET** /api/v1/messages/accounts/{whatsappAccountId}/connection-status | Check live WhatsApp connection status |
| [**GetDeliveryStatus**](MessagingApi.md#getdeliverystatus) | **GET** /api/v1/messages/accounts/{whatsappAccountId}/delivery-status | Get outbound delivery counts for an account |
| [**ResumeDelivery**](MessagingApi.md#resumedelivery) | **POST** /api/v1/messages/accounts/{whatsappAccountId}/resume | Requeue pending outbound messages after reconnect |
| [**SendBulkMessages**](MessagingApi.md#sendbulkmessages) | **POST** /api/v1/messages/bulk | Queue the same message for many recipients |
| [**SendMessage**](MessagingApi.md#sendmessage) | **POST** /api/v1/messages | Send a WhatsApp message using an API key |

<a id="getconnectionstatus"></a>
# **GetConnectionStatus**
> ConnectionStatusResponse GetConnectionStatus (string whatsappAccountId)

Check live WhatsApp connection status


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **whatsappAccountId** | **string** |  |  |

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
| **200** | Connection snapshot |  -  |
| **401** | Authentication is missing or invalid |  -  |
| **404** | The requested resource was not found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getdeliverystatus"></a>
# **GetDeliveryStatus**
> DeliveryStatusResponse GetDeliveryStatus (string whatsappAccountId)

Get outbound delivery counts for an account


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **whatsappAccountId** | **string** |  |  |

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
| **200** | Pending / sent / failed counts |  -  |
| **401** | Authentication is missing or invalid |  -  |
| **404** | The requested resource was not found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="resumedelivery"></a>
# **ResumeDelivery**
> ResumeDeliveryResponse ResumeDelivery (string whatsappAccountId)

Requeue pending outbound messages after reconnect


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **whatsappAccountId** | **string** |  |  |

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
| **202** | Resume result |  -  |
| **401** | Authentication is missing or invalid |  -  |
| **404** | The requested resource was not found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="sendbulkmessages"></a>
# **SendBulkMessages**
> BulkMessageResponse SendBulkMessages (string idempotencyKey, BulkMessageRequest bulkMessageRequest)

Queue the same message for many recipients


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **idempotencyKey** | **string** | Stable unique key for this batch. Each recipient is deduplicated independently. |  |
| **bulkMessageRequest** | [**BulkMessageRequest**](BulkMessageRequest.md) |  |  |

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
| **202** | Batch accepted; inspect per-recipient results |  -  |
| **400** | Request validation failed |  -  |
| **401** | Authentication is missing or invalid |  -  |
| **403** | The authenticated principal cannot perform this operation |  -  |
| **404** | The requested resource was not found |  -  |
| **409** | The request conflicts with the current resource state |  -  |
| **413** | The request body is too large |  -  |
| **429** | Rate or quota limit exceeded |  * Retry-After - Seconds to wait before retrying. <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="sendmessage"></a>
# **SendMessage**
> SendMessageResponse SendMessage (string idempotencyKey, SendMessageRequest sendMessageRequest)

Send a WhatsApp message using an API key


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **idempotencyKey** | **string** | Stable unique key for this business message. Reuse it when retrying the same request. |  |
| **sendMessageRequest** | [**SendMessageRequest**](SendMessageRequest.md) |  |  |

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
| **202** | Message queued or consent flow started |  -  |
| **400** | Request validation failed |  -  |
| **401** | Authentication is missing or invalid |  -  |
| **403** | The authenticated principal cannot perform this operation |  -  |
| **404** | The requested resource was not found |  -  |
| **409** | The request conflicts with the current resource state |  -  |
| **413** | The request body is too large |  -  |
| **429** | Rate or quota limit exceeded |  * Retry-After - Seconds to wait before retrying. <br>  |
| **502** | The upstream messaging service failed |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

