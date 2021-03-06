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
* The TokenDto model module.
* @module model/TokenDto
* @version 0.1.0
*/
export default class TokenDto {
    /**
    * Constructs a new <code>TokenDto</code>.
    * @alias module:model/TokenDto
    * @class
    */

    constructor() {



    }

    /**
    * Constructs a <code>TokenDto</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TokenDto} obj Optional instance to populate.
    * @return {module:model/TokenDto} The populated <code>TokenDto</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenDto();


            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('readable')) {
                obj['readable'] = ApiClient.convertToType(data['readable'], 'Boolean');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('writeable')) {
                obj['writeable'] = ApiClient.convertToType(data['writeable'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {Date} createdAt
    */
    'createdAt' = undefined;
    /**
    * @member {Boolean} enabled
    */
    'enabled' = undefined;
    /**
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {Boolean} readable
    */
    'readable' = undefined;
    /**
    * @member {String} token
    */
    'token' = undefined;
    /**
    * @member {Boolean} writeable
    */
    'writeable' = undefined;




}
