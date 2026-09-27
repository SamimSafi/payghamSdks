# ConnectionStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ConnectionStatus**](ConnectionStatus.md) |  | 

## Example

```python
from paygham.models.connection_status_response import ConnectionStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionStatusResponse from a JSON string
connection_status_response_instance = ConnectionStatusResponse.from_json(json)
# print the JSON string representation of the object
print(ConnectionStatusResponse.to_json())

# convert the object into a dict
connection_status_response_dict = connection_status_response_instance.to_dict()
# create an instance of ConnectionStatusResponse from a dict
connection_status_response_from_dict = ConnectionStatusResponse.from_dict(connection_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


