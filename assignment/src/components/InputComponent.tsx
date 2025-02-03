import { useRef, useState } from "react";
import { useCityStore } from "../store/useCityStore";

//사용자 입력을 받는 입력 필드 컴포넌트입니다!
export default function InputComponent() {
  const { setCity } = useCityStore();
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(false);
  const checkEng = /[a-zA-Z]/;

  function handleOnChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    if (!checkEng.test(e.target.value)) {
      setDisabled(true);
    } else {
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
    <>
      <input value={value} type="search" ref={inputRef} onChange={handleOnChangeInput} />
      <button onClick={handleOnClickButton} disabled={disabled}>
        Enter
      </button>
      {disabled && <p>Please enter only Eng</p>}
    </>
  );
}
