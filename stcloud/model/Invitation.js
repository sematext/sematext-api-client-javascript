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
import App from './App';

/**
* The Invitation model module.
* @module model/Invitation
* @version 0.1.0
*/
export default class Invitation {
    /**
    * Constructs a new <code>Invitation</code>.
    * @alias module:model/Invitation
    * @class
    */

    constructor() {



    }

    /**
    * Constructs a <code>Invitation</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Invitation} obj Optional instance to populate.
    * @return {module:model/Invitation} The populated <code>Invitation</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Invitation();


            if (data.hasOwnProperty('app')) {
                obj['app'] = App.constructFromObject(data['app']);
            }
            if (data.hasOwnProperty('apps')) {
                obj['apps'] = ApiClient.convertToType(data['apps'], [App]);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('inviteDate')) {
                obj['inviteDate'] = ApiClient.convertToType(data['inviteDate'], 'Date');
            }
            if (data.hasOwnProperty('inviteStatus')) {
                obj['inviteStatus'] = ApiClient.convertToType(data['inviteStatus'], 'String');
            }
            if (data.hasOwnProperty('inviteeEmail')) {
                obj['inviteeEmail'] = ApiClient.convertToType(data['inviteeEmail'], 'String');
            }
            if (data.hasOwnProperty('inviteeRole')) {
                obj['inviteeRole'] = ApiClient.convertToType(data['inviteeRole'], 'String');
            }
            if (data.hasOwnProperty('inviteeStatus')) {
                obj['inviteeStatus'] = ApiClient.convertToType(data['inviteeStatus'], 'String');
            }
            if (data.hasOwnProperty('inviterEmail')) {
                obj['inviterEmail'] = ApiClient.convertToType(data['inviterEmail'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/App} app
    */
    'app' = undefined;
    /**
    * For invite request, only apps.id needs to be set.
    * @member {Array.<module:model/App>} apps
    */
    'apps' = undefined;
    /**
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * @member {Date} inviteDate
    */
    'inviteDate' = undefined;
    /**
    * @member {module:model/Invitation.InviteStatusEnum} inviteStatus
    */
    'inviteStatus' = undefined;
    /**
    * @member {String} inviteeEmail
    */
    'inviteeEmail' = undefined;
    /**
    * @member {module:model/Invitation.InviteeRoleEnum} inviteeRole
    */
    'inviteeRole' = undefined;
    /**
    * @member {module:model/Invitation.InviteeStatusEnum} inviteeStatus
    */
    'inviteeStatus' = undefined;
    /**
    * @member {String} inviterEmail
    */
    'inviterEmail' = undefined;
    /**
    * @member {String} uuid
    */
    'uuid' = undefined;



    /**
    * Allowed values for the <code>inviteStatus</code> property.
    * @enum {String}
    * @readonly
    */
    static InviteStatusEnum = {
        /**
         * value: "PENDING"
         * @const
         */
        "PENDING": "PENDING",
        /**
         * value: "ACCEPTED"
         * @const
         */
        "ACCEPTED": "ACCEPTED",
        /**
         * value: "CANCELLED"
         * @const
         */
        "CANCELLED": "CANCELLED",
        /**
         * value: "DECLINED"
         * @const
         */
        "DECLINED": "DECLINED"
    };
    /**
    * Allowed values for the <code>inviteeRole</code> property.
    * @enum {String}
    * @readonly
    */
    static InviteeRoleEnum = {
        /**
         * value: "SUPER_USER"
         * @const
         */
        "SUPER_USER": "SUPER_USER",
        /**
         * value: "OWNER"
         * @const
         */
        "OWNER": "OWNER",
        /**
         * value: "ADMIN"
         * @const
         */
        "ADMIN": "ADMIN",
        /**
         * value: "USER"
         * @const
         */
        "USER": "USER",
        /**
         * value: "DEMO"
         * @const
         */
        "DEMO": "DEMO",
        /**
         * value: "ANONYMOUS"
         * @const
         */
        "ANONYMOUS": "ANONYMOUS"
    };
    /**
    * Allowed values for the <code>inviteeStatus</code> property.
    * @enum {String}
    * @readonly
    */
    static InviteeStatusEnum = {
        /**
         * value: "INACTIVE"
         * @const
         */
        "INACTIVE": "INACTIVE",
        /**
         * value: "ACTIVE"
         * @const
         */
        "ACTIVE": "ACTIVE"
    };

}
