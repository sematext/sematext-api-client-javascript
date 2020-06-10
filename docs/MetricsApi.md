# SematextApiClientJavascript.MetricsApi

All URIs are relative to _https://localhost_

| Method                                                                 | HTTP request                                              | Description                                     |
| ---------------------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------- |
| [**listDataSeriesUsingPOST1**](MetricsApi.md#listDataSeriesUsingPOST1) | **POST** /spm-reports/api/v3/apps/{appId}/metrics/data    | Get metrics data points for an app              |
| [**listFiltersUsingPOST**](MetricsApi.md#listFiltersUsingPOST)         | **POST** /spm-reports/api/v3/apps/{appId}/metrics/filters | Get metrics filters and their values for an app |
| [**listMetricsKeysUsingGET1**](MetricsApi.md#listMetricsKeysUsingGET1) | **GET** /spm-reports/api/v3/apps/{appId}/metrics/keys     | Get metrics keys for an app                     |
| [**listMetricsUsingGET1**](MetricsApi.md#listMetricsUsingGET1)         | **GET** /spm-reports/api/v3/apps/{appId}/metrics          | Get metrics info for an app                     |

<a name="listDataSeriesUsingPOST1"></a>

# **listDataSeriesUsingPOST1**

> GenericApiResponse listDataSeriesUsingPOST1(appId, requestBody)

Get metrics data points for an app

Default value of interval is 5m

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.MetricsApi()

let appId = 789 // Number | appId

let requestBody = new SematextApiClientJavascript.DataSeriesRequest() // DataSeriesRequest | Metric data points request

apiInstance.listDataSeriesUsingPOST1(appId, requestBody).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name            | Type                                          | Description                | Notes |
| --------------- | --------------------------------------------- | -------------------------- | ----- |
| **appId**       | **Number**                                    | appId                      |
| **requestBody** | [**DataSeriesRequest**](DataSeriesRequest.md) | Metric data points request |

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="listFiltersUsingPOST"></a>

# **listFiltersUsingPOST**

> GenericApiResponse listFiltersUsingPOST(appId, requestBody)

Get metrics filters and their values for an app

Default value of interval is 5m

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.MetricsApi()

let appId = 789 // Number | appId

let requestBody = new SematextApiClientJavascript.DataSeriesRequest() // DataSeriesRequest | Metric filters request

apiInstance.listFiltersUsingPOST(appId, requestBody).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name            | Type                                          | Description            | Notes |
| --------------- | --------------------------------------------- | ---------------------- | ----- |
| **appId**       | **Number**                                    | appId                  |
| **requestBody** | [**DataSeriesRequest**](DataSeriesRequest.md) | Metric filters request |

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="listMetricsKeysUsingGET1"></a>

# **listMetricsKeysUsingGET1**

> GenericApiResponse listMetricsKeysUsingGET1(appId)

Get metrics keys for an app

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.MetricsApi()

let appId = 789 // Number | appId

apiInstance.listMetricsKeysUsingGET1(appId).then(
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

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="listMetricsUsingGET1"></a>

# **listMetricsUsingGET1**

> GenericApiResponse listMetricsUsingGET1(appId)

Get metrics info for an app

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.MetricsApi()

let appId = 789 // Number | appId

apiInstance.listMetricsUsingGET1(appId).then(
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

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
