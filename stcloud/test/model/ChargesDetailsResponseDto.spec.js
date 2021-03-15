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
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SematextApiClientJavascript);
  }
}(this, function (expect, SematextApiClientJavascript) {
  'use strict';

  var instance;

  beforeEach(function () {
    instance = new SematextApiClientJavascript.ChargesDetailsResponseDto();
  });

  var getProperty = function (object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function (object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ChargesDetailsResponseDto', function () {
    it('should create an instance of ChargesDetailsResponseDto', function () {
      // uncomment below and update the code to test ChargesDetailsResponseDto
      //var instane = new SematextApiClientJavascript.ChargesDetailsResponseDto();
      //expect(instance).to.be.a(SematextApiClientJavascript.ChargesDetailsResponseDto);
    });

    it('should have the property app (base name: "app")', function () {
      // uncomment below and update the code to test the property app
      //var instane = new SematextApiClientJavascript.ChargesDetailsResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property chargeBase (base name: "chargeBase")', function () {
      // uncomment below and update the code to test the property chargeBase
      //var instane = new SematextApiClientJavascript.ChargesDetailsResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property dayUsageData (base name: "dayUsageData")', function () {
      // uncomment below and update the code to test the property dayUsageData
      //var instane = new SematextApiClientJavascript.ChargesDetailsResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property monthlyFeeAmount (base name: "monthlyFeeAmount")', function () {
      // uncomment below and update the code to test the property monthlyFeeAmount
      //var instane = new SematextApiClientJavascript.ChargesDetailsResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property periodFeePeriods (base name: "periodFeePeriods")', function () {
      // uncomment below and update the code to test the property periodFeePeriods
      //var instane = new SematextApiClientJavascript.ChargesDetailsResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property totalAmount (base name: "totalAmount")', function () {
      // uncomment below and update the code to test the property totalAmount
      //var instane = new SematextApiClientJavascript.ChargesDetailsResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property usageAmount (base name: "usageAmount")', function () {
      // uncomment below and update the code to test the property usageAmount
      //var instane = new SematextApiClientJavascript.ChargesDetailsResponseDto();
      //expect(instance).to.be();
    });

  });

}));
