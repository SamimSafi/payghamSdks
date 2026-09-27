# ResumeDeliveryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ResumeDelivery**](ResumeDelivery.md) |  | 

## Example

```python
from paygham.models.resume_delivery_response import ResumeDeliveryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResumeDeliveryResponse from a JSON string
resume_delivery_response_instance = ResumeDeliveryResponse.from_json(json)
# print the JSON string representation of the object
print(ResumeDeliveryResponse.to_json())

# convert the object into a dict
resume_delivery_response_dict = resume_delivery_response_instance.to_dict()
# create an instance of ResumeDeliveryResponse from a dict
resume_delivery_response_from_dict = ResumeDeliveryResponse.from_dict(resume_delivery_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


