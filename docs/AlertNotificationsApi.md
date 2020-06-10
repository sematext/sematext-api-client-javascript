# SematextApiClientJavascript.AlertNotificationsApi

All URIs are relative to _https://localhost_

| Method                                                                                                      | HTTP request                                                 | Description                        |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------- |
| [**getAlertNotificationsForAppUsingPOST**](AlertNotificationsApi.md#getAlertNotificationsForAppUsingPOST)   | **POST** /users-web/api/v3/apps/{appId}/notifications/alerts | Get alert notifications for an app |
| [**getAlertNotificationsForUserUsingPOST**](AlertNotificationsApi.md#getAlertNotificationsForUserUsingPOST) | **POST** /users-web/api/v3/notifications/alerts              | Get alert notifications for a user |

<a name="getAlertNotificationsForAppUsingPOST"></a>

# **getAlertNotificationsForAppUsingPOST**

> GenericApiResponse getAlertNotificationsForAppUsingPOST(appId, timeInterval)

Get alert notifications for an app

Default value of interval is 1d

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AlertNotificationsApi()

let appId = 789 // Number | appId

let timeInterval = new SematextApiClientJavascript.AlertNotificationRequest() // AlertNotificationRequest | Time Interval

apiInstance.getAlertNotificationsForAppUsingPOST(appId, timeInterval).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name             | Type                                                        | Description   | Notes |
| ---------------- | ----------------------------------------------------------- | ------------- | ----- |
| **appId**        | **Number**                                                  | appId         |
| **timeInterval** | [**AlertNotificationRequest**](AlertNotificationRequest.md) | Time Interval |

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
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AlertNotificationsApi()

let timeInterval = new SematextApiClientJavascript.AlertNotificationRequest() // AlertNotificationRequest | Time Interval

apiInstance.getAlertNotificationsForUserUsingPOST(timeInterval).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name             | Type                                                        | Description   | Notes |
| ---------------- | ----------------------------------------------------------- | ------------- | ----- |
| **timeInterval** | [**AlertNotificationRequest**](AlertNotificationRequest.md) | Time Interval |

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
