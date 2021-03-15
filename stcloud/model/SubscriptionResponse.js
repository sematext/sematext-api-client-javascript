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
import Error from './Error';
import SubscriptionResponseEntry from './SubscriptionResponseEntry';

/**
* The SubscriptionResponse model module.
* @module model/SubscriptionResponse
* @version 0.1.0
*/
export default class SubscriptionResponse {
    /**
    * Constructs a new <code>SubscriptionResponse</code>.
    * @alias module:model/SubscriptionResponse
    * @class
    */

    constructor() {



    }

    /**
    * Constructs a <code>SubscriptionResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SubscriptionResponse} obj Optional instance to populate.
    * @return {module:model/SubscriptionResponse} The populated <code>SubscriptionResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriptionResponse();


            if (data.hasOwnProperty('data')) {
                obj['data'] = SubscriptionResponseEntry.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/SubscriptionResponseEntry} data
    */
    'data' = undefined;
    /**
    * @member {Array.<module:model/Error>} errors
    */
    'errors' = undefined;
    /**
    * @member {String} message
    */
    'message' = undefined;
    /**
    * @member {Boolean} success
    */
    'success' = undefined;




}
