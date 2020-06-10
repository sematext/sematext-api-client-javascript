# SematextApiClientJavascript.AlertsApi

All URIs are relative to _https://localhost_

| Method                                                                      | HTTP request                                                 | Description                |
| --------------------------------------------------------------------------- | ------------------------------------------------------------ | -------------------------- |
| [**createAlertUsingPOST**](AlertsApi.md#createAlertUsingPOST)               | **POST** /users-web/api/v3/alerts                            | Create alert rule          |
| [**deleteAlertRuleUsingDELETE**](AlertsApi.md#deleteAlertRuleUsingDELETE)   | **DELETE** /users-web/api/v3/alerts/{updateableAlertId}      | Delete alert rule          |
| [**disableAlertRuleUsingPUT**](AlertsApi.md#disableAlertRuleUsingPUT)       | **PUT** /users-web/api/v3/alerts/{updateableAlertId}/disable | Disable alert rule         |
| [**enableAlertRuleUsingPUT**](AlertsApi.md#enableAlertRuleUsingPUT)         | **PUT** /users-web/api/v3/alerts/{updateableAlertId}/enable  | Enable alert rule          |
| [**getAlertRulesForAppUsingGET**](AlertsApi.md#getAlertRulesForAppUsingGET) | **GET** /users-web/api/v3/apps/{appId}/alerts                | Get alert rules for an app |

<a name="createAlertUsingPOST"></a>

# **createAlertUsingPOST**

> GenericApiResponse createAlertUsingPOST(dto)

Create alert rule

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AlertsApi()

let dto = new SematextApiClientJavascript.AlertRule() // AlertRule | dto

apiInstance.createAlertUsingPOST(dto).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name    | Type                          | Description | Notes |
| ------- | ----------------------------- | ----------- | ----- |
| **dto** | [**AlertRule**](AlertRule.md) | dto         |

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteAlertRuleUsingDELETE"></a>

# **deleteAlertRuleUsingDELETE**

> GenericApiResponse deleteAlertRuleUsingDELETE(updateableAlertId)

Delete alert rule

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AlertsApi()

let updateableAlertId = 789 // Number | updateableAlertId

apiInstance.deleteAlertRuleUsingDELETE(updateableAlertId).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name                  | Type       | Description       | Notes |
| --------------------- | ---------- | ----------------- | ----- |
| **updateableAlertId** | **Number** | updateableAlertId |

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="disableAlertRuleUsingPUT"></a>

# **disableAlertRuleUsingPUT**

> GenericApiResponse disableAlertRuleUsingPUT(updateableAlertId)

Disable alert rule

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AlertsApi()

let updateableAlertId = 789 // Number | updateableAlertId

apiInstance.disableAlertRuleUsingPUT(updateableAlertId).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name                  | Type       | Description       | Notes |
| --------------------- | ---------- | ----------------- | ----- |
| **updateableAlertId** | **Number** | updateableAlertId |

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="enableAlertRuleUsingPUT"></a>

# **enableAlertRuleUsingPUT**

> GenericApiResponse enableAlertRuleUsingPUT(updateableAlertId)

Enable alert rule

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AlertsApi()

let updateableAlertId = 789 // Number | updateableAlertId

apiInstance.enableAlertRuleUsingPUT(updateableAlertId).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name                  | Type       | Description       | Notes |
| --------------------- | ---------- | ----------------- | ----- |
| **updateableAlertId** | **Number** | updateableAlertId |

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getAlertRulesForAppUsingGET"></a>

# **getAlertRulesForAppUsingGET**

> GenericApiResponse getAlertRulesForAppUsingGET(appId)

Get alert rules for an app

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AlertsApi()

let appId = 789 // Number | appId

apiInstance.getAlertRulesForAppUsingGET(appId).then(
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
