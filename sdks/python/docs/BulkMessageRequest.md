# BulkMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**whatsapp_account_id** | **str** |  | 
**country_code** | **str** |  | [optional] 
**recipients** | **List[str]** |  | 
**message** | **str** |  | [optional] 
**content** | **str** |  | [optional] 
**media_url** | **str** |  | [optional] 
**media_base64** | **str** |  | [optional] 
**media_mime_type** | **str** |  | [optional] 
**media_filename** | **str** |  | [optional] 

## Example

```python
from paygham.models.bulk_message_request import BulkMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkMessageRequest from a JSON string
bulk_message_request_instance = BulkMessageRequest.from_json(json)
# print the JSON string representation of the object
print(BulkMessageRequest.to_json())

# convert the object into a dict
bulk_message_request_dict = bulk_message_request_instance.to_dict()
# create an instance of BulkMessageRequest from a dict
bulk_message_request_from_dict = BulkMessageRequest.from_dict(bulk_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


