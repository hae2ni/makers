import instance from "./instance";

export const getCurrent = async (location: string) => {
  try {
    const response = await instance.get("/current.json", {
      params: { q: location },
    });
    console.log(response.data);
  } catch (err) {
    console.error("error발생!", err);
  }
};
