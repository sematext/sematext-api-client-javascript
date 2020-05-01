# SematextCloudApi.AppsApi

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
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.AppsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAppTypesUsingGET(callback);
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
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.AppsApi();

var anyStateAppId = 789; // Number | anyStateAppId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsingGET(anyStateAppId, callback);
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
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.AppsApi();

var invitation = new SematextCloudApi.Invitation(); // Invitation | For `app` and `apps` fields only `id` needs to be populated.Other fields can be left empty or with default values


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.inviteAppGuestsUsingPOST(invitation, callback);
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
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.AppsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAppsUsersUsingGET(callback);
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
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.AppsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listUsingGET(callback);
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
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.AppsApi();

var anyStateAppId = 789; // Number | App Id

var opts = { 
  'updateDetails': new SematextCloudApi.AppDescription() // AppDescription | Update Details
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDescriptionUsingPUT(anyStateAppId, opts, callback);
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
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.AppsApi();

var dto = new SematextCloudApi.UpdateAppInfo(); // UpdateAppInfo | dto

var anyStateAppId = 789; // Number | App Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUsingPUT1(dto, anyStateAppId, callback);
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

