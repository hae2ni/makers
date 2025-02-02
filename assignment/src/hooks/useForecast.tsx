import useSWR from "swr";
import { getForecast } from "../api/getForecast";

export default function useForecast({ location }: { location: string }) {
  const { data, isLoading, error } = useSWR(["/forecast.json", { q: location }], () => getForecast(location), {});
  return { data, isLoading, error };
}
