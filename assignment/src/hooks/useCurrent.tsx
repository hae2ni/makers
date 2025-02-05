import useSWR from "swr";
import { getCurrent } from "../api/getCurrent";

export default function useCurrent({ location }: { location: string }) {
  const { data, isLoading, error } = useSWR(["/current.json", { q: location }], () => getCurrent(location), {
    refreshInterval: 900000, //15분마다 업데이트 할 예정
    onError: (err) => {
      console.error(err);
    },
  });
  return { data, isLoading, error };
}
