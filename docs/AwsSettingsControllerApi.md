# SematextCloudApi.AwsSettingsControllerApi

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
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.AwsSettingsControllerApi();

var appId = 789; // Number | appId

var dto = new SematextCloudApi.CloudWatchSettings(); // CloudWatchSettings | dto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUsingPUT(appId, dto, callback);
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

