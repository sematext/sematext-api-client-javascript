/**
 * Sematext Cloud API
 * API Explorer provides access and documentation for Sematext REST API. The REST API requires the API Key to be sent as part of `Authorization` header. E.g.: `Authorization : apiKey e5f18450-205a-48eb-8589-7d49edaea813`.
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DailyDto from './DailyDto';
import LimitChangeEventDTO from './LimitChangeEventDTO';

/**
* The UsageDto model module.
* @module model/UsageDto
* @version 0.1.0
*/
export default class UsageDto {
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


            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('dailyUsage')) {
                obj['dailyUsage'] = ApiClient.convertToType(data['dailyUsage'], [DailyDto]);
            }
            if (data.hasOwnProperty('dailyVolumeMB')) {
                obj['dailyVolumeMB'] = ApiClient.convertToType(data['dailyVolumeMB'], 'Number');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Date');
            }
            if (data.hasOwnProperty('failedCount')) {
                obj['failedCount'] = ApiClient.convertToType(data['failedCount'], 'Number');
            }
            if (data.hasOwnProperty('limitChangeEvents')) {
                obj['limitChangeEvents'] = ApiClient.convertToType(data['limitChangeEvents'], [LimitChangeEventDTO]);
            }
            if (data.hasOwnProperty('maxAllowedMB')) {
                obj['maxAllowedMB'] = ApiClient.convertToType(data['maxAllowedMB'], 'Number');
            }
            if (data.hasOwnProperty('maxLimitMB')) {
                obj['maxLimitMB'] = ApiClient.convertToType(data['maxLimitMB'], 'Number');
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Date');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
            }
            if (data.hasOwnProperty('volumeChangeEvents')) {
                obj['volumeChangeEvents'] = ApiClient.convertToType(data['volumeChangeEvents'], [LimitChangeEventDTO]);
            }
        }
        return obj;
    }

    /**
    * @member {Number} count
    */
    'count' = undefined;
    /**
    * @member {Array.<module:model/DailyDto>} dailyUsage
    */
    'dailyUsage' = undefined;
    /**
    * @member {Number} dailyVolumeMB
    */
    'dailyVolumeMB' = undefined;
    /**
    * @member {Date} end
    */
    'end' = undefined;
    /**
    * @member {Number} failedCount
    */
    'failedCount' = undefined;
    /**
    * @member {Array.<module:model/LimitChangeEventDTO>} limitChangeEvents
    */
    'limitChangeEvents' = undefined;
    /**
    * @member {Number} maxAllowedMB
    */
    'maxAllowedMB' = undefined;
    /**
    * @member {Number} maxLimitMB
    */
    'maxLimitMB' = undefined;
    /**
    * @member {Date} start
    */
    'start' = undefined;
    /**
    * @member {Number} volume
    */
    'volume' = undefined;
    /**
    * @member {Array.<module:model/LimitChangeEventDTO>} volumeChangeEvents
    */
    'volumeChangeEvents' = undefined;




}
