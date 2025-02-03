import InputComponent from "../components/InputComponent";
import styled from "styled-components";
import { columnflex } from "../styles/commonStyles";
import { fontsObject } from "@sopt-makers/fonts";
import { colors } from "@sopt-makers/colors";

export default function Home() {
  return (
    <HomeContainer>
      <Title>
        🌍 Hi! <p> Which city's weather would you like to check?</p>
      </Title>
      <DescriptionContainer>
        <Description>
          If you want to know the current weather of your selected city,
          <br /> please click the <strong>'Current'</strong> tab.
        </Description>
        <Description>
          If you want to see the 7-day forecast for your city, <br />
          please click the <strong>'Forecast'</strong> tab.
        </Description>
        <Description>
          If you're curious about future weather trends, <br />
          click the <strong>'Future'</strong> tab.
        </Description>
      </DescriptionContainer>
      <InputWrapper>
        <InputComponent />
      </InputWrapper>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  ${columnflex}
  padding: 5rem;
  background-color: ${colors.blue50};
  min-height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Title = styled.h1`
  ${fontsObject.HEADING_4_24_B}
  margin-bottom: 2rem;
  color: ${colors.black};
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Description = styled.p`
  ${fontsObject.BODY_1_18_M}
`;

const InputWrapper = styled.div`
  margin-top: 24px;
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
`;

const StyledInputComponent = styled(InputComponent)`
  width: 100%;
  padding: 14px;
  font-size: 18px;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 12px rgba(0, 123, 255, 0.6);
  }

  &::placeholder {
    color: #aaa;
    font-style: italic;
  }
`;
