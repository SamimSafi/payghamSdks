# DeliveryStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**DeliveryStatus**](DeliveryStatus.md) |  | 

## Example

```python
from paygham.models.delivery_status_response import DeliveryStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryStatusResponse from a JSON string
delivery_status_response_instance = DeliveryStatusResponse.from_json(json)
# print the JSON string representation of the object
print(DeliveryStatusResponse.to_json())

# convert the object into a dict
delivery_status_response_dict = delivery_status_response_instance.to_dict()
# create an instance of DeliveryStatusResponse from a dict
delivery_status_response_from_dict = DeliveryStatusResponse.from_dict(delivery_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


