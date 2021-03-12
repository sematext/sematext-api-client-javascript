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
    instance = new SematextApiClientJavascript.ServiceIntegration();
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

  describe('ServiceIntegration', function () {
    it('should create an instance of ServiceIntegration', function () {
      // uncomment below and update the code to test ServiceIntegration
      //var instane = new SematextApiClientJavascript.ServiceIntegration();
      //expect(instance).to.be.a(SematextApiClientJavascript.ServiceIntegration);
    });

    it('should have the property appTypeId (base name: "appTypeId")', function () {
      // uncomment below and update the code to test the property appTypeId
      //var instane = new SematextApiClientJavascript.ServiceIntegration();
      //expect(instance).to.be();
    });

    it('should have the property appTypeName (base name: "appTypeName")', function () {
      // uncomment below and update the code to test the property appTypeName
      //var instane = new SematextApiClientJavascript.ServiceIntegration();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function () {
      // uncomment below and update the code to test the property displayName
      //var instane = new SematextApiClientJavascript.ServiceIntegration();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function () {
      // uncomment below and update the code to test the property enabled
      //var instane = new SematextApiClientJavascript.ServiceIntegration();
      //expect(instance).to.be();
    });

    it('should have the property externalProductId (base name: "externalProductId")', function () {
      // uncomment below and update the code to test the property externalProductId
      //var instane = new SematextApiClientJavascript.ServiceIntegration();
      //expect(instance).to.be();
    });

    it('should have the property externalProductName (base name: "externalProductName")', function () {
      // uncomment below and update the code to test the property externalProductName
      //var instane = new SematextApiClientJavascript.ServiceIntegration();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function () {
      // uncomment below and update the code to test the property id
      //var instane = new SematextApiClientJavascript.ServiceIntegration();
      //expect(instance).to.be();
    });

    it('should have the property integrationType (base name: "integrationType")', function () {
      // uncomment below and update the code to test the property integrationType
      //var instane = new SematextApiClientJavascript.ServiceIntegration();
      //expect(instance).to.be();
    });

    it('should have the property ordinal (base name: "ordinal")', function () {
      // uncomment below and update the code to test the property ordinal
      //var instane = new SematextApiClientJavascript.ServiceIntegration();
      //expect(instance).to.be();
    });

    it('should have the property parentIntegrationId (base name: "parentIntegrationId")', function () {
      // uncomment below and update the code to test the property parentIntegrationId
      //var instane = new SematextApiClientJavascript.ServiceIntegration();
      //expect(instance).to.be();
    });

    it('should have the property sematextService (base name: "sematextService")', function () {
      // uncomment below and update the code to test the property sematextService
      //var instane = new SematextApiClientJavascript.ServiceIntegration();
      //expect(instance).to.be();
    });

    it('should have the property visible (base name: "visible")', function () {
      // uncomment below and update the code to test the property visible
      //var instane = new SematextApiClientJavascript.ServiceIntegration();
      //expect(instance).to.be();
    });

  });

}));
