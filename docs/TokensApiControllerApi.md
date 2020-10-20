# SematextApiClientJavascript.TokensApiControllerApi

All URIs are relative to *https://localhost*

| Method                                                                 | HTTP request                                                        | Description                       |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------- | --------------------------------- |
| [**createAppToken**](TokensApiControllerApi.md#createAppToken)         | **POST** /users-web/api/v3/apps/{appId}/tokens                      | Create new app token              |
| [**deleteAppToken1**](TokensApiControllerApi.md#deleteAppToken1)       | **DELETE** /users-web/api/v3/apps/{appId}/tokens/{tokenId}          | Delete app token                  |
| [**getAppTokens1**](TokensApiControllerApi.md#getAppTokens1)           | **GET** /users-web/api/v3/apps/{appId}/tokens                       | Get app available tokens          |
| [**regenerateAppToken**](TokensApiControllerApi.md#regenerateAppToken) | **POST** /users-web/api/v3/apps/{appId}/tokens/{tokenId}/regenerate | Regenerate app token)             |
| [**updateAppToken1**](TokensApiControllerApi.md#updateAppToken1)       | **PUT** /users-web/api/v3/apps/{appId}/tokens/{tokenId}             | Update app token (enable/disable) |


<a name="createAppToken"></a>
# **createAppToken**
> GenericApiResponse createAppToken(appId, dto)

Create new app token

### Example
```javascript
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.TokensApiControllerApi();

let appId = 789; // Number | appId

let dto = new SematextApiClientJavascript.CreateTokenDto(); // CreateTokenDto | dto

apiInstance.createAppToken(appId, dto).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name      | Type                                    | Description | Notes |
| --------- | --------------------------------------- | ----------- | ----- |
| **appId** | **Number**                              | appId       |
| **dto**   | [**CreateTokenDto**](CreateTokenDto.md) | dto         |

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAppToken1"></a>
# **deleteAppToken1**
> GenericApiResponse deleteAppToken1(appId, tokenId)

Delete app token

### Example
```javascript
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.TokensApiControllerApi();

let appId = 789; // Number | appId

let tokenId = 789; // Number | tokenId

apiInstance.deleteAppToken1(appId, tokenId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name        | Type       | Description | Notes |
| ----------- | ---------- | ----------- | ----- |
| **appId**   | **Number** | appId       |
| **tokenId** | **Number** | tokenId     |

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAppTokens1"></a>
# **getAppTokens1**
> GenericApiResponse getAppTokens1(appId)

Get app available tokens

### Example
```javascript
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.TokensApiControllerApi();

let appId = 789; // Number | appId

apiInstance.getAppTokens1(appId).then((data) => {
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

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="regenerateAppToken"></a>
# **regenerateAppToken**
> GenericApiResponse regenerateAppToken(appId, tokenId)

Regenerate app token)

### Example
```javascript
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.TokensApiControllerApi();

let appId = 789; // Number | appId

let tokenId = 789; // Number | tokenId

apiInstance.regenerateAppToken(appId, tokenId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name        | Type       | Description | Notes |
| ----------- | ---------- | ----------- | ----- |
| **appId**   | **Number** | appId       |
| **tokenId** | **Number** | tokenId     |

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAppToken1"></a>
# **updateAppToken1**
> GenericApiResponse updateAppToken1(appId, tokenId, dto)

Update app token (enable/disable)

### Example
```javascript
import {SematextApiClientJavascript} from 'sematext-api-client-javascript';
let defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.TokensApiControllerApi();

let appId = 789; // Number | appId

let tokenId = 789; // Number | tokenId

let dto = new SematextApiClientJavascript.UpdateTokenDto(); // UpdateTokenDto | dto

apiInstance.updateAppToken1(appId, tokenId, dto).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name        | Type                                    | Description | Notes |
| ----------- | --------------------------------------- | ----------- | ----- |
| **appId**   | **Number**                              | appId       |
| **tokenId** | **Number**                              | tokenId     |
| **dto**     | [**UpdateTokenDto**](UpdateTokenDto.md) | dto         |

### Return type

[**GenericApiResponse**](GenericApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
