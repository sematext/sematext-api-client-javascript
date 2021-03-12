# SematextApiClientJavascript.ResetPasswordApi

All URIs are relative to */*

| Method                                                                   | HTTP request                                      | Description    |
| ------------------------------------------------------------------------ | ------------------------------------------------- | -------------- |
| [**resetPasswordUsingPOST**](ResetPasswordApi.md#resetPasswordUsingPOST) | **POST** /users-web/api/v3/account/password/reset | Reset Password |

<a name="resetPasswordUsingPOST"></a>
# **resetPasswordUsingPOST**
> GenericMapBasedApiResponse resetPasswordUsingPOST(body)

Reset Password

### Example
```javascript
import SematextApiClientJavascript from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.ResetPasswordApi();
let body = new SematextApiClientJavascript.UserInfo(); // UserInfo | dto

apiInstance.resetPasswordUsingPOST(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name     | Type                        | Description | Notes |
| -------- | --------------------------- | ----------- | ----- |
| **body** | [**UserInfo**](UserInfo.md) | dto         |

### Return type

[**GenericMapBasedApiResponse**](GenericMapBasedApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
