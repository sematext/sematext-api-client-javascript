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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../stcloud/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../stcloud/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SematextApiClientJavascript);
  }
}(this, function(expect, SematextApiClientJavascript) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('BillingInfo', function() {
      beforeEach(function() {
        instance = new SematextApiClientJavascript.BillingInfo();
      });

      it('should create an instance of BillingInfo', function() {
        // TODO: update the code to test BillingInfo
        expect(instance).to.be.a(SematextApiClientJavascript.BillingInfo);
      });

      it('should have the property creditCardId (base name: "creditCardId")', function() {
        // TODO: update the code to test the property creditCardId
        expect(instance).to.have.property('creditCardId');
        // expect(instance.creditCardId).to.be(expectedValueLiteral);
      });

      it('should have the property paymentMethod (base name: "paymentMethod")', function() {
        // TODO: update the code to test the property paymentMethod
        expect(instance).to.have.property('paymentMethod');
        // expect(instance.paymentMethod).to.be(expectedValueLiteral);
      });

      it('should have the property planId (base name: "planId")', function() {
        // TODO: update the code to test the property planId
        expect(instance).to.have.property('planId');
        // expect(instance.planId).to.be(expectedValueLiteral);
      });

    });
  });

}));
