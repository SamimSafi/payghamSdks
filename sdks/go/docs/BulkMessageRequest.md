# BulkMessageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WhatsappAccountId** | **string** |  | 
**CountryCode** | Pointer to **string** |  | [optional] 
**Recipients** | **[]string** |  | 
**Message** | Pointer to **string** |  | [optional] 
**Content** | Pointer to **string** |  | [optional] 
**MediaUrl** | Pointer to **string** |  | [optional] 
**MediaBase64** | Pointer to **string** |  | [optional] 
**MediaMimeType** | Pointer to **string** |  | [optional] 
**MediaFilename** | Pointer to **string** |  | [optional] 

## Methods

### NewBulkMessageRequest

`func NewBulkMessageRequest(whatsappAccountId string, recipients []string, ) *BulkMessageRequest`

NewBulkMessageRequest instantiates a new BulkMessageRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkMessageRequestWithDefaults

`func NewBulkMessageRequestWithDefaults() *BulkMessageRequest`

NewBulkMessageRequestWithDefaults instantiates a new BulkMessageRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWhatsappAccountId

`func (o *BulkMessageRequest) GetWhatsappAccountId() string`

GetWhatsappAccountId returns the WhatsappAccountId field if non-nil, zero value otherwise.

### GetWhatsappAccountIdOk

`func (o *BulkMessageRequest) GetWhatsappAccountIdOk() (*string, bool)`

GetWhatsappAccountIdOk returns a tuple with the WhatsappAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWhatsappAccountId

`func (o *BulkMessageRequest) SetWhatsappAccountId(v string)`

SetWhatsappAccountId sets WhatsappAccountId field to given value.


### GetCountryCode

`func (o *BulkMessageRequest) GetCountryCode() string`

GetCountryCode returns the CountryCode field if non-nil, zero value otherwise.

### GetCountryCodeOk

`func (o *BulkMessageRequest) GetCountryCodeOk() (*string, bool)`

GetCountryCodeOk returns a tuple with the CountryCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountryCode

`func (o *BulkMessageRequest) SetCountryCode(v string)`

SetCountryCode sets CountryCode field to given value.

### HasCountryCode

`func (o *BulkMessageRequest) HasCountryCode() bool`

HasCountryCode returns a boolean if a field has been set.

### GetRecipients

`func (o *BulkMessageRequest) GetRecipients() []string`

GetRecipients returns the Recipients field if non-nil, zero value otherwise.

### GetRecipientsOk

`func (o *BulkMessageRequest) GetRecipientsOk() (*[]string, bool)`

GetRecipientsOk returns a tuple with the Recipients field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipients

`func (o *BulkMessageRequest) SetRecipients(v []string)`

SetRecipients sets Recipients field to given value.


### GetMessage

`func (o *BulkMessageRequest) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *BulkMessageRequest) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *BulkMessageRequest) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *BulkMessageRequest) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetContent

`func (o *BulkMessageRequest) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *BulkMessageRequest) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *BulkMessageRequest) SetContent(v string)`

SetContent sets Content field to given value.

### HasContent

`func (o *BulkMessageRequest) HasContent() bool`

HasContent returns a boolean if a field has been set.

### GetMediaUrl

`func (o *BulkMessageRequest) GetMediaUrl() string`

GetMediaUrl returns the MediaUrl field if non-nil, zero value otherwise.

### GetMediaUrlOk

`func (o *BulkMessageRequest) GetMediaUrlOk() (*string, bool)`

GetMediaUrlOk returns a tuple with the MediaUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMediaUrl

`func (o *BulkMessageRequest) SetMediaUrl(v string)`

SetMediaUrl sets MediaUrl field to given value.

### HasMediaUrl

`func (o *BulkMessageRequest) HasMediaUrl() bool`

HasMediaUrl returns a boolean if a field has been set.

### GetMediaBase64

`func (o *BulkMessageRequest) GetMediaBase64() string`

GetMediaBase64 returns the MediaBase64 field if non-nil, zero value otherwise.

### GetMediaBase64Ok

`func (o *BulkMessageRequest) GetMediaBase64Ok() (*string, bool)`

GetMediaBase64Ok returns a tuple with the MediaBase64 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMediaBase64

`func (o *BulkMessageRequest) SetMediaBase64(v string)`

SetMediaBase64 sets MediaBase64 field to given value.

### HasMediaBase64

`func (o *BulkMessageRequest) HasMediaBase64() bool`

HasMediaBase64 returns a boolean if a field has been set.

### GetMediaMimeType

`func (o *BulkMessageRequest) GetMediaMimeType() string`

GetMediaMimeType returns the MediaMimeType field if non-nil, zero value otherwise.

### GetMediaMimeTypeOk

`func (o *BulkMessageRequest) GetMediaMimeTypeOk() (*string, bool)`

GetMediaMimeTypeOk returns a tuple with the MediaMimeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMediaMimeType

`func (o *BulkMessageRequest) SetMediaMimeType(v string)`

SetMediaMimeType sets MediaMimeType field to given value.

### HasMediaMimeType

`func (o *BulkMessageRequest) HasMediaMimeType() bool`

HasMediaMimeType returns a boolean if a field has been set.

### GetMediaFilename

`func (o *BulkMessageRequest) GetMediaFilename() string`

GetMediaFilename returns the MediaFilename field if non-nil, zero value otherwise.

### GetMediaFilenameOk

`func (o *BulkMessageRequest) GetMediaFilenameOk() (*string, bool)`

GetMediaFilenameOk returns a tuple with the MediaFilename field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMediaFilename

`func (o *BulkMessageRequest) SetMediaFilename(v string)`

SetMediaFilename sets MediaFilename field to given value.

### HasMediaFilename

`func (o *BulkMessageRequest) HasMediaFilename() bool`

HasMediaFilename returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


