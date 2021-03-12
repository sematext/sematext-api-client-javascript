# SematextApiClientJavascript.AwsSettingsControllerApi

All URIs are relative to */*

| Method                                                             | HTTP request                               | Description                               |
| ------------------------------------------------------------------ | ------------------------------------------ | ----------------------------------------- |
| [**updateUsingPUT1**](AwsSettingsControllerApi.md#updateUsingPUT1) | **PUT** /users-web/api/v3/apps/{appId}/aws | Update App&#x27;s AWS CloudWatch settings |

<a name="updateUsingPUT1"></a>
# **updateUsingPUT1**
> CloudWatchSettingsResponse updateUsingPUT1(bodyappId)

Update App&#x27;s AWS CloudWatch settings

Applicable only for AWS Apps

### Example
```javascript
import SematextApiClientJavascript from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AwsSettingsControllerApi();
let body = new SematextApiClientJavascript.CloudWatchSettings(); // CloudWatchSettings | dto
let appId = 789; // Number | appId

apiInstance.updateUsingPUT1(bodyappId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name      | Type                                            | Description | Notes |
| --------- | ----------------------------------------------- | ----------- | ----- |
| **body**  | [**CloudWatchSettings**](CloudWatchSettings.md) | dto         |
| **appId** | **Number**                                      | appId       |

### Return type

[**CloudWatchSettingsResponse**](CloudWatchSettingsResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
