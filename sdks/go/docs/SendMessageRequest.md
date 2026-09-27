# SendMessageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WhatsappAccountId** | **string** |  | 
**CountryCode** | Pointer to **string** | ISO country code; required for local numbers starting with 0 | [optional] 
**To** | **string** | Destination phone (alias: recipient) | 
**Recipient** | Pointer to **string** | Deprecated alias for to. | [optional] 
**Message** | Pointer to **string** | Text body (alias: content). Optional when media is provided. | [optional] 
**Content** | Pointer to **string** | Deprecated alias for message. | [optional] 
**MediaUrl** | Pointer to **string** | Public http(s) URL for an image or PDF. Mutually exclusive with mediaBase64. | [optional] 
**MediaBase64** | Pointer to **string** | Base64-encoded media. Mutually exclusive with mediaUrl. | [optional] 
**MediaMimeType** | Pointer to **string** | Required when mediaUrl or mediaBase64 is set. | [optional] 
**MediaFilename** | Pointer to **string** |  | [optional] 

## Methods

### NewSendMessageRequest

`func NewSendMessageRequest(whatsappAccountId string, to string, ) *SendMessageRequest`

NewSendMessageRequest instantiates a new SendMessageRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSendMessageRequestWithDefaults

`func NewSendMessageRequestWithDefaults() *SendMessageRequest`

NewSendMessageRequestWithDefaults instantiates a new SendMessageRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWhatsappAccountId

`func (o *SendMessageRequest) GetWhatsappAccountId() string`

GetWhatsappAccountId returns the WhatsappAccountId field if non-nil, zero value otherwise.

### GetWhatsappAccountIdOk

`func (o *SendMessageRequest) GetWhatsappAccountIdOk() (*string, bool)`

GetWhatsappAccountIdOk returns a tuple with the WhatsappAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWhatsappAccountId

`func (o *SendMessageRequest) SetWhatsappAccountId(v string)`

SetWhatsappAccountId sets WhatsappAccountId field to given value.


### GetCountryCode

`func (o *SendMessageRequest) GetCountryCode() string`

GetCountryCode returns the CountryCode field if non-nil, zero value otherwise.

### GetCountryCodeOk

`func (o *SendMessageRequest) GetCountryCodeOk() (*string, bool)`

GetCountryCodeOk returns a tuple with the CountryCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountryCode

`func (o *SendMessageRequest) SetCountryCode(v string)`

SetCountryCode sets CountryCode field to given value.

### HasCountryCode

`func (o *SendMessageRequest) HasCountryCode() bool`

HasCountryCode returns a boolean if a field has been set.

### GetTo

`func (o *SendMessageRequest) GetTo() string`

GetTo returns the To field if non-nil, zero value otherwise.

### GetToOk

`func (o *SendMessageRequest) GetToOk() (*string, bool)`

GetToOk returns a tuple with the To field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTo

`func (o *SendMessageRequest) SetTo(v string)`

SetTo sets To field to given value.


### GetRecipient

`func (o *SendMessageRequest) GetRecipient() string`

GetRecipient returns the Recipient field if non-nil, zero value otherwise.

### GetRecipientOk

`func (o *SendMessageRequest) GetRecipientOk() (*string, bool)`

GetRecipientOk returns a tuple with the Recipient field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipient

`func (o *SendMessageRequest) SetRecipient(v string)`

SetRecipient sets Recipient field to given value.

### HasRecipient

`func (o *SendMessageRequest) HasRecipient() bool`

HasRecipient returns a boolean if a field has been set.

### GetMessage

`func (o *SendMessageRequest) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SendMessageRequest) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SendMessageRequest) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *SendMessageRequest) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetContent

`func (o *SendMessageRequest) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *SendMessageRequest) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *SendMessageRequest) SetContent(v string)`

SetContent sets Content field to given value.

### HasContent

`func (o *SendMessageRequest) HasContent() bool`

HasContent returns a boolean if a field has been set.

### GetMediaUrl

`func (o *SendMessageRequest) GetMediaUrl() string`

GetMediaUrl returns the MediaUrl field if non-nil, zero value otherwise.

### GetMediaUrlOk

`func (o *SendMessageRequest) GetMediaUrlOk() (*string, bool)`

GetMediaUrlOk returns a tuple with the MediaUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMediaUrl

`func (o *SendMessageRequest) SetMediaUrl(v string)`

SetMediaUrl sets MediaUrl field to given value.

### HasMediaUrl

`func (o *SendMessageRequest) HasMediaUrl() bool`

HasMediaUrl returns a boolean if a field has been set.

### GetMediaBase64

`func (o *SendMessageRequest) GetMediaBase64() string`

GetMediaBase64 returns the MediaBase64 field if non-nil, zero value otherwise.

### GetMediaBase64Ok

`func (o *SendMessageRequest) GetMediaBase64Ok() (*string, bool)`

GetMediaBase64Ok returns a tuple with the MediaBase64 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMediaBase64

`func (o *SendMessageRequest) SetMediaBase64(v string)`

SetMediaBase64 sets MediaBase64 field to given value.

### HasMediaBase64

`func (o *SendMessageRequest) HasMediaBase64() bool`

HasMediaBase64 returns a boolean if a field has been set.

### GetMediaMimeType

`func (o *SendMessageRequest) GetMediaMimeType() string`

GetMediaMimeType returns the MediaMimeType field if non-nil, zero value otherwise.

### GetMediaMimeTypeOk

`func (o *SendMessageRequest) GetMediaMimeTypeOk() (*string, bool)`

GetMediaMimeTypeOk returns a tuple with the MediaMimeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMediaMimeType

`func (o *SendMessageRequest) SetMediaMimeType(v string)`

SetMediaMimeType sets MediaMimeType field to given value.

### HasMediaMimeType

`func (o *SendMessageRequest) HasMediaMimeType() bool`

HasMediaMimeType returns a boolean if a field has been set.

### GetMediaFilename

`func (o *SendMessageRequest) GetMediaFilename() string`

GetMediaFilename returns the MediaFilename field if non-nil, zero value otherwise.

### GetMediaFilenameOk

`func (o *SendMessageRequest) GetMediaFilenameOk() (*string, bool)`

GetMediaFilenameOk returns a tuple with the MediaFilename field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMediaFilename

`func (o *SendMessageRequest) SetMediaFilename(v string)`

SetMediaFilename sets MediaFilename field to given value.

### HasMediaFilename

`func (o *SendMessageRequest) HasMediaFilename() bool`

HasMediaFilename returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


