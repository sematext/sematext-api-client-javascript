/*
 * Sematext Cloud API
 * API Explorer provides access and documentation for Sematext REST API. The REST API requires the API Key to be sent as part of `Authorization` header. E.g.: `Authorization : apiKey e5f18450-205a-48eb-8589-7d49edaea813`.
 *
 * OpenAPI spec version: v3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.30
 *
 * Do not edit the class manually.
 *
 */
import { ApiClient } from '../ApiClient'
import { GenericMapBasedApiResponse } from '../model/GenericMapBasedApiResponse'
import { UserInfo } from '../model/UserInfo'

/**
 * ResetPassword service.
 * @module api/ResetPasswordApi
 * @version 0.4.0
 */
export class ResetPasswordApi {
  /**
    * Constructs a new ResetPasswordApi. 
    * @alias module:api/ResetPasswordApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
  constructor (apiClient) {
    this.apiClient = apiClient || ApiClient.instance
  }

  /**
   * Reset Password
   * @param {module:model/UserInfo} body dto
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenericMapBasedApiResponse} and HTTP response
   */
  resetPasswordUsingPOSTWithHttpInfo (body) {
    let postBody = body
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling resetPasswordUsingPOST"
      )
    }

    let pathParams = {}
    let queryParams = {}
    let headerParams = {}
    let formParams = {}

    let authNames = ['api_key']
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = GenericMapBasedApiResponse

    return this.apiClient.callApi(
      '/users-web/api/v3/account/password/reset',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    )
  }

  /**
   * Reset Password
   * @param {<&vendorExtensions.x-jsdoc-type>} body dto
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenericMapBasedApiResponse}
   */
  resetPasswordUsingPOST (body) {
    return this.resetPasswordUsingPOSTWithHttpInfo(body).then(function (
      response_and_data
    ) {
      return response_and_data.data
    })
  }
}
