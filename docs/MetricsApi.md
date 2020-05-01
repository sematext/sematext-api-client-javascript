# SematextCloudApi.MetricsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listDataSeriesUsingPOST1**](MetricsApi.md#listDataSeriesUsingPOST1) | **POST** /spm-reports/api/v3/apps/{appId}/metrics/data | Get metrics data points for an app
[**listFiltersUsingPOST**](MetricsApi.md#listFiltersUsingPOST) | **POST** /spm-reports/api/v3/apps/{appId}/metrics/filters | Get metrics filters and their values for an app
[**listMetricsKeysUsingGET1**](MetricsApi.md#listMetricsKeysUsingGET1) | **GET** /spm-reports/api/v3/apps/{appId}/metrics/keys | Get metrics keys for an app
[**listMetricsUsingGET1**](MetricsApi.md#listMetricsUsingGET1) | **GET** /spm-reports/api/v3/apps/{appId}/metrics | Get metrics info for an app


<a name="listDataSeriesUsingPOST1"></a>
# **listDataSeriesUsingPOST1**
> GenericApiResponse listDataSeriesUsingPOST1(appId, requestBody)

Get metrics data points for an app

Default value of interval is 5m

### Example
```javascript
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.MetricsApi();

var appId = 789; // Number | appId

var requestBody = new SematextCloudApi.DataSeriesRequest(); // DataSeriesRequest | Metric data points request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDataSeriesUsingPOST1(appId, requestBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **Number**| appId | 
 **requestBody** | [**DataSeriesRequest**](DataSeriesRequest.md)| Metric data points request | 

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
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.MetricsApi();

var appId = 789; // Number | appId

var requestBody = new SematextCloudApi.DataSeriesRequest(); // DataSeriesRequest | Metric filters request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listFiltersUsingPOST(appId, requestBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **Number**| appId | 
 **requestBody** | [**DataSeriesRequest**](DataSeriesRequest.md)| Metric filters request | 

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
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.MetricsApi();

var appId = 789; // Number | appId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listMetricsKeysUsingGET1(appId, callback);
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

<a name="listMetricsUsingGET1"></a>
# **listMetricsUsingGET1**
> GenericApiResponse listMetricsUsingGET1(appId)

Get metrics info for an app

### Example
```javascript
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.MetricsApi();

var appId = 789; // Number | appId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listMetricsUsingGET1(appId, callback);
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

