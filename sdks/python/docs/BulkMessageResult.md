# BulkMessageResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipient** | **str** |  | 
**status** | **str** |  | 
**message_id** | **str** |  | [optional] 
**consent_url** | **str** |  | [optional] 
**error** | **str** |  | [optional] 
**reason** | **str** |  | [optional] 

## Example

```python
from paygham.models.bulk_message_result import BulkMessageResult

# TODO update the JSON string below
json = "{}"
# create an instance of BulkMessageResult from a JSON string
bulk_message_result_instance = BulkMessageResult.from_json(json)
# print the JSON string representation of the object
print(BulkMessageResult.to_json())

# convert the object into a dict
bulk_message_result_dict = bulk_message_result_instance.to_dict()
# create an instance of BulkMessageResult from a dict
bulk_message_result_from_dict = BulkMessageResult.from_dict(bulk_message_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


