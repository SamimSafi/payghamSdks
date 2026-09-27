# Paygham\MessagingApi

Send messages and check delivery with an API key

All URIs are relative to http://localhost:3000, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getConnectionStatus()**](MessagingApi.md#getConnectionStatus) | **GET** /api/v1/messages/accounts/{whatsappAccountId}/connection-status | Check live WhatsApp connection status |
| [**getDeliveryStatus()**](MessagingApi.md#getDeliveryStatus) | **GET** /api/v1/messages/accounts/{whatsappAccountId}/delivery-status | Get outbound delivery counts for an account |
| [**resumeDelivery()**](MessagingApi.md#resumeDelivery) | **POST** /api/v1/messages/accounts/{whatsappAccountId}/resume | Requeue pending outbound messages after reconnect |
| [**sendBulkMessages()**](MessagingApi.md#sendBulkMessages) | **POST** /api/v1/messages/bulk | Queue the same message for many recipients |
| [**sendMessage()**](MessagingApi.md#sendMessage) | **POST** /api/v1/messages | Send a WhatsApp message using an API key |


## `getConnectionStatus()`

```php
getConnectionStatus($whatsapp_account_id): \Paygham\Model\ConnectionStatusResponse
```

Check live WhatsApp connection status

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyHeader
$config = Paygham\Configuration::getDefaultConfiguration()->setApiKey('X-API-Key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Paygham\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-Key', 'Bearer');


$apiInstance = new Paygham\Api\MessagingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$whatsapp_account_id = 'whatsapp_account_id_example'; // string

try {
    $result = $apiInstance->getConnectionStatus($whatsapp_account_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MessagingApi->getConnectionStatus: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **whatsapp_account_id** | **string**|  | |

### Return type

[**\Paygham\Model\ConnectionStatusResponse**](../Model/ConnectionStatusResponse.md)

### Authorization

[apiKeyHeader](../../README.md#apiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getDeliveryStatus()`

```php
getDeliveryStatus($whatsapp_account_id): \Paygham\Model\DeliveryStatusResponse
```

Get outbound delivery counts for an account

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyHeader
$config = Paygham\Configuration::getDefaultConfiguration()->setApiKey('X-API-Key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Paygham\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-Key', 'Bearer');


$apiInstance = new Paygham\Api\MessagingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$whatsapp_account_id = 'whatsapp_account_id_example'; // string

try {
    $result = $apiInstance->getDeliveryStatus($whatsapp_account_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MessagingApi->getDeliveryStatus: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **whatsapp_account_id** | **string**|  | |

### Return type

[**\Paygham\Model\DeliveryStatusResponse**](../Model/DeliveryStatusResponse.md)

### Authorization

[apiKeyHeader](../../README.md#apiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `resumeDelivery()`

```php
resumeDelivery($whatsapp_account_id): \Paygham\Model\ResumeDeliveryResponse
```

Requeue pending outbound messages after reconnect

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyHeader
$config = Paygham\Configuration::getDefaultConfiguration()->setApiKey('X-API-Key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Paygham\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-Key', 'Bearer');


$apiInstance = new Paygham\Api\MessagingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$whatsapp_account_id = 'whatsapp_account_id_example'; // string

try {
    $result = $apiInstance->resumeDelivery($whatsapp_account_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MessagingApi->resumeDelivery: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **whatsapp_account_id** | **string**|  | |

### Return type

[**\Paygham\Model\ResumeDeliveryResponse**](../Model/ResumeDeliveryResponse.md)

### Authorization

[apiKeyHeader](../../README.md#apiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `sendBulkMessages()`

```php
sendBulkMessages($idempotency_key, $bulk_message_request): \Paygham\Model\BulkMessageResponse
```

Queue the same message for many recipients

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyHeader
$config = Paygham\Configuration::getDefaultConfiguration()->setApiKey('X-API-Key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Paygham\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-Key', 'Bearer');


$apiInstance = new Paygham\Api\MessagingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$idempotency_key = 'idempotency_key_example'; // string | Stable unique key for this batch. Each recipient is deduplicated independently.
$bulk_message_request = new \Paygham\Model\BulkMessageRequest(); // \Paygham\Model\BulkMessageRequest

try {
    $result = $apiInstance->sendBulkMessages($idempotency_key, $bulk_message_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MessagingApi->sendBulkMessages: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **idempotency_key** | **string**| Stable unique key for this batch. Each recipient is deduplicated independently. | |
| **bulk_message_request** | [**\Paygham\Model\BulkMessageRequest**](../Model/BulkMessageRequest.md)|  | |

### Return type

[**\Paygham\Model\BulkMessageResponse**](../Model/BulkMessageResponse.md)

### Authorization

[apiKeyHeader](../../README.md#apiKeyHeader)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `sendMessage()`

```php
sendMessage($idempotency_key, $send_message_request): \Paygham\Model\SendMessageResponse
```

Send a WhatsApp message using an API key

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyHeader
$config = Paygham\Configuration::getDefaultConfiguration()->setApiKey('X-API-Key', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Paygham\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-Key', 'Bearer');


$apiInstance = new Paygham\Api\MessagingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$idempotency_key = 'idempotency_key_example'; // string | Stable unique key for this business message. Reuse it when retrying the same request.
$send_message_request = new \Paygham\Model\SendMessageRequest(); // \Paygham\Model\SendMessageRequest

try {
    $result = $apiInstance->sendMessage($idempotency_key, $send_message_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MessagingApi->sendMessage: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **idempotency_key** | **string**| Stable unique key for this business message. Reuse it when retrying the same request. | |
| **send_message_request** | [**\Paygham\Model\SendMessageRequest**](../Model/SendMessageRequest.md)|  | |

### Return type

[**\Paygham\Model\SendMessageResponse**](../Model/SendMessageResponse.md)

### Authorization

[apiKeyHeader](../../README.md#apiKeyHeader)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
