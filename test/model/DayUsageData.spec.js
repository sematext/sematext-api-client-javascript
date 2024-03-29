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
    describe('DayUsageData', function() {
      beforeEach(function() {
        instance = new SematextApiClientJavascript.DayUsageData();
      });

      it('should create an instance of DayUsageData', function() {
        // TODO: update the code to test DayUsageData
        expect(instance).to.be.a(SematextApiClientJavascript.DayUsageData);
      });

      it('should have the property countDailyDataPoints (base name: "countDailyDataPoints")', function() {
        // TODO: update the code to test the property countDailyDataPoints
        expect(instance).to.have.property('countDailyDataPoints');
        // expect(instance.countDailyDataPoints).to.be(expectedValueLiteral);
      });

      it('should have the property day (base name: "day")', function() {
        // TODO: update the code to test the property day
        expect(instance).to.have.property('day');
        // expect(instance.day).to.be(expectedValueLiteral);
      });

      it('should have the property discount (base name: "discount")', function() {
        // TODO: update the code to test the property discount
        expect(instance).to.have.property('discount');
        // expect(instance.discount).to.be(expectedValueLiteral);
      });

      it('should have the property dpmPerContainerHostQuota (base name: "dpmPerContainerHostQuota")', function() {
        // TODO: update the code to test the property dpmPerContainerHostQuota
        expect(instance).to.have.property('dpmPerContainerHostQuota');
        // expect(instance.dpmPerContainerHostQuota).to.be(expectedValueLiteral);
      });

      it('should have the property dpmPerHostQuota (base name: "dpmPerHostQuota")', function() {
        // TODO: update the code to test the property dpmPerHostQuota
        expect(instance).to.have.property('dpmPerHostQuota');
        // expect(instance.dpmPerHostQuota).to.be(expectedValueLiteral);
      });

      it('should have the property fixedMonthlyPrice (base name: "fixedMonthlyPrice")', function() {
        // TODO: update the code to test the property fixedMonthlyPrice
        expect(instance).to.have.property('fixedMonthlyPrice');
        // expect(instance.fixedMonthlyPrice).to.be(expectedValueLiteral);
      });

      it('should have the property fixedMonthlyPricePerHour (base name: "fixedMonthlyPricePerHour")', function() {
        // TODO: update the code to test the property fixedMonthlyPricePerHour
        expect(instance).to.have.property('fixedMonthlyPricePerHour');
        // expect(instance.fixedMonthlyPricePerHour).to.be(expectedValueLiteral);
      });

      it('should have the property freeContainersPerHost (base name: "freeContainersPerHost")', function() {
        // TODO: update the code to test the property freeContainersPerHost
        expect(instance).to.have.property('freeContainersPerHost');
        // expect(instance.freeContainersPerHost).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property kiloDpmOveragePricePerHour (base name: "kiloDpmOveragePricePerHour")', function() {
        // TODO: update the code to test the property kiloDpmOveragePricePerHour
        expect(instance).to.have.property('kiloDpmOveragePricePerHour');
        // expect(instance.kiloDpmOveragePricePerHour).to.be(expectedValueLiteral);
      });

      it('should have the property planType (base name: "planType")', function() {
        // TODO: update the code to test the property planType
        expect(instance).to.have.property('planType');
        // expect(instance.planType).to.be(expectedValueLiteral);
      });

      it('should have the property pricePerContainerHostHour (base name: "pricePerContainerHostHour")', function() {
        // TODO: update the code to test the property pricePerContainerHostHour
        expect(instance).to.have.property('pricePerContainerHostHour');
        // expect(instance.pricePerContainerHostHour).to.be(expectedValueLiteral);
      });

      it('should have the property pricePerContainerHour (base name: "pricePerContainerHour")', function() {
        // TODO: update the code to test the property pricePerContainerHour
        expect(instance).to.have.property('pricePerContainerHour');
        // expect(instance.pricePerContainerHour).to.be(expectedValueLiteral);
      });

      it('should have the property pricePerServerHour (base name: "pricePerServerHour")', function() {
        // TODO: update the code to test the property pricePerServerHour
        expect(instance).to.have.property('pricePerServerHour');
        // expect(instance.pricePerServerHour).to.be(expectedValueLiteral);
      });

      it('should have the property sumNumberOfContainerHosts (base name: "sumNumberOfContainerHosts")', function() {
        // TODO: update the code to test the property sumNumberOfContainerHosts
        expect(instance).to.have.property('sumNumberOfContainerHosts');
        // expect(instance.sumNumberOfContainerHosts).to.be(expectedValueLiteral);
      });

      it('should have the property sumNumberOfContainers (base name: "sumNumberOfContainers")', function() {
        // TODO: update the code to test the property sumNumberOfContainers
        expect(instance).to.have.property('sumNumberOfContainers');
        // expect(instance.sumNumberOfContainers).to.be(expectedValueLiteral);
      });

      it('should have the property sumNumberOfServers (base name: "sumNumberOfServers")', function() {
        // TODO: update the code to test the property sumNumberOfServers
        expect(instance).to.have.property('sumNumberOfServers');
        // expect(instance.sumNumberOfServers).to.be(expectedValueLiteral);
      });

      it('should have the property usageAmount (base name: "usageAmount")', function() {
        // TODO: update the code to test the property usageAmount
        expect(instance).to.have.property('usageAmount');
        // expect(instance.usageAmount).to.be(expectedValueLiteral);
      });

      it('should have the property usedPlan (base name: "usedPlan")', function() {
        // TODO: update the code to test the property usedPlan
        expect(instance).to.have.property('usedPlan');
        // expect(instance.usedPlan).to.be(expectedValueLiteral);
      });

      it('should have the property userDiscount (base name: "userDiscount")', function() {
        // TODO: update the code to test the property userDiscount
        expect(instance).to.have.property('userDiscount');
        // expect(instance.userDiscount).to.be(expectedValueLiteral);
      });

    });
  });

}));
