# SematextApiClientJavascript.NotificationIntegration

## Properties
| Name                | Type                 | Description | Notes      |
| ------------------- | -------------------- | ----------- | ---------- |
| **applicability**   | **String**           |             | [optional] |
| **createDate**      | **Date**             |             | [optional] |
| **createdByOwner**  | **Boolean**          |             | [optional] |
| **creatorId**       | **Number**           |             | [optional] |
| **id**              | **Number**           |             | [optional] |
| **integrationType** | **String**           |             | [optional] |
| **name**            | **String**           |             | [optional] |
| **params**          | **{String: String}** |             | [optional] |
| **state**           | **String**           |             | [optional] |
| **userId**          | **Number**           |             | [optional] |

<a name="ApplicabilityEnum"></a>
## Enum: ApplicabilityEnum

* `NONE` (value: `"NONE"`)
* `USE_ALWAYS` (value: `"USE_ALWAYS"`)


<a name="IntegrationTypeEnum"></a>
## Enum: IntegrationTypeEnum

* `PAGER_DUTY` (value: `"PAGER_DUTY"`)
* `NAGIOS` (value: `"NAGIOS"`)
* `WEB_HOOKS` (value: `"WEB_HOOKS"`)
* `WEB_HOOKS_TEMPLATE` (value: `"WEB_HOOKS_TEMPLATE"`)
* `HIP_CHAT` (value: `"HIP_CHAT"`)
* `EMAIL_LIST` (value: `"EMAIL_LIST"`)
* `TEMPORARY_EMAIL_LIST` (value: `"TEMPORARY_EMAIL_LIST"`)


<a name="StateEnum"></a>
## Enum: StateEnum

* `ACTIVE` (value: `"ACTIVE"`)
* `DISABLED` (value: `"DISABLED"`)
* `DELETED` (value: `"DELETED"`)
