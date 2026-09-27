# \MessagingAPI

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetConnectionStatus**](MessagingAPI.md#GetConnectionStatus) | **Get** /api/v1/messages/accounts/{whatsappAccountId}/connection-status | Check live WhatsApp connection status
[**GetDeliveryStatus**](MessagingAPI.md#GetDeliveryStatus) | **Get** /api/v1/messages/accounts/{whatsappAccountId}/delivery-status | Get outbound delivery counts for an account
[**ResumeDelivery**](MessagingAPI.md#ResumeDelivery) | **Post** /api/v1/messages/accounts/{whatsappAccountId}/resume | Requeue pending outbound messages after reconnect
[**SendBulkMessages**](MessagingAPI.md#SendBulkMessages) | **Post** /api/v1/messages/bulk | Queue the same message for many recipients
[**SendMessage**](MessagingAPI.md#SendMessage) | **Post** /api/v1/messages | Send a WhatsApp message using an API key



## GetConnectionStatus

> ConnectionStatusResponse GetConnectionStatus(ctx, whatsappAccountId).Execute()

Check live WhatsApp connection status

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/paygham/paygham-go"
)

func main() {
	whatsappAccountId := "whatsappAccountId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MessagingAPI.GetConnectionStatus(context.Background(), whatsappAccountId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MessagingAPI.GetConnectionStatus``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetConnectionStatus`: ConnectionStatusResponse
	fmt.Fprintf(os.Stdout, "Response from `MessagingAPI.GetConnectionStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**whatsappAccountId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectionStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ConnectionStatusResponse**](ConnectionStatusResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDeliveryStatus

> DeliveryStatusResponse GetDeliveryStatus(ctx, whatsappAccountId).Execute()

Get outbound delivery counts for an account

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/paygham/paygham-go"
)

func main() {
	whatsappAccountId := "whatsappAccountId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MessagingAPI.GetDeliveryStatus(context.Background(), whatsappAccountId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MessagingAPI.GetDeliveryStatus``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetDeliveryStatus`: DeliveryStatusResponse
	fmt.Fprintf(os.Stdout, "Response from `MessagingAPI.GetDeliveryStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**whatsappAccountId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDeliveryStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DeliveryStatusResponse**](DeliveryStatusResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ResumeDelivery

> ResumeDeliveryResponse ResumeDelivery(ctx, whatsappAccountId).Execute()

Requeue pending outbound messages after reconnect

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/paygham/paygham-go"
)

func main() {
	whatsappAccountId := "whatsappAccountId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MessagingAPI.ResumeDelivery(context.Background(), whatsappAccountId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MessagingAPI.ResumeDelivery``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ResumeDelivery`: ResumeDeliveryResponse
	fmt.Fprintf(os.Stdout, "Response from `MessagingAPI.ResumeDelivery`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**whatsappAccountId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiResumeDeliveryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ResumeDeliveryResponse**](ResumeDeliveryResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SendBulkMessages

> BulkMessageResponse SendBulkMessages(ctx).IdempotencyKey(idempotencyKey).BulkMessageRequest(bulkMessageRequest).Execute()

Queue the same message for many recipients

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/paygham/paygham-go"
)

func main() {
	idempotencyKey := "idempotencyKey_example" // string | Stable unique key for this batch. Each recipient is deduplicated independently.
	bulkMessageRequest := *openapiclient.NewBulkMessageRequest("WhatsappAccountId_example", []string{"Recipients_example"}) // BulkMessageRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MessagingAPI.SendBulkMessages(context.Background()).IdempotencyKey(idempotencyKey).BulkMessageRequest(bulkMessageRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MessagingAPI.SendBulkMessages``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SendBulkMessages`: BulkMessageResponse
	fmt.Fprintf(os.Stdout, "Response from `MessagingAPI.SendBulkMessages`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSendBulkMessagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idempotencyKey** | **string** | Stable unique key for this batch. Each recipient is deduplicated independently. | 
 **bulkMessageRequest** | [**BulkMessageRequest**](BulkMessageRequest.md) |  | 

### Return type

[**BulkMessageResponse**](BulkMessageResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SendMessage

> SendMessageResponse SendMessage(ctx).IdempotencyKey(idempotencyKey).SendMessageRequest(sendMessageRequest).Execute()

Send a WhatsApp message using an API key

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/paygham/paygham-go"
)

func main() {
	idempotencyKey := "idempotencyKey_example" // string | Stable unique key for this business message. Reuse it when retrying the same request.
	sendMessageRequest := *openapiclient.NewSendMessageRequest("WhatsappAccountId_example", "0787349769") // SendMessageRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MessagingAPI.SendMessage(context.Background()).IdempotencyKey(idempotencyKey).SendMessageRequest(sendMessageRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MessagingAPI.SendMessage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SendMessage`: SendMessageResponse
	fmt.Fprintf(os.Stdout, "Response from `MessagingAPI.SendMessage`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSendMessageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idempotencyKey** | **string** | Stable unique key for this business message. Reuse it when retrying the same request. | 
 **sendMessageRequest** | [**SendMessageRequest**](SendMessageRequest.md) |  | 

### Return type

[**SendMessageResponse**](SendMessageResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

