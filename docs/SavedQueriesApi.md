# SematextCloudApi.SavedQueriesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSavedQueryUsingDELETE**](SavedQueriesApi.md#deleteSavedQueryUsingDELETE) | **DELETE** /users-web/api/v3/savedQueries/{updateableQueryId} | Delete saved query
[**getSavedQueriesForAppUsingGET**](SavedQueriesApi.md#getSavedQueriesForAppUsingGET) | **GET** /users-web/api/v3/apps/{appId}/savedQueries | Get saved queries for an app
[**saveQueryUsingPOST**](SavedQueriesApi.md#saveQueryUsingPOST) | **POST** /users-web/api/v3/savedQueries | Create saved query
[**saveQueryUsingPUT**](SavedQueriesApi.md#saveQueryUsingPUT) | **PUT** /users-web/api/v3/savedQueries/{updateableQueryId} | Update saved query


<a name="deleteSavedQueryUsingDELETE"></a>
# **deleteSavedQueryUsingDELETE**
> GenericApiResponse deleteSavedQueryUsingDELETE(updateableQueryId)

Delete saved query

### Example
```javascript
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.SavedQueriesApi();

var updateableQueryId = 789; // Number | updateableQueryId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteSavedQueryUsingDELETE(updateableQueryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateableQueryId** | **Number**| updateableQueryId | 

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSavedQueriesForAppUsingGET"></a>
# **getSavedQueriesForAppUsingGET**
> GenericApiResponse getSavedQueriesForAppUsingGET(appId)

Get saved queries for an app

### Example
```javascript
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.SavedQueriesApi();

var appId = 789; // Number | appId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSavedQueriesForAppUsingGET(appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **Number**| appId | 

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveQueryUsingPOST"></a>
# **saveQueryUsingPOST**
> GenericApiResponse saveQueryUsingPOST(savedQueryDto)

Create saved query

### Example
```javascript
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.SavedQueriesApi();

var savedQueryDto = new SematextCloudApi.SavedQuery(); // SavedQuery | savedQueryDto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveQueryUsingPOST(savedQueryDto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **savedQueryDto** | [**SavedQuery**](SavedQuery.md)| savedQueryDto | 

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveQueryUsingPUT"></a>
# **saveQueryUsingPUT**
> GenericApiResponse saveQueryUsingPUT(savedQueryDto, updateableQueryId)

Update saved query

### Example
```javascript
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.SavedQueriesApi();

var savedQueryDto = new SematextCloudApi.SavedQuery(); // SavedQuery | savedQueryDto

var updateableQueryId = 789; // Number | updateableQueryId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveQueryUsingPUT(savedQueryDto, updateableQueryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **savedQueryDto** | [**SavedQuery**](SavedQuery.md)| savedQueryDto | 
 **updateableQueryId** | **Number**| updateableQueryId | 

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

