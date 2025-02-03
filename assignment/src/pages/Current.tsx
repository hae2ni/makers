import useCurrent from "../hooks/useCurrent";
import { useCityStore } from "../store/useCityStore";

export default function Current() {
  const { city } = useCityStore();
  const { data, isLoading, error } = useCurrent({ location: city });

  if (isLoading) {
    return <p>로딩중!!!!</p>;
  }

  if (error) {
    return <p>에러나옴</p>;
  }

  return (
    <div>
      {data && (
        <div>
          <p>
            You select {data?.location?.name}, {data?.location?.country}
            Now here is {data?.location?.localtime}
          </p>
          <p>Today is {data?.current?.condition?.text}</p>
          <img src={data?.current?.condition?.icon} alt="weather" />
          <p>temperature: {data?.current?.temp_c} </p>
          <p>cloud: {data?.current?.cloud}</p>
          <p>humidity: {data?.current?.humidity}</p>
          <p>wind: {data?.current?.wind_kph}/km</p>
          <p>uv: {data?.current?.uv}</p>
        </div>
      )}
    </div>
  );
}
