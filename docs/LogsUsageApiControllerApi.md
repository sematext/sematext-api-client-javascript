# SematextApiClientJavascript.LogsUsageApiControllerApi

All URIs are relative to _/_

| Method                                                                      | HTTP request                                                   | Description |
| --------------------------------------------------------------------------- | -------------------------------------------------------------- | ----------- |
| [**getForRangeUsingGET**](LogsUsageApiControllerApi.md#getForRangeUsingGET) | **GET** /logsene-reports/api/v3/apps/{appId}/usage/{from}/{to} | getForRange |

<a name="getForRangeUsingGET"></a>

# **getForRangeUsingGET**

> UsageResponse getForRangeUsingGET(appId, from, to)

getForRange

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.LogsUsageApiControllerApi()
let appId = 789 // Number | appId
let from = 789 // Number | from
let to = 789 // Number | to

apiInstance.getForRangeUsingGET(appId, from, to).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name      | Type       | Description | Notes |
| --------- | ---------- | ----------- | ----- |
| **appId** | **Number** | appId       |
| **from**  | **Number** | from        |
| **to**    | **Number** | to          |

### Return type

[**UsageResponse**](UsageResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
