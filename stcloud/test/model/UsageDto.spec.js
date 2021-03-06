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
    instance = new SematextApiClientJavascript.UsageDto();
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

  describe('UsageDto', function () {
    it('should create an instance of UsageDto', function () {
      // uncomment below and update the code to test UsageDto
      //var instane = new SematextApiClientJavascript.UsageDto();
      //expect(instance).to.be.a(SematextApiClientJavascript.UsageDto);
    });

    it('should have the property count (base name: "count")', function () {
      // uncomment below and update the code to test the property count
      //var instane = new SematextApiClientJavascript.UsageDto();
      //expect(instance).to.be();
    });

    it('should have the property dailyUsage (base name: "dailyUsage")', function () {
      // uncomment below and update the code to test the property dailyUsage
      //var instane = new SematextApiClientJavascript.UsageDto();
      //expect(instance).to.be();
    });

    it('should have the property dailyVolumeMB (base name: "dailyVolumeMB")', function () {
      // uncomment below and update the code to test the property dailyVolumeMB
      //var instane = new SematextApiClientJavascript.UsageDto();
      //expect(instance).to.be();
    });

    it('should have the property end (base name: "end")', function () {
      // uncomment below and update the code to test the property end
      //var instane = new SematextApiClientJavascript.UsageDto();
      //expect(instance).to.be();
    });

    it('should have the property failedCount (base name: "failedCount")', function () {
      // uncomment below and update the code to test the property failedCount
      //var instane = new SematextApiClientJavascript.UsageDto();
      //expect(instance).to.be();
    });

    it('should have the property limitChangeEvents (base name: "limitChangeEvents")', function () {
      // uncomment below and update the code to test the property limitChangeEvents
      //var instane = new SematextApiClientJavascript.UsageDto();
      //expect(instance).to.be();
    });

    it('should have the property maxAllowedMB (base name: "maxAllowedMB")', function () {
      // uncomment below and update the code to test the property maxAllowedMB
      //var instane = new SematextApiClientJavascript.UsageDto();
      //expect(instance).to.be();
    });

    it('should have the property maxLimitMB (base name: "maxLimitMB")', function () {
      // uncomment below and update the code to test the property maxLimitMB
      //var instane = new SematextApiClientJavascript.UsageDto();
      //expect(instance).to.be();
    });

    it('should have the property start (base name: "start")', function () {
      // uncomment below and update the code to test the property start
      //var instane = new SematextApiClientJavascript.UsageDto();
      //expect(instance).to.be();
    });

    it('should have the property volume (base name: "volume")', function () {
      // uncomment below and update the code to test the property volume
      //var instane = new SematextApiClientJavascript.UsageDto();
      //expect(instance).to.be();
    });

    it('should have the property volumeChangeEvents (base name: "volumeChangeEvents")', function () {
      // uncomment below and update the code to test the property volumeChangeEvents
      //var instane = new SematextApiClientJavascript.UsageDto();
      //expect(instance).to.be();
    });

  });

}));
