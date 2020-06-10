# SematextApiClientJavascript.LogsAppApi

All URIs are relative to _https://localhost_

| Method                                                                 | HTTP request                          | Description     |
| ---------------------------------------------------------------------- | ------------------------------------- | --------------- |
| [**createLogseneApplication**](LogsAppApi.md#createLogseneApplication) | **POST** /logsene-reports/api/v3/apps | Create Logs App |

<a name="createLogseneApplication"></a>

# **createLogseneApplication**

> GenericApiResponse createLogseneApplication(applicationDetails)

Create Logs App

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.LogsAppApi()

let applicationDetails = new SematextApiClientJavascript.CreateAppInfo() // CreateAppInfo | Details of the application to be created

apiInstance.createLogseneApplication(applicationDetails).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name                   | Type                                  | Description                              | Notes |
| ---------------------- | ------------------------------------- | ---------------------------------------- | ----- |
| **applicationDetails** | [**CreateAppInfo**](CreateAppInfo.md) | Details of the application to be created |

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
