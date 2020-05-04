# SematextApiClientJavascript.AwsSettingsControllerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updateUsingPUT**](AwsSettingsControllerApi.md#updateUsingPUT) | **PUT** /users-web/api/v3/apps/{appId}/aws | Update App's AWS CloudWatch settings


<a name="updateUsingPUT"></a>
# **updateUsingPUT**
> GenericApiResponse updateUsingPUT(appId, dto)

Update App's AWS CloudWatch settings

Applicable only for AWS Apps

### Example
```javascript
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AwsSettingsControllerApi();

let appId = 789; // Number | appId

let dto = new SematextApiClientJavascript.CloudWatchSettings(); // CloudWatchSettings | dto

apiInstance.updateUsingPUT(appId, dto).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **Number**| appId | 
 **dto** | [**CloudWatchSettings**](CloudWatchSettings.md)| dto | 

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

