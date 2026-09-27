# DeliveryStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | **string** |  | 
**AccountStatus** | **string** |  | 
**Pending** | **int32** | QUEUED + SENDING outbound messages | 
**Sent** | **int32** |  | 
**Failed** | **int32** |  | 

## Methods

### NewDeliveryStatus

`func NewDeliveryStatus(accountId string, accountStatus string, pending int32, sent int32, failed int32, ) *DeliveryStatus`

NewDeliveryStatus instantiates a new DeliveryStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeliveryStatusWithDefaults

`func NewDeliveryStatusWithDefaults() *DeliveryStatus`

NewDeliveryStatusWithDefaults instantiates a new DeliveryStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *DeliveryStatus) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *DeliveryStatus) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *DeliveryStatus) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.


### GetAccountStatus

`func (o *DeliveryStatus) GetAccountStatus() string`

GetAccountStatus returns the AccountStatus field if non-nil, zero value otherwise.

### GetAccountStatusOk

`func (o *DeliveryStatus) GetAccountStatusOk() (*string, bool)`

GetAccountStatusOk returns a tuple with the AccountStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountStatus

`func (o *DeliveryStatus) SetAccountStatus(v string)`

SetAccountStatus sets AccountStatus field to given value.


### GetPending

`func (o *DeliveryStatus) GetPending() int32`

GetPending returns the Pending field if non-nil, zero value otherwise.

### GetPendingOk

`func (o *DeliveryStatus) GetPendingOk() (*int32, bool)`

GetPendingOk returns a tuple with the Pending field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPending

`func (o *DeliveryStatus) SetPending(v int32)`

SetPending sets Pending field to given value.


### GetSent

`func (o *DeliveryStatus) GetSent() int32`

GetSent returns the Sent field if non-nil, zero value otherwise.

### GetSentOk

`func (o *DeliveryStatus) GetSentOk() (*int32, bool)`

GetSentOk returns a tuple with the Sent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSent

`func (o *DeliveryStatus) SetSent(v int32)`

SetSent sets Sent field to given value.


### GetFailed

`func (o *DeliveryStatus) GetFailed() int32`

GetFailed returns the Failed field if non-nil, zero value otherwise.

### GetFailedOk

`func (o *DeliveryStatus) GetFailedOk() (*int32, bool)`

GetFailedOk returns a tuple with the Failed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailed

`func (o *DeliveryStatus) SetFailed(v int32)`

SetFailed sets Failed field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


