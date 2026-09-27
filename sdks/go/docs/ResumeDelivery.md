# ResumeDelivery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | **string** |  | 
**Pending** | **int32** |  | 
**Requeued** | **int32** |  | 
**Connected** | **bool** |  | 

## Methods

### NewResumeDelivery

`func NewResumeDelivery(accountId string, pending int32, requeued int32, connected bool, ) *ResumeDelivery`

NewResumeDelivery instantiates a new ResumeDelivery object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResumeDeliveryWithDefaults

`func NewResumeDeliveryWithDefaults() *ResumeDelivery`

NewResumeDeliveryWithDefaults instantiates a new ResumeDelivery object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *ResumeDelivery) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ResumeDelivery) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ResumeDelivery) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.


### GetPending

`func (o *ResumeDelivery) GetPending() int32`

GetPending returns the Pending field if non-nil, zero value otherwise.

### GetPendingOk

`func (o *ResumeDelivery) GetPendingOk() (*int32, bool)`

GetPendingOk returns a tuple with the Pending field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPending

`func (o *ResumeDelivery) SetPending(v int32)`

SetPending sets Pending field to given value.


### GetRequeued

`func (o *ResumeDelivery) GetRequeued() int32`

GetRequeued returns the Requeued field if non-nil, zero value otherwise.

### GetRequeuedOk

`func (o *ResumeDelivery) GetRequeuedOk() (*int32, bool)`

GetRequeuedOk returns a tuple with the Requeued field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequeued

`func (o *ResumeDelivery) SetRequeued(v int32)`

SetRequeued sets Requeued field to given value.


### GetConnected

`func (o *ResumeDelivery) GetConnected() bool`

GetConnected returns the Connected field if non-nil, zero value otherwise.

### GetConnectedOk

`func (o *ResumeDelivery) GetConnectedOk() (*bool, bool)`

GetConnectedOk returns a tuple with the Connected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnected

`func (o *ResumeDelivery) SetConnected(v bool)`

SetConnected sets Connected field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


