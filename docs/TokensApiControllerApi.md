# SematextApiClientJavascript.TokensApiControllerApi

All URIs are relative to _/_

| Method                                                                   | HTTP request                                                        | Description                               |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------- | ----------------------------------------- |
| [**createAppToken1**](TokensApiControllerApi.md#createAppToken1)         | **POST** /users-web/api/v3/apps/{appId}/tokens                      | Create new app token                      |
| [**deleteAppToken1**](TokensApiControllerApi.md#deleteAppToken1)         | **DELETE** /users-web/api/v3/apps/{appId}/tokens/{tokenId}          | Delete app token                          |
| [**getAppTokens**](TokensApiControllerApi.md#getAppTokens)               | **GET** /users-web/api/v3/apps/{appId}/tokens                       | Get app available tokens                  |
| [**regenerateAppToken1**](TokensApiControllerApi.md#regenerateAppToken1) | **POST** /users-web/api/v3/apps/{appId}/tokens/{tokenId}/regenerate | Regenerate app token)                     |
| [**updateAppToken1**](TokensApiControllerApi.md#updateAppToken1)         | **PUT** /users-web/api/v3/apps/{appId}/tokens/{tokenId}             | Update app token (enable/disable or name) |

<a name="createAppToken1"></a>

# **createAppToken1**

> TokenResponse createAppToken1(body, appId)

Create new app token

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.TokensApiControllerApi()
let body = new SematextApiClientJavascript.CreateTokenDto() // CreateTokenDto | dto
let appId = 789 // Number | appId

apiInstance.createAppToken1(body, appId).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name      | Type                                    | Description | Notes |
| --------- | --------------------------------------- | ----------- | ----- |
| **body**  | [**CreateTokenDto**](CreateTokenDto.md) | dto         |
| **appId** | **Number**                              | appId       |

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteAppToken1"></a>

# **deleteAppToken1**

> GenericMapBasedApiResponse deleteAppToken1(appId, tokenId)

Delete app token

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.TokensApiControllerApi()
let appId = 789 // Number | appId
let tokenId = 789 // Number | tokenId

apiInstance.deleteAppToken1(appId, tokenId).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name        | Type       | Description | Notes |
| ----------- | ---------- | ----------- | ----- |
| **appId**   | **Number** | appId       |
| **tokenId** | **Number** | tokenId     |

### Return type

[**GenericMapBasedApiResponse**](GenericMapBasedApiResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAppTokens"></a>

# **getAppTokens**

> TokensResponse getAppTokens(appId)

Get app available tokens

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.TokensApiControllerApi()
let appId = 789 // Number | appId

apiInstance.getAppTokens(appId).then(
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

[**TokensResponse**](TokensResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="regenerateAppToken1"></a>

# **regenerateAppToken1**

> TokenResponse regenerateAppToken1(appId, tokenId)

Regenerate app token)

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.TokensApiControllerApi()
let appId = 789 // Number | appId
let tokenId = 789 // Number | tokenId

apiInstance.regenerateAppToken1(appId, tokenId).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name        | Type       | Description | Notes |
| ----------- | ---------- | ----------- | ----- |
| **appId**   | **Number** | appId       |
| **tokenId** | **Number** | tokenId     |

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateAppToken1"></a>

# **updateAppToken1**

> TokenResponse updateAppToken1(body, appId, tokenId)

Update app token (enable/disable or name)

### Example

```javascript
import { SematextApiClientJavascript } from 'sematext-api-client-javascript'
let defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SematextApiClientJavascript.TokensApiControllerApi()
let body = new SematextApiClientJavascript.UpdateTokenDto() // UpdateTokenDto | dto
let appId = 789 // Number | appId
let tokenId = 789 // Number | tokenId

apiInstance.updateAppToken1(body, appId, tokenId).then(
  data => {
    console.log('API called successfully. Returned data: ' + data)
  },
  error => {
    console.error(error)
  }
)
```

### Parameters

| Name        | Type                                    | Description | Notes |
| ----------- | --------------------------------------- | ----------- | ----- |
| **body**    | [**UpdateTokenDto**](UpdateTokenDto.md) | dto         |
| **appId**   | **Number**                              | appId       |
| **tokenId** | **Number**                              | tokenId     |

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
