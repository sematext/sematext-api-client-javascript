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
import {Error} from './Error';
import {MailReportResponseResponseEntry} from './MailReportResponseResponseEntry';

/**
 * The MailReportResponse model module.
 * @module model/MailReportResponse
 * @version 0.5.0
 */
export class MailReportResponse {
  /**
   * Constructs a new <code>MailReportResponse</code>.
   * @alias module:model/MailReportResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MailReportResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MailReportResponse} obj Optional instance to populate.
   * @return {module:model/MailReportResponse} The populated <code>MailReportResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MailReportResponse();
      if (data.hasOwnProperty('data'))
        obj.data = MailReportResponseResponseEntry.constructFromObject(data['data']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error]);
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {module:model/MailReportResponseResponseEntry} data
 */
MailReportResponse.prototype.data = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
MailReportResponse.prototype.errors = undefined;

/**
 * @member {String} message
 */
MailReportResponse.prototype.message = undefined;

/**
 * @member {Boolean} success
 */
MailReportResponse.prototype.success = undefined;

