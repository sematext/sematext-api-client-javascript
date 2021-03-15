/**
 * Sematext Cloud API
 * API Explorer provides access and documentation for Sematext REST API. The REST API requires the API Key to be sent as part of `Authorization` header. E.g.: `Authorization : apiKey e5f18450-205a-48eb-8589-7d49edaea813`.
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import CreateTokenDto from '../model/CreateTokenDto';
import GenericMapBasedApiResponse from '../model/GenericMapBasedApiResponse';
import TokenResponse from '../model/TokenResponse';
import TokensResponse from '../model/TokensResponse';
import UpdateTokenDto from '../model/UpdateTokenDto';

/**
* TokensApiController service.
* @module api/TokensApiControllerApi
* @version 0.1.0
*/
export default class TokensApiControllerApi {

  /**
  * Constructs a new TokensApiControllerApi.
  * @alias module:api/TokensApiControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }



  /**
   * Create new app token
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TokenResponse} and HTTP response
   */
  createAppTokenWithHttpInfo(body, appId) {
    let postBody = body;

    let pathParams = {
      'appId': appId
    };
    let queryParams = {
    };
    let headerParams = {
    };
    let formParams = {
    };

    let authNames = ['api_key'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = TokenResponse;

    return this.apiClient.callApi(
      '/users-web/api/v3/apps/{appId}/tokens', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * Create new app token
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TokenResponse}
   */
  createAppToken(body, appId) {
    return this.createAppTokenWithHttpInfo(body, appId)
      .then(function (response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * Delete app token
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenericMapBasedApiResponse} and HTTP response
   */
  deleteAppToken1WithHttpInfo(appId, tokenId) {
    let postBody = null;

    let pathParams = {
      'appId': appId,
      'tokenId': tokenId
    };
    let queryParams = {
    };
    let headerParams = {
    };
    let formParams = {
    };

    let authNames = ['api_key'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = GenericMapBasedApiResponse;

    return this.apiClient.callApi(
      '/users-web/api/v3/apps/{appId}/tokens/{tokenId}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * Delete app token
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenericMapBasedApiResponse}
   */
  deleteAppToken1(appId, tokenId) {
    return this.deleteAppToken1WithHttpInfo(appId, tokenId)
      .then(function (response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * Get app available tokens
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TokensResponse} and HTTP response
   */
  getAppTokens1WithHttpInfo(appId) {
    let postBody = null;

    let pathParams = {
      'appId': appId
    };
    let queryParams = {
    };
    let headerParams = {
    };
    let formParams = {
    };

    let authNames = ['api_key'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = TokensResponse;

    return this.apiClient.callApi(
      '/users-web/api/v3/apps/{appId}/tokens', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * Get app available tokens
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TokensResponse}
   */
  getAppTokens1(appId) {
    return this.getAppTokens1WithHttpInfo(appId)
      .then(function (response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * Regenerate app token)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TokenResponse} and HTTP response
   */
  regenerateAppToken1WithHttpInfo(appId, tokenId) {
    let postBody = null;

    let pathParams = {
      'appId': appId,
      'tokenId': tokenId
    };
    let queryParams = {
    };
    let headerParams = {
    };
    let formParams = {
    };

    let authNames = ['api_key'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = TokenResponse;

    return this.apiClient.callApi(
      '/users-web/api/v3/apps/{appId}/tokens/{tokenId}/regenerate', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * Regenerate app token)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TokenResponse}
   */
  regenerateAppToken1(appId, tokenId) {
    return this.regenerateAppToken1WithHttpInfo(appId, tokenId)
      .then(function (response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * Update app token (enable/disable or name)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TokenResponse} and HTTP response
   */
  updateAppTokenWithHttpInfo(body, appId, tokenId) {
    let postBody = body;

    let pathParams = {
      'appId': appId,
      'tokenId': tokenId
    };
    let queryParams = {
    };
    let headerParams = {
    };
    let formParams = {
    };

    let authNames = ['api_key'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = TokenResponse;

    return this.apiClient.callApi(
      '/users-web/api/v3/apps/{appId}/tokens/{tokenId}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * Update app token (enable/disable or name)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TokenResponse}
   */
  updateAppToken(body, appId, tokenId) {
    return this.updateAppTokenWithHttpInfo(body, appId, tokenId)
      .then(function (response_and_data) {
        return response_and_data.data;
      });
  }

}
