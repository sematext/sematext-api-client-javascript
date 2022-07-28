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
    describe('Subscription', function() {
      beforeEach(function() {
        instance = new SematextApiClientJavascript.Subscription();
      });

      it('should create an instance of Subscription', function() {
        // TODO: update the code to test Subscription
        expect(instance).to.be.a(SematextApiClientJavascript.Subscription);
      });

      it('should have the property additionalParams (base name: "additionalParams")', function() {
        // TODO: update the code to test the property additionalParams
        expect(instance).to.have.property('additionalParams');
        // expect(instance.additionalParams).to.be(expectedValueLiteral);
      });

      it('should have the property addresses (base name: "addresses")', function() {
        // TODO: update the code to test the property addresses
        expect(instance).to.have.property('addresses');
        // expect(instance.addresses).to.be(expectedValueLiteral);
      });

      it('should have the property createdBy (base name: "createdBy")', function() {
        // TODO: update the code to test the property createdBy
        expect(instance).to.have.property('createdBy');
        // expect(instance.createdBy).to.be(expectedValueLiteral);
      });

      it('should have the property dashboardId (base name: "dashboardId")', function() {
        // TODO: update the code to test the property dashboardId
        expect(instance).to.have.property('dashboardId');
        // expect(instance.dashboardId).to.be(expectedValueLiteral);
      });

      it('should have the property dashboardName (base name: "dashboardName")', function() {
        // TODO: update the code to test the property dashboardName
        expect(instance).to.have.property('dashboardName');
        // expect(instance.dashboardName).to.be(expectedValueLiteral);
      });

      it('should have the property enabled (base name: "enabled")', function() {
        // TODO: update the code to test the property enabled
        expect(instance).to.have.property('enabled');
        // expect(instance.enabled).to.be(expectedValueLiteral);
      });

      it('should have the property filters (base name: "filters")', function() {
        // TODO: update the code to test the property filters
        expect(instance).to.have.property('filters');
        // expect(instance.filters).to.be(expectedValueLiteral);
      });

      it('should have the property frequency (base name: "frequency")', function() {
        // TODO: update the code to test the property frequency
        expect(instance).to.have.property('frequency');
        // expect(instance.frequency).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property nextSendDate (base name: "nextSendDate")', function() {
        // TODO: update the code to test the property nextSendDate
        expect(instance).to.have.property('nextSendDate');
        // expect(instance.nextSendDate).to.be(expectedValueLiteral);
      });

      it('should have the property subject (base name: "subject")', function() {
        // TODO: update the code to test the property subject
        expect(instance).to.have.property('subject');
        // expect(instance.subject).to.be(expectedValueLiteral);
      });

      it('should have the property systemId (base name: "systemId")', function() {
        // TODO: update the code to test the property systemId
        expect(instance).to.have.property('systemId');
        // expect(instance.systemId).to.be(expectedValueLiteral);
      });

      it('should have the property systemName (base name: "systemName")', function() {
        // TODO: update the code to test the property systemName
        expect(instance).to.have.property('systemName');
        // expect(instance.systemName).to.be(expectedValueLiteral);
      });

      it('should have the property text (base name: "text")', function() {
        // TODO: update the code to test the property text
        expect(instance).to.have.property('text');
        // expect(instance.text).to.be(expectedValueLiteral);
      });

      it('should have the property timeRange (base name: "timeRange")', function() {
        // TODO: update the code to test the property timeRange
        expect(instance).to.have.property('timeRange');
        // expect(instance.timeRange).to.be(expectedValueLiteral);
      });

      it('should have the property userPermissions (base name: "userPermissions")', function() {
        // TODO: update the code to test the property userPermissions
        expect(instance).to.have.property('userPermissions');
        // expect(instance.userPermissions).to.be(expectedValueLiteral);
      });

    });
  });

}));
