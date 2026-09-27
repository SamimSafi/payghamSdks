# Paygham.Model.SendMessageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WhatsappAccountId** | **string** |  | 
**To** | **string** | Destination phone (alias: recipient) | 
**CountryCode** | **string** | ISO country code; required for local numbers starting with 0 | [optional] 
**Recipient** | **string** | Deprecated alias for to. | [optional] 
**Message** | **string** | Text body (alias: content). Optional when media is provided. | [optional] 
**Content** | **string** | Deprecated alias for message. | [optional] 
**MediaUrl** | **string** | Public http(s) URL for an image or PDF. Mutually exclusive with mediaBase64. | [optional] 
**MediaBase64** | **string** | Base64-encoded media. Mutually exclusive with mediaUrl. | [optional] 
**MediaMimeType** | **string** | Required when mediaUrl or mediaBase64 is set. | [optional] 
**MediaFilename** | **string** |  | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)

