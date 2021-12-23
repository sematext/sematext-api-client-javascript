# SematextApiClientJavascript.SubscriptionsApi

All URIs are relative to _/_

| Method                                                                     | HTTP request                                                          | Description                              |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------- |
| [**createForAppUsingPOST**](SubscriptionsApi.md#createForAppUsingPOST)     | **POST** /users-web/api/v3/apps/{appId}/subscription                  | Create App subscription                  |
| [**createForDashUsingPOST1**](SubscriptionsApi.md#createForDashUsingPOST1) | **POST** /users-web/api/v3/dashboards/{dashId}/subscription           | Create dashboard subscription            |
| [**deleteUsingDELETE2**](SubscriptionsApi.md#deleteUsingDELETE2)           | **DELETE** /users-web/api/v3/subscriptions/{updateableSubscriptionId} | Delete subscription                      |
| [**listUsingGET3**](SubscriptionsApi.md#listUsingGET3)                     | **GET** /users-web/api/v3/apps/{appId}/subscriptions                  | Get subscriptions for an App             |
| [**listUsingGET5**](SubscriptionsApi.md#listUsingGET5)                     | **GET** /users-web/api/v3/subscriptions                               | Get current account&#x27;s subscriptions |
| [**sendAppReportUsingPOST**](SubscriptionsApi.md#sendAppReportUsingPOST)   | **POST** /users-web/api/v3/apps/{appId}/report/send                   | Email an App report                      |
| [**sendDashReportUsingPOST**](SubscriptionsApi.md#sendDashReportUsingPOST) | **POST** /users-web/api/v3/dashboards/{dashId}/report/send            | Email a dashboard report                 |
| [**toggleEnabledUsingPUT1**](SubscriptionsApi.md#toggleEnabledUsingPUT1)   | **PUT** /users-web/api/v3/subscriptions/{updateableSubscriptionId}    | Toggle subscription status               |
| [**updateForAppUsingPUT**](SubscriptionsApi.md#updateForAppUsingPUT)       | **PUT** /users-web/api/v3/apps/{appId}/subscription                   | Update App subscription                  |
| [**updateForDashUsingPUT1**](SubscriptionsApi.md#updateForDashUsingPUT1)   | **PUT** /users-web/api/v3/dashboards/{dashId}/subscription            | Update dashboard subscription            |

<a name="createForAppUsingPOST"></a>

# **createForAppUsingPOST**

> SubscriptionResponse createForAppUsingPOST(body, appId)

Create App subscription

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi()
let body = new SematextApiClientJavascript.SubscriptionDto() // SubscriptionDto | subscription
let appId = 789 // Number | appId

apiInstance.createForAppUsingPOST(body, appId).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name      | Type                                      | Description  | Notes |
| --------- | ----------------------------------------- | ------------ | ----- |
| **body**  | [**SubscriptionDto**](SubscriptionDto.md) | subscription |
| **appId** | **Number**                                | appId        |

### Return type

[**SubscriptionResponse**](SubscriptionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createForDashUsingPOST1"></a>

# **createForDashUsingPOST1**

> SubscriptionResponse createForDashUsingPOST1(body, dashId)

Create dashboard subscription

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi()
let body = new SematextApiClientJavascript.SubscriptionDashboardDto() // SubscriptionDashboardDto | subscription
let dashId = 789 // Number | dashId

apiInstance.createForDashUsingPOST1(body, dashId).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name       | Type                                                        | Description  | Notes |
| ---------- | ----------------------------------------------------------- | ------------ | ----- |
| **body**   | [**SubscriptionDashboardDto**](SubscriptionDashboardDto.md) | subscription |
| **dashId** | **Number**                                                  | dashId       |

### Return type

[**SubscriptionResponse**](SubscriptionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteUsingDELETE2"></a>

# **deleteUsingDELETE2**

> GenericMapBasedApiResponse deleteUsingDELETE2(updateableSubscriptionId)

Delete subscription

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi()
let updateableSubscriptionId = 789 // Number | updateableSubscriptionId

apiInstance.deleteUsingDELETE2(updateableSubscriptionId).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name                         | Type       | Description              | Notes |
| ---------------------------- | ---------- | ------------------------ | ----- |
| **updateableSubscriptionId** | **Number** | updateableSubscriptionId |

### Return type

[**GenericMapBasedApiResponse**](GenericMapBasedApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listUsingGET3"></a>

# **listUsingGET3**

> SubscriptionsResponse listUsingGET3(appId)

Get subscriptions for an App

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi()
let appId = 789 // Number | appId

apiInstance.listUsingGET3(appId).then(
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

[**SubscriptionsResponse**](SubscriptionsResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listUsingGET5"></a>

# **listUsingGET5**

> SubscriptionsResponse listUsingGET5()

Get current account&#x27;s subscriptions

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi()
apiInstance.listUsingGET5().then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SubscriptionsResponse**](SubscriptionsResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="sendAppReportUsingPOST"></a>

# **sendAppReportUsingPOST**

> MailReportResponse sendAppReportUsingPOST(body, appId)

Email an App report

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi()
let body = new SematextApiClientJavascript.ReportInfo() // ReportInfo | emailDto
let appId = 789 // Number | appId

apiInstance.sendAppReportUsingPOST(body, appId).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name      | Type                            | Description | Notes |
| --------- | ------------------------------- | ----------- | ----- |
| **body**  | [**ReportInfo**](ReportInfo.md) | emailDto    |
| **appId** | **Number**                      | appId       |

### Return type

[**MailReportResponse**](MailReportResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="sendDashReportUsingPOST"></a>

# **sendDashReportUsingPOST**

> MailReportResponse sendDashReportUsingPOST(body, dashId)

Email a dashboard report

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi()
let body = new SematextApiClientJavascript.ReportInfo() // ReportInfo | emailDto
let dashId = 789 // Number | dashId

apiInstance.sendDashReportUsingPOST(body, dashId).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name       | Type                            | Description | Notes |
| ---------- | ------------------------------- | ----------- | ----- |
| **body**   | [**ReportInfo**](ReportInfo.md) | emailDto    |
| **dashId** | **Number**                      | dashId      |

### Return type

[**MailReportResponse**](MailReportResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="toggleEnabledUsingPUT1"></a>

# **toggleEnabledUsingPUT1**

> SubscriptionResponse toggleEnabledUsingPUT1(body, updateableSubscriptionId)

Toggle subscription status

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi()
let body = new SematextApiClientJavascript.UpdateSubscriptionDto() // UpdateSubscriptionDto | dto
let updateableSubscriptionId = 789 // Number | updateableSubscriptionId

apiInstance.toggleEnabledUsingPUT1(body, updateableSubscriptionId).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name                         | Type                                                  | Description              | Notes |
| ---------------------------- | ----------------------------------------------------- | ------------------------ | ----- |
| **body**                     | [**UpdateSubscriptionDto**](UpdateSubscriptionDto.md) | dto                      |
| **updateableSubscriptionId** | **Number**                                            | updateableSubscriptionId |

### Return type

[**SubscriptionResponse**](SubscriptionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateForAppUsingPUT"></a>

# **updateForAppUsingPUT**

> SubscriptionResponse updateForAppUsingPUT(body, appId)

Update App subscription

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi()
let body = new SematextApiClientJavascript.SubscriptionDto() // SubscriptionDto | subscription
let appId = 789 // Number | appId

apiInstance.updateForAppUsingPUT(body, appId).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name      | Type                                      | Description  | Notes |
| --------- | ----------------------------------------- | ------------ | ----- |
| **body**  | [**SubscriptionDto**](SubscriptionDto.md) | subscription |
| **appId** | **Number**                                | appId        |

### Return type

[**SubscriptionResponse**](SubscriptionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateForDashUsingPUT1"></a>

# **updateForDashUsingPUT1**

> SubscriptionResponse updateForDashUsingPUT1(body, dashId)

Update dashboard subscription

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi()
let body = new SematextApiClientJavascript.SubscriptionDashboardDto() // SubscriptionDashboardDto | subscription
let dashId = 789 // Number | dashId

apiInstance.updateForDashUsingPUT1(body, dashId).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name       | Type                                                        | Description  | Notes |
| ---------- | ----------------------------------------------------------- | ------------ | ----- |
| **body**   | [**SubscriptionDashboardDto**](SubscriptionDashboardDto.md) | subscription |
| **dashId** | **Number**                                                  | dashId       |

### Return type

[**SubscriptionResponse**](SubscriptionResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
