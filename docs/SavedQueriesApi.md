# SematextApiClientJavascript.SavedQueriesApi

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
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SavedQueriesApi();

let updateableQueryId = 789; // Number | updateableQueryId

apiInstance.deleteSavedQueryUsingDELETE(updateableQueryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SavedQueriesApi();

let appId = 789; // Number | appId

apiInstance.getSavedQueriesForAppUsingGET(appId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SavedQueriesApi();

let savedQueryDto = new SematextApiClientJavascript.SavedQuery(); // SavedQuery | savedQueryDto

apiInstance.saveQueryUsingPOST(savedQueryDto).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SavedQueriesApi();

let savedQueryDto = new SematextApiClientJavascript.SavedQuery(); // SavedQuery | savedQueryDto

let updateableQueryId = 789; // Number | updateableQueryId

apiInstance.saveQueryUsingPUT(savedQueryDto, updateableQueryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

