import { LocationType } from "./getCurrentType";
import { DayType } from "./getForecastType";

export interface GetFutureType {
  forecast: ForecastDayType[];
  location: LocationType;
}

interface ForecastDayType {
  date: string;
  day: DayType;
}
