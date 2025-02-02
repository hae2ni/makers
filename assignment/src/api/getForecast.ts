import { GetForecastType } from "../types/getForecastType";
import instance from "./instance";

export const getForecast = async (location: string) => {
  try {
    const response = await instance.get("/forecast.json", {
      params: { q: location, days: 7 },
    });

    const data: GetForecastType = response?.data;
    console.log(response.data);
    return data;
  } catch (err) {
    console.error("error발생!", err);
  }
};
