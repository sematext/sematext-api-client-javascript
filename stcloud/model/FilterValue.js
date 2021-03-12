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
* The FilterValue model module.
* @module model/FilterValue
* @version 0.1.0
*/
export default class FilterValue {
    /**
    * Constructs a new <code>FilterValue</code>.
    * @alias module:model/FilterValue
    * @class
    */

    constructor() {



    }

    /**
    * Constructs a <code>FilterValue</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FilterValue} obj Optional instance to populate.
    * @return {module:model/FilterValue} The populated <code>FilterValue</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilterValue();


            if (data.hasOwnProperty('aggType')) {
                obj['aggType'] = ApiClient.convertToType(data['aggType'], 'String');
            }
            if (data.hasOwnProperty('filterName')) {
                obj['filterName'] = ApiClient.convertToType(data['filterName'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], ['String']);
            }
        }
        return obj;
    }

    /**
    * @member {String} aggType
    */
    'aggType' = undefined;
    /**
    * @member {String} filterName
    */
    'filterName' = undefined;
    /**
    * @member {String} key
    */
    'key' = undefined;
    /**
    * @member {String} label
    */
    'label' = undefined;
    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {Array.<String>} values
    */
    'values' = undefined;




}
