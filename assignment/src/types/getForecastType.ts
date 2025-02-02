import { ConditionType } from "./getCurrentType";

export interface GetForecastType {
  forecastday: ForecastType[];
}

export interface ForecastType {
  astro: AstroType;
  day: DayType;
}

export interface AstroType {
  moonrise: string;
  sunrise: string;
  sunset: string;
}

export interface DayType {
  condition: ConditionType;
  avgtemp_c: number;
  maxtemp_c: number;
  mintemp_c: number;
}
