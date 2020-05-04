# SematextApiClientJavascript.SubscriptionsApi

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
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi();

let appId = 789; // Number | appId

apiInstance.listUsingGET1(appId).then((data) => {
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

<a name="sendReportUsingPOST"></a>
# **sendReportUsingPOST**
> GenericApiResponse sendReportUsingPOST(appId, emailDto)

Trigger emailing of report for an app

### Example
```javascript
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi();

let appId = 789; // Number | appId

let emailDto = new SematextApiClientJavascript.ReportInfo(); // ReportInfo | emailDto

apiInstance.sendReportUsingPOST(appId, emailDto).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

