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
    describe('EventDto', function() {
      beforeEach(function() {
        instance = new SematextApiClientJavascript.EventDto();
      });

      it('should create an instance of EventDto', function() {
        // TODO: update the code to test EventDto
        expect(instance).to.be.a(SematextApiClientJavascript.EventDto);
      });

      it('should have the property from (base name: "from")', function() {
        // TODO: update the code to test the property from
        expect(instance).to.have.property('from');
        // expect(instance.from).to.be(expectedValueLiteral);
      });

      it('should have the property to (base name: "to")', function() {
        // TODO: update the code to test the property to
        expect(instance).to.have.property('to');
        // expect(instance.to).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));
