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
    instance = new SematextApiClientJavascript.UserRole();
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

  describe('UserRole', function () {
    it('should create an instance of UserRole', function () {
      // uncomment below and update the code to test UserRole
      //var instane = new SematextApiClientJavascript.UserRole();
      //expect(instance).to.be.a(SematextApiClientJavascript.UserRole);
    });

    it('should have the property role (base name: "role")', function () {
      // uncomment below and update the code to test the property role
      //var instane = new SematextApiClientJavascript.UserRole();
      //expect(instance).to.be();
    });

    it('should have the property roleStatus (base name: "roleStatus")', function () {
      // uncomment below and update the code to test the property roleStatus
      //var instane = new SematextApiClientJavascript.UserRole();
      //expect(instance).to.be();
    });

    it('should have the property userEmail (base name: "userEmail")', function () {
      // uncomment below and update the code to test the property userEmail
      //var instane = new SematextApiClientJavascript.UserRole();
      //expect(instance).to.be();
    });

  });

}));
