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
    describe('UserPermissions', function() {
      beforeEach(function() {
        instance = new SematextApiClientJavascript.UserPermissions();
      });

      it('should create an instance of UserPermissions', function() {
        // TODO: update the code to test UserPermissions
        expect(instance).to.be.a(SematextApiClientJavascript.UserPermissions);
      });

      it('should have the property canDelete (base name: "canDelete")', function() {
        // TODO: update the code to test the property canDelete
        expect(instance).to.have.property('canDelete');
        // expect(instance.canDelete).to.be(expectedValueLiteral);
      });

      it('should have the property canEdit (base name: "canEdit")', function() {
        // TODO: update the code to test the property canEdit
        expect(instance).to.have.property('canEdit');
        // expect(instance.canEdit).to.be(expectedValueLiteral);
      });

      it('should have the property canView (base name: "canView")', function() {
        // TODO: update the code to test the property canView
        expect(instance).to.have.property('canView');
        // expect(instance.canView).to.be(expectedValueLiteral);
      });

    });
  });

}));
