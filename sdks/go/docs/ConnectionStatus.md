# ConnectionStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | **string** |  | 
**Connected** | **bool** |  | 
**Stable** | **bool** |  | 
**AccountStatus** | **string** |  | 
**EngineStatus** | **string** |  | 
**SessionStatus** | **string** |  | 
**CheckedAt** | **time.Time** |  | 

## Methods

### NewConnectionStatus

`func NewConnectionStatus(accountId string, connected bool, stable bool, accountStatus string, engineStatus string, sessionStatus string, checkedAt time.Time, ) *ConnectionStatus`

NewConnectionStatus instantiates a new ConnectionStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectionStatusWithDefaults

`func NewConnectionStatusWithDefaults() *ConnectionStatus`

NewConnectionStatusWithDefaults instantiates a new ConnectionStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *ConnectionStatus) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ConnectionStatus) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ConnectionStatus) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.


### GetConnected

`func (o *ConnectionStatus) GetConnected() bool`

GetConnected returns the Connected field if non-nil, zero value otherwise.

### GetConnectedOk

`func (o *ConnectionStatus) GetConnectedOk() (*bool, bool)`

GetConnectedOk returns a tuple with the Connected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnected

`func (o *ConnectionStatus) SetConnected(v bool)`

SetConnected sets Connected field to given value.


### GetStable

`func (o *ConnectionStatus) GetStable() bool`

GetStable returns the Stable field if non-nil, zero value otherwise.

### GetStableOk

`func (o *ConnectionStatus) GetStableOk() (*bool, bool)`

GetStableOk returns a tuple with the Stable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStable

`func (o *ConnectionStatus) SetStable(v bool)`

SetStable sets Stable field to given value.


### GetAccountStatus

`func (o *ConnectionStatus) GetAccountStatus() string`

GetAccountStatus returns the AccountStatus field if non-nil, zero value otherwise.

### GetAccountStatusOk

`func (o *ConnectionStatus) GetAccountStatusOk() (*string, bool)`

GetAccountStatusOk returns a tuple with the AccountStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountStatus

`func (o *ConnectionStatus) SetAccountStatus(v string)`

SetAccountStatus sets AccountStatus field to given value.


### GetEngineStatus

`func (o *ConnectionStatus) GetEngineStatus() string`

GetEngineStatus returns the EngineStatus field if non-nil, zero value otherwise.

### GetEngineStatusOk

`func (o *ConnectionStatus) GetEngineStatusOk() (*string, bool)`

GetEngineStatusOk returns a tuple with the EngineStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEngineStatus

`func (o *ConnectionStatus) SetEngineStatus(v string)`

SetEngineStatus sets EngineStatus field to given value.


### GetSessionStatus

`func (o *ConnectionStatus) GetSessionStatus() string`

GetSessionStatus returns the SessionStatus field if non-nil, zero value otherwise.

### GetSessionStatusOk

`func (o *ConnectionStatus) GetSessionStatusOk() (*string, bool)`

GetSessionStatusOk returns a tuple with the SessionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSessionStatus

`func (o *ConnectionStatus) SetSessionStatus(v string)`

SetSessionStatus sets SessionStatus field to given value.


### GetCheckedAt

`func (o *ConnectionStatus) GetCheckedAt() time.Time`

GetCheckedAt returns the CheckedAt field if non-nil, zero value otherwise.

### GetCheckedAtOk

`func (o *ConnectionStatus) GetCheckedAtOk() (*time.Time, bool)`

GetCheckedAtOk returns a tuple with the CheckedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckedAt

`func (o *ConnectionStatus) SetCheckedAt(v time.Time)`

SetCheckedAt sets CheckedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


