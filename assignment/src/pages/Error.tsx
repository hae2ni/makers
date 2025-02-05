import { colors } from "@sopt-makers/colors";
import { fontsObject } from "@sopt-makers/fonts";
import { Callout } from "@sopt-makers/ui";
import { useNavigate } from "react-router";
import styled from "styled-components";

export default function Error() {
  const navigation = useNavigate();

  return (
    <Callout hasIcon type="danger">
      <CalloutStyle>
        Please enter the correct city name or press the sentence behind <br />
        It will display Seoul as the default
      </CalloutStyle>
      <ButtonText onClick={() => location.reload()}>Change to the default option, Seoul</ButtonText>
      <ButtonText onClick={() => navigation("/")}>Click here to change it to the correct city name</ButtonText>
    </Callout>
  );
}

const CalloutStyle = styled.p`
  ${fontsObject.TITLE_5_18_SB}
  color: ${colors.black};
  margin-bottom: 2rem;
`;

const ButtonText = styled.button`
  ${fontsObject.LABEL_3_14_SB}
  color: ${colors.gray600};

  &:hover {
    color: ${colors.blue500};
  }
`;
