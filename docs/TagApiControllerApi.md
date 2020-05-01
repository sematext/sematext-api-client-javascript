# SematextCloudApi.TagApiControllerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTagNamesUsingGET**](TagApiControllerApi.md#getTagNamesUsingGET) | **GET** /spm-reports/api/v3/apps/{appIds}/tagNames | Gets tag names for the given application identifiers appearing in the given time frame.
[**getUsingGET2**](TagApiControllerApi.md#getUsingGET2) | **GET** /spm-reports/api/v3/apps/{appIds}/metrics/filters | Gets values for specified tags for the given application identifiers appearing in the given time frame.
[**getUsingGET3**](TagApiControllerApi.md#getUsingGET3) | **GET** /spm-reports/api/v3/apps/{appIds}/tags | Gets values for specified tags for the given application identifiers appearing in the given time frame.


<a name="getTagNamesUsingGET"></a>
# **getTagNamesUsingGET**
> Object getTagNamesUsingGET(appIds, opts)

Gets tag names for the given application identifiers appearing in the given time frame.

### Example
```javascript
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.TagApiControllerApi();

var appIds = "appIds_example"; // String | appIds

var opts = { 
  'from': 789, // Number | from
  'to': 789, // Number | to
  'metrics': true, // Boolean | metrics
  'logs': true, // Boolean | logs
  'events': false, // Boolean | events
  'rum': true // Boolean | rum
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTagNamesUsingGET(appIds, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appIds** | **String**| appIds | 
 **from** | **Number**| from | [optional] 
 **to** | **Number**| to | [optional] 
 **metrics** | **Boolean**| metrics | [optional] [default to true]
 **logs** | **Boolean**| logs | [optional] [default to true]
 **events** | **Boolean**| events | [optional] [default to false]
 **rum** | **Boolean**| rum | [optional] [default to true]

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsingGET2"></a>
# **getUsingGET2**
> Object getUsingGET2(appIds, tag, opts)

Gets values for specified tags for the given application identifiers appearing in the given time frame.

### Example
```javascript
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.TagApiControllerApi();

var appIds = "appIds_example"; // String | appIds

var tag = ["tag_example"]; // [String] | tag

var opts = { 
  'from': 789, // Number | from
  'to': 789, // Number | to
  'metrics': true, // Boolean | metrics
  'logs': true, // Boolean | logs
  'events': false, // Boolean | events
  'rum': true // Boolean | rum
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsingGET2(appIds, tag, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appIds** | **String**| appIds | 
 **tag** | [**[String]**](String.md)| tag | 
 **from** | **Number**| from | [optional] 
 **to** | **Number**| to | [optional] 
 **metrics** | **Boolean**| metrics | [optional] [default to true]
 **logs** | **Boolean**| logs | [optional] [default to true]
 **events** | **Boolean**| events | [optional] [default to false]
 **rum** | **Boolean**| rum | [optional] [default to true]

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsingGET3"></a>
# **getUsingGET3**
> Object getUsingGET3(appIds, tag, opts)

Gets values for specified tags for the given application identifiers appearing in the given time frame.

### Example
```javascript
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.TagApiControllerApi();

var appIds = "appIds_example"; // String | appIds

var tag = ["tag_example"]; // [String] | tag

var opts = { 
  'from': 789, // Number | from
  'to': 789, // Number | to
  'metrics': true, // Boolean | metrics
  'logs': true, // Boolean | logs
  'events': false, // Boolean | events
  'rum': true // Boolean | rum
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsingGET3(appIds, tag, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appIds** | **String**| appIds | 
 **tag** | [**[String]**](String.md)| tag | 
 **from** | **Number**| from | [optional] 
 **to** | **Number**| to | [optional] 
 **metrics** | **Boolean**| metrics | [optional] [default to true]
 **logs** | **Boolean**| logs | [optional] [default to true]
 **events** | **Boolean**| events | [optional] [default to false]
 **rum** | **Boolean**| rum | [optional] [default to true]

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

