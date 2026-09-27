# ResumeDelivery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** |  | 
**pending** | **int** |  | 
**requeued** | **int** |  | 
**connected** | **bool** |  | 

## Example

```python
from paygham.models.resume_delivery import ResumeDelivery

# TODO update the JSON string below
json = "{}"
# create an instance of ResumeDelivery from a JSON string
resume_delivery_instance = ResumeDelivery.from_json(json)
# print the JSON string representation of the object
print(ResumeDelivery.to_json())

# convert the object into a dict
resume_delivery_dict = resume_delivery_instance.to_dict()
# create an instance of ResumeDelivery from a dict
resume_delivery_from_dict = ResumeDelivery.from_dict(resume_delivery_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


