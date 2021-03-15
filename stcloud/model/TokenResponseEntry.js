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
import TokenDto from './TokenDto';

/**
* The TokenResponseEntry model module.
* @module model/TokenResponseEntry
* @version 0.1.0
*/
export default class TokenResponseEntry {
    /**
    * Constructs a new <code>TokenResponseEntry</code>.
    * @alias module:model/TokenResponseEntry
    * @class
    */

    constructor() {



    }

    /**
    * Constructs a <code>TokenResponseEntry</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TokenResponseEntry} obj Optional instance to populate.
    * @return {module:model/TokenResponseEntry} The populated <code>TokenResponseEntry</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenResponseEntry();


            if (data.hasOwnProperty('token')) {
                obj['token'] = TokenDto.constructFromObject(data['token']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/TokenDto} token
    */
    'token' = undefined;




}
