# SematextCloudApi.BillingApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDetailedInvoiceUsingGET**](BillingApi.md#getDetailedInvoiceUsingGET) | **GET** /users-web/api/v3/billing/invoice/{service}/{year}/{month} | Get invoice details
[**listAvailablePlansUsingGET**](BillingApi.md#listAvailablePlansUsingGET) | **GET** /users-web/api/v3/billing/availablePlans | Get available plans
[**updatePlanUsingPUT**](BillingApi.md#updatePlanUsingPUT) | **PUT** /users-web/api/v3/billing/info/{appId} | Update plan for an app


<a name="getDetailedInvoiceUsingGET"></a>
# **getDetailedInvoiceUsingGET**
> GenericApiResponse getDetailedInvoiceUsingGET(service, year, month)

Get invoice details

### Example
```javascript
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.BillingApi();

var service = "service_example"; // String | service

var year = 56; // Number | year

var month = 56; // Number | month


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDetailedInvoiceUsingGET(service, year, month, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | **String**| service | 
 **year** | **Number**| year | 
 **month** | **Number**| month | 

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAvailablePlansUsingGET"></a>
# **listAvailablePlansUsingGET**
> GenericApiResponse listAvailablePlansUsingGET(opts)

Get available plans

### Example
```javascript
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.BillingApi();

var opts = { 
  'integrationId': 789, // Number | integrationId
  'appType': "appType_example" // String | appType
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAvailablePlansUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationId** | **Number**| integrationId | [optional] 
 **appType** | **String**| appType | [optional] 

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePlanUsingPUT"></a>
# **updatePlanUsingPUT**
> GenericApiResponse updatePlanUsingPUT(appId, dto)

Update plan for an app

### Example
```javascript
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.BillingApi();

var appId = 789; // Number | appId

var dto = new SematextCloudApi.BillingInfo(); // BillingInfo | dto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePlanUsingPUT(appId, dto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **Number**| appId | 
 **dto** | [**BillingInfo**](BillingInfo.md)| dto | 

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

