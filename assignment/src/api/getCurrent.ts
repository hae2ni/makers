import { GetCurrentTypes } from "../types/getCurrentType";
import instance from "./instance";

export const getCurrent = async (location: string) => {
  try {
    const response = await instance.get("/current.json", {
      params: { q: location },
    });

    const data: GetCurrentTypes = response?.data;
    console.log(response.data);
    return data;
  } catch (err) {
    console.error("error발생!", err);
  }
};
