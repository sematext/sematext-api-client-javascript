# SematextCloudApi.AlertsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAlertUsingPOST**](AlertsApi.md#createAlertUsingPOST) | **POST** /users-web/api/v3/alerts | Create alert rule
[**deleteAlertRuleUsingDELETE**](AlertsApi.md#deleteAlertRuleUsingDELETE) | **DELETE** /users-web/api/v3/alerts/{updateableAlertId} | Delete alert rule
[**disableAlertRuleUsingPUT**](AlertsApi.md#disableAlertRuleUsingPUT) | **PUT** /users-web/api/v3/alerts/{updateableAlertId}/disable | Disable alert rule
[**enableAlertRuleUsingPUT**](AlertsApi.md#enableAlertRuleUsingPUT) | **PUT** /users-web/api/v3/alerts/{updateableAlertId}/enable | Enable alert rule
[**getAlertRulesForAppUsingGET**](AlertsApi.md#getAlertRulesForAppUsingGET) | **GET** /users-web/api/v3/apps/{appId}/alerts | Get alert rules for an app


<a name="createAlertUsingPOST"></a>
# **createAlertUsingPOST**
> GenericApiResponse createAlertUsingPOST(dto)

Create alert rule

### Example
```javascript
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.AlertsApi();

var dto = new SematextCloudApi.AlertRule(); // AlertRule | dto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAlertUsingPOST(dto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dto** | [**AlertRule**](AlertRule.md)| dto | 

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
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.AlertsApi();

var updateableAlertId = 789; // Number | updateableAlertId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteAlertRuleUsingDELETE(updateableAlertId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateableAlertId** | **Number**| updateableAlertId | 

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
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.AlertsApi();

var updateableAlertId = 789; // Number | updateableAlertId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.disableAlertRuleUsingPUT(updateableAlertId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateableAlertId** | **Number**| updateableAlertId | 

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
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.AlertsApi();

var updateableAlertId = 789; // Number | updateableAlertId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.enableAlertRuleUsingPUT(updateableAlertId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateableAlertId** | **Number**| updateableAlertId | 

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
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.AlertsApi();

var appId = 789; // Number | appId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAlertRulesForAppUsingGET(appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **Number**| appId | 

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

