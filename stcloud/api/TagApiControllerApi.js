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
import {Dimension} from '../model/Dimension';
import {TagNamesResponse} from '../model/TagNamesResponse';
import {TagsGroupedResponse} from '../model/TagsGroupedResponse';

/**
* TagApiController service.
* @module api/TagApiControllerApi
* @version 0.5.0
*/
export class TagApiControllerApi {

    /**
    * Constructs a new TagApiControllerApi. 
    * @alias module:api/TagApiControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Gets tag names for the given application identifiers appearing in the given time frame.
     * @param {String} appIds appIds
     * @param {Object} opts Optional parameters
     * @param {Number} opts.from from
     * @param {Number} opts.to to
     * @param {Boolean} opts.metrics metrics (default to <.>)
     * @param {Boolean} opts.logs logs (default to <.>)
     * @param {Boolean} opts.events events (default to <.>)
     * @param {Boolean} opts.rum rum (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TagNamesResponse} and HTTP response
     */
    getTagNamesUsingGETWithHttpInfo(appIds, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appIds' is set
      if (appIds === undefined || appIds === null) {
        throw new Error("Missing the required parameter 'appIds' when calling getTagNamesUsingGET");
      }

      let pathParams = {
        'appIds': appIds
      };
      let queryParams = {
        'from': opts['from'],'to': opts['to'],'metrics': opts['metrics'],'logs': opts['logs'],'events': opts['events'],'rum': opts['rum']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TagNamesResponse;

      return this.apiClient.callApi(
        '/spm-reports/api/v3/apps/{appIds}/tagNames', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets tag names for the given application identifiers appearing in the given time frame.
     * @param {<&vendorExtensions.x-jsdoc-type>} appIds appIds
     * @param {Object} opts Optional parameters
     * @param {Number} opts.from from
     * @param {Number} opts.to to
     * @param {Boolean} opts.metrics metrics (default to <.>)
     * @param {Boolean} opts.logs logs (default to <.>)
     * @param {Boolean} opts.events events (default to <.>)
     * @param {Boolean} opts.rum rum (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TagNamesResponse}
     */
    getTagNamesUsingGET(appIds, opts) {
      return this.getTagNamesUsingGETWithHttpInfo(appIds, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets tag names grouped by application id.
     * @param {String} appIds appIds
     * @param {Array.<String>} tag tag
     * @param {Object} opts Optional parameters
     * @param {Number} opts.from from
     * @param {Number} opts.to to
     * @param {Boolean} opts.metrics metrics (default to <.>)
     * @param {Boolean} opts.logs logs (default to <.>)
     * @param {Boolean} opts.events events (default to <.>)
     * @param {Boolean} opts.rum rum (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TagsGroupedResponse} and HTTP response
     */
    getTagsGroupedByIdUsingGET1WithHttpInfo(appIds, tag, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appIds' is set
      if (appIds === undefined || appIds === null) {
        throw new Error("Missing the required parameter 'appIds' when calling getTagsGroupedByIdUsingGET1");
      }
      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling getTagsGroupedByIdUsingGET1");
      }

      let pathParams = {
        'appIds': appIds
      };
      let queryParams = {
        'from': opts['from'],'to': opts['to'],'tag': this.apiClient.buildCollectionParam(tag, 'multi'),'metrics': opts['metrics'],'logs': opts['logs'],'events': opts['events'],'rum': opts['rum']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TagsGroupedResponse;

      return this.apiClient.callApi(
        '/spm-reports/api/v3/apps/{appIds}/grouped', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets tag names grouped by application id.
     * @param {<&vendorExtensions.x-jsdoc-type>} appIds appIds
     * @param {<&vendorExtensions.x-jsdoc-type>} tag tag
     * @param {Object} opts Optional parameters
     * @param {Number} opts.from from
     * @param {Number} opts.to to
     * @param {Boolean} opts.metrics metrics (default to <.>)
     * @param {Boolean} opts.logs logs (default to <.>)
     * @param {Boolean} opts.events events (default to <.>)
     * @param {Boolean} opts.rum rum (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TagsGroupedResponse}
     */
    getTagsGroupedByIdUsingGET1(appIds, tag, opts) {
      return this.getTagsGroupedByIdUsingGET1WithHttpInfo(appIds, tag, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets values for specified tags for the given application identifiers appearing in the given time frame.
     * @param {String} appIds appIds
     * @param {Array.<String>} tag tag
     * @param {Object} opts Optional parameters
     * @param {Number} opts.from from
     * @param {Number} opts.to to
     * @param {Boolean} opts.metrics metrics (default to <.>)
     * @param {Boolean} opts.logs logs (default to <.>)
     * @param {Boolean} opts.events events (default to <.>)
     * @param {Boolean} opts.rum rum (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, module:model/{'String': Dimension}>} and HTTP response
     */
    getUsingGETWithHttpInfo(appIds, tag, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appIds' is set
      if (appIds === undefined || appIds === null) {
        throw new Error("Missing the required parameter 'appIds' when calling getUsingGET");
      }
      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling getUsingGET");
      }

      let pathParams = {
        'appIds': appIds
      };
      let queryParams = {
        'from': opts['from'],'to': opts['to'],'tag': this.apiClient.buildCollectionParam(tag, 'multi'),'metrics': opts['metrics'],'logs': opts['logs'],'events': opts['events'],'rum': opts['rum']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = {'String': Dimension};

      return this.apiClient.callApi(
        '/spm-reports/api/v3/apps/{appIds}/metrics/filters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets values for specified tags for the given application identifiers appearing in the given time frame.
     * @param {<&vendorExtensions.x-jsdoc-type>} appIds appIds
     * @param {<&vendorExtensions.x-jsdoc-type>} tag tag
     * @param {Object} opts Optional parameters
     * @param {Number} opts.from from
     * @param {Number} opts.to to
     * @param {Boolean} opts.metrics metrics (default to <.>)
     * @param {Boolean} opts.logs logs (default to <.>)
     * @param {Boolean} opts.events events (default to <.>)
     * @param {Boolean} opts.rum rum (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, module:model/{'String': Dimension}>}
     */
    getUsingGET(appIds, tag, opts) {
      return this.getUsingGETWithHttpInfo(appIds, tag, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets values for specified tags for the given application identifiers appearing in the given time frame.
     * @param {String} appIds appIds
     * @param {Array.<String>} tag tag
     * @param {Object} opts Optional parameters
     * @param {Number} opts.from from
     * @param {Number} opts.to to
     * @param {Boolean} opts.metrics metrics (default to <.>)
     * @param {Boolean} opts.logs logs (default to <.>)
     * @param {Boolean} opts.events events (default to <.>)
     * @param {Boolean} opts.rum rum (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, module:model/{'String': Dimension}>} and HTTP response
     */
    getUsingGET3WithHttpInfo(appIds, tag, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appIds' is set
      if (appIds === undefined || appIds === null) {
        throw new Error("Missing the required parameter 'appIds' when calling getUsingGET3");
      }
      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling getUsingGET3");
      }

      let pathParams = {
        'appIds': appIds
      };
      let queryParams = {
        'from': opts['from'],'to': opts['to'],'tag': this.apiClient.buildCollectionParam(tag, 'multi'),'metrics': opts['metrics'],'logs': opts['logs'],'events': opts['events'],'rum': opts['rum']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = {'String': Dimension};

      return this.apiClient.callApi(
        '/spm-reports/api/v3/apps/{appIds}/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets values for specified tags for the given application identifiers appearing in the given time frame.
     * @param {<&vendorExtensions.x-jsdoc-type>} appIds appIds
     * @param {<&vendorExtensions.x-jsdoc-type>} tag tag
     * @param {Object} opts Optional parameters
     * @param {Number} opts.from from
     * @param {Number} opts.to to
     * @param {Boolean} opts.metrics metrics (default to <.>)
     * @param {Boolean} opts.logs logs (default to <.>)
     * @param {Boolean} opts.events events (default to <.>)
     * @param {Boolean} opts.rum rum (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, module:model/{'String': Dimension}>}
     */
    getUsingGET3(appIds, tag, opts) {
      return this.getUsingGET3WithHttpInfo(appIds, tag, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}