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
import { AppsResponse } from '../model/AppsResponse'
import { CreateAppInfo } from '../model/CreateAppInfo'

/**
 * MonitoringApp service.
 * @module api/MonitoringAppApi
 * @version 0.4.0
 */
export class MonitoringAppApi {
  /**
    * Constructs a new MonitoringAppApi. 
    * @alias module:api/MonitoringAppApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
  constructor (apiClient) {
    this.apiClient = apiClient || ApiClient.instance
  }

  /**
   * Create Monitoring App
   * @param {module:model/CreateAppInfo} body Details of the application to be created
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AppsResponse} and HTTP response
   */
  createSpmApplicationWithHttpInfo (body) {
    let postBody = body
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling createSpmApplication"
      )
    }

    let pathParams = {}
    let queryParams = {}
    let headerParams = {}
    let formParams = {}

    let authNames = ['api_key']
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = AppsResponse

    return this.apiClient.callApi(
      '/spm-reports/api/v3/apps',
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
   * Create Monitoring App
   * @param {<&vendorExtensions.x-jsdoc-type>} body Details of the application to be created
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AppsResponse}
   */
  createSpmApplication (body) {
    return this.createSpmApplicationWithHttpInfo(body).then(function (
      response_and_data
    ) {
      return response_and_data.data
    })
  }
}
