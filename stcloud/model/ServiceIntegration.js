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
* The ServiceIntegration model module.
* @module model/ServiceIntegration
* @version 0.1.0
*/
export default class ServiceIntegration {
    /**
    * Constructs a new <code>ServiceIntegration</code>.
    * @alias module:model/ServiceIntegration
    * @class
    */

    constructor() {



    }

    /**
    * Constructs a <code>ServiceIntegration</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ServiceIntegration} obj Optional instance to populate.
    * @return {module:model/ServiceIntegration} The populated <code>ServiceIntegration</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceIntegration();


            if (data.hasOwnProperty('appTypeId')) {
                obj['appTypeId'] = ApiClient.convertToType(data['appTypeId'], 'Number');
            }
            if (data.hasOwnProperty('appTypeName')) {
                obj['appTypeName'] = ApiClient.convertToType(data['appTypeName'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('externalProductId')) {
                obj['externalProductId'] = ApiClient.convertToType(data['externalProductId'], 'Number');
            }
            if (data.hasOwnProperty('externalProductName')) {
                obj['externalProductName'] = ApiClient.convertToType(data['externalProductName'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('integrationType')) {
                obj['integrationType'] = ApiClient.convertToType(data['integrationType'], 'String');
            }
            if (data.hasOwnProperty('ordinal')) {
                obj['ordinal'] = ApiClient.convertToType(data['ordinal'], 'Number');
            }
            if (data.hasOwnProperty('parentIntegrationId')) {
                obj['parentIntegrationId'] = ApiClient.convertToType(data['parentIntegrationId'], 'Number');
            }
            if (data.hasOwnProperty('sematextService')) {
                obj['sematextService'] = ApiClient.convertToType(data['sematextService'], 'String');
            }
            if (data.hasOwnProperty('visible')) {
                obj['visible'] = ApiClient.convertToType(data['visible'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {Number} appTypeId
    */
    'appTypeId' = undefined;
    /**
    * @member {String} appTypeName
    */
    'appTypeName' = undefined;
    /**
    * @member {String} displayName
    */
    'displayName' = undefined;
    /**
    * @member {Boolean} enabled
    */
    'enabled' = undefined;
    /**
    * @member {Number} externalProductId
    */
    'externalProductId' = undefined;
    /**
    * @member {String} externalProductName
    */
    'externalProductName' = undefined;
    /**
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * @member {String} integrationType
    */
    'integrationType' = undefined;
    /**
    * @member {Number} ordinal
    */
    'ordinal' = undefined;
    /**
    * @member {Number} parentIntegrationId
    */
    'parentIntegrationId' = undefined;
    /**
    * @member {String} sematextService
    */
    'sematextService' = undefined;
    /**
    * @member {Boolean} visible
    */
    'visible' = undefined;




}
