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
import {DailyDto} from './DailyDto';
import {LimitChangeEventDTO} from './LimitChangeEventDTO';

/**
 * The UsageDto model module.
 * @module model/UsageDto
 * @version 0.5.0
 */
export class UsageDto {
  /**
   * Constructs a new <code>UsageDto</code>.
   * @alias module:model/UsageDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UsageDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsageDto} obj Optional instance to populate.
   * @return {module:model/UsageDto} The populated <code>UsageDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UsageDto();
      if (data.hasOwnProperty('dailyUsage'))
        obj.dailyUsage = ApiClient.convertToType(data['dailyUsage'], [DailyDto]);
      if (data.hasOwnProperty('dailyVolumeMB'))
        obj.dailyVolumeMB = ApiClient.convertToType(data['dailyVolumeMB'], 'Number');
      if (data.hasOwnProperty('end'))
        obj.end = ApiClient.convertToType(data['end'], 'Date');
      if (data.hasOwnProperty('failedCount'))
        obj.failedCount = ApiClient.convertToType(data['failedCount'], 'Number');
      if (data.hasOwnProperty('ingestedCount'))
        obj.ingestedCount = ApiClient.convertToType(data['ingestedCount'], 'Number');
      if (data.hasOwnProperty('ingestedVolume'))
        obj.ingestedVolume = ApiClient.convertToType(data['ingestedVolume'], 'Number');
      if (data.hasOwnProperty('limitChangeEvents'))
        obj.limitChangeEvents = ApiClient.convertToType(data['limitChangeEvents'], [LimitChangeEventDTO]);
      if (data.hasOwnProperty('maxAllowedMB'))
        obj.maxAllowedMB = ApiClient.convertToType(data['maxAllowedMB'], 'Number');
      if (data.hasOwnProperty('maxLimitMB'))
        obj.maxLimitMB = ApiClient.convertToType(data['maxLimitMB'], 'Number');
      if (data.hasOwnProperty('start'))
        obj.start = ApiClient.convertToType(data['start'], 'Date');
      if (data.hasOwnProperty('storedCount'))
        obj.storedCount = ApiClient.convertToType(data['storedCount'], 'Number');
      if (data.hasOwnProperty('storedVolume'))
        obj.storedVolume = ApiClient.convertToType(data['storedVolume'], 'Number');
      if (data.hasOwnProperty('volumeChangeEvents'))
        obj.volumeChangeEvents = ApiClient.convertToType(data['volumeChangeEvents'], [LimitChangeEventDTO]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/DailyDto>} dailyUsage
 */
UsageDto.prototype.dailyUsage = undefined;

/**
 * @member {Number} dailyVolumeMB
 */
UsageDto.prototype.dailyVolumeMB = undefined;

/**
 * @member {Date} end
 */
UsageDto.prototype.end = undefined;

/**
 * @member {Number} failedCount
 */
UsageDto.prototype.failedCount = undefined;

/**
 * @member {Number} ingestedCount
 */
UsageDto.prototype.ingestedCount = undefined;

/**
 * @member {Number} ingestedVolume
 */
UsageDto.prototype.ingestedVolume = undefined;

/**
 * @member {Array.<module:model/LimitChangeEventDTO>} limitChangeEvents
 */
UsageDto.prototype.limitChangeEvents = undefined;

/**
 * @member {Number} maxAllowedMB
 */
UsageDto.prototype.maxAllowedMB = undefined;

/**
 * @member {Number} maxLimitMB
 */
UsageDto.prototype.maxLimitMB = undefined;

/**
 * @member {Date} start
 */
UsageDto.prototype.start = undefined;

/**
 * @member {Number} storedCount
 */
UsageDto.prototype.storedCount = undefined;

/**
 * @member {Number} storedVolume
 */
UsageDto.prototype.storedVolume = undefined;

/**
 * @member {Array.<module:model/LimitChangeEventDTO>} volumeChangeEvents
 */
UsageDto.prototype.volumeChangeEvents = undefined;

