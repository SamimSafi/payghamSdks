# DeliveryStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** |  | 
**account_status** | **str** |  | 
**pending** | **int** | QUEUED + SENDING outbound messages | 
**sent** | **int** |  | 
**failed** | **int** |  | 

## Example

```python
from paygham.models.delivery_status import DeliveryStatus

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryStatus from a JSON string
delivery_status_instance = DeliveryStatus.from_json(json)
# print the JSON string representation of the object
print(DeliveryStatus.to_json())

# convert the object into a dict
delivery_status_dict = delivery_status_instance.to_dict()
# create an instance of DeliveryStatus from a dict
delivery_status_from_dict = DeliveryStatus.from_dict(delivery_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


