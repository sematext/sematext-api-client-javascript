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
 * The UpdateAppInfo model module.
 * @module model/UpdateAppInfo
 * @version 0.5.0
 */
export class UpdateAppInfo {
  /**
   * Constructs a new <code>UpdateAppInfo</code>.
   * @alias module:model/UpdateAppInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UpdateAppInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateAppInfo} obj Optional instance to populate.
   * @return {module:model/UpdateAppInfo} The populated <code>UpdateAppInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateAppInfo();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('ignorePercentage'))
        obj.ignorePercentage = ApiClient.convertToType(data['ignorePercentage'], 'Number');
      if (data.hasOwnProperty('maxEvents'))
        obj.maxEvents = ApiClient.convertToType(data['maxEvents'], 'Number');
      if (data.hasOwnProperty('maxLimitMB'))
        obj.maxLimitMB = ApiClient.convertToType(data['maxLimitMB'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('sampling'))
        obj.sampling = ApiClient.convertToType(data['sampling'], 'Boolean');
      if (data.hasOwnProperty('samplingPercentage'))
        obj.samplingPercentage = ApiClient.convertToType(data['samplingPercentage'], 'Number');
      if (data.hasOwnProperty('staggering'))
        obj.staggering = ApiClient.convertToType(data['staggering'], 'Boolean');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} description
 */
UpdateAppInfo.prototype.description = undefined;

/**
 * @member {Number} ignorePercentage
 */
UpdateAppInfo.prototype.ignorePercentage = undefined;

/**
 * @member {Number} maxEvents
 */
UpdateAppInfo.prototype.maxEvents = undefined;

/**
 * @member {Number} maxLimitMB
 */
UpdateAppInfo.prototype.maxLimitMB = undefined;

/**
 * @member {String} name
 */
UpdateAppInfo.prototype.name = undefined;

/**
 * @member {Boolean} sampling
 */
UpdateAppInfo.prototype.sampling = undefined;

/**
 * @member {Number} samplingPercentage
 */
UpdateAppInfo.prototype.samplingPercentage = undefined;

/**
 * @member {Boolean} staggering
 */
UpdateAppInfo.prototype.staggering = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
UpdateAppInfo.StatusEnum = {
  /**
   * value: "ACTIVE"
   * @const
   */
  ACTIVE: "ACTIVE",

  /**
   * value: "DISABLED"
   * @const
   */
  DISABLED: "DISABLED"
};
/**
 * @member {module:model/UpdateAppInfo.StatusEnum} status
 */
UpdateAppInfo.prototype.status = undefined;

