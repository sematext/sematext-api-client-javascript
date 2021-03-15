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
    instance = new SematextApiClientJavascript.SubscriptionDashboardDto();
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

  describe('SubscriptionDashboardDto', function () {
    it('should create an instance of SubscriptionDashboardDto', function () {
      // uncomment below and update the code to test SubscriptionDashboardDto
      //var instane = new SematextApiClientJavascript.SubscriptionDashboardDto();
      //expect(instance).to.be.a(SematextApiClientJavascript.SubscriptionDashboardDto);
    });

    it('should have the property addresses (base name: "addresses")', function () {
      // uncomment below and update the code to test the property addresses
      //var instane = new SematextApiClientJavascript.SubscriptionDashboardDto();
      //expect(instance).to.be();
    });

    it('should have the property dashboardId (base name: "dashboardId")', function () {
      // uncomment below and update the code to test the property dashboardId
      //var instane = new SematextApiClientJavascript.SubscriptionDashboardDto();
      //expect(instance).to.be();
    });

    it('should have the property enable (base name: "enable")', function () {
      // uncomment below and update the code to test the property enable
      //var instane = new SematextApiClientJavascript.SubscriptionDashboardDto();
      //expect(instance).to.be();
    });

    it('should have the property filters (base name: "filters")', function () {
      // uncomment below and update the code to test the property filters
      //var instane = new SematextApiClientJavascript.SubscriptionDashboardDto();
      //expect(instance).to.be();
    });

    it('should have the property frequency (base name: "frequency")', function () {
      // uncomment below and update the code to test the property frequency
      //var instane = new SematextApiClientJavascript.SubscriptionDashboardDto();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function () {
      // uncomment below and update the code to test the property id
      //var instane = new SematextApiClientJavascript.SubscriptionDashboardDto();
      //expect(instance).to.be();
    });

    it('should have the property reportName (base name: "reportName")', function () {
      // uncomment below and update the code to test the property reportName
      //var instane = new SematextApiClientJavascript.SubscriptionDashboardDto();
      //expect(instance).to.be();
    });

    it('should have the property sendTime (base name: "sendTime")', function () {
      // uncomment below and update the code to test the property sendTime
      //var instane = new SematextApiClientJavascript.SubscriptionDashboardDto();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function () {
      // uncomment below and update the code to test the property subject
      //var instane = new SematextApiClientJavascript.SubscriptionDashboardDto();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function () {
      // uncomment below and update the code to test the property text
      //var instane = new SematextApiClientJavascript.SubscriptionDashboardDto();
      //expect(instance).to.be();
    });

    it('should have the property timeRange (base name: "timeRange")', function () {
      // uncomment below and update the code to test the property timeRange
      //var instane = new SematextApiClientJavascript.SubscriptionDashboardDto();
      //expect(instance).to.be();
    });

  });

}));
