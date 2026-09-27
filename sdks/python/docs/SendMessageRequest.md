# SendMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**whatsapp_account_id** | **str** |  | 
**country_code** | **str** | ISO country code; required for local numbers starting with 0 | [optional] 
**to** | **str** | Destination phone (alias: recipient) | 
**recipient** | **str** | Deprecated alias for to. | [optional] 
**message** | **str** | Text body (alias: content). Optional when media is provided. | [optional] 
**content** | **str** | Deprecated alias for message. | [optional] 
**media_url** | **str** | Public http(s) URL for an image or PDF. Mutually exclusive with mediaBase64. | [optional] 
**media_base64** | **str** | Base64-encoded media. Mutually exclusive with mediaUrl. | [optional] 
**media_mime_type** | **str** | Required when mediaUrl or mediaBase64 is set. | [optional] 
**media_filename** | **str** |  | [optional] 

## Example

```python
from paygham.models.send_message_request import SendMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendMessageRequest from a JSON string
send_message_request_instance = SendMessageRequest.from_json(json)
# print the JSON string representation of the object
print(SendMessageRequest.to_json())

# convert the object into a dict
send_message_request_dict = send_message_request_instance.to_dict()
# create an instance of SendMessageRequest from a dict
send_message_request_from_dict = SendMessageRequest.from_dict(send_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


