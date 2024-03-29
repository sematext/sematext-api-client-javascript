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
 * The CloudWatchSettings model module.
 * @module model/CloudWatchSettings
 * @version 0.5.0
 */
export class CloudWatchSettings {
  /**
   * Constructs a new <code>CloudWatchSettings</code>.
   * @alias module:model/CloudWatchSettings
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CloudWatchSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CloudWatchSettings} obj Optional instance to populate.
   * @return {module:model/CloudWatchSettings} The populated <code>CloudWatchSettings</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CloudWatchSettings();
      if (data.hasOwnProperty('accessKey'))
        obj.accessKey = ApiClient.convertToType(data['accessKey'], 'String');
      if (data.hasOwnProperty('fetchFrequency'))
        obj.fetchFrequency = ApiClient.convertToType(data['fetchFrequency'], 'String');
      if (data.hasOwnProperty('region'))
        obj.region = ApiClient.convertToType(data['region'], 'String');
      if (data.hasOwnProperty('secretKey'))
        obj.secretKey = ApiClient.convertToType(data['secretKey'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} accessKey
 */
CloudWatchSettings.prototype.accessKey = undefined;

/**
 * Allowed values for the <code>fetchFrequency</code> property.
 * @enum {String}
 * @readonly
 */
CloudWatchSettings.FetchFrequencyEnum = {
  /**
   * value: "MINUTE"
   * @const
   */
  MINUTE: "MINUTE",

  /**
   * value: "FIVE_MINUTES"
   * @const
   */
  FIVE_MINUTES: "FIVE_MINUTES",

  /**
   * value: "FIFTEEN_MINUTES"
   * @const
   */
  FIFTEEN_MINUTES: "FIFTEEN_MINUTES"
};
/**
 * @member {module:model/CloudWatchSettings.FetchFrequencyEnum} fetchFrequency
 */
CloudWatchSettings.prototype.fetchFrequency = undefined;

/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */
CloudWatchSettings.RegionEnum = {
  /**
   * value: "US_EAST_1"
   * @const
   */
  uSEAST1: "US_EAST_1",

  /**
   * value: "US_WEST_1"
   * @const
   */
  uSWEST1: "US_WEST_1",

  /**
   * value: "EU_WEST_1"
   * @const
   */
  eUWEST1: "EU_WEST_1",

  /**
   * value: "US_WEST_2"
   * @const
   */
  uSWEST2: "US_WEST_2",

  /**
   * value: "AP_SOUTHEAST_1"
   * @const
   */
  aPSOUTHEAST1: "AP_SOUTHEAST_1",

  /**
   * value: "AP_SOUTHEAST_2"
   * @const
   */
  aPSOUTHEAST2: "AP_SOUTHEAST_2",

  /**
   * value: "AP_NORTHEAST_1"
   * @const
   */
  aPNORTHEAST1: "AP_NORTHEAST_1",

  /**
   * value: "SA_EAST_1"
   * @const
   */
  sAEAST1: "SA_EAST_1",

  /**
   * value: "GovCloud"
   * @const
   */
  govCloud: "GovCloud",

  /**
   * value: "CN_NORTH_1"
   * @const
   */
  cNNORTH1: "CN_NORTH_1",

  /**
   * value: "US_EAST_2"
   * @const
   */
  uSEAST2: "US_EAST_2",

  /**
   * value: "AP_SOUTH_1"
   * @const
   */
  aPSOUTH1: "AP_SOUTH_1",

  /**
   * value: "AP_NORTHEAST_2"
   * @const
   */
  aPNORTHEAST2: "AP_NORTHEAST_2",

  /**
   * value: "CA_CENTRAL_1"
   * @const
   */
  cACENTRAL1: "CA_CENTRAL_1",

  /**
   * value: "EU_CENTRAL_1"
   * @const
   */
  eUCENTRAL1: "EU_CENTRAL_1",

  /**
   * value: "EU_WEST_2"
   * @const
   */
  eUWEST2: "EU_WEST_2"
};
/**
 * @member {module:model/CloudWatchSettings.RegionEnum} region
 */
CloudWatchSettings.prototype.region = undefined;

/**
 * @member {String} secretKey
 */
CloudWatchSettings.prototype.secretKey = undefined;

