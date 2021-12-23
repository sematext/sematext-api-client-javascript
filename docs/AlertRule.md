# SematextApiClientJavascript.AlertRule

## Properties

| Name                                      | Type                                                                | Description | Notes      |
| ----------------------------------------- | ------------------------------------------------------------------- | ----------- | ---------- |
| **accountEmail**                          | **String**                                                          |             | [optional] |
| **allowedAppTypes**                       | **[Number]**                                                        |             | [optional] |
| **analyzingTime**                         | **String**                                                          |             | [optional] |
| **appDisplayState**                       | **String**                                                          |             | [optional] |
| **appId**                                 | **Number**                                                          |             | [optional] |
| **appName**                               | **String**                                                          |             | [optional] |
| **appState**                              | **String**                                                          |             | [optional] |
| **appToken**                              | **String**                                                          |             | [optional] |
| **appType**                               | **String**                                                          |             | [optional] |
| **backToNormalNeeded**                    | **Boolean**                                                         |             | [optional] |
| **chartKey**                              | **String**                                                          |             | [optional] |
| **color**                                 | **String**                                                          |             | [optional] |
| **creatorEmail**                          | **String**                                                          |             | [optional] |
| **defaultAggType**                        | **String**                                                          |             | [optional] |
| **description**                           | **String**                                                          |             | [optional] |
| **disallowedAppTypes**                    | **[Number]**                                                        |             | [optional] |
| **enabled**                               | **Boolean**                                                         |             | [optional] |
| **estimateOperation**                     | **String**                                                          |             | [optional] |
| **estimateValue**                         | **Number**                                                          |             | [optional] |
| **filterValues**                          | **String**                                                          |             | [optional] |
| **filterValuesObj**                       | [**[FilterValue]**](FilterValue.md)                                 |             | [optional] |
| **ignoreRegularEventsEnabled**            | **Boolean**                                                         |             | [optional] |
| **integrations**                          | **String**                                                          |             | [optional] |
| **lastDataReceivedDate**                  | **Number**                                                          |             | [optional] |
| **lastSent**                              | **Number**                                                          |             | [optional] |
| **lastTriggered**                         | **Number**                                                          |             | [optional] |
| **metadata**                              | **Object**                                                          |             | [optional] |
| **metricKey**                             | **String**                                                          |             | [optional] |
| **metricLabel**                           | **String**                                                          |             | [optional] |
| **minDelayBetweenNotificationsInMinutes** | **String**                                                          |             | [optional] |
| **name**                                  | **String**                                                          |             | [optional] |
| **notificationEmails**                    | **[String]**                                                        |             | [optional] |
| **notificationIntegrations**              | [**[NotificationIntegration]**](NotificationIntegration.md)         |             | [optional] |
| **notificationsEnabled**                  | **Boolean**                                                         |             | [optional] |
| **query**                                 | **String**                                                          |             | [optional] |
| **reportName**                            | **String**                                                          |             | [optional] |
| **ruleKey**                               | **Number**                                                          |             | [optional] |
| **ruleType**                              | **String**                                                          |             | [optional] |
| **runbook**                               | **String**                                                          |             | [optional] |
| **savedQueryId**                          | **Number**                                                          |             | [optional] |
| **schedule**                              | [**[AlertRuleScheduleWeekdayDto]**](AlertRuleScheduleWeekdayDto.md) |             | [optional] |
| **sematextService**                       | **String**                                                          |             | [optional] |
| **sendToEmail**                           | **String**                                                          |             | [optional] |
| **timezone**                              | **String**                                                          |             | [optional] |
| **useOnlyAlertRuleIntegrations**          | **Boolean**                                                         |             | [optional] |
| **userPermissions**                       | [**UserPermissions**](UserPermissions.md)                           |             | [optional] |
| **valueColumnName**                       | **String**                                                          |             | [optional] |
| **valueName**                             | **String**                                                          |             | [optional] |

<a name="EstimateOperationEnum"></a>

## Enum: EstimateOperationEnum

- `LESS` (value: `"LESS"`)
- `MORE` (value: `"MORE"`)
- `EQUAL` (value: `"EQUAL"`)
- `UN_EQUAL` (value: `"UN_EQUAL"`)
- `LESS_OR_EQUAL` (value: `"LESS_OR_EQUAL"`)
- `MORE_OR_EQUAL` (value: `"MORE_OR_EQUAL"`)
