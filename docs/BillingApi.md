# SematextApiClientJavascript.BillingApi

All URIs are relative to */*

| Method                                                                     | HTTP request                                                       | Description            |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------- |
| [**getDetailedInvoiceUsingGET**](BillingApi.md#getDetailedInvoiceUsingGET) | **GET** /users-web/api/v3/billing/invoice/{service}/{year}/{month} | Get invoice details    |
| [**listAvailablePlansUsingGET**](BillingApi.md#listAvailablePlansUsingGET) | **GET** /users-web/api/v3/billing/availablePlans                   | Get available plans    |
| [**updatePlanUsingPUT**](BillingApi.md#updatePlanUsingPUT)                 | **PUT** /users-web/api/v3/billing/info/{appId}                     | Update plan for an app |

<a name="getDetailedInvoiceUsingGET"></a>
# **getDetailedInvoiceUsingGET**
> InvoiceResponse getDetailedInvoiceUsingGET(service, year, month)

Get invoice details

### Example
```javascript
import SematextApiClientJavascript from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.BillingApi();
let service = "service_example"; // String | service
let year = 56; // Number | year
let month = 56; // Number | month

apiInstance.getDetailedInvoiceUsingGET(service, year, month).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name        | Type       | Description | Notes |
| ----------- | ---------- | ----------- | ----- |
| **service** | **String** | service     |
| **year**    | **Number** | year        |
| **month**   | **Number** | month       |

### Return type

[**InvoiceResponse**](InvoiceResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAvailablePlansUsingGET"></a>
# **listAvailablePlansUsingGET**
> PlansResponse listAvailablePlansUsingGET(opts)

Get available plans

### Example
```javascript
import SematextApiClientJavascript from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.BillingApi();
let opts = {
  'integrationId': 789, // Number | integrationId
  'appType': "appType_example" // String | appType
};
apiInstance.listAvailablePlansUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name              | Type       | Description   | Notes      |
| ----------------- | ---------- | ------------- | ---------- |
| **integrationId** | **Number** | integrationId | [optional] |
| **appType**       | **String** | appType       | [optional] |

### Return type

[**PlansResponse**](PlansResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePlanUsingPUT"></a>
# **updatePlanUsingPUT**
> UpdatePlanResponse updatePlanUsingPUT(bodyappId)

Update plan for an app

### Example
```javascript
import SematextApiClientJavascript from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.BillingApi();
let body = new SematextApiClientJavascript.BillingInfo(); // BillingInfo | dto
let appId = 789; // Number | appId

apiInstance.updatePlanUsingPUT(bodyappId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name      | Type                              | Description | Notes |
| --------- | --------------------------------- | ----------- | ----- |
| **body**  | [**BillingInfo**](BillingInfo.md) | dto         |
| **appId** | **Number**                        | appId       |

### Return type

[**UpdatePlanResponse**](UpdatePlanResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
