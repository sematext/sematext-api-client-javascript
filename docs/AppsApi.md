# SematextApiClientJavascript.AppsApi

All URIs are relative to */*

| Method                                                                  | HTTP request                                               | Description                                                        |
| ----------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------ |
| [**deleteUsingDELETE1**](AppsApi.md#deleteUsingDELETE1)                 | **DELETE** /users-web/api/v3/apps/{anyStateAppId}          | delete                                                             |
| [**getAppTypesUsingGET1**](AppsApi.md#getAppTypesUsingGET1)             | **GET** /users-web/api/v3/apps/types                       | Get all App types supported for the account identified with apiKey |
| [**getUsingGET1**](AppsApi.md#getUsingGET1)                             | **GET** /users-web/api/v3/apps/{anyStateAppId}             | Gets defails for one particular App                                |
| [**inviteAppGuestsUsingPOST1**](AppsApi.md#inviteAppGuestsUsingPOST1)   | **POST** /users-web/api/v3/apps/guests                     | Invite guests to an app                                            |
| [**listAppsUsersUsingGET1**](AppsApi.md#listAppsUsersUsingGET1)         | **GET** /users-web/api/v3/apps/users                       | Get all users of apps accessible to this account                   |
| [**listUsingGET**](AppsApi.md#listUsingGET)                             | **GET** /users-web/api/v3/apps                             | Get all apps accessible by account identified with apiKey          |
| [**updateDescriptionUsingPUT1**](AppsApi.md#updateDescriptionUsingPUT1) | **PUT** /users-web/api/v3/apps/{anyStateAppId}/description | Update description of the app                                      |
| [**updateUsingPUT3**](AppsApi.md#updateUsingPUT3)                       | **PUT** /users-web/api/v3/apps/{anyStateAppId}             | Update app                                                         |

<a name="deleteUsingDELETE1"></a>
# **deleteUsingDELETE1**
> GenericMapBasedApiResponse deleteUsingDELETE1(anyStateAppId)

delete

### Example
```javascript
import SematextApiClientJavascript from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AppsApi();
let anyStateAppId = 789; // Number | anyStateAppId

apiInstance.deleteUsingDELETE1(anyStateAppId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name              | Type       | Description   | Notes |
| ----------------- | ---------- | ------------- | ----- |
| **anyStateAppId** | **Number** | anyStateAppId |

### Return type

[**GenericMapBasedApiResponse**](GenericMapBasedApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAppTypesUsingGET1"></a>
# **getAppTypesUsingGET1**
> AppTypesResponse getAppTypesUsingGET1()

Get all App types supported for the account identified with apiKey

### Example
```javascript
import SematextApiClientJavascript from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AppsApi();
apiInstance.getAppTypesUsingGET1().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AppTypesResponse**](AppTypesResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsingGET1"></a>
# **getUsingGET1**
> AppResponse getUsingGET1(anyStateAppId)

Gets defails for one particular App

### Example
```javascript
import SematextApiClientJavascript from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AppsApi();
let anyStateAppId = 789; // Number | anyStateAppId

apiInstance.getUsingGET1(anyStateAppId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name              | Type       | Description   | Notes |
| ----------------- | ---------- | ------------- | ----- |
| **anyStateAppId** | **Number** | anyStateAppId |

### Return type

[**AppResponse**](AppResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="inviteAppGuestsUsingPOST1"></a>
# **inviteAppGuestsUsingPOST1**
> GenericMapBasedApiResponse inviteAppGuestsUsingPOST1(body)

Invite guests to an app

### Example
```javascript
import SematextApiClientJavascript from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AppsApi();
let body = new SematextApiClientJavascript.Invitation(); // Invitation | For `app` and `apps` fields only `id` needs to be populated.Other fields can be left empty or with default values

apiInstance.inviteAppGuestsUsingPOST1(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name     | Type                            | Description                                                                                                                                     | Notes |
| -------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **body** | [**Invitation**](Invitation.md) | For &#x60;app&#x60; and &#x60;apps&#x60; fields only &#x60;id&#x60; needs to be populated.Other fields can be left empty or with default values |

### Return type

[**GenericMapBasedApiResponse**](GenericMapBasedApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAppsUsersUsingGET1"></a>
# **listAppsUsersUsingGET1**
> AppsResponse listAppsUsersUsingGET1()

Get all users of apps accessible to this account

### Example
```javascript
import SematextApiClientJavascript from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AppsApi();
apiInstance.listAppsUsersUsingGET1().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AppsResponse**](AppsResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listUsingGET"></a>
# **listUsingGET**
> AppsResponse listUsingGET()

Get all apps accessible by account identified with apiKey

### Example
```javascript
import SematextApiClientJavascript from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AppsApi();
apiInstance.listUsingGET().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AppsResponse**](AppsResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDescriptionUsingPUT1"></a>
# **updateDescriptionUsingPUT1**
> AppResponse updateDescriptionUsingPUT1(anyStateAppId, opts)

Update description of the app

App can be in any state

### Example
```javascript
import SematextApiClientJavascript from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AppsApi();
let anyStateAppId = 789; // Number | App Id
let opts = {
  'body': new SematextApiClientJavascript.AppDescription() // AppDescription | Update Details
};
apiInstance.updateDescriptionUsingPUT1(anyStateAppId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name              | Type                                    | Description    | Notes      |
| ----------------- | --------------------------------------- | -------------- | ---------- |
| **anyStateAppId** | **Number**                              | App Id         |
| **body**          | [**AppDescription**](AppDescription.md) | Update Details | [optional] |

### Return type

[**AppResponse**](AppResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUsingPUT3"></a>
# **updateUsingPUT3**
> AppResponse updateUsingPUT3(bodyanyStateAppId)

Update app

App can be in any state

### Example
```javascript
import SematextApiClientJavascript from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.AppsApi();
let body = new SematextApiClientJavascript.UpdateAppInfo(); // UpdateAppInfo | dto
let anyStateAppId = 789; // Number | App Id

apiInstance.updateUsingPUT3(bodyanyStateAppId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name              | Type                                  | Description | Notes |
| ----------------- | ------------------------------------- | ----------- | ----- |
| **body**          | [**UpdateAppInfo**](UpdateAppInfo.md) | dto         |
| **anyStateAppId** | **Number**                            | App Id      |

### Return type

[**AppResponse**](AppResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
