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

  beforeEach(function() {
    instance = new SematextApiClientJavascript.AlertNotificationsApi();
  });

  describe('(package)', function() {
    describe('AlertNotificationsApi', function() {
      describe('getAlertNotificationsForAppUsingPOST', function() {
        it('should call getAlertNotificationsForAppUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for getAlertNotificationsForAppUsingPOST call and complete the assertions
          /*

          instance.getAlertNotificationsForAppUsingPOST(body, appId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SematextApiClientJavascript.NotificationsResponse);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAlertNotificationsForUserUsingPOST', function() {
        it('should call getAlertNotificationsForUserUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for getAlertNotificationsForUserUsingPOST call and complete the assertions
          /*

          instance.getAlertNotificationsForUserUsingPOST(body).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SematextApiClientJavascript.NotificationsResponse);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
