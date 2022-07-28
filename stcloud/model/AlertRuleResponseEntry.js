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
import {AlertRule} from './AlertRule';

/**
 * The AlertRuleResponseEntry model module.
 * @module model/AlertRuleResponseEntry
 * @version 0.5.0
 */
export class AlertRuleResponseEntry {
  /**
   * Constructs a new <code>AlertRuleResponseEntry</code>.
   * @alias module:model/AlertRuleResponseEntry
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AlertRuleResponseEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AlertRuleResponseEntry} obj Optional instance to populate.
   * @return {module:model/AlertRuleResponseEntry} The populated <code>AlertRuleResponseEntry</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AlertRuleResponseEntry();
      if (data.hasOwnProperty('alertRule'))
        obj.alertRule = AlertRule.constructFromObject(data['alertRule']);
    }
    return obj;
  }
}

/**
 * @member {module:model/AlertRule} alertRule
 */
AlertRuleResponseEntry.prototype.alertRule = undefined;

