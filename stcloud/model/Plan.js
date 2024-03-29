/*
 * Sematext Cloud API
 * API Explorer provides access and documentation for Sematext REST API. The REST API requires the API Key to be sent as part of `Authorization` header. E.g.: `Authorization : apiKey e5f18450-205a-48eb-8589-7d49edaea813`.
 *
 * OpenAPI spec version: v3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The Plan model module.
 * @module model/Plan
 * @version 0.5.0
 */
export class Plan {
  /**
   * Constructs a new <code>Plan</code>.
   * @alias module:model/Plan
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Plan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Plan} obj Optional instance to populate.
   * @return {module:model/Plan} The populated <code>Plan</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Plan();
      if (data.hasOwnProperty('appType'))
        obj.appType = ApiClient.convertToType(data['appType'], 'String');
      if (data.hasOwnProperty('custom'))
        obj.custom = ApiClient.convertToType(data['custom'], 'Boolean');
      if (data.hasOwnProperty('dataRetentionHours'))
        obj.dataRetentionHours = ApiClient.convertToType(data['dataRetentionHours'], 'Number');
      if (data.hasOwnProperty('defaultTrialPlan'))
        obj.defaultTrialPlan = ApiClient.convertToType(data['defaultTrialPlan'], 'Boolean');
      if (data.hasOwnProperty('free'))
        obj.free = ApiClient.convertToType(data['free'], 'Boolean');
      if (data.hasOwnProperty('freeTrialDays'))
        obj.freeTrialDays = ApiClient.convertToType(data['freeTrialDays'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('maxAlerts'))
        obj.maxAlerts = ApiClient.convertToType(data['maxAlerts'], 'Number');
      if (data.hasOwnProperty('maxDailyEvents'))
        obj.maxDailyEvents = ApiClient.convertToType(data['maxDailyEvents'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('planScheme'))
        obj.planScheme = ApiClient.convertToType(data['planScheme'], 'String');
      if (data.hasOwnProperty('sematextService'))
        obj.sematextService = ApiClient.convertToType(data['sematextService'], 'String');
      if (data.hasOwnProperty('trialPlan'))
        obj.trialPlan = ApiClient.convertToType(data['trialPlan'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} appType
 */
Plan.prototype.appType = undefined;

/**
 * @member {Boolean} custom
 */
Plan.prototype.custom = undefined;

/**
 * @member {Number} dataRetentionHours
 */
Plan.prototype.dataRetentionHours = undefined;

/**
 * @member {Boolean} defaultTrialPlan
 */
Plan.prototype.defaultTrialPlan = undefined;

/**
 * @member {Boolean} free
 */
Plan.prototype.free = undefined;

/**
 * @member {Number} freeTrialDays
 */
Plan.prototype.freeTrialDays = undefined;

/**
 * @member {Number} id
 */
Plan.prototype.id = undefined;

/**
 * @member {Number} maxAlerts
 */
Plan.prototype.maxAlerts = undefined;

/**
 * @member {Number} maxDailyEvents
 */
Plan.prototype.maxDailyEvents = undefined;

/**
 * @member {String} name
 */
Plan.prototype.name = undefined;

/**
 * Allowed values for the <code>planScheme</code> property.
 * @enum {String}
 * @readonly
 */
Plan.PlanSchemeEnum = {
  /**
   * value: "SPM_1_0"
   * @const
   */
  sPM10: "SPM_1_0",

  /**
   * value: "SPM_2_0"
   * @const
   */
  sPM20: "SPM_2_0",

  /**
   * value: "SEARCHENE_1_0"
   * @const
   */
  sEARCHENE10: "SEARCHENE_1_0",

  /**
   * value: "LOGSENE_1_0"
   * @const
   */
  lOGSENE10: "LOGSENE_1_0",

  /**
   * value: "LOGSENE_2_0"
   * @const
   */
  lOGSENE20: "LOGSENE_2_0",

  /**
   * value: "RUM_1_0"
   * @const
   */
  rUM10: "RUM_1_0",

  /**
   * value: "RUM_1_1"
   * @const
   */
  rUM11: "RUM_1_1",

  /**
   * value: "RUM_EA"
   * @const
   */
  RUM_EA: "RUM_EA",

  /**
   * value: "SYNTHETICS_EA"
   * @const
   */
  SYNTHETICS_EA: "SYNTHETICS_EA",

  /**
   * value: "SYNTHETICS_1_0"
   * @const
   */
  sYNTHETICS10: "SYNTHETICS_1_0",

  /**
   * value: "BUGZ_EA"
   * @const
   */
  BUGZ_EA: "BUGZ_EA"
};
/**
 * @member {module:model/Plan.PlanSchemeEnum} planScheme
 */
Plan.prototype.planScheme = undefined;

/**
 * Allowed values for the <code>sematextService</code> property.
 * @enum {String}
 * @readonly
 */
Plan.SematextServiceEnum = {
  /**
   * value: "LOGSENE"
   * @const
   */
  LOGSENE: "LOGSENE",

  /**
   * value: "SPM"
   * @const
   */
  SPM: "SPM",

  /**
   * value: "RUM"
   * @const
   */
  RUM: "RUM",

  /**
   * value: "SYNTHETICS"
   * @const
   */
  SYNTHETICS: "SYNTHETICS"
};
/**
 * @member {module:model/Plan.SematextServiceEnum} sematextService
 */
Plan.prototype.sematextService = undefined;

/**
 * @member {Boolean} trialPlan
 */
Plan.prototype.trialPlan = undefined;

