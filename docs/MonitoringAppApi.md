# SematextApiClientJavascript.MonitoringAppApi

All URIs are relative to _/_

| Method                                                               | HTTP request                      | Description           |
| -------------------------------------------------------------------- | --------------------------------- | --------------------- |
| [**createSpmApplication**](MonitoringAppApi.md#createSpmApplication) | **POST** /spm-reports/api/v3/apps | Create Monitoring App |

<a name="createSpmApplication"></a>

# **createSpmApplication**

> AppsResponse createSpmApplication(body)

Create Monitoring App

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.MonitoringAppApi()
let body = new SematextApiClientJavascript.CreateAppInfo() // CreateAppInfo | Details of the application to be created

apiInstance.createSpmApplication(body).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name     | Type                                  | Description                              | Notes |
| -------- | ------------------------------------- | ---------------------------------------- | ----- |
| **body** | [**CreateAppInfo**](CreateAppInfo.md) | Details of the application to be created |

### Return type

[**AppsResponse**](AppsResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
