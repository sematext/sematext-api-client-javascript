# SematextApiClientJavascript.AlertsApi

All URIs are relative to */*

| Method                                                                      | HTTP request                                                 | Description                |
| --------------------------------------------------------------------------- | ------------------------------------------------------------ | -------------------------- |
| [**createAlertUsingPOST1**](AlertsApi.md#createAlertUsingPOST1)             | **POST** /users-web/api/v3/alerts                            | Create alert rule          |
| [**deleteAlertRuleUsingDELETE1**](AlertsApi.md#deleteAlertRuleUsingDELETE1) | **DELETE** /users-web/api/v3/alerts/{updateableAlertId}      | Delete alert rule          |
| [**disableAlertRuleUsingPUT1**](AlertsApi.md#disableAlertRuleUsingPUT1)     | **PUT** /users-web/api/v3/alerts/{updateableAlertId}/disable | Disable alert rule         |
| [**enableAlertRuleUsingPUT1**](AlertsApi.md#enableAlertRuleUsingPUT1)       | **PUT** /users-web/api/v3/alerts/{updateableAlertId}/enable  | Enable alert rule          |
| [**getAlertRulesForAppUsingGET**](AlertsApi.md#getAlertRulesForAppUsingGET) | **GET** /users-web/api/v3/apps/{appId}/alerts                | Get alert rules for an app |

<a name="createAlertUsingPOST1"></a>
# **createAlertUsingPOST1**
> AlertRuleResponse createAlertUsingPOST1(body)

Create alert rule

### Example
```javascript
import SematextApiClientJavascript from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AlertsApi();
let body = new SematextApiClientJavascript.AlertRule(); // AlertRule | dto

apiInstance.createAlertUsingPOST1(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name     | Type                          | Description | Notes |
| -------- | ----------------------------- | ----------- | ----- |
| **body** | [**AlertRule**](AlertRule.md) | dto         |

### Return type

[**AlertRuleResponse**](AlertRuleResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAlertRuleUsingDELETE1"></a>
# **deleteAlertRuleUsingDELETE1**
> GenericMapBasedApiResponse deleteAlertRuleUsingDELETE1(updateableAlertId)

Delete alert rule

### Example
```javascript
import SematextApiClientJavascript from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AlertsApi();
let updateableAlertId = 789; // Number | updateableAlertId

apiInstance.deleteAlertRuleUsingDELETE1(updateableAlertId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                  | Type       | Description       | Notes |
| --------------------- | ---------- | ----------------- | ----- |
| **updateableAlertId** | **Number** | updateableAlertId |

### Return type

[**GenericMapBasedApiResponse**](GenericMapBasedApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="disableAlertRuleUsingPUT1"></a>
# **disableAlertRuleUsingPUT1**
> GenericMapBasedApiResponse disableAlertRuleUsingPUT1(updateableAlertId)

Disable alert rule

### Example
```javascript
import SematextApiClientJavascript from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AlertsApi();
let updateableAlertId = 789; // Number | updateableAlertId

apiInstance.disableAlertRuleUsingPUT1(updateableAlertId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                  | Type       | Description       | Notes |
| --------------------- | ---------- | ----------------- | ----- |
| **updateableAlertId** | **Number** | updateableAlertId |

### Return type

[**GenericMapBasedApiResponse**](GenericMapBasedApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="enableAlertRuleUsingPUT1"></a>
# **enableAlertRuleUsingPUT1**
> GenericMapBasedApiResponse enableAlertRuleUsingPUT1(updateableAlertId)

Enable alert rule

### Example
```javascript
import SematextApiClientJavascript from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AlertsApi();
let updateableAlertId = 789; // Number | updateableAlertId

apiInstance.enableAlertRuleUsingPUT1(updateableAlertId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                  | Type       | Description       | Notes |
| --------------------- | ---------- | ----------------- | ----- |
| **updateableAlertId** | **Number** | updateableAlertId |

### Return type

[**GenericMapBasedApiResponse**](GenericMapBasedApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlertRulesForAppUsingGET"></a>
# **getAlertRulesForAppUsingGET**
> AlertRulesResponse getAlertRulesForAppUsingGET(appId)

Get alert rules for an app

### Example
```javascript
import SematextApiClientJavascript from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AlertsApi();
let appId = 789; // Number | appId

apiInstance.getAlertRulesForAppUsingGET(appId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name      | Type       | Description | Notes |
| --------- | ---------- | ----------- | ----- |
| **appId** | **Number** | appId       |

### Return type

[**AlertRulesResponse**](AlertRulesResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json
