# SematextApiClientJavascript.Invitation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**App**](App.md) | For invite request, only app.id needs to be set. | [optional] 
**apps** | [**[App]**](App.md) | For invite request, only apps.id needs to be set. | [optional] 
**id** | **Number** |  | [optional] 
**inviteDate** | **Date** |  | [optional] 
**inviteStatus** | **String** |  | [optional] 
**inviteeEmail** | **String** |  | [optional] 
**inviteeRole** | **String** |  | [optional] 
**inviteeStatus** | **String** |  | [optional] 
**inviterEmail** | **String** |  | [optional] 
**uuid** | **String** |  | [optional] 


<a name="InviteStatusEnum"></a>
## Enum: InviteStatusEnum


* `PENDING` (value: `"PENDING"`)

* `ACCEPTED` (value: `"ACCEPTED"`)

* `CANCELLED` (value: `"CANCELLED"`)

* `DECLINED` (value: `"DECLINED"`)




<a name="InviteeRoleEnum"></a>
## Enum: InviteeRoleEnum


* `SUPER_USER` (value: `"SUPER_USER"`)

* `OWNER` (value: `"OWNER"`)

* `ADMIN` (value: `"ADMIN"`)

* `USER` (value: `"USER"`)

* `DEMO` (value: `"DEMO"`)

* `ANONYMOUS` (value: `"ANONYMOUS"`)




<a name="InviteeStatusEnum"></a>
## Enum: InviteeStatusEnum


* `INACTIVE` (value: `"INACTIVE"`)

* `ACTIVE` (value: `"ACTIVE"`)




