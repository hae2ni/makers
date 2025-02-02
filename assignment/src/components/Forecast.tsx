import useForecast from "../hooks/useForecast";

export default function Forecast() {
  const seoul = "Seoul";
  const { data, isLoading, error } = useForecast({ location: seoul });
  console.log(data);
  return <div>Forecast</div>;
}
