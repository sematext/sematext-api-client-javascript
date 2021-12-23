# <img src="https://sematext.com/wp-content/uploads/2020/09/just-octi-blue.png" valign="bottom" width="60px"/>**&nbsp;&nbsp;sematext-api-client-javascript**

<br>

> _A [Sematext Cloud](https://sematext.com/cloud/) API client, for interaction with Sematext Cloud solution monitoring, alerting and log shipping._

<br>

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

<br>
One of a family of clients in following flavours:
<br>
<br>

- [sematext-api-client-javascript](https://github.com/sematext/sematext-api-client-javascript 'Javascript')
- [sematext-api-client-rust](https://github.com/sematext/sematext-api-client-rust 'Rust')
- [sematext-api-client-ruby](https://github.com/sematext/sematext-api-client-ruby 'Ruby')
- [sematext-api-client-python](https://github.com/sematext/sematext-api-client-python 'Python')
- [sematext-api-client-php](https://github.com/sematext/sematext-api-client-php 'PHP')
- [sematext-api-client-java](https://github.com/sematext/sematext-api-client-java 'Java')
- [sematext-api-client-go](https://github.com/sematext/sematext-api-client-go 'Go/Golang')

<br>
Refer to below link for deeper information on the API itself.
<br>
<br>

- [Sematext Cloud API Reference](https://sematext.com/docs/api/ 'API Reference')

<br>

## Contents

- [<img src="https://sematext.com/wp-content/uploads/2020/09/just-octi-blue.png" valign="bottom" width="60px"/>**&nbsp;&nbsp;sematext-api-client-javascript**](#sematext-api-client-javascript)
  - [Contents](#contents)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
      - [_Node.js_](#nodejs)
      - [_Webpack Configuration_](#webpack-configuration)
  - [Authentication](#authentication)
  - [Testing](#testing)
  - [Documentation for API Endpoints](#documentation-for-api-endpoints)
  - [Documentation for Models](#documentation-for-models)

<br>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

<br>

### Installation

#### _Node.js_

Install via:

```shell
npm install @sematext/sematext-api-client --save
```

```shell
const Stcloud = require("@sematext/sematext-api-client")
```

<br>

#### _Webpack Configuration_

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

## Documentation for API Endpoints

All URIs are relative to _https://localhost_

| Class                                                  | Method                                                                                                             | HTTP request                                                          | Description                                                                                             |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| _SematextApiClientJavascript.AlertNotificationsApi_    | [**getAlertNotificationsForAppUsingPOST**](docs/AlertNotificationsApi.md#getAlertNotificationsForAppUsingPOST)     | **POST** /users-web/api/v3/apps/{appId}/notifications/alerts          | Get alert notifications for an app                                                                      |
| _SematextApiClientJavascript.AlertNotificationsApi_    | [**getAlertNotificationsForUserUsingPOST1**](docs/AlertNotificationsApi.md#getAlertNotificationsForUserUsingPOST1) | **POST** /users-web/api/v3/notifications/alerts                       | Get alert notifications for a user                                                                      |
| _SematextApiClientJavascript.AlertsApi_                | [**createAlertUsingPOST**](docs/AlertsApi.md#createAlertUsingPOST)                                                 | **POST** /users-web/api/v3/alerts                                     | Create alert rule                                                                                       |
| _SematextApiClientJavascript.AlertsApi_                | [**deleteAlertRuleUsingDELETE**](docs/AlertsApi.md#deleteAlertRuleUsingDELETE)                                     | **DELETE** /users-web/api/v3/alerts/{updateableAlertId}               | Delete alert rule                                                                                       |
| _SematextApiClientJavascript.AlertsApi_                | [**disableAlertRuleUsingPUT**](docs/AlertsApi.md#disableAlertRuleUsingPUT)                                         | **PUT** /users-web/api/v3/alerts/{updateableAlertId}/disable          | Disable alert rule                                                                                      |
| _SematextApiClientJavascript.AlertsApi_                | [**enableAlertRuleUsingPUT1**](docs/AlertsApi.md#enableAlertRuleUsingPUT1)                                         | **PUT** /users-web/api/v3/alerts/{updateableAlertId}/enable           | Enable alert rule                                                                                       |
| _SematextApiClientJavascript.AlertsApi_                | [**getAlertRulesForAppUsingGET**](docs/AlertsApi.md#getAlertRulesForAppUsingGET)                                   | **GET** /users-web/api/v3/apps/{appId}/alerts                         | Get alert rules for an app                                                                              |
| _SematextApiClientJavascript.AppsApi_                  | [**deleteUsingDELETE**](docs/AppsApi.md#deleteUsingDELETE)                                                         | **DELETE** /users-web/api/v3/apps/{anyStateAppId}                     | delete                                                                                                  |
| _SematextApiClientJavascript.AppsApi_                  | [**getAppTypesUsingGET1**](docs/AppsApi.md#getAppTypesUsingGET1)                                                   | **GET** /users-web/api/v3/apps/types                                  | Get all App types supported for the account identified with apiKey                                      |
| _SematextApiClientJavascript.AppsApi_                  | [**getUsingGET**](docs/AppsApi.md#getUsingGET)                                                                     | **GET** /users-web/api/v3/apps/{anyStateAppId}                        | Gets defails for one particular App                                                                     |
| _SematextApiClientJavascript.AppsApi_                  | [**inviteAppGuestsUsingPOST**](docs/AppsApi.md#inviteAppGuestsUsingPOST)                                           | **POST** /users-web/api/v3/apps/guests                                | Invite guests to an app                                                                                 |
| _SematextApiClientJavascript.AppsApi_                  | [**listAppsUsersUsingGET1**](docs/AppsApi.md#listAppsUsersUsingGET1)                                               | **GET** /users-web/api/v3/apps/users                                  | Get all users of apps accessible to this account                                                        |
| _SematextApiClientJavascript.AppsApi_                  | [**listUsingGET1**](docs/AppsApi.md#listUsingGET1)                                                                 | **GET** /users-web/api/v3/apps                                        | Get all apps accessible by account identified with apiKey                                               |
| _SematextApiClientJavascript.AppsApi_                  | [**updateDescriptionUsingPUT1**](docs/AppsApi.md#updateDescriptionUsingPUT1)                                       | **PUT** /users-web/api/v3/apps/{anyStateAppId}/description            | Update description of the app                                                                           |
| _SematextApiClientJavascript.AppsApi_                  | [**updateUsingPUT2**](docs/AppsApi.md#updateUsingPUT2)                                                             | **PUT** /users-web/api/v3/apps/{anyStateAppId}                        | Update app                                                                                              |
| _SematextApiClientJavascript.AwsSettingsControllerApi_ | [**updateUsingPUT**](docs/AwsSettingsControllerApi.md#updateUsingPUT)                                              | **PUT** /users-web/api/v3/apps/{appId}/aws                            | Update App's AWS CloudWatch settings                                                                    |
| _SematextApiClientJavascript.BillingApi_               | [**getDetailedInvoiceUsingGET**](docs/BillingApi.md#getDetailedInvoiceUsingGET)                                    | **GET** /users-web/api/v3/billing/invoice/{service}/{year}/{month}    | Get invoice details                                                                                     |
| _SematextApiClientJavascript.BillingApi_               | [**listAvailablePlansUsingGET1**](docs/BillingApi.md#listAvailablePlansUsingGET1)                                  | **GET** /users-web/api/v3/billing/availablePlans                      | Get available plans                                                                                     |
| _SematextApiClientJavascript.BillingApi_               | [**updatePlanUsingPUT1**](docs/BillingApi.md#updatePlanUsingPUT1)                                                  | **PUT** /users-web/api/v3/billing/info/{appId}                        | Update plan for an app                                                                                  |
| _SematextApiClientJavascript.LogsAppApi_               | [**createLogseneApplication**](docs/LogsAppApi.md#createLogseneApplication)                                        | **POST** /logsene-reports/api/v3/apps                                 | Create Logs App                                                                                         |
| _SematextApiClientJavascript.MonitoringAppApi_         | [**createSpmApplication1**](docs/MonitoringAppApi.md#createSpmApplication1)                                        | **POST** /spm-reports/api/v3/apps                                     | Create Monitoring App                                                                                   |
| _SematextApiClientJavascript.ResetPasswordApi_         | [**resetPasswordUsingPOST**](docs/ResetPasswordApi.md#resetPasswordUsingPOST)                                      | **POST** /users-web/api/v3/account/password/reset                     | Reset Password                                                                                          |
| _SematextApiClientJavascript.SubscriptionsApi_         | [**createForAppUsingPOST**](docs/SubscriptionsApi.md#createForAppUsingPOST)                                        | **POST** /users-web/api/v3/apps/{appId}/subscription                  | Create App subscription                                                                                 |
| _SematextApiClientJavascript.SubscriptionsApi_         | [**createForDashUsingPOST1**](docs/SubscriptionsApi.md#createForDashUsingPOST1)                                    | **POST** /users-web/api/v3/dashboards/{dashId}/subscription           | Create dashboard subscription                                                                           |
| _SematextApiClientJavascript.SubscriptionsApi_         | [**deleteUsingDELETE2**](docs/SubscriptionsApi.md#deleteUsingDELETE2)                                              | **DELETE** /users-web/api/v3/subscriptions/{updateableSubscriptionId} | Delete subscription                                                                                     |
| _SematextApiClientJavascript.SubscriptionsApi_         | [**listUsingGET3**](docs/SubscriptionsApi.md#listUsingGET3)                                                        | **GET** /users-web/api/v3/apps/{appId}/subscriptions                  | Get subscriptions for an App                                                                            |
| _SematextApiClientJavascript.SubscriptionsApi_         | [**listUsingGET4**](docs/SubscriptionsApi.md#listUsingGET4)                                                        | **GET** /users-web/api/v3/subscriptions                               | Get current account's subscriptions                                                                     |
| _SematextApiClientJavascript.SubscriptionsApi_         | [**sendAppReportUsingPOST1**](docs/SubscriptionsApi.md#sendAppReportUsingPOST1)                                    | **POST** /users-web/api/v3/apps/{appId}/report/send                   | Email an App report                                                                                     |
| _SematextApiClientJavascript.SubscriptionsApi_         | [**sendDashReportUsingPOST**](docs/SubscriptionsApi.md#sendDashReportUsingPOST)                                    | **POST** /users-web/api/v3/dashboards/{dashId}/report/send            | Email a dashboard report                                                                                |
| _SematextApiClientJavascript.SubscriptionsApi_         | [**toggleEnabledUsingPUT1**](docs/SubscriptionsApi.md#toggleEnabledUsingPUT1)                                      | **PUT** /users-web/api/v3/subscriptions/{updateableSubscriptionId}    | Toggle subscription status                                                                              |
| _SematextApiClientJavascript.SubscriptionsApi_         | [**updateForAppUsingPUT**](docs/SubscriptionsApi.md#updateForAppUsingPUT)                                          | **PUT** /users-web/api/v3/apps/{appId}/subscription                   | Update App subscription                                                                                 |
| _SematextApiClientJavascript.SubscriptionsApi_         | [**updateForDashUsingPUT1**](docs/SubscriptionsApi.md#updateForDashUsingPUT1)                                      | **PUT** /users-web/api/v3/dashboards/{dashId}/subscription            | Update dashboard subscription                                                                           |
| _SematextApiClientJavascript.TagApiControllerApi_      | [**getTagNamesUsingGET1**](docs/TagApiControllerApi.md#getTagNamesUsingGET1)                                       | **GET** /spm-reports/api/v3/apps/{appIds}/tagNames                    | Gets tag names for the given application identifiers appearing in the given time frame.                 |
| _SematextApiClientJavascript.TagApiControllerApi_      | [**getUsingGET1**](docs/TagApiControllerApi.md#getUsingGET1)                                                       | **GET** /spm-reports/api/v3/apps/{appIds}/tags                        | Gets values for specified tags for the given application identifiers appearing in the given time frame. |
| _SematextApiClientJavascript.TagApiControllerApi_      | [**getUsingGET2**](docs/TagApiControllerApi.md#getUsingGET2)                                                       | **GET** /spm-reports/api/v3/apps/{appIds}/metrics/filters             | Gets values for specified tags for the given application identifiers appearing in the given time frame. |
| _SematextApiClientJavascript.TokensApiControllerApi_   | [**createAppToken1**](docs/TokensApiControllerApi.md#createAppToken1)                                              | **POST** /users-web/api/v3/apps/{appId}/tokens                        | Create new app token                                                                                    |
| _SematextApiClientJavascript.TokensApiControllerApi_   | [**deleteAppToken1**](docs/TokensApiControllerApi.md#deleteAppToken1)                                              | **DELETE** /users-web/api/v3/apps/{appId}/tokens/{tokenId}            | Delete app token                                                                                        |
| _SematextApiClientJavascript.TokensApiControllerApi_   | [**getAppTokens**](docs/TokensApiControllerApi.md#getAppTokens)                                                    | **GET** /users-web/api/v3/apps/{appId}/tokens                         | Get app available tokens                                                                                |
| _SematextApiClientJavascript.TokensApiControllerApi_   | [**regenerateAppToken**](docs/TokensApiControllerApi.md#regenerateAppToken)                                        | **POST** /users-web/api/v3/apps/{appId}/tokens/{tokenId}/regenerate   | Regenerate app token)                                                                                   |
| _SematextApiClientJavascript.TokensApiControllerApi_   | [**updateAppToken1**](docs/TokensApiControllerApi.md#updateAppToken1)                                              | **PUT** /users-web/api/v3/apps/{appId}/tokens/{tokenId}               | Update app token (enable/disable or name)                                                               |

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
- [SematextApiClientJavascript.CreateTokenDto](docs/CreateTokenDto.md)
- [SematextApiClientJavascript.Error](docs/Error.md)
- [SematextApiClientJavascript.FilterValue](docs/FilterValue.md)
- [SematextApiClientJavascript.GenericApiResponse](docs/GenericApiResponse.md)
- [SematextApiClientJavascript.Invitation](docs/Invitation.md)
- [SematextApiClientJavascript.NotificationIntegration](docs/NotificationIntegration.md)
- [SematextApiClientJavascript.Plan](docs/Plan.md)
- [SematextApiClientJavascript.ReportInfo](docs/ReportInfo.md)
- [SematextApiClientJavascript.ServiceIntegration](docs/ServiceIntegration.md)
- [SematextApiClientJavascript.SubscriptionDashboardDto](docs/SubscriptionDashboardDto.md)
- [SematextApiClientJavascript.SubscriptionDto](docs/SubscriptionDto.md)
- [SematextApiClientJavascript.UpdateAppInfo](docs/UpdateAppInfo.md)
- [SematextApiClientJavascript.UpdateSubscriptionDto](docs/UpdateSubscriptionDto.md)
- [SematextApiClientJavascript.UpdateTokenDto](docs/UpdateTokenDto.md)
- [SematextApiClientJavascript.UserInfo](docs/UserInfo.md)
- [SematextApiClientJavascript.UserPermissions](docs/UserPermissions.md)
- [SematextApiClientJavascript.UserRole](docs/UserRole.md)
