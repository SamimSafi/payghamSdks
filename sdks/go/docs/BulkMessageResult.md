# BulkMessageResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Recipient** | **string** |  | 
**Status** | **string** |  | 
**MessageId** | Pointer to **NullableString** |  | [optional] 
**ConsentUrl** | Pointer to **NullableString** |  | [optional] 
**Error** | Pointer to **NullableString** |  | [optional] 
**Reason** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewBulkMessageResult

`func NewBulkMessageResult(recipient string, status string, ) *BulkMessageResult`

NewBulkMessageResult instantiates a new BulkMessageResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkMessageResultWithDefaults

`func NewBulkMessageResultWithDefaults() *BulkMessageResult`

NewBulkMessageResultWithDefaults instantiates a new BulkMessageResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRecipient

`func (o *BulkMessageResult) GetRecipient() string`

GetRecipient returns the Recipient field if non-nil, zero value otherwise.

### GetRecipientOk

`func (o *BulkMessageResult) GetRecipientOk() (*string, bool)`

GetRecipientOk returns a tuple with the Recipient field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipient

`func (o *BulkMessageResult) SetRecipient(v string)`

SetRecipient sets Recipient field to given value.


### GetStatus

`func (o *BulkMessageResult) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *BulkMessageResult) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *BulkMessageResult) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetMessageId

`func (o *BulkMessageResult) GetMessageId() string`

GetMessageId returns the MessageId field if non-nil, zero value otherwise.

### GetMessageIdOk

`func (o *BulkMessageResult) GetMessageIdOk() (*string, bool)`

GetMessageIdOk returns a tuple with the MessageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageId

`func (o *BulkMessageResult) SetMessageId(v string)`

SetMessageId sets MessageId field to given value.

### HasMessageId

`func (o *BulkMessageResult) HasMessageId() bool`

HasMessageId returns a boolean if a field has been set.

### SetMessageIdNil

`func (o *BulkMessageResult) SetMessageIdNil(b bool)`

 SetMessageIdNil sets the value for MessageId to be an explicit nil

### UnsetMessageId
`func (o *BulkMessageResult) UnsetMessageId()`

UnsetMessageId ensures that no value is present for MessageId, not even an explicit nil
### GetConsentUrl

`func (o *BulkMessageResult) GetConsentUrl() string`

GetConsentUrl returns the ConsentUrl field if non-nil, zero value otherwise.

### GetConsentUrlOk

`func (o *BulkMessageResult) GetConsentUrlOk() (*string, bool)`

GetConsentUrlOk returns a tuple with the ConsentUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsentUrl

`func (o *BulkMessageResult) SetConsentUrl(v string)`

SetConsentUrl sets ConsentUrl field to given value.

### HasConsentUrl

`func (o *BulkMessageResult) HasConsentUrl() bool`

HasConsentUrl returns a boolean if a field has been set.

### SetConsentUrlNil

`func (o *BulkMessageResult) SetConsentUrlNil(b bool)`

 SetConsentUrlNil sets the value for ConsentUrl to be an explicit nil

### UnsetConsentUrl
`func (o *BulkMessageResult) UnsetConsentUrl()`

UnsetConsentUrl ensures that no value is present for ConsentUrl, not even an explicit nil
### GetError

`func (o *BulkMessageResult) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *BulkMessageResult) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *BulkMessageResult) SetError(v string)`

SetError sets Error field to given value.

### HasError

`func (o *BulkMessageResult) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *BulkMessageResult) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *BulkMessageResult) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil
### GetReason

`func (o *BulkMessageResult) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *BulkMessageResult) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *BulkMessageResult) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *BulkMessageResult) HasReason() bool`

HasReason returns a boolean if a field has been set.

### SetReasonNil

`func (o *BulkMessageResult) SetReasonNil(b bool)`

 SetReasonNil sets the value for Reason to be an explicit nil

### UnsetReason
`func (o *BulkMessageResult) UnsetReason()`

UnsetReason ensures that no value is present for Reason, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


