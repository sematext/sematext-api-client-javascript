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

/**
 * The TagNamesResponse model module.
 * @module model/TagNamesResponse
 * @version 0.5.0
 */
export class TagNamesResponse {
  /**
   * Constructs a new <code>TagNamesResponse</code>.
   * @alias module:model/TagNamesResponse
   * @class
   * @param names {Array.<String>} 
   */
  constructor(names) {
    this.names = names;
  }

  /**
   * Constructs a <code>TagNamesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagNamesResponse} obj Optional instance to populate.
   * @return {module:model/TagNamesResponse} The populated <code>TagNamesResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TagNamesResponse();
      if (data.hasOwnProperty('names'))
        obj.names = ApiClient.convertToType(data['names'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} names
 */
TagNamesResponse.prototype.names = undefined;

