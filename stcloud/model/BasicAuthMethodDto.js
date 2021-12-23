/*
 * Sematext Cloud API
 * API Explorer provides access and documentation for Sematext REST API. The REST API requires the API Key to be sent as part of `Authorization` header. E.g.: `Authorization : apiKey e5f18450-205a-48eb-8589-7d49edaea813`.
 *
 * OpenAPI spec version: v3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.30
 *
 * Do not edit the class manually.
 *
 */
import { ApiClient } from '../ApiClient'

/**
 * The BasicAuthMethodDto model module.
 * @module model/BasicAuthMethodDto
 * @version 0.4.0
 */
export class BasicAuthMethodDto {
  /**
   * Constructs a new <code>BasicAuthMethodDto</code>.
   * @alias module:model/BasicAuthMethodDto
   * @class
   */
  constructor () {}

  /**
   * Constructs a <code>BasicAuthMethodDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BasicAuthMethodDto} obj Optional instance to populate.
   * @return {module:model/BasicAuthMethodDto} The populated <code>BasicAuthMethodDto</code> instance.
   */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new BasicAuthMethodDto()
      if (data.hasOwnProperty('authType'))
        obj.authType = ApiClient.convertToType(data['authType'], 'String')
      if (data.hasOwnProperty('uuid'))
        obj.uuid = ApiClient.convertToType(data['uuid'], 'String')
    }
    return obj
  }
}

/**
 * Allowed values for the <code>authType</code> property.
 * @enum {String}
 * @readonly
 */
BasicAuthMethodDto.AuthTypeEnum = {
  /**
   * value: "SEMATEXT_ACCOUNT"
   * @const
   */
  SEMATEXT_ACCOUNT: 'SEMATEXT_ACCOUNT',

  /**
   * value: "LDAP"
   * @const
   */
  LDAP: 'LDAP'
}
/**
 * @member {module:model/BasicAuthMethodDto.AuthTypeEnum} authType
 */
BasicAuthMethodDto.prototype.authType = undefined

/**
 * @member {String} uuid
 */
BasicAuthMethodDto.prototype.uuid = undefined
