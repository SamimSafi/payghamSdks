# SendMessageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**whatsapp_account_id** | **string** |  |
**country_code** | **string** | ISO country code; required for local numbers starting with 0 | [optional]
**to** | **string** | Destination phone (alias: recipient) |
**recipient** | **string** | Deprecated alias for to. | [optional]
**message** | **string** | Text body (alias: content). Optional when media is provided. | [optional]
**content** | **string** | Deprecated alias for message. | [optional]
**media_url** | **string** | Public http(s) URL for an image or PDF. Mutually exclusive with mediaBase64. | [optional]
**media_base64** | **string** | Base64-encoded media. Mutually exclusive with mediaUrl. | [optional]
**media_mime_type** | **string** | Required when mediaUrl or mediaBase64 is set. | [optional]
**media_filename** | **string** |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
