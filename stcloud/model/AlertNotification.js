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
 * The AlertNotification model module.
 * @module model/AlertNotification
 * @version 0.5.0
 */
export class AlertNotification {
  /**
   * Constructs a new <code>AlertNotification</code>.
   * @alias module:model/AlertNotification
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AlertNotification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AlertNotification} obj Optional instance to populate.
   * @return {module:model/AlertNotification} The populated <code>AlertNotification</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AlertNotification();
      if (data.hasOwnProperty('appName'))
        obj.appName = ApiClient.convertToType(data['appName'], 'String');
      if (data.hasOwnProperty('appType'))
        obj.appType = ApiClient.convertToType(data['appType'], 'String');
      if (data.hasOwnProperty('backToNormal'))
        obj.backToNormal = ApiClient.convertToType(data['backToNormal'], 'Boolean');
      if (data.hasOwnProperty('createTime'))
        obj.createTime = ApiClient.convertToType(data['createTime'], 'String');
      if (data.hasOwnProperty('sent'))
        obj.sent = ApiClient.convertToType(data['sent'], 'Boolean');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
      if (data.hasOwnProperty('when'))
        obj.when = ApiClient.convertToType(data['when'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} appName
 */
AlertNotification.prototype.appName = undefined;

/**
 * @member {String} appType
 */
AlertNotification.prototype.appType = undefined;

/**
 * @member {Boolean} backToNormal
 */
AlertNotification.prototype.backToNormal = undefined;

/**
 * @member {String} createTime
 */
AlertNotification.prototype.createTime = undefined;

/**
 * @member {Boolean} sent
 */
AlertNotification.prototype.sent = undefined;

/**
 * @member {String} text
 */
AlertNotification.prototype.text = undefined;

/**
 * @member {String} when
 */
AlertNotification.prototype.when = undefined;

