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
import {ApiClient} from '../ApiClient';
import {Error} from './Error';
import {UsageResponseEntry} from './UsageResponseEntry';

/**
 * The UsageResponse model module.
 * @module model/UsageResponse
 * @version 0.5.0
 */
export class UsageResponse {
  /**
   * Constructs a new <code>UsageResponse</code>.
   * @alias module:model/UsageResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UsageResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsageResponse} obj Optional instance to populate.
   * @return {module:model/UsageResponse} The populated <code>UsageResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UsageResponse();
      if (data.hasOwnProperty('data'))
        obj.data = UsageResponseEntry.constructFromObject(data['data']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error]);
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {module:model/UsageResponseEntry} data
 */
UsageResponse.prototype.data = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
UsageResponse.prototype.errors = undefined;

/**
 * @member {String} message
 */
UsageResponse.prototype.message = undefined;

/**
 * @member {Boolean} success
 */
UsageResponse.prototype.success = undefined;

