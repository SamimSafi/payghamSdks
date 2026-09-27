# MessagingApi

All URIs are relative to *http://localhost:3000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getConnectionStatus**](MessagingApi.md#getconnectionstatus) | **GET** /api/v1/messages/accounts/{whatsappAccountId}/connection-status | Check live WhatsApp connection status |
| [**getDeliveryStatus**](MessagingApi.md#getdeliverystatus) | **GET** /api/v1/messages/accounts/{whatsappAccountId}/delivery-status | Get outbound delivery counts for an account |
| [**resumeDelivery**](MessagingApi.md#resumedelivery) | **POST** /api/v1/messages/accounts/{whatsappAccountId}/resume | Requeue pending outbound messages after reconnect |
| [**sendBulkMessages**](MessagingApi.md#sendbulkmessages) | **POST** /api/v1/messages/bulk | Queue the same message for many recipients |
| [**sendMessage**](MessagingApi.md#sendmessageoperation) | **POST** /api/v1/messages | Send a WhatsApp message using an API key |



## getConnectionStatus

> ConnectionStatusResponse getConnectionStatus(whatsappAccountId)

Check live WhatsApp connection status

### Example

```ts
import {
  Configuration,
  MessagingApi,
} from '@paygham/sdk';
import type { GetConnectionStatusRequest } from '@paygham/sdk';

async function example() {
  console.log("🚀 Testing @paygham/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKeyHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MessagingApi(config);

  const body = {
    // string
    whatsappAccountId: whatsappAccountId_example,
  } satisfies GetConnectionStatusRequest;

  try {
    const data = await api.getConnectionStatus(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **whatsappAccountId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ConnectionStatusResponse**](ConnectionStatusResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Connection snapshot |  -  |
| **401** | Authentication is missing or invalid |  -  |
| **404** | The requested resource was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDeliveryStatus

> DeliveryStatusResponse getDeliveryStatus(whatsappAccountId)

Get outbound delivery counts for an account

### Example

```ts
import {
  Configuration,
  MessagingApi,
} from '@paygham/sdk';
import type { GetDeliveryStatusRequest } from '@paygham/sdk';

async function example() {
  console.log("🚀 Testing @paygham/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKeyHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MessagingApi(config);

  const body = {
    // string
    whatsappAccountId: whatsappAccountId_example,
  } satisfies GetDeliveryStatusRequest;

  try {
    const data = await api.getDeliveryStatus(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **whatsappAccountId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DeliveryStatusResponse**](DeliveryStatusResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pending / sent / failed counts |  -  |
| **401** | Authentication is missing or invalid |  -  |
| **404** | The requested resource was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resumeDelivery

> ResumeDeliveryResponse resumeDelivery(whatsappAccountId)

Requeue pending outbound messages after reconnect

### Example

```ts
import {
  Configuration,
  MessagingApi,
} from '@paygham/sdk';
import type { ResumeDeliveryRequest } from '@paygham/sdk';

async function example() {
  console.log("🚀 Testing @paygham/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKeyHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MessagingApi(config);

  const body = {
    // string
    whatsappAccountId: whatsappAccountId_example,
  } satisfies ResumeDeliveryRequest;

  try {
    const data = await api.resumeDelivery(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **whatsappAccountId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ResumeDeliveryResponse**](ResumeDeliveryResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Resume result |  -  |
| **401** | Authentication is missing or invalid |  -  |
| **404** | The requested resource was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendBulkMessages

> BulkMessageResponse sendBulkMessages(idempotencyKey, bulkMessageRequest)

Queue the same message for many recipients

### Example

```ts
import {
  Configuration,
  MessagingApi,
} from '@paygham/sdk';
import type { SendBulkMessagesRequest } from '@paygham/sdk';

async function example() {
  console.log("🚀 Testing @paygham/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKeyHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MessagingApi(config);

  const body = {
    // string | Stable unique key for this batch. Each recipient is deduplicated independently.
    idempotencyKey: idempotencyKey_example,
    // BulkMessageRequest
    bulkMessageRequest: ...,
  } satisfies SendBulkMessagesRequest;

  try {
    const data = await api.sendBulkMessages(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **idempotencyKey** | `string` | Stable unique key for this batch. Each recipient is deduplicated independently. | [Defaults to `undefined`] |
| **bulkMessageRequest** | [BulkMessageRequest](BulkMessageRequest.md) |  | |

### Return type

[**BulkMessageResponse**](BulkMessageResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendMessage

> SendMessageResponse sendMessage(idempotencyKey, sendMessageRequest)

Send a WhatsApp message using an API key

### Example

```ts
import {
  Configuration,
  MessagingApi,
} from '@paygham/sdk';
import type { SendMessageOperationRequest } from '@paygham/sdk';

async function example() {
  console.log("🚀 Testing @paygham/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKeyHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MessagingApi(config);

  const body = {
    // string | Stable unique key for this business message. Reuse it when retrying the same request.
    idempotencyKey: idempotencyKey_example,
    // SendMessageRequest
    sendMessageRequest: ...,
  } satisfies SendMessageOperationRequest;

  try {
    const data = await api.sendMessage(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **idempotencyKey** | `string` | Stable unique key for this business message. Reuse it when retrying the same request. | [Defaults to `undefined`] |
| **sendMessageRequest** | [SendMessageRequest](SendMessageRequest.md) |  | |

### Return type

[**SendMessageResponse**](SendMessageResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

