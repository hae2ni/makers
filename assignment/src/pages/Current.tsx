import useCurrent from "../hooks/useCurrent";
import { useCityStore } from "../store/useCityStore";
import styled from "styled-components";
import { colors } from "@sopt-makers/colors";
import { fontsObject } from "@sopt-makers/fonts";
import Loading from "./Loading";
import { flex } from "../styles/commonStyles";

export default function Current() {
  const { city } = useCityStore();
  const { data, isLoading, error } = useCurrent({ location: city });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    <CurrentContainer>
      {data && (
        <WeatherCard>
          <LocationText>
            📍 {data?.location?.name}, {data?.location?.country}
          </LocationText>
          <TimeText>🕒 {data?.location?.localtime}</TimeText>
          <WeatherInfo>
            <WeatherIcon src={data?.current?.condition?.icon} alt="weather" />
            <ConditionText>{data?.current?.condition?.text}</ConditionText>
          </WeatherInfo>
          <TempText>🌡️ {data?.current?.temp_c}°C</TempText>
          <InfoGrid>
            <p>☁️ Cloud: {data?.current?.cloud}%</p>
            <p>💧 Humidity: {data?.current?.humidity}%</p>
            <p>🌬️ Wind: {data?.current?.wind_kph} km/h</p>
            <p>🔆 UV Index: {data?.current?.uv}</p>
          </InfoGrid>
        </WeatherCard>
      )}
    </CurrentContainer>
  );
}

const CurrentContainer = styled.div`
  ${flex}
  padding: 2rem;
`;

const WeatherCard = styled.div`
  background: ${colors.white};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 40rem;
  width: 100%;
`;

const LocationText = styled.p`
  ${fontsObject.TITLE_5_18_SB}

  color: ${colors.gray800};
`;

const TimeText = styled.p`
  ${fontsObject.BODY_2_16_M}
  color: ${colors.gray600};
  margin-bottom: 10px;
`;

const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const WeatherIcon = styled.img`
  width: 6rem;
  height: 6rem;
`;

const ConditionText = styled.p`
  ${fontsObject.BODY_1_18_M}
  color: ${colors.blue600};
`;

const TempText = styled.p`
  ${fontsObject.BODY_4_13_R}
  color: ${colors.red600};
  margin-bottom: 1rem;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
  color: ${colors.gray700};
  ${fontsObject.BODY_4_13_R}

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
