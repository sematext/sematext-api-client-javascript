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
    instance = new SematextApiClientJavascript.AppsApi();
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

  describe('AppsApi', function () {
    describe('deleteUsingDELETE1', function () {
      it('should call deleteUsingDELETE1 successfully', function (done) {
        //uncomment below and update the code to test deleteUsingDELETE1
        //instance.deleteUsingDELETE1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAppTypesUsingGET1', function () {
      it('should call getAppTypesUsingGET1 successfully', function (done) {
        //uncomment below and update the code to test getAppTypesUsingGET1
        //instance.getAppTypesUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUsingGET1', function () {
      it('should call getUsingGET1 successfully', function (done) {
        //uncomment below and update the code to test getUsingGET1
        //instance.getUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('inviteAppGuestsUsingPOST1', function () {
      it('should call inviteAppGuestsUsingPOST1 successfully', function (done) {
        //uncomment below and update the code to test inviteAppGuestsUsingPOST1
        //instance.inviteAppGuestsUsingPOST1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAppsUsersUsingGET1', function () {
      it('should call listAppsUsersUsingGET1 successfully', function (done) {
        //uncomment below and update the code to test listAppsUsersUsingGET1
        //instance.listAppsUsersUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listUsingGET', function () {
      it('should call listUsingGET successfully', function (done) {
        //uncomment below and update the code to test listUsingGET
        //instance.listUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDescriptionUsingPUT1', function () {
      it('should call updateDescriptionUsingPUT1 successfully', function (done) {
        //uncomment below and update the code to test updateDescriptionUsingPUT1
        //instance.updateDescriptionUsingPUT1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUsingPUT3', function () {
      it('should call updateUsingPUT3 successfully', function (done) {
        //uncomment below and update the code to test updateUsingPUT3
        //instance.updateUsingPUT3(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));