# SematextCloudApi.ResetPasswordApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resetPasswordUsingPOST**](ResetPasswordApi.md#resetPasswordUsingPOST) | **POST** /users-web/api/v3/account/password/reset | Reset Password


<a name="resetPasswordUsingPOST"></a>
# **resetPasswordUsingPOST**
> GenericApiResponse resetPasswordUsingPOST(dto)

Reset Password

### Example
```javascript
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.ResetPasswordApi();

var dto = new SematextCloudApi.UserInfo(); // UserInfo | dto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resetPasswordUsingPOST(dto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dto** | [**UserInfo**](UserInfo.md)| dto | 

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

