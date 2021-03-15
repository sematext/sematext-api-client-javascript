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
import UserPermissions from './UserPermissions';

/**
* The Subscription model module.
* @module model/Subscription
* @version 0.1.0
*/
export default class Subscription {
    /**
    * Constructs a new <code>Subscription</code>.
    * @alias module:model/Subscription
    * @class
    */

    constructor() {



    }

    /**
    * Constructs a <code>Subscription</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Subscription} obj Optional instance to populate.
    * @return {module:model/Subscription} The populated <code>Subscription</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Subscription();


            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], 'String');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
            }
            if (data.hasOwnProperty('dashboardId')) {
                obj['dashboardId'] = ApiClient.convertToType(data['dashboardId'], 'Number');
            }
            if (data.hasOwnProperty('dashboardName')) {
                obj['dashboardName'] = ApiClient.convertToType(data['dashboardName'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], 'String');
            }
            if (data.hasOwnProperty('frequency')) {
                obj['frequency'] = ApiClient.convertToType(data['frequency'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('nextSendDate')) {
                obj['nextSendDate'] = ApiClient.convertToType(data['nextSendDate'], 'Date');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('systemId')) {
                obj['systemId'] = ApiClient.convertToType(data['systemId'], 'Number');
            }
            if (data.hasOwnProperty('systemName')) {
                obj['systemName'] = ApiClient.convertToType(data['systemName'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('timeRange')) {
                obj['timeRange'] = ApiClient.convertToType(data['timeRange'], 'String');
            }
            if (data.hasOwnProperty('userPermissions')) {
                obj['userPermissions'] = UserPermissions.constructFromObject(data['userPermissions']);
            }
        }
        return obj;
    }

    /**
    * @member {String} addresses
    */
    'addresses' = undefined;
    /**
    * @member {String} createdBy
    */
    'createdBy' = undefined;
    /**
    * @member {Number} dashboardId
    */
    'dashboardId' = undefined;
    /**
    * @member {String} dashboardName
    */
    'dashboardName' = undefined;
    /**
    * @member {Boolean} enabled
    */
    'enabled' = undefined;
    /**
    * @member {String} filters
    */
    'filters' = undefined;
    /**
    * @member {module:model/Subscription.FrequencyEnum} frequency
    */
    'frequency' = undefined;
    /**
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * @member {Date} nextSendDate
    */
    'nextSendDate' = undefined;
    /**
    * @member {String} subject
    */
    'subject' = undefined;
    /**
    * @member {Number} systemId
    */
    'systemId' = undefined;
    /**
    * @member {String} systemName
    */
    'systemName' = undefined;
    /**
    * @member {String} text
    */
    'text' = undefined;
    /**
    * @member {module:model/Subscription.TimeRangeEnum} timeRange
    */
    'timeRange' = undefined;
    /**
    * @member {module:model/UserPermissions} userPermissions
    */
    'userPermissions' = undefined;



    /**
    * Allowed values for the <code>frequency</code> property.
    * @enum {String}
    * @readonly
    */
    static FrequencyEnum = {
        /**
         * value: "EVERY_FIVE_MINUTES"
         * @const
         */
        "EVERY_FIVE_MINUTES": "EVERY_FIVE_MINUTES",
        /**
         * value: "DAILY"
         * @const
         */
        "DAILY": "DAILY",
        /**
         * value: "WEEKLY"
         * @const
         */
        "WEEKLY": "WEEKLY",
        /**
         * value: "MONTHLY"
         * @const
         */
        "MONTHLY": "MONTHLY",
        /**
         * value: "QUARTERLY"
         * @const
         */
        "QUARTERLY": "QUARTERLY"
    };
    /**
    * Allowed values for the <code>timeRange</code> property.
    * @enum {String}
    * @readonly
    */
    static TimeRangeEnum = {
        /**
         * value: "ONE_DAY"
         * @const
         */
        "ONE_DAY": "ONE_DAY",
        /**
         * value: "ONE_WEEK"
         * @const
         */
        "ONE_WEEK": "ONE_WEEK",
        /**
         * value: "ONE_MONTH"
         * @const
         */
        "ONE_MONTH": "ONE_MONTH",
        /**
         * value: "TWO_MONTH"
         * @const
         */
        "TWO_MONTH": "TWO_MONTH",
        /**
         * value: "SIX_MONTH"
         * @const
         */
        "SIX_MONTH": "SIX_MONTH",
        /**
         * value: "ONE_YEAR"
         * @const
         */
        "ONE_YEAR": "ONE_YEAR"
    };

}