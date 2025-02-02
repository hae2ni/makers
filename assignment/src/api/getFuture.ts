import { GetFutureType } from "../types/getFuture";
import instance from "./instance";

export const getFuture = async (location: string, date: string) => {
  try {
    const response = await instance.get("/future.json", {
      params: { q: location, dt: date },
    });

    const data: GetFutureType = response?.data;
    console.log(response.data);
    return data;
  } catch (err) {
    console.error("error발생!", err);
  }
};
