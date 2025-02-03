export interface GetCurrentTypes {
  current: CurrentTypes;
  location: LocationType;
}

export interface CurrentTypes {
  cloud: number;
  dewpoint_c: number;
  feelslike_c: number;
  humidity: number;
  temp_c: number;
  uv: number;
  wind_kph: number;
  condition: ConditionType;
}

export interface ConditionType {
  code: number;
  icon: string;
  text: string;
}

export interface LocationType {
  country: string;
  lat: string;
  localtime: string;
  name: string;
}
