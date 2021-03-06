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
import CloudWatchSettings from '../model/CloudWatchSettings';
import CloudWatchSettingsResponse from '../model/CloudWatchSettingsResponse';

/**
* AwsSettingsController service.
* @module api/AwsSettingsControllerApi
* @version 0.1.0
*/
export default class AwsSettingsControllerApi {

  /**
  * Constructs a new AwsSettingsControllerApi.
  * @alias module:api/AwsSettingsControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }



  /**
   * Update App&#x27;s AWS CloudWatch settings
   * Applicable only for AWS Apps
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CloudWatchSettingsResponse} and HTTP response
   */
  updateUsingPUT1WithHttpInfo(body, appId) {
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
    let returnType = CloudWatchSettingsResponse;

    return this.apiClient.callApi(
      '/users-web/api/v3/apps/{appId}/aws', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * Update App&#x27;s AWS CloudWatch settings
   * Applicable only for AWS Apps
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CloudWatchSettingsResponse}
   */
  updateUsingPUT1(body, appId) {
    return this.updateUsingPUT1WithHttpInfo(body, appId)
      .then(function (response_and_data) {
        return response_and_data.data;
      });
  }

}
