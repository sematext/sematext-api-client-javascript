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
* The Dimension model module.
* @module model/Dimension
* @version 0.1.0
*/
export default class Dimension {
    /**
    * Constructs a new <code>Dimension</code>.
    * @alias module:model/Dimension
    * @class
    * @param name {String}
    * @param values {Array.<String>}
    */

    constructor(name, values) {


        this['name'] = name;
        this['values'] = values;

    }

    /**
    * Constructs a <code>Dimension</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Dimension} obj Optional instance to populate.
    * @return {module:model/Dimension} The populated <code>Dimension</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Dimension();


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
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {Array.<String>} values
    */
    'values' = undefined;




}