import useSWR from "swr";
import { getFuture } from "../api/getFuture";

export default function useFuture({ location, date }: { location: string; date: string }) {
  const { data, isLoading, error } = useSWR(["/future.json", { q: location, dt: date }], () =>
    getFuture(location, date),
  );
  return { data, isLoading, error };
}
