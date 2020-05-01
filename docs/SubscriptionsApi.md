# SematextCloudApi.SubscriptionsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listUsingGET1**](SubscriptionsApi.md#listUsingGET1) | **GET** /users-web/api/v3/apps/{appId}/subscriptions | Get subscriptions for an app
[**sendReportUsingPOST**](SubscriptionsApi.md#sendReportUsingPOST) | **POST** /users-web/api/v3/apps/{appId}/report/send | Trigger emailing of report for an app


<a name="listUsingGET1"></a>
# **listUsingGET1**
> GenericApiResponse listUsingGET1(appId)

Get subscriptions for an app

### Example
```javascript
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.SubscriptionsApi();

var appId = 789; // Number | appId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listUsingGET1(appId, callback);
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

<a name="sendReportUsingPOST"></a>
# **sendReportUsingPOST**
> GenericApiResponse sendReportUsingPOST(appId, emailDto)

Trigger emailing of report for an app

### Example
```javascript
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.SubscriptionsApi();

var appId = 789; // Number | appId

var emailDto = new SematextCloudApi.ReportInfo(); // ReportInfo | emailDto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendReportUsingPOST(appId, emailDto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **Number**| appId | 
 **emailDto** | [**ReportInfo**](ReportInfo.md)| emailDto | 

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

