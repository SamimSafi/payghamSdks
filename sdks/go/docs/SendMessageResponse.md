# SendMessageResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | **bool** |  | 
**MessageId** | **NullableString** |  | 
**Status** | **string** |  | 
**ConsentRequired** | Pointer to **bool** |  | [optional] 
**ConsentUrl** | Pointer to **NullableString** |  | [optional] 
**Message** | Pointer to **string** |  | [optional] 

## Methods

### NewSendMessageResponse

`func NewSendMessageResponse(success bool, messageId NullableString, status string, ) *SendMessageResponse`

NewSendMessageResponse instantiates a new SendMessageResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSendMessageResponseWithDefaults

`func NewSendMessageResponseWithDefaults() *SendMessageResponse`

NewSendMessageResponseWithDefaults instantiates a new SendMessageResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *SendMessageResponse) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *SendMessageResponse) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *SendMessageResponse) SetSuccess(v bool)`

SetSuccess sets Success field to given value.


### GetMessageId

`func (o *SendMessageResponse) GetMessageId() string`

GetMessageId returns the MessageId field if non-nil, zero value otherwise.

### GetMessageIdOk

`func (o *SendMessageResponse) GetMessageIdOk() (*string, bool)`

GetMessageIdOk returns a tuple with the MessageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageId

`func (o *SendMessageResponse) SetMessageId(v string)`

SetMessageId sets MessageId field to given value.


### SetMessageIdNil

`func (o *SendMessageResponse) SetMessageIdNil(b bool)`

 SetMessageIdNil sets the value for MessageId to be an explicit nil

### UnsetMessageId
`func (o *SendMessageResponse) UnsetMessageId()`

UnsetMessageId ensures that no value is present for MessageId, not even an explicit nil
### GetStatus

`func (o *SendMessageResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SendMessageResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SendMessageResponse) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetConsentRequired

`func (o *SendMessageResponse) GetConsentRequired() bool`

GetConsentRequired returns the ConsentRequired field if non-nil, zero value otherwise.

### GetConsentRequiredOk

`func (o *SendMessageResponse) GetConsentRequiredOk() (*bool, bool)`

GetConsentRequiredOk returns a tuple with the ConsentRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsentRequired

`func (o *SendMessageResponse) SetConsentRequired(v bool)`

SetConsentRequired sets ConsentRequired field to given value.

### HasConsentRequired

`func (o *SendMessageResponse) HasConsentRequired() bool`

HasConsentRequired returns a boolean if a field has been set.

### GetConsentUrl

`func (o *SendMessageResponse) GetConsentUrl() string`

GetConsentUrl returns the ConsentUrl field if non-nil, zero value otherwise.

### GetConsentUrlOk

`func (o *SendMessageResponse) GetConsentUrlOk() (*string, bool)`

GetConsentUrlOk returns a tuple with the ConsentUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsentUrl

`func (o *SendMessageResponse) SetConsentUrl(v string)`

SetConsentUrl sets ConsentUrl field to given value.

### HasConsentUrl

`func (o *SendMessageResponse) HasConsentUrl() bool`

HasConsentUrl returns a boolean if a field has been set.

### SetConsentUrlNil

`func (o *SendMessageResponse) SetConsentUrlNil(b bool)`

 SetConsentUrlNil sets the value for ConsentUrl to be an explicit nil

### UnsetConsentUrl
`func (o *SendMessageResponse) UnsetConsentUrl()`

UnsetConsentUrl ensures that no value is present for ConsentUrl, not even an explicit nil
### GetMessage

`func (o *SendMessageResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SendMessageResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SendMessageResponse) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *SendMessageResponse) HasMessage() bool`

HasMessage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


