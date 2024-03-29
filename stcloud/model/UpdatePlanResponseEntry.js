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
import {UpdatePlanResponseDto} from './UpdatePlanResponseDto';

/**
 * The UpdatePlanResponseEntry model module.
 * @module model/UpdatePlanResponseEntry
 * @version 0.5.0
 */
export class UpdatePlanResponseEntry {
  /**
   * Constructs a new <code>UpdatePlanResponseEntry</code>.
   * @alias module:model/UpdatePlanResponseEntry
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UpdatePlanResponseEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdatePlanResponseEntry} obj Optional instance to populate.
   * @return {module:model/UpdatePlanResponseEntry} The populated <code>UpdatePlanResponseEntry</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdatePlanResponseEntry();
      if (data.hasOwnProperty('billing'))
        obj.billing = UpdatePlanResponseDto.constructFromObject(data['billing']);
    }
    return obj;
  }
}

/**
 * @member {module:model/UpdatePlanResponseDto} billing
 */
UpdatePlanResponseEntry.prototype.billing = undefined;

