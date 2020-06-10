# Sematext Cloud - API Client - sematext-api-javascript

This client code talks to [Sematext Cloud API](https://sematext.com/cloud/) providing a way to automate setup of solution monitoring.<br>
It's primary purpose is as a client module supporting [Sematext Terraform Provider](https://github.com/sematext/terraform-provider-sematext)
<br><br>

Further information and API browsing refer to the [Sematext Cloud API web page](https://sematext.com/docs/api/) 


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install sematext-api-client-javascript --save
```

#### git
#

```shell
    npm install sematext/sematext-api-client-javascript --save
```


### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```



### Authentication

This client code requires a Sematext API Access token to function. You can find this by logging into your [Sematext Cloud Account](https://apps.sematext.com/ui/account/api)


Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SematextApiClientJavascript = require('sematext-api-client-javascript');

var defaultClient = SematextApiClientJavascript.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['Authorization'] = "Token"

var api = new SematextApiClientJavascript.AlertNotificationsApi()

var appId = 789; // {Number} appId

var timeInterval = new SematextApiClientJavascript.AlertNotificationRequest(); // {AlertNotificationRequest} Time Interval

api.getAlertNotificationsForAppUsingPOST(appId, timeInterval).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Testing

Note: Tests are currently inhibited by a Mocha dependancy on Yargs.
This client is generated code so this should have litle impact.
Marking as a pre-release until this can be resolved. 


## Documentation for API Endpoints

All URIs are relative to *https://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SematextApiClientJavascript.AlertNotificationsApi* | [**getAlertNotificationsForAppUsingPOST**](docs/AlertNotificationsApi.md#getAlertNotificationsForAppUsingPOST) | **POST** /users-web/api/v3/apps/{appId}/notifications/alerts | Get alert notifications for an app
*SematextApiClientJavascript.AlertNotificationsApi* | [**getAlertNotificationsForUserUsingPOST**](docs/AlertNotificationsApi.md#getAlertNotificationsForUserUsingPOST) | **POST** /users-web/api/v3/notifications/alerts | Get alert notifications for a user
*SematextApiClientJavascript.AlertsApi* | [**createAlertUsingPOST**](docs/AlertsApi.md#createAlertUsingPOST) | **POST** /users-web/api/v3/alerts | Create alert rule
*SematextApiClientJavascript.AlertsApi* | [**deleteAlertRuleUsingDELETE**](docs/AlertsApi.md#deleteAlertRuleUsingDELETE) | **DELETE** /users-web/api/v3/alerts/{updateableAlertId} | Delete alert rule
*SematextApiClientJavascript.AlertsApi* | [**disableAlertRuleUsingPUT**](docs/AlertsApi.md#disableAlertRuleUsingPUT) | **PUT** /users-web/api/v3/alerts/{updateableAlertId}/disable | Disable alert rule
*SematextApiClientJavascript.AlertsApi* | [**enableAlertRuleUsingPUT**](docs/AlertsApi.md#enableAlertRuleUsingPUT) | **PUT** /users-web/api/v3/alerts/{updateableAlertId}/enable | Enable alert rule
*SematextApiClientJavascript.AlertsApi* | [**getAlertRulesForAppUsingGET**](docs/AlertsApi.md#getAlertRulesForAppUsingGET) | **GET** /users-web/api/v3/apps/{appId}/alerts | Get alert rules for an app
*SematextApiClientJavascript.AppsApi* | [**getAppTypesUsingGET**](docs/AppsApi.md#getAppTypesUsingGET) | **GET** /users-web/api/v3/apps/types | Get all App types supported for the account identified with apiKey
*SematextApiClientJavascript.AppsApi* | [**getUsingGET**](docs/AppsApi.md#getUsingGET) | **GET** /users-web/api/v3/apps/{anyStateAppId} | Gets defails for one particular App
*SematextApiClientJavascript.AppsApi* | [**inviteAppGuestsUsingPOST**](docs/AppsApi.md#inviteAppGuestsUsingPOST) | **POST** /users-web/api/v3/apps/guests | Invite guests to an app
*SematextApiClientJavascript.AppsApi* | [**listAppsUsersUsingGET**](docs/AppsApi.md#listAppsUsersUsingGET) | **GET** /users-web/api/v3/apps/users | Get all users of apps accessible to this account
*SematextApiClientJavascript.AppsApi* | [**listUsingGET**](docs/AppsApi.md#listUsingGET) | **GET** /users-web/api/v3/apps | Get all apps accessible by account identified with apiKey
*SematextApiClientJavascript.AppsApi* | [**updateDescriptionUsingPUT**](docs/AppsApi.md#updateDescriptionUsingPUT) | **PUT** /users-web/api/v3/apps/{anyStateAppId}/description | Update description of the app
*SematextApiClientJavascript.AppsApi* | [**updateUsingPUT1**](docs/AppsApi.md#updateUsingPUT1) | **PUT** /users-web/api/v3/apps/{anyStateAppId} | Update app
*SematextApiClientJavascript.AwsSettingsControllerApi* | [**updateUsingPUT**](docs/AwsSettingsControllerApi.md#updateUsingPUT) | **PUT** /users-web/api/v3/apps/{appId}/aws | Update App's AWS CloudWatch settings
*SematextApiClientJavascript.BillingApi* | [**getDetailedInvoiceUsingGET**](docs/BillingApi.md#getDetailedInvoiceUsingGET) | **GET** /users-web/api/v3/billing/invoice/{service}/{year}/{month} | Get invoice details
*SematextApiClientJavascript.BillingApi* | [**listAvailablePlansUsingGET**](docs/BillingApi.md#listAvailablePlansUsingGET) | **GET** /users-web/api/v3/billing/availablePlans | Get available plans
*SematextApiClientJavascript.BillingApi* | [**updatePlanUsingPUT**](docs/BillingApi.md#updatePlanUsingPUT) | **PUT** /users-web/api/v3/billing/info/{appId} | Update plan for an app
*SematextApiClientJavascript.LogsAppApi* | [**createLogseneApplication**](docs/LogsAppApi.md#createLogseneApplication) | **POST** /logsene-reports/api/v3/apps | Create Logs App
*SematextApiClientJavascript.MetricsApi* | [**listDataSeriesUsingPOST1**](docs/MetricsApi.md#listDataSeriesUsingPOST1) | **POST** /spm-reports/api/v3/apps/{appId}/metrics/data | Get metrics data points for an app
*SematextApiClientJavascript.MetricsApi* | [**listFiltersUsingPOST**](docs/MetricsApi.md#listFiltersUsingPOST) | **POST** /spm-reports/api/v3/apps/{appId}/metrics/filters | Get metrics filters and their values for an app
*SematextApiClientJavascript.MetricsApi* | [**listMetricsKeysUsingGET1**](docs/MetricsApi.md#listMetricsKeysUsingGET1) | **GET** /spm-reports/api/v3/apps/{appId}/metrics/keys | Get metrics keys for an app
*SematextApiClientJavascript.MetricsApi* | [**listMetricsUsingGET1**](docs/MetricsApi.md#listMetricsUsingGET1) | **GET** /spm-reports/api/v3/apps/{appId}/metrics | Get metrics info for an app
*SematextApiClientJavascript.MonitoringAppApi* | [**createSpmApplication**](docs/MonitoringAppApi.md#createSpmApplication) | **POST** /spm-reports/api/v3/apps | Create Monitoring App
*SematextApiClientJavascript.ResetPasswordApi* | [**resetPasswordUsingPOST**](docs/ResetPasswordApi.md#resetPasswordUsingPOST) | **POST** /users-web/api/v3/account/password/reset | Reset Password
*SematextApiClientJavascript.SavedQueriesApi* | [**deleteSavedQueryUsingDELETE**](docs/SavedQueriesApi.md#deleteSavedQueryUsingDELETE) | **DELETE** /users-web/api/v3/savedQueries/{updateableQueryId} | Delete saved query
*SematextApiClientJavascript.SavedQueriesApi* | [**getSavedQueriesForAppUsingGET**](docs/SavedQueriesApi.md#getSavedQueriesForAppUsingGET) | **GET** /users-web/api/v3/apps/{appId}/savedQueries | Get saved queries for an app
*SematextApiClientJavascript.SavedQueriesApi* | [**saveQueryUsingPOST**](docs/SavedQueriesApi.md#saveQueryUsingPOST) | **POST** /users-web/api/v3/savedQueries | Create saved query
*SematextApiClientJavascript.SavedQueriesApi* | [**saveQueryUsingPUT**](docs/SavedQueriesApi.md#saveQueryUsingPUT) | **PUT** /users-web/api/v3/savedQueries/{updateableQueryId} | Update saved query
*SematextApiClientJavascript.SubscriptionsApi* | [**listUsingGET1**](docs/SubscriptionsApi.md#listUsingGET1) | **GET** /users-web/api/v3/apps/{appId}/subscriptions | Get subscriptions for an app
*SematextApiClientJavascript.SubscriptionsApi* | [**sendReportUsingPOST**](docs/SubscriptionsApi.md#sendReportUsingPOST) | **POST** /users-web/api/v3/apps/{appId}/report/send | Trigger emailing of report for an app
*SematextApiClientJavascript.TagApiControllerApi* | [**getTagNamesUsingGET**](docs/TagApiControllerApi.md#getTagNamesUsingGET) | **GET** /spm-reports/api/v3/apps/{appIds}/tagNames | Gets tag names for the given application identifiers appearing in the given time frame.
*SematextApiClientJavascript.TagApiControllerApi* | [**getUsingGET2**](docs/TagApiControllerApi.md#getUsingGET2) | **GET** /spm-reports/api/v3/apps/{appIds}/metrics/filters | Gets values for specified tags for the given application identifiers appearing in the given time frame.
*SematextApiClientJavascript.TagApiControllerApi* | [**getUsingGET3**](docs/TagApiControllerApi.md#getUsingGET3) | **GET** /spm-reports/api/v3/apps/{appIds}/tags | Gets values for specified tags for the given application identifiers appearing in the given time frame.


## Documentation for Models

 - [SematextApiClientJavascript.AlertNotificationRequest](docs/AlertNotificationRequest.md)
 - [SematextApiClientJavascript.AlertRule](docs/AlertRule.md)
 - [SematextApiClientJavascript.AlertRuleScheduleTimeRangeDto](docs/AlertRuleScheduleTimeRangeDto.md)
 - [SematextApiClientJavascript.AlertRuleScheduleWeekdayDto](docs/AlertRuleScheduleWeekdayDto.md)
 - [SematextApiClientJavascript.App](docs/App.md)
 - [SematextApiClientJavascript.AppDescription](docs/AppDescription.md)
 - [SematextApiClientJavascript.AppMetadata](docs/AppMetadata.md)
 - [SematextApiClientJavascript.BasicAuthMethodDto](docs/BasicAuthMethodDto.md)
 - [SematextApiClientJavascript.BasicOrganizationDto](docs/BasicOrganizationDto.md)
 - [SematextApiClientJavascript.BillingInfo](docs/BillingInfo.md)
 - [SematextApiClientJavascript.CloudWatchSettings](docs/CloudWatchSettings.md)
 - [SematextApiClientJavascript.CreateAppInfo](docs/CreateAppInfo.md)
 - [SematextApiClientJavascript.DataSeriesFilter](docs/DataSeriesFilter.md)
 - [SematextApiClientJavascript.DataSeriesRequest](docs/DataSeriesRequest.md)
 - [SematextApiClientJavascript.Error](docs/Error.md)
 - [SematextApiClientJavascript.FilterValue](docs/FilterValue.md)
 - [SematextApiClientJavascript.GenericApiResponse](docs/GenericApiResponse.md)
 - [SematextApiClientJavascript.Invitation](docs/Invitation.md)
 - [SematextApiClientJavascript.NotificationIntegration](docs/NotificationIntegration.md)
 - [SematextApiClientJavascript.Plan](docs/Plan.md)
 - [SematextApiClientJavascript.ReportInfo](docs/ReportInfo.md)
 - [SematextApiClientJavascript.SavedQuery](docs/SavedQuery.md)
 - [SematextApiClientJavascript.ServiceIntegration](docs/ServiceIntegration.md)
 - [SematextApiClientJavascript.UpdateAppInfo](docs/UpdateAppInfo.md)
 - [SematextApiClientJavascript.UserInfo](docs/UserInfo.md)
 - [SematextApiClientJavascript.UserPermissions](docs/UserPermissions.md)
 - [SematextApiClientJavascript.UserRole](docs/UserRole.md)


