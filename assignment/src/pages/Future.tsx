import { useState } from "react";
import SelectDateComponent from "../components/SelectDateComponent";
import useFuture from "../hooks/useFuture";
import { useCityStore } from "../store/useCityStore";
import styled from "styled-components";
import Loading from "./Loading";
import Error from "./Error";

const christmas = new Date("2025-12-25");

export default function Future() {
  const { city } = useCityStore();
  const [selectedDate, setSelectedDate] = useState<Date | null>(christmas);

  const formatDate = (date: Date | null) => (date ? date.toISOString().split("T")[0] : "");
  const formattedDate = formatDate(selectedDate);

  const { data, isLoading, error } = useFuture({ location: city, date: formattedDate });

  if (isLoading) {
    return <Loading />;
  }

  if (error || !data) {
    return <Error />;
  }

  function handleSelectedDate(date: Date | null) {
    setSelectedDate(date);
  }

  const forecastDay = data?.forecast?.forecastday[0];

  return (
    <FutureContainer>
      <SelectDateComponentWrapper>
        <SelectDateComponent selectedDate={selectedDate} setSelectedDate={handleSelectedDate} />
      </SelectDateComponentWrapper>
      <Message>Please select another date! Default is Christmas! 🎄</Message>

      {data && forecastDay && (
        <ForecastCard>
          <DateText>{forecastDay.date}</DateText>
          <LocationText>📍 {data?.location?.name}</LocationText>
          <WeatherIcon src={forecastDay.day.condition.icon} alt="weather" />
          <ConditionText>{forecastDay.day.condition.text}</ConditionText>
          <Temperature>
            <p>🌡 Avg: {forecastDay.day.avgtemp_c}°C</p>
            <p>🔥 Max: {forecastDay.day.maxtemp_c}°C</p>
            <p>❄️ Min: {forecastDay.day.mintemp_c}°C</p>
          </Temperature>
        </ForecastCard>
      )}
    </FutureContainer>
  );
}

const FutureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px;
  background: linear-gradient(135deg, #e3f2fd, #f3e5f5);
  min-height: 100vh;
`;

const SelectDateComponentWrapper = styled.div`
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
  font-weight: bold;
`;

const ForecastCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const DateText = styled.h1`
  font-size: 24px;
  color: #222;
  margin-bottom: 10px;
`;

const LocationText = styled.h2`
  font-size: 20px;
  color: #444;
  margin-bottom: 10px;
`;

const WeatherIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
`;

const ConditionText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #555;
  margin-bottom: 10px;
`;

const Temperature = styled.div`
  font-size: 16px;
  color: #333;
  p {
    margin: 4px 0;
  }
`;

// @media (max-width: 768px) {
//   FutureContainer {
//     padding: 20px;
//   }
//   ForecastCard {
//     padding: 16px;
//   }
//   DateText {
//     font-size: 20px;
//   }
//   LocationText {
//     font-size: 18px;
//   }
// }`}
