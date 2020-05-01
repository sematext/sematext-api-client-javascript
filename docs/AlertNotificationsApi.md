# SematextCloudApi.AlertNotificationsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAlertNotificationsForAppUsingPOST**](AlertNotificationsApi.md#getAlertNotificationsForAppUsingPOST) | **POST** /users-web/api/v3/apps/{appId}/notifications/alerts | Get alert notifications for an app
[**getAlertNotificationsForUserUsingPOST**](AlertNotificationsApi.md#getAlertNotificationsForUserUsingPOST) | **POST** /users-web/api/v3/notifications/alerts | Get alert notifications for a user


<a name="getAlertNotificationsForAppUsingPOST"></a>
# **getAlertNotificationsForAppUsingPOST**
> GenericApiResponse getAlertNotificationsForAppUsingPOST(appId, timeInterval)

Get alert notifications for an app

Default value of interval is 1d

### Example
```javascript
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.AlertNotificationsApi();

var appId = 789; // Number | appId

var timeInterval = new SematextCloudApi.AlertNotificationRequest(); // AlertNotificationRequest | Time Interval


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAlertNotificationsForAppUsingPOST(appId, timeInterval, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **Number**| appId | 
 **timeInterval** | [**AlertNotificationRequest**](AlertNotificationRequest.md)| Time Interval | 

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAlertNotificationsForUserUsingPOST"></a>
# **getAlertNotificationsForUserUsingPOST**
> GenericApiResponse getAlertNotificationsForUserUsingPOST(timeInterval)

Get alert notifications for a user

Default value of interval is 1d

### Example
```javascript
var SematextCloudApi = require('sematext_cloud_api');
var defaultClient = SematextCloudApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new SematextCloudApi.AlertNotificationsApi();

var timeInterval = new SematextCloudApi.AlertNotificationRequest(); // AlertNotificationRequest | Time Interval


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAlertNotificationsForUserUsingPOST(timeInterval, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeInterval** | [**AlertNotificationRequest**](AlertNotificationRequest.md)| Time Interval | 

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

