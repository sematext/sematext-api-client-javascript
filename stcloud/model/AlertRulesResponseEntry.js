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
import AlertRule from './AlertRule';

/**
* The AlertRulesResponseEntry model module.
* @module model/AlertRulesResponseEntry
* @version 0.1.0
*/
export default class AlertRulesResponseEntry {
    /**
    * Constructs a new <code>AlertRulesResponseEntry</code>.
    * @alias module:model/AlertRulesResponseEntry
    * @class
    */

    constructor() {



    }

    /**
    * Constructs a <code>AlertRulesResponseEntry</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AlertRulesResponseEntry} obj Optional instance to populate.
    * @return {module:model/AlertRulesResponseEntry} The populated <code>AlertRulesResponseEntry</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AlertRulesResponseEntry();


            if (data.hasOwnProperty('alertRules')) {
                obj['alertRules'] = ApiClient.convertToType(data['alertRules'], [AlertRule]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/AlertRule>} alertRules
    */
    'alertRules' = undefined;




}
