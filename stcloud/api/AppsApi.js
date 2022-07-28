/*
 * Sematext Cloud API
 * API Explorer provides access and documentation for Sematext REST API. The REST API requires the API Key to be sent as part of `Authorization` header. E.g.: `Authorization : apiKey e5f18450-205a-48eb-8589-7d49edaea813`.
 *
 * OpenAPI spec version: v3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {AppDescription} from '../model/AppDescription';
import {AppResponse} from '../model/AppResponse';
import {AppTypesResponse} from '../model/AppTypesResponse';
import {AppsResponse} from '../model/AppsResponse';
import {GenericMapBasedApiResponse} from '../model/GenericMapBasedApiResponse';
import {Invitation} from '../model/Invitation';
import {UpdateAppInfo} from '../model/UpdateAppInfo';

/**
* Apps service.
* @module api/AppsApi
* @version 0.5.0
*/
export class AppsApi {

    /**
    * Constructs a new AppsApi. 
    * @alias module:api/AppsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * delete
     * @param {Number} anyStateAppId anyStateAppId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenericMapBasedApiResponse} and HTTP response
     */
    deleteUsingDELETEWithHttpInfo(anyStateAppId) {
      
      let postBody = null;
      // verify the required parameter 'anyStateAppId' is set
      if (anyStateAppId === undefined || anyStateAppId === null) {
        throw new Error("Missing the required parameter 'anyStateAppId' when calling deleteUsingDELETE");
      }

      let pathParams = {
        'anyStateAppId': anyStateAppId
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
        '/users-web/api/v3/apps/{anyStateAppId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * delete
     * @param {<&vendorExtensions.x-jsdoc-type>} anyStateAppId anyStateAppId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenericMapBasedApiResponse}
     */
    deleteUsingDELETE(anyStateAppId) {
      return this.deleteUsingDELETEWithHttpInfo(anyStateAppId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all App types supported for the account identified with apiKey
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AppTypesResponse} and HTTP response
     */
    getAppTypesUsingGETWithHttpInfo() {
      
      let postBody = null;

      let pathParams = {
        
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
      let returnType = AppTypesResponse;

      return this.apiClient.callApi(
        '/users-web/api/v3/apps/types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all App types supported for the account identified with apiKey
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AppTypesResponse}
     */
    getAppTypesUsingGET() {
      return this.getAppTypesUsingGETWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets defails for one particular App
     * @param {Number} anyStateAppId anyStateAppId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AppResponse} and HTTP response
     */
    getUsingGETWithHttpInfo(anyStateAppId) {
      
      let postBody = null;
      // verify the required parameter 'anyStateAppId' is set
      if (anyStateAppId === undefined || anyStateAppId === null) {
        throw new Error("Missing the required parameter 'anyStateAppId' when calling getUsingGET");
      }

      let pathParams = {
        'anyStateAppId': anyStateAppId
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
      let returnType = AppResponse;

      return this.apiClient.callApi(
        '/users-web/api/v3/apps/{anyStateAppId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets defails for one particular App
     * @param {<&vendorExtensions.x-jsdoc-type>} anyStateAppId anyStateAppId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AppResponse}
     */
    getUsingGET(anyStateAppId) {
      return this.getUsingGETWithHttpInfo(anyStateAppId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Invite guests to an app
     * @param {module:model/Invitation} body For &#x60;app&#x60; and &#x60;apps&#x60; fields only &#x60;id&#x60; needs to be populated.Other fields can be left empty or with default values
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenericMapBasedApiResponse} and HTTP response
     */
    inviteAppGuestsUsingPOST1WithHttpInfo(body) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling inviteAppGuestsUsingPOST1");
      }

      let pathParams = {
        
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
      let returnType = GenericMapBasedApiResponse;

      return this.apiClient.callApi(
        '/users-web/api/v3/apps/guests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Invite guests to an app
     * @param {<&vendorExtensions.x-jsdoc-type>} body For &#x60;app&#x60; and &#x60;apps&#x60; fields only &#x60;id&#x60; needs to be populated.Other fields can be left empty or with default values
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenericMapBasedApiResponse}
     */
    inviteAppGuestsUsingPOST1(body) {
      return this.inviteAppGuestsUsingPOST1WithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all users of apps accessible to this account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AppsResponse} and HTTP response
     */
    listAppsUsersUsingGET1WithHttpInfo() {
      
      let postBody = null;

      let pathParams = {
        
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
      let returnType = AppsResponse;

      return this.apiClient.callApi(
        '/users-web/api/v3/apps/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all users of apps accessible to this account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AppsResponse}
     */
    listAppsUsersUsingGET1() {
      return this.listAppsUsersUsingGET1WithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all apps accessible by account identified with apiKey
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AppsResponse} and HTTP response
     */
    listUsingGETWithHttpInfo() {
      
      let postBody = null;

      let pathParams = {
        
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
      let returnType = AppsResponse;

      return this.apiClient.callApi(
        '/users-web/api/v3/apps', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all apps accessible by account identified with apiKey
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AppsResponse}
     */
    listUsingGET() {
      return this.listUsingGETWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update description of the app
     * App can be in any state
     * @param {Number} anyStateAppId App Id
     * @param {Object} opts Optional parameters
     * @param {module:model/AppDescription} opts.body Update Details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AppResponse} and HTTP response
     */
    updateDescriptionUsingPUT1WithHttpInfo(anyStateAppId, opts) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'anyStateAppId' is set
      if (anyStateAppId === undefined || anyStateAppId === null) {
        throw new Error("Missing the required parameter 'anyStateAppId' when calling updateDescriptionUsingPUT1");
      }

      let pathParams = {
        'anyStateAppId': anyStateAppId
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
      let returnType = AppResponse;

      return this.apiClient.callApi(
        '/users-web/api/v3/apps/{anyStateAppId}/description', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update description of the app
     * App can be in any state
     * @param {<&vendorExtensions.x-jsdoc-type>} anyStateAppId App Id
     * @param {Object} opts Optional parameters
     * @param {module:model/AppDescription} opts.body Update Details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AppResponse}
     */
    updateDescriptionUsingPUT1(anyStateAppId, opts) {
      return this.updateDescriptionUsingPUT1WithHttpInfo(anyStateAppId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update app
     * App can be in any state
     * @param {module:model/UpdateAppInfo} body dto
     * @param {Number} anyStateAppId App Id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AppResponse} and HTTP response
     */
    updateUsingPUT3WithHttpInfo(body, anyStateAppId) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateUsingPUT3");
      }
      // verify the required parameter 'anyStateAppId' is set
      if (anyStateAppId === undefined || anyStateAppId === null) {
        throw new Error("Missing the required parameter 'anyStateAppId' when calling updateUsingPUT3");
      }

      let pathParams = {
        'anyStateAppId': anyStateAppId
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
      let returnType = AppResponse;

      return this.apiClient.callApi(
        '/users-web/api/v3/apps/{anyStateAppId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update app
     * App can be in any state
     * @param {<&vendorExtensions.x-jsdoc-type>} body dto
     * @param {<&vendorExtensions.x-jsdoc-type>} anyStateAppId App Id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AppResponse}
     */
    updateUsingPUT3(body, anyStateAppId) {
      return this.updateUsingPUT3WithHttpInfo(body, anyStateAppId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}