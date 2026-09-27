# BulkMessageResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | **bool** |  | 
**Total** | **int32** |  | 
**Queued** | **int32** |  | 
**ConsentRequested** | **int32** |  | 
**Rejected** | **int32** |  | 
**Results** | [**[]BulkMessageResult**](BulkMessageResult.md) |  | 

## Methods

### NewBulkMessageResponse

`func NewBulkMessageResponse(success bool, total int32, queued int32, consentRequested int32, rejected int32, results []BulkMessageResult, ) *BulkMessageResponse`

NewBulkMessageResponse instantiates a new BulkMessageResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkMessageResponseWithDefaults

`func NewBulkMessageResponseWithDefaults() *BulkMessageResponse`

NewBulkMessageResponseWithDefaults instantiates a new BulkMessageResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *BulkMessageResponse) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *BulkMessageResponse) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *BulkMessageResponse) SetSuccess(v bool)`

SetSuccess sets Success field to given value.


### GetTotal

`func (o *BulkMessageResponse) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *BulkMessageResponse) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *BulkMessageResponse) SetTotal(v int32)`

SetTotal sets Total field to given value.


### GetQueued

`func (o *BulkMessageResponse) GetQueued() int32`

GetQueued returns the Queued field if non-nil, zero value otherwise.

### GetQueuedOk

`func (o *BulkMessageResponse) GetQueuedOk() (*int32, bool)`

GetQueuedOk returns a tuple with the Queued field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueued

`func (o *BulkMessageResponse) SetQueued(v int32)`

SetQueued sets Queued field to given value.


### GetConsentRequested

`func (o *BulkMessageResponse) GetConsentRequested() int32`

GetConsentRequested returns the ConsentRequested field if non-nil, zero value otherwise.

### GetConsentRequestedOk

`func (o *BulkMessageResponse) GetConsentRequestedOk() (*int32, bool)`

GetConsentRequestedOk returns a tuple with the ConsentRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsentRequested

`func (o *BulkMessageResponse) SetConsentRequested(v int32)`

SetConsentRequested sets ConsentRequested field to given value.


### GetRejected

`func (o *BulkMessageResponse) GetRejected() int32`

GetRejected returns the Rejected field if non-nil, zero value otherwise.

### GetRejectedOk

`func (o *BulkMessageResponse) GetRejectedOk() (*int32, bool)`

GetRejectedOk returns a tuple with the Rejected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRejected

`func (o *BulkMessageResponse) SetRejected(v int32)`

SetRejected sets Rejected field to given value.


### GetResults

`func (o *BulkMessageResponse) GetResults() []BulkMessageResult`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *BulkMessageResponse) GetResultsOk() (*[]BulkMessageResult, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *BulkMessageResponse) SetResults(v []BulkMessageResult)`

SetResults sets Results field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


