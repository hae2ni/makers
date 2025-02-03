import { LocationType } from "./getCurrentType";
import { ForecastDayType } from "./getForecastType";

export interface GetFutureType {
  forecast: ForecastDayType;
  location: LocationType;
}
