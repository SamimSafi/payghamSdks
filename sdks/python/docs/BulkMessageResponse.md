# BulkMessageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | 
**total** | **int** |  | 
**queued** | **int** |  | 
**consent_requested** | **int** |  | 
**rejected** | **int** |  | 
**results** | [**List[BulkMessageResult]**](BulkMessageResult.md) |  | 

## Example

```python
from paygham.models.bulk_message_response import BulkMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkMessageResponse from a JSON string
bulk_message_response_instance = BulkMessageResponse.from_json(json)
# print the JSON string representation of the object
print(BulkMessageResponse.to_json())

# convert the object into a dict
bulk_message_response_dict = bulk_message_response_instance.to_dict()
# create an instance of BulkMessageResponse from a dict
bulk_message_response_from_dict = BulkMessageResponse.from_dict(bulk_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


