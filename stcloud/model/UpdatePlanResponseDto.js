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
import {EventDto} from './EventDto';

/**
 * The UpdatePlanResponseDto model module.
 * @module model/UpdatePlanResponseDto
 * @version 0.5.0
 */
export class UpdatePlanResponseDto {
  /**
   * Constructs a new <code>UpdatePlanResponseDto</code>.
   * @alias module:model/UpdatePlanResponseDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UpdatePlanResponseDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdatePlanResponseDto} obj Optional instance to populate.
   * @return {module:model/UpdatePlanResponseDto} The populated <code>UpdatePlanResponseDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdatePlanResponseDto();
      if (data.hasOwnProperty('events'))
        obj.events = ApiClient.convertToType(data['events'], [EventDto]);
      if (data.hasOwnProperty('planId'))
        obj.planId = ApiClient.convertToType(data['planId'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/EventDto>} events
 */
UpdatePlanResponseDto.prototype.events = undefined;

/**
 * @member {Number} planId
 */
UpdatePlanResponseDto.prototype.planId = undefined;

