import { useEffect, useRef, useState } from "react";
import { useCityStore } from "../store/useCityStore";
import styled from "styled-components";
import { columnflex, flex } from "../styles/commonStyles";
import { colors } from "@sopt-makers/colors";
import { fontsObject } from "@sopt-makers/fonts";

//사용자 입력을 받는 입력 필드 컴포넌트입니다!
export default function InputComponent() {
  const { setCity } = useCityStore();
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(false);
  const checkEng = /[a-zA-Z]/;

  useEffect(() => {
    if (value.length == 0) {
      setDisabled(false);
    }
  }, [value]);

  function handleOnChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);

    if (!checkEng.test(e.target.value)) {
      setDisabled(true);
    } else if (checkEng.test(e.target.value)) {
      setDisabled(false);
    }
  }

  function handleOnClickButton() {
    if (value) {
      alert(`Are you sure with ${value}?`);
      setCity(value);
    } else {
      alert("please enter right thing,,,,");
    }
  }

  return (
    <Container>
      <InputContianer>
        <Input value={value} type="search" ref={inputRef} onChange={handleOnChangeInput} />
        <Button onClick={handleOnClickButton} disabled={disabled}>
          Enter
        </Button>
      </InputContianer>
      {disabled && <Alert>Please enter only Eng</Alert>}
    </Container>
  );
}

const Container = styled.div`
  ${columnflex}
  gap: 1rem;
  align-items: flex-start;
`;

const InputContianer = styled.div`
  ${flex}
  gap: 0.2rem
`;

const Input = styled.input`
  ${flex}
  justify-content: flex-start;

  width: 35rem;
  height: 5rem;

  border-radius: 12px;
  border-color: ${colors.blue700};
  padding-left: 0.5rem;
  border-style: solid;

  margin: 0;
`;

const Button = styled.button`
  ${fontsObject.BODY_3_14_M}

  &:hover {
    color: ${colors.blue600};
  }
`;

const Alert = styled.p`
  ${fontsObject.LABEL_5_11_SB}
  color: ${colors.red200};

  padding-left: 0.5rem;
`;
