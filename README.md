
# <img src="./assets/octi-blue.png" valign="bottom" width="60px"/>**&nbsp;&nbsp;sematext-api-client-javascript**

<br>

>*A [Sematext Cloud](https://sematext.com/cloud/) API client, for interaction with Sematext Cloud solution monitoring, alerting and log shipping.*

<br>

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

<br>
One of a family of clients in following flavours:
<br>
<br>

* [sematext-api-client-javascript](https://github.com/sematext/sematext-api-client-javascript "Javascript")
* [sematext-api-client-rust](https://github.com/sematext/sematext-api-client-rust "Rust")
* [sematext-api-client-ruby](https://github.com/sematext/sematext-api-client-ruby "Ruby")
* [sematext-api-client-python](https://github.com/sematext/sematext-api-client-python "Python")
* [sematext-api-client-php](https://github.com/sematext/sematext-api-client-php "PHP")
* [sematext-api-client-java](https://github.com/sematext/sematext-api-client-java "Java")
* [sematext-api-client-go](https://github.com/sematext/sematext-api-client-go "Go/Golang")

<br>
Refer to below link for deeper information on the API itself.
<br>
<br>

* [Sematext Cloud API Reference](https://sematext.com/docs/api/ "API Reference")

<br>

## Contents

- [&nbsp;&nbsp;sematext-api-client-javascript](#sematext-api-client-javascript)
  - [Contents](#contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
    - [*Node.js*](#nodejs)
    - [*Webpack Configuration*](#webpack-configuration)
  - [Authentication](#authentication)
  - [Testing](#testing)
  - [Reference](#reference)
  - [Documentation for Models](#documentation-for-models)

<br>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

<br>

### Installation


#### *Node.js*


Install via:

```shell
npm install sematext-api-client --save
```


```shell
const Stcloud = require("@sematext/sematext-api-client")
```
<br>

#### *Webpack Configuration*

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
<br>
<br>

## Authentication

This client code requires a Sematext API Access token to function. You can find this by logging into your [Sematext Cloud Account](https://apps.sematext.com/ui/account/api)

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SematextApiClientJavascript = require('sematext-api-client-javascript')

var defaultClient = SematextApiClientJavascript.ApiClient.instance

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key']
api_key.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['Authorization'] = "Token"

var api = new SematextApiClientJavascript.AlertNotificationsApi()

var appId = 789 // {Number} appId

var timeInterval = new SematextApiClientJavascript.AlertNotificationRequest() // {AlertNotificationRequest} Time Interval

api.getAlertNotificationsForAppUsingPOST(appId, timeInterval).then(
  function (data) {
    console.log('API called successfully. Returned data: ' + data)
  },
  function (error) {
    console.error(error)
  }
)
```
<br><br>

## Testing
Note: Tests are currently inhibited by a Mocha dependancy on Yargs.
This client is generated code so this should have litle impact.
Marking as a pre-release until this is resolved upstream.

<br>
<br>

## Reference

All URIs are relative to _https://localhost_

| Class                                                  | Method                                                                                                           | HTTP request                                                       | Description                                                                                             |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| _SematextApiClientJavascript.AlertNotificationsApi_    | [**getAlertNotificationsForAppUsingPOST**](docs/AlertNotificationsApi.md#getAlertNotificationsForAppUsingPOST)   | **POST** /users-web/api/v3/apps/{appId}/notifications/alerts       | Get alert notifications for an app                                                                      |
| _SematextApiClientJavascript.AlertNotificationsApi_    | [**getAlertNotificationsForUserUsingPOST**](docs/AlertNotificationsApi.md#getAlertNotificationsForUserUsingPOST) | **POST** /users-web/api/v3/notifications/alerts                    | Get alert notifications for a user                                                                      |
| _SematextApiClientJavascript.AlertsApi_                | [**createAlertUsingPOST**](docs/AlertsApi.md#createAlertUsingPOST)                                               | **POST** /users-web/api/v3/alerts                                  | Create alert rule                                                                                       |
| _SematextApiClientJavascript.AlertsApi_                | [**deleteAlertRuleUsingDELETE**](docs/AlertsApi.md#deleteAlertRuleUsingDELETE)                                   | **DELETE** /users-web/api/v3/alerts/{updateableAlertId}            | Delete alert rule                                                                                       |
| _SematextApiClientJavascript.AlertsApi_                | [**disableAlertRuleUsingPUT**](docs/AlertsApi.md#disableAlertRuleUsingPUT)                                       | **PUT** /users-web/api/v3/alerts/{updateableAlertId}/disable       | Disable alert rule                                                                                      |
| _SematextApiClientJavascript.AlertsApi_                | [**enableAlertRuleUsingPUT**](docs/AlertsApi.md#enableAlertRuleUsingPUT)                                         | **PUT** /users-web/api/v3/alerts/{updateableAlertId}/enable        | Enable alert rule                                                                                       |
| _SematextApiClientJavascript.AlertsApi_                | [**getAlertRulesForAppUsingGET**](docs/AlertsApi.md#getAlertRulesForAppUsingGET)                                 | **GET** /users-web/api/v3/apps/{appId}/alerts                      | Get alert rules for an app                                                                              |
| _SematextApiClientJavascript.AppsApi_                  | [**getAppTypesUsingGET**](docs/AppsApi.md#getAppTypesUsingGET)                                                   | **GET** /users-web/api/v3/apps/types                               | Get all App types supported for the account identified with apiKey                                      |
| _SematextApiClientJavascript.AppsApi_                  | [**getUsingGET**](docs/AppsApi.md#getUsingGET)                                                                   | **GET** /users-web/api/v3/apps/{anyStateAppId}                     | Gets defails for one particular App                                                                     |
| _SematextApiClientJavascript.AppsApi_                  | [**inviteAppGuestsUsingPOST**](docs/AppsApi.md#inviteAppGuestsUsingPOST)                                         | **POST** /users-web/api/v3/apps/guests                             | Invite guests to an app                                                                                 |
| _SematextApiClientJavascript.AppsApi_                  | [**listAppsUsersUsingGET**](docs/AppsApi.md#listAppsUsersUsingGET)                                               | **GET** /users-web/api/v3/apps/users                               | Get all users of apps accessible to this account                                                        |
| _SematextApiClientJavascript.AppsApi_                  | [**listUsingGET**](docs/AppsApi.md#listUsingGET)                                                                 | **GET** /users-web/api/v3/apps                                     | Get all apps accessible by account identified with apiKey                                               |
| _SematextApiClientJavascript.AppsApi_                  | [**updateDescriptionUsingPUT**](docs/AppsApi.md#updateDescriptionUsingPUT)                                       | **PUT** /users-web/api/v3/apps/{anyStateAppId}/description         | Update description of the app                                                                           |
| _SematextApiClientJavascript.AppsApi_                  | [**updateUsingPUT1**](docs/AppsApi.md#updateUsingPUT1)                                                           | **PUT** /users-web/api/v3/apps/{anyStateAppId}                     | Update app                                                                                              |
| _SematextApiClientJavascript.AwsSettingsControllerApi_ | [**updateUsingPUT**](docs/AwsSettingsControllerApi.md#updateUsingPUT)                                            | **PUT** /users-web/api/v3/apps/{appId}/aws                         | Update App's AWS CloudWatch settings                                                                    |
| _SematextApiClientJavascript.BillingApi_               | [**getDetailedInvoiceUsingGET**](docs/BillingApi.md#getDetailedInvoiceUsingGET)                                  | **GET** /users-web/api/v3/billing/invoice/{service}/{year}/{month} | Get invoice details                                                                                     |
| _SematextApiClientJavascript.BillingApi_               | [**listAvailablePlansUsingGET**](docs/BillingApi.md#listAvailablePlansUsingGET)                                  | **GET** /users-web/api/v3/billing/availablePlans                   | Get available plans                                                                                     |
| _SematextApiClientJavascript.BillingApi_               | [**updatePlanUsingPUT**](docs/BillingApi.md#updatePlanUsingPUT)                                                  | **PUT** /users-web/api/v3/billing/info/{appId}                     | Update plan for an app                                                                                  |
| _SematextApiClientJavascript.LogsAppApi_               | [**createLogseneApplication**](docs/LogsAppApi.md#createLogseneApplication)                                      | **POST** /logsene-reports/api/v3/apps                              | Create Logs App                                                                                         |
| _SematextApiClientJavascript.MetricsApi_               | [**listDataSeriesUsingPOST1**](docs/MetricsApi.md#listDataSeriesUsingPOST1)                                      | **POST** /spm-reports/api/v3/apps/{appId}/metrics/data             | Get metrics data points for an app                                                                      |
| _SematextApiClientJavascript.MetricsApi_               | [**listFiltersUsingPOST**](docs/MetricsApi.md#listFiltersUsingPOST)                                              | **POST** /spm-reports/api/v3/apps/{appId}/metrics/filters          | Get metrics filters and their values for an app                                                         |
| _SematextApiClientJavascript.MetricsApi_               | [**listMetricsKeysUsingGET1**](docs/MetricsApi.md#listMetricsKeysUsingGET1)                                      | **GET** /spm-reports/api/v3/apps/{appId}/metrics/keys              | Get metrics keys for an app                                                                             |
| _SematextApiClientJavascript.MetricsApi_               | [**listMetricsUsingGET1**](docs/MetricsApi.md#listMetricsUsingGET1)                                              | **GET** /spm-reports/api/v3/apps/{appId}/metrics                   | Get metrics info for an app                                                                             |
| _SematextApiClientJavascript.MonitoringAppApi_         | [**createSpmApplication**](docs/MonitoringAppApi.md#createSpmApplication)                                        | **POST** /spm-reports/api/v3/apps                                  | Create Monitoring App                                                                                   |
| _SematextApiClientJavascript.ResetPasswordApi_         | [**resetPasswordUsingPOST**](docs/ResetPasswordApi.md#resetPasswordUsingPOST)                                    | **POST** /users-web/api/v3/account/password/reset                  | Reset Password                                                                                          |
| _SematextApiClientJavascript.SavedQueriesApi_          | [**deleteSavedQueryUsingDELETE**](docs/SavedQueriesApi.md#deleteSavedQueryUsingDELETE)                           | **DELETE** /users-web/api/v3/savedQueries/{updateableQueryId}      | Delete saved query                                                                                      |
| _SematextApiClientJavascript.SavedQueriesApi_          | [**getSavedQueriesForAppUsingGET**](docs/SavedQueriesApi.md#getSavedQueriesForAppUsingGET)                       | **GET** /users-web/api/v3/apps/{appId}/savedQueries                | Get saved queries for an app                                                                            |
| _SematextApiClientJavascript.SavedQueriesApi_          | [**saveQueryUsingPOST**](docs/SavedQueriesApi.md#saveQueryUsingPOST)                                             | **POST** /users-web/api/v3/savedQueries                            | Create saved query                                                                                      |
| _SematextApiClientJavascript.SavedQueriesApi_          | [**saveQueryUsingPUT**](docs/SavedQueriesApi.md#saveQueryUsingPUT)                                               | **PUT** /users-web/api/v3/savedQueries/{updateableQueryId}         | Update saved query                                                                                      |
| _SematextApiClientJavascript.SubscriptionsApi_         | [**listUsingGET1**](docs/SubscriptionsApi.md#listUsingGET1)                                                      | **GET** /users-web/api/v3/apps/{appId}/subscriptions               | Get subscriptions for an app                                                                            |
| _SematextApiClientJavascript.SubscriptionsApi_         | [**sendReportUsingPOST**](docs/SubscriptionsApi.md#sendReportUsingPOST)                                          | **POST** /users-web/api/v3/apps/{appId}/report/send                | Trigger emailing of report for an app                                                                   |
| _SematextApiClientJavascript.TagApiControllerApi_      | [**getTagNamesUsingGET**](docs/TagApiControllerApi.md#getTagNamesUsingGET)                                       | **GET** /spm-reports/api/v3/apps/{appIds}/tagNames                 | Gets tag names for the given application identifiers appearing in the given time frame.                 |
| _SematextApiClientJavascript.TagApiControllerApi_      | [**getUsingGET2**](docs/TagApiControllerApi.md#getUsingGET2)                                                     | **GET** /spm-reports/api/v3/apps/{appIds}/metrics/filters          | Gets values for specified tags for the given application identifiers appearing in the given time frame. |
| _SematextApiClientJavascript.TagApiControllerApi_      | [**getUsingGET3**](docs/TagApiControllerApi.md#getUsingGET3)                                                     | **GET** /spm-reports/api/v3/apps/{appIds}/tags                     | Gets values for specified tags for the given application identifiers appearing in the given time frame. |

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
