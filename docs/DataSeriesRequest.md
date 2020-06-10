# SematextApiClientJavascript.DataSeriesRequest

## Properties

| Name                | Type                                                  | Description                                                                                                                                                                            | Notes      |
| ------------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **defaultInterval** | **Number**                                            |                                                                                                                                                                                        | [optional] |
| **end**             | **String**                                            | End time of interval. Can be expressed as timestamp in milliseconds or UTC date in yyyy-MM-dd HH:mm:ss format                                                                          | [optional] |
| **filters**         | [**{String: DataSeriesFilter}**](DataSeriesFilter.md) | Map of allowed filter values and aggregation strategy. List of available filter values can be fetched using metric filters endpoint and default aggregation strategy depends on metric | [optional] |
| **granularity**     | **String**                                            | Data points interval granularity between two data points.Default value is \"AUTO\" - calculated based on selected time span. Not required while getting filters.                       | [optional] |
| **interval**        | **String**                                            |                                                                                                                                                                                        | [optional] |
| **metric**          | **String**                                            | Metric name or metric group prefix                                                                                                                                                     |
| **start**           | **String**                                            | Start time of interval. Can be expressed as timestamp in milliseconds or UTC date in yyyy-MM-dd HH:mm:ss format                                                                        | [optional] |

<a name="GranularityEnum"></a>

## Enum: GranularityEnum

- `AUTO` (value: `"AUTO"`)

- `ONE_MINUTE` (value: `"ONE_MINUTE"`)

- `FIVE_MINUTES` (value: `"FIVE_MINUTES"`)

- `HOUR` (value: `"HOUR"`)

- `DAY` (value: `"DAY"`)

- `WEEK` (value: `"WEEK"`)

- `MONTH` (value: `"MONTH"`)
