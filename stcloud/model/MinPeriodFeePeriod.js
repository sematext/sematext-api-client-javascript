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
* The MinPeriodFeePeriod model module.
* @module model/MinPeriodFeePeriod
* @version 0.1.0
*/
export default class MinPeriodFeePeriod {
    /**
    * Constructs a new <code>MinPeriodFeePeriod</code>.
    * @alias module:model/MinPeriodFeePeriod
    * @class
    */

    constructor() {



    }

    /**
    * Constructs a <code>MinPeriodFeePeriod</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MinPeriodFeePeriod} obj Optional instance to populate.
    * @return {module:model/MinPeriodFeePeriod} The populated <code>MinPeriodFeePeriod</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MinPeriodFeePeriod();


            if (data.hasOwnProperty('browserMonitors')) {
                obj['browserMonitors'] = ApiClient.convertToType(data['browserMonitors'], 'Number');
            }
            if (data.hasOwnProperty('discount')) {
                obj['discount'] = ApiClient.convertToType(data['discount'], 'Number');
            }
            if (data.hasOwnProperty('fromDate')) {
                obj['fromDate'] = ApiClient.convertToType(data['fromDate'], 'Date');
            }
            if (data.hasOwnProperty('httpMonitors')) {
                obj['httpMonitors'] = ApiClient.convertToType(data['httpMonitors'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('minPeriodFeeAmount')) {
                obj['minPeriodFeeAmount'] = ApiClient.convertToType(data['minPeriodFeeAmount'], 'Number');
            }
            if (data.hasOwnProperty('overagePercentage')) {
                obj['overagePercentage'] = ApiClient.convertToType(data['overagePercentage'], 'Number');
            }
            if (data.hasOwnProperty('planDataLimit')) {
                obj['planDataLimit'] = ApiClient.convertToType(data['planDataLimit'], 'Number');
            }
            if (data.hasOwnProperty('toDate')) {
                obj['toDate'] = ApiClient.convertToType(data['toDate'], 'Date');
            }
            if (data.hasOwnProperty('usedPlan')) {
                obj['usedPlan'] = ApiClient.convertToType(data['usedPlan'], 'String');
            }
            if (data.hasOwnProperty('usedPlanPeriodFee')) {
                obj['usedPlanPeriodFee'] = ApiClient.convertToType(data['usedPlanPeriodFee'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Number} browserMonitors
    */
    'browserMonitors' = undefined;
    /**
    * @member {Number} discount
    */
    'discount' = undefined;
    /**
    * @member {Date} fromDate
    */
    'fromDate' = undefined;
    /**
    * @member {Number} httpMonitors
    */
    'httpMonitors' = undefined;
    /**
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * @member {Number} minPeriodFeeAmount
    */
    'minPeriodFeeAmount' = undefined;
    /**
    * @member {Number} overagePercentage
    */
    'overagePercentage' = undefined;
    /**
    * @member {Number} planDataLimit
    */
    'planDataLimit' = undefined;
    /**
    * @member {Date} toDate
    */
    'toDate' = undefined;
    /**
    * @member {String} usedPlan
    */
    'usedPlan' = undefined;
    /**
    * @member {Number} usedPlanPeriodFee
    */
    'usedPlanPeriodFee' = undefined;




}
