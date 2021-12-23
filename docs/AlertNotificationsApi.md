# SematextApiClientJavascript.AlertNotificationsApi

All URIs are relative to _/_

| Method                                                                                                      | HTTP request                                                 | Description                        |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------- |
| [**getAlertNotificationsForAppUsingPOST**](AlertNotificationsApi.md#getAlertNotificationsForAppUsingPOST)   | **POST** /users-web/api/v3/apps/{appId}/notifications/alerts | Get alert notifications for an app |
| [**getAlertNotificationsForUserUsingPOST**](AlertNotificationsApi.md#getAlertNotificationsForUserUsingPOST) | **POST** /users-web/api/v3/notifications/alerts              | Get alert notifications for a user |

<a name="getAlertNotificationsForAppUsingPOST"></a>

# **getAlertNotificationsForAppUsingPOST**

> NotificationsResponse getAlertNotificationsForAppUsingPOST(body, appId)

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
let body = new SematextApiClientJavascript.AlertNotificationRequest() // AlertNotificationRequest | Time Interval
let appId = 789 // Number | appId

apiInstance.getAlertNotificationsForAppUsingPOST(body, appId).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name      | Type                                                        | Description   | Notes |
| --------- | ----------------------------------------------------------- | ------------- | ----- |
| **body**  | [**AlertNotificationRequest**](AlertNotificationRequest.md) | Time Interval |
| **appId** | **Number**                                                  | appId         |

### Return type

[**NotificationsResponse**](NotificationsResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getAlertNotificationsForUserUsingPOST"></a>

# **getAlertNotificationsForUserUsingPOST**

> NotificationsResponse getAlertNotificationsForUserUsingPOST(body)

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
let body = new SematextApiClientJavascript.AlertNotificationRequest() // AlertNotificationRequest | Time Interval

apiInstance.getAlertNotificationsForUserUsingPOST(body).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name     | Type                                                        | Description   | Notes |
| -------- | ----------------------------------------------------------- | ------------- | ----- |
| **body** | [**AlertNotificationRequest**](AlertNotificationRequest.md) | Time Interval |

### Return type

[**NotificationsResponse**](NotificationsResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
