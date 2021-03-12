# SematextApiClientJavascript.AppMetadata

## Properties
| Name                       | Type         | Description                                                | Notes      |
| -------------------------- | ------------ | ---------------------------------------------------------- | ---------- |
| **awsCloudWatchAccessKey** | **String**   |                                                            | [optional] |
| **awsCloudWatchSecretKey** | **String**   |                                                            | [optional] |
| **awsFetchFrequency**      | **String**   |                                                            | [optional] |
| **awsRegion**              | **String**   |                                                            | [optional] |
| **subTypes**               | **[String]** | Comma separated list of AWS types monitored by created app | [optional] |

<a name="AwsFetchFrequencyEnum"></a>
## Enum: AwsFetchFrequencyEnum

* `MINUTE` (value: `"MINUTE"`)
* `FIVE_MINUTES` (value: `"FIVE_MINUTES"`)
* `FIFTEEN_MINUTES` (value: `"FIFTEEN_MINUTES"`)


<a name="AwsRegionEnum"></a>
## Enum: AwsRegionEnum

* `US_EAST_1` (value: `"US_EAST_1"`)
* `US_WEST_1` (value: `"US_WEST_1"`)
* `EU_WEST_1` (value: `"EU_WEST_1"`)
* `US_WEST_2` (value: `"US_WEST_2"`)
* `AP_SOUTHEAST_1` (value: `"AP_SOUTHEAST_1"`)
* `AP_SOUTHEAST_2` (value: `"AP_SOUTHEAST_2"`)
* `AP_NORTHEAST_1` (value: `"AP_NORTHEAST_1"`)
* `SA_EAST_1` (value: `"SA_EAST_1"`)
* `GovCloud` (value: `"GovCloud"`)
* `CN_NORTH_1` (value: `"CN_NORTH_1"`)
* `US_EAST_2` (value: `"US_EAST_2"`)
* `AP_SOUTH_1` (value: `"AP_SOUTH_1"`)
* `AP_NORTHEAST_2` (value: `"AP_NORTHEAST_2"`)
* `CA_CENTRAL_1` (value: `"CA_CENTRAL_1"`)
* `EU_CENTRAL_1` (value: `"EU_CENTRAL_1"`)
* `EU_WEST_2` (value: `"EU_WEST_2"`)


<a name="[SubTypesEnum]"></a>
## Enum: [SubTypesEnum]

* `ec2` (value: `"aws_ec2"`)
* `elb` (value: `"aws_elb"`)
* `ebs` (value: `"aws_ebs"`)
