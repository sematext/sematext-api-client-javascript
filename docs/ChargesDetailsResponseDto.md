# SematextApiClientJavascript.ChargesDetailsResponseDto

## Properties

| Name                 | Type                                              | Description | Notes      |
| -------------------- | ------------------------------------------------- | ----------- | ---------- |
| **app**              | [**App**](App.md)                                 |             | [optional] |
| **chargeBase**       | **String**                                        |             | [optional] |
| **dayUsageData**     | [**[DayUsageData]**](DayUsageData.md)             |             | [optional] |
| **monthlyFeeAmount** | **Number**                                        |             | [optional] |
| **periodFeePeriods** | [**[MinPeriodFeePeriod]**](MinPeriodFeePeriod.md) |             | [optional] |
| **totalAmount**      | **Number**                                        |             | [optional] |
| **usageAmount**      | **Number**                                        |             | [optional] |

<a name="ChargeBaseEnum"></a>

## Enum: ChargeBaseEnum

* `SUMMARIZED_USAGE` (value: `"SUMMARIZED_USAGE"`)
* `MIN_MONTHLY_FEE` (value: `"MIN_MONTHLY_FEE"`)
* `SUM_OF_DAILY_FEES` (value: `"SUM_OF_DAILY_FEES"`)
* `TOTAL_MONTHLY_FEE` (value: `"TOTAL_MONTHLY_FEE"`)
