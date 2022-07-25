# SematextApiClientJavascript.SubscriptionsApi

All URIs are relative to */*

| Method                                                                     | HTTP request                                                          | Description                              |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------- |
| [**createForAppUsingPOST**](SubscriptionsApi.md#createForAppUsingPOST)     | **POST** /users-web/api/v3/apps/{appId}/subscription                  | Create App subscription                  |
| [**createForDashUsingPOST**](SubscriptionsApi.md#createForDashUsingPOST)   | **POST** /users-web/api/v3/dashboards/{dashId}/subscription           | Create dashboard subscription            |
| [**deleteUsingDELETE3**](SubscriptionsApi.md#deleteUsingDELETE3)           | **DELETE** /users-web/api/v3/subscriptions/{updateableSubscriptionId} | Delete subscription                      |
| [**listUsingGET3**](SubscriptionsApi.md#listUsingGET3)                     | **GET** /users-web/api/v3/apps/{appId}/subscriptions                  | Get subscriptions for an App             |
| [**listUsingGET5**](SubscriptionsApi.md#listUsingGET5)                     | **GET** /users-web/api/v3/subscriptions                               | Get current account&#x27;s subscriptions |
| [**sendAppReportUsingPOST1**](SubscriptionsApi.md#sendAppReportUsingPOST1) | **POST** /users-web/api/v3/apps/{appId}/report/send                   | Email an App report                      |
| [**sendDashReportUsingPOST**](SubscriptionsApi.md#sendDashReportUsingPOST) | **POST** /users-web/api/v3/dashboards/{dashId}/report/send            | Email a dashboard report                 |
| [**toggleEnabledUsingPUT**](SubscriptionsApi.md#toggleEnabledUsingPUT)     | **PUT** /users-web/api/v3/subscriptions/{updateableSubscriptionId}    | Toggle subscription status               |
| [**updateForAppUsingPUT**](SubscriptionsApi.md#updateForAppUsingPUT)       | **PUT** /users-web/api/v3/apps/{appId}/subscription                   | Update App subscription                  |
| [**updateForDashUsingPUT1**](SubscriptionsApi.md#updateForDashUsingPUT1)   | **PUT** /users-web/api/v3/dashboards/{dashId}/subscription            | Update dashboard subscription            |

<a name="createForAppUsingPOST"></a>

# **createForAppUsingPOST**

> SubscriptionResponse createForAppUsingPOST(body, appId)

Create App subscription

### Example

```javascript
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi();
let body = new SematextApiClientJavascript.SubscriptionDto(); // SubscriptionDto | subscription
let appId = 789; // Number | appId

apiInstance.createForAppUsingPOST(body, appId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

<a name="createForDashUsingPOST"></a>

# **createForDashUsingPOST**

> SubscriptionResponse createForDashUsingPOST(body, dashId)

Create dashboard subscription

### Example

```javascript
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi();
let body = new SematextApiClientJavascript.SubscriptionDashboardDto(); // SubscriptionDashboardDto | subscription
let dashId = 789; // Number | dashId

apiInstance.createForDashUsingPOST(body, dashId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

<a name="deleteUsingDELETE3"></a>

# **deleteUsingDELETE3**

> GenericMapBasedApiResponse deleteUsingDELETE3(updateableSubscriptionId)

Delete subscription

### Example

```javascript
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi();
let updateableSubscriptionId = 789; // Number | updateableSubscriptionId

apiInstance.deleteUsingDELETE3(updateableSubscriptionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi();
let appId = 789; // Number | appId

apiInstance.listUsingGET3(appId).then((data) => {
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
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi();
apiInstance.listUsingGET5().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

<a name="sendAppReportUsingPOST1"></a>

# **sendAppReportUsingPOST1**

> MailReportResponse sendAppReportUsingPOST1(body, appId)

Email an App report

### Example

```javascript
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi();
let body = new SematextApiClientJavascript.ReportInfo(); // ReportInfo | emailDto
let appId = 789; // Number | appId

apiInstance.sendAppReportUsingPOST1(body, appId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi();
let body = new SematextApiClientJavascript.ReportInfo(); // ReportInfo | emailDto
let dashId = 789; // Number | dashId

apiInstance.sendDashReportUsingPOST(body, dashId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

<a name="toggleEnabledUsingPUT"></a>

# **toggleEnabledUsingPUT**

> SubscriptionResponse toggleEnabledUsingPUT(body, updateableSubscriptionId)

Toggle subscription status

### Example

```javascript
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi();
let body = new SematextApiClientJavascript.UpdateSubscriptionDto(); // UpdateSubscriptionDto | dto
let updateableSubscriptionId = 789; // Number | updateableSubscriptionId

apiInstance.toggleEnabledUsingPUT(body, updateableSubscriptionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi();
let body = new SematextApiClientJavascript.SubscriptionDto(); // SubscriptionDto | subscription
let appId = 789; // Number | appId

apiInstance.updateForAppUsingPUT(body, appId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.SubscriptionsApi();
let body = new SematextApiClientJavascript.SubscriptionDashboardDto(); // SubscriptionDashboardDto | subscription
let dashId = 789; // Number | dashId

apiInstance.updateForDashUsingPUT1(body, dashId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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
