# SematextCloudApi.LogsAppApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogseneApplication**](LogsAppApi.md#createLogseneApplication) | **POST** /logsene-reports/api/v3/apps | Create Logs App


<a name="createLogseneApplication"></a>
# **createLogseneApplication**
> GenericApiResponse createLogseneApplication(applicationDetails)

Create Logs App

### Example
```javascript
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.LogsAppApi();

var applicationDetails = new SematextCloudApi.CreateAppInfo(); // CreateAppInfo | Details of the application to be created


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createLogseneApplication(applicationDetails, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationDetails** | [**CreateAppInfo**](CreateAppInfo.md)| Details of the application to be created | 

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

