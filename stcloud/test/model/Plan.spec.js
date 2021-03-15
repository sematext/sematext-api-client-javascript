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
    instance = new SematextApiClientJavascript.Plan();
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

  describe('Plan', function () {
    it('should create an instance of Plan', function () {
      // uncomment below and update the code to test Plan
      //var instane = new SematextApiClientJavascript.Plan();
      //expect(instance).to.be.a(SematextApiClientJavascript.Plan);
    });

    it('should have the property appType (base name: "appType")', function () {
      // uncomment below and update the code to test the property appType
      //var instane = new SematextApiClientJavascript.Plan();
      //expect(instance).to.be();
    });

    it('should have the property custom (base name: "custom")', function () {
      // uncomment below and update the code to test the property custom
      //var instane = new SematextApiClientJavascript.Plan();
      //expect(instance).to.be();
    });

    it('should have the property dataRetentionHours (base name: "dataRetentionHours")', function () {
      // uncomment below and update the code to test the property dataRetentionHours
      //var instane = new SematextApiClientJavascript.Plan();
      //expect(instance).to.be();
    });

    it('should have the property defaultTrialPlan (base name: "defaultTrialPlan")', function () {
      // uncomment below and update the code to test the property defaultTrialPlan
      //var instane = new SematextApiClientJavascript.Plan();
      //expect(instance).to.be();
    });

    it('should have the property free (base name: "free")', function () {
      // uncomment below and update the code to test the property free
      //var instane = new SematextApiClientJavascript.Plan();
      //expect(instance).to.be();
    });

    it('should have the property freeTrialDays (base name: "freeTrialDays")', function () {
      // uncomment below and update the code to test the property freeTrialDays
      //var instane = new SematextApiClientJavascript.Plan();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function () {
      // uncomment below and update the code to test the property id
      //var instane = new SematextApiClientJavascript.Plan();
      //expect(instance).to.be();
    });

    it('should have the property maxAlerts (base name: "maxAlerts")', function () {
      // uncomment below and update the code to test the property maxAlerts
      //var instane = new SematextApiClientJavascript.Plan();
      //expect(instance).to.be();
    });

    it('should have the property maxDailyEvents (base name: "maxDailyEvents")', function () {
      // uncomment below and update the code to test the property maxDailyEvents
      //var instane = new SematextApiClientJavascript.Plan();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function () {
      // uncomment below and update the code to test the property name
      //var instane = new SematextApiClientJavascript.Plan();
      //expect(instance).to.be();
    });

    it('should have the property planScheme (base name: "planScheme")', function () {
      // uncomment below and update the code to test the property planScheme
      //var instane = new SematextApiClientJavascript.Plan();
      //expect(instance).to.be();
    });

    it('should have the property sematextService (base name: "sematextService")', function () {
      // uncomment below and update the code to test the property sematextService
      //var instane = new SematextApiClientJavascript.Plan();
      //expect(instance).to.be();
    });

    it('should have the property trialPlan (base name: "trialPlan")', function () {
      // uncomment below and update the code to test the property trialPlan
      //var instane = new SematextApiClientJavascript.Plan();
      //expect(instance).to.be();
    });

  });

}));
