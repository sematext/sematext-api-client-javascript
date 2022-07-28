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
 * The AlertNotificationRequest model module.
 * @module model/AlertNotificationRequest
 * @version 0.5.0
 */
export class AlertNotificationRequest {
  /**
   * Constructs a new <code>AlertNotificationRequest</code>.
   * @alias module:model/AlertNotificationRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AlertNotificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AlertNotificationRequest} obj Optional instance to populate.
   * @return {module:model/AlertNotificationRequest} The populated <code>AlertNotificationRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AlertNotificationRequest();
      if (data.hasOwnProperty('defaultInterval'))
        obj.defaultInterval = ApiClient.convertToType(data['defaultInterval'], 'Number');
      if (data.hasOwnProperty('end'))
        obj.end = ApiClient.convertToType(data['end'], 'String');
      if (data.hasOwnProperty('interval'))
        obj.interval = ApiClient.convertToType(data['interval'], 'String');
      if (data.hasOwnProperty('start'))
        obj.start = ApiClient.convertToType(data['start'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} defaultInterval
 */
AlertNotificationRequest.prototype.defaultInterval = undefined;

/**
 * End time of interval. Can be expressed as timestamp in milliseconds or UTC date in yyyy-MM-dd HH:mm:ss format
 * @member {String} end
 */
AlertNotificationRequest.prototype.end = undefined;

/**
 * @member {String} interval
 */
AlertNotificationRequest.prototype.interval = undefined;

/**
 * Start time of interval. Can be expressed as timestamp in milliseconds or UTC date in yyyy-MM-dd HH:mm:ss format
 * @member {String} start
 */
AlertNotificationRequest.prototype.start = undefined;

