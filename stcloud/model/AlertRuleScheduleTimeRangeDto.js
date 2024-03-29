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
 * The AlertRuleScheduleTimeRangeDto model module.
 * @module model/AlertRuleScheduleTimeRangeDto
 * @version 0.5.0
 */
export class AlertRuleScheduleTimeRangeDto {
  /**
   * Constructs a new <code>AlertRuleScheduleTimeRangeDto</code>.
   * @alias module:model/AlertRuleScheduleTimeRangeDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AlertRuleScheduleTimeRangeDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AlertRuleScheduleTimeRangeDto} obj Optional instance to populate.
   * @return {module:model/AlertRuleScheduleTimeRangeDto} The populated <code>AlertRuleScheduleTimeRangeDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AlertRuleScheduleTimeRangeDto();
      if (data.hasOwnProperty('end'))
        obj.end = ApiClient.convertToType(data['end'], 'String');
      if (data.hasOwnProperty('start'))
        obj.start = ApiClient.convertToType(data['start'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} end
 */
AlertRuleScheduleTimeRangeDto.prototype.end = undefined;

/**
 * @member {String} start
 */
AlertRuleScheduleTimeRangeDto.prototype.start = undefined;

