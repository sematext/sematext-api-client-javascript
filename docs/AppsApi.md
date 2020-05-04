# SematextApiClientJavascript.AppsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAppTypesUsingGET**](AppsApi.md#getAppTypesUsingGET) | **GET** /users-web/api/v3/apps/types | Get all App types supported for the account identified with apiKey
[**getUsingGET**](AppsApi.md#getUsingGET) | **GET** /users-web/api/v3/apps/{anyStateAppId} | Gets defails for one particular App
[**inviteAppGuestsUsingPOST**](AppsApi.md#inviteAppGuestsUsingPOST) | **POST** /users-web/api/v3/apps/guests | Invite guests to an app
[**listAppsUsersUsingGET**](AppsApi.md#listAppsUsersUsingGET) | **GET** /users-web/api/v3/apps/users | Get all users of apps accessible to this account
[**listUsingGET**](AppsApi.md#listUsingGET) | **GET** /users-web/api/v3/apps | Get all apps accessible by account identified with apiKey
[**updateDescriptionUsingPUT**](AppsApi.md#updateDescriptionUsingPUT) | **PUT** /users-web/api/v3/apps/{anyStateAppId}/description | Update description of the app
[**updateUsingPUT1**](AppsApi.md#updateUsingPUT1) | **PUT** /users-web/api/v3/apps/{anyStateAppId} | Update app


<a name="getAppTypesUsingGET"></a>
# **getAppTypesUsingGET**
> GenericApiResponse getAppTypesUsingGET()

Get all App types supported for the account identified with apiKey

### Example
```javascript
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AppsApi();
apiInstance.getAppTypesUsingGET().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsingGET"></a>
# **getUsingGET**
> GenericApiResponse getUsingGET(anyStateAppId)

Gets defails for one particular App

### Example
```javascript
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AppsApi();

let anyStateAppId = 789; // Number | anyStateAppId

apiInstance.getUsingGET(anyStateAppId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anyStateAppId** | **Number**| anyStateAppId | 

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="inviteAppGuestsUsingPOST"></a>
# **inviteAppGuestsUsingPOST**
> GenericApiResponse inviteAppGuestsUsingPOST(invitation)

Invite guests to an app

### Example
```javascript
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AppsApi();

let invitation = new SematextApiClientJavascript.Invitation(); // Invitation | For `app` and `apps` fields only `id` needs to be populated.Other fields can be left empty or with default values

apiInstance.inviteAppGuestsUsingPOST(invitation).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invitation** | [**Invitation**](Invitation.md)| For `app` and `apps` fields only `id` needs to be populated.Other fields can be left empty or with default values | 

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAppsUsersUsingGET"></a>
# **listAppsUsersUsingGET**
> GenericApiResponse listAppsUsersUsingGET()

Get all users of apps accessible to this account

### Example
```javascript
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AppsApi();
apiInstance.listAppsUsersUsingGET().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listUsingGET"></a>
# **listUsingGET**
> GenericApiResponse listUsingGET()

Get all apps accessible by account identified with apiKey

### Example
```javascript
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AppsApi();
apiInstance.listUsingGET().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDescriptionUsingPUT"></a>
# **updateDescriptionUsingPUT**
> GenericApiResponse updateDescriptionUsingPUT(anyStateAppId, opts)

Update description of the app

App can be in any state

### Example
```javascript
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AppsApi();

let anyStateAppId = 789; // Number | App Id

let opts = { 
  'updateDetails': new SematextApiClientJavascript.AppDescription() // AppDescription | Update Details
};
apiInstance.updateDescriptionUsingPUT(anyStateAppId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anyStateAppId** | **Number**| App Id | 
 **updateDetails** | [**AppDescription**](AppDescription.md)| Update Details | [optional] 

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUsingPUT1"></a>
# **updateUsingPUT1**
> GenericApiResponse updateUsingPUT1(dto, anyStateAppId)

Update app

App can be in any state

### Example
```javascript
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AppsApi();

let dto = new SematextApiClientJavascript.UpdateAppInfo(); // UpdateAppInfo | dto

let anyStateAppId = 789; // Number | App Id

apiInstance.updateUsingPUT1(dto, anyStateAppId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dto** | [**UpdateAppInfo**](UpdateAppInfo.md)| dto | 
 **anyStateAppId** | **Number**| App Id | 

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

