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
import {AlertRuleScheduleTimeRangeDto} from './AlertRuleScheduleTimeRangeDto';

/**
 * The AlertRuleScheduleWeekdayDto model module.
 * @module model/AlertRuleScheduleWeekdayDto
 * @version 0.5.0
 */
export class AlertRuleScheduleWeekdayDto {
  /**
   * Constructs a new <code>AlertRuleScheduleWeekdayDto</code>.
   * @alias module:model/AlertRuleScheduleWeekdayDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AlertRuleScheduleWeekdayDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AlertRuleScheduleWeekdayDto} obj Optional instance to populate.
   * @return {module:model/AlertRuleScheduleWeekdayDto} The populated <code>AlertRuleScheduleWeekdayDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AlertRuleScheduleWeekdayDto();
      if (data.hasOwnProperty('day'))
        obj.day = ApiClient.convertToType(data['day'], 'String');
      if (data.hasOwnProperty('index'))
        obj.index = ApiClient.convertToType(data['index'], 'Number');
      if (data.hasOwnProperty('intervals'))
        obj.intervals = ApiClient.convertToType(data['intervals'], [AlertRuleScheduleTimeRangeDto]);
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} day
 */
AlertRuleScheduleWeekdayDto.prototype.day = undefined;

/**
 * @member {Number} index
 */
AlertRuleScheduleWeekdayDto.prototype.index = undefined;

/**
 * @member {Array.<module:model/AlertRuleScheduleTimeRangeDto>} intervals
 */
AlertRuleScheduleWeekdayDto.prototype.intervals = undefined;

/**
 * @member {String} label
 */
AlertRuleScheduleWeekdayDto.prototype.label = undefined;

/**
 * @member {String} type
 */
AlertRuleScheduleWeekdayDto.prototype.type = undefined;

