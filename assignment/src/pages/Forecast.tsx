import { fontsObject } from "@sopt-makers/fonts";
import useForecast from "../hooks/useForecast";
import { useCityStore } from "../store/useCityStore";
import { columnflex, flex } from "../styles/commonStyles";
import Loading from "./Loading";
import styled from "styled-components";
import { colors } from "@sopt-makers/colors";

export default function Forecast() {
  const { city } = useCityStore();
  const { data, isLoading, error } = useForecast({ location: city });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ForecastContainer>
      {data && (
        <ForecastGrid>
          {data?.forecast?.forecastday.map((day) => (
            <ForecastCard key={day.date}>
              <DateText>{day.date}</DateText>
              <WeatherCondition>
                <WeatherIcon src={day?.day?.condition?.icon} alt="weather" />
                <p>{day?.day?.condition?.text}</p>
              </WeatherCondition>
              <WeatherCondition>
                <DetailText>🌡️ Avg: {day?.day?.avgtemp_c}°C</DetailText>
                <DetailText>⬆ Max: {day?.day?.maxtemp_c}°C</DetailText>
                <DetailText>⬇ Min: {day?.day?.mintemp_c}°C</DetailText>
              </WeatherCondition>
              <SunMoonInfo>
                <DetailText> 🌅 Sunrise: {day?.astro?.sunrise}</DetailText>
                <DetailText> 🌇 Sunset: {day?.astro?.sunset}</DetailText>
                <DetailText>🌙 Moonrise: {day?.astro?.moonrise}</DetailText>
              </SunMoonInfo>
            </ForecastCard>
          ))}
        </ForecastGrid>
      )}
    </ForecastContainer>
  );
}

const ForecastContainer = styled.div`
  ${flex}
  padding: 2rem;
`;

const ForecastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 1.6rem;
  width: 100%;
  max-width: 100rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ForecastCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 1.6rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  ${columnflex}
`;

//오늘 몇일?
const DateText = styled.p`
  ${fontsObject.TITLE_5_18_SB}
`;

const WeatherCondition = styled.div`
  ${columnflex}
  margin-bottom: 1rem;
`;

const WeatherIcon = styled.img`
  width: 5rem;
  height: 5rem;
  margin-bottom: 0.5rem;
`;

const DetailText = styled.p`
  ${fontsObject.BODY_3_14_L};
`;

const SunMoonInfo = styled.div`
  ${columnflex};
  gap: 0.2rem;
  color: ${colors.gray300};
`;
