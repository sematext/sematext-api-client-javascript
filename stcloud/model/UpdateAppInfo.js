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

/**
* The UpdateAppInfo model module.
* @module model/UpdateAppInfo
* @version 0.1.0
*/
export default class UpdateAppInfo {
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


            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('ignorePercentage')) {
                obj['ignorePercentage'] = ApiClient.convertToType(data['ignorePercentage'], 'Number');
            }
            if (data.hasOwnProperty('maxEvents')) {
                obj['maxEvents'] = ApiClient.convertToType(data['maxEvents'], 'Number');
            }
            if (data.hasOwnProperty('maxLimitMB')) {
                obj['maxLimitMB'] = ApiClient.convertToType(data['maxLimitMB'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('sampling')) {
                obj['sampling'] = ApiClient.convertToType(data['sampling'], 'Boolean');
            }
            if (data.hasOwnProperty('samplingPercentage')) {
                obj['samplingPercentage'] = ApiClient.convertToType(data['samplingPercentage'], 'Number');
            }
            if (data.hasOwnProperty('staggering')) {
                obj['staggering'] = ApiClient.convertToType(data['staggering'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} description
    */
    'description' = undefined;
    /**
    * @member {Number} ignorePercentage
    */
    'ignorePercentage' = undefined;
    /**
    * @member {Number} maxEvents
    */
    'maxEvents' = undefined;
    /**
    * @member {Number} maxLimitMB
    */
    'maxLimitMB' = undefined;
    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {Boolean} sampling
    */
    'sampling' = undefined;
    /**
    * @member {Number} samplingPercentage
    */
    'samplingPercentage' = undefined;
    /**
    * @member {Boolean} staggering
    */
    'staggering' = undefined;
    /**
    * @member {module:model/UpdateAppInfo.StatusEnum} status
    */
    'status' = undefined;



    /**
    * Allowed values for the <code>status</code> property.
    * @enum {String}
    * @readonly
    */
    static StatusEnum = {
        /**
         * value: "ACTIVE"
         * @const
         */
        "ACTIVE": "ACTIVE",
        /**
         * value: "DISABLED"
         * @const
         */
        "DISABLED": "DISABLED"
    };

}
