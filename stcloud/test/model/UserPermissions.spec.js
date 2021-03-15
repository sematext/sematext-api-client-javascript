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
    instance = new SematextApiClientJavascript.UserPermissions();
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

  describe('UserPermissions', function () {
    it('should create an instance of UserPermissions', function () {
      // uncomment below and update the code to test UserPermissions
      //var instane = new SematextApiClientJavascript.UserPermissions();
      //expect(instance).to.be.a(SematextApiClientJavascript.UserPermissions);
    });

    it('should have the property canDelete (base name: "canDelete")', function () {
      // uncomment below and update the code to test the property canDelete
      //var instane = new SematextApiClientJavascript.UserPermissions();
      //expect(instance).to.be();
    });

    it('should have the property canEdit (base name: "canEdit")', function () {
      // uncomment below and update the code to test the property canEdit
      //var instane = new SematextApiClientJavascript.UserPermissions();
      //expect(instance).to.be();
    });

    it('should have the property canView (base name: "canView")', function () {
      // uncomment below and update the code to test the property canView
      //var instane = new SematextApiClientJavascript.UserPermissions();
      //expect(instance).to.be();
    });

  });

}));
