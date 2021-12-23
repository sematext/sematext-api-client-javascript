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
;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../stcloud/index'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../stcloud/index'))
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SematextApiClientJavascript)
  }
})(this, function (expect, SematextApiClientJavascript) {
  'use strict'

  var instance

  describe('(package)', function () {
    describe('AlertRulesResponseEntry', function () {
      beforeEach(function () {
        instance = new SematextApiClientJavascript.AlertRulesResponseEntry()
      })

      it('should create an instance of AlertRulesResponseEntry', function () {
        // TODO: update the code to test AlertRulesResponseEntry
        expect(instance).to.be.a(
          SematextApiClientJavascript.AlertRulesResponseEntry
        )
      })

      it('should have the property alertRules (base name: "alertRules")', function () {
        // TODO: update the code to test the property alertRules
        expect(instance).to.have.property('alertRules')
        // expect(instance.alertRules).to.be(expectedValueLiteral);
      })
    })
  })
})
