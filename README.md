## 1. **필수 컴포넌트 구현**
    
📌 Tab: 여러 화면이나 섹션을 전환할 수 있는 기능을 제공하는 탭 컴포넌트 <br/>
👉 전체코드는 `src>components>TabComponent` 에서 확인하실 수 있습니다.

~~~~~~~~~
export default function TabComponent() {
  const navigate = useNavigate(); //각 페이지 라우팅을 위한 탭 컴포넌트로 구성했습니다.
  const location = useLocation(); //각 페이지에 해당하는 탭의 style 변경을 위해 useLocation을 활용했습니다.
  const [clickedTab, setClickedTab] = useState(""); //tab 클릭 상태 state 입니다.

  useEffect(() => {
    setClickedTab(location.pathname); 
//각 페이지에 해당하는 탭의 style 변경을 위해 현재 location.pathname과 click된 tab을 비교하고자 합니다.
  }, [location.pathname]);

//tab 클릭 함수입니다.
  function handleClickTabButton(path: string) {
    setClickedTab(path);
    navigate(path);
  }

  return (
    <>
      <NavContainer> //TAB_ARR 에 tab의 이름, path가 존재합니다.
        {TAB_ARR.map((tab) => {
          return (
            <TabButton
              $isActive={clickedTab === tab.path}
              key={tab.name}
              onClick={() => handleClickTabButton(tab.path)}>
              {tab.name}
            </TabButton>
          );
        })}
      </NavContainer>
    </>
  );
}
~~~~~~~~~



  📌 Input: 사용자 입력을 처리하는 입력 필드 컴포넌트 <br/>
  👉 전체 코드는 `src>components>InputComponent` 에서 확인하실 수 있습니다.

     
~~~~~~
export default function InputComponent() {
  const { setCity } = useCityStore(); //사용자가 도시 이름을 직접 입력하도록 합니다.
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(false);
//사용자가 한글을 사용할 경우, 버튼이 disabled되고 안내 문구가 뜹니다.
  const checkEng = /[a-zA-Z]/; //영어인지 아닌지 체크

  useEffect(() => {
    if (value.length == 0) {
      setDisabled(false);
    }
  }, [value]);


//영어인지 아닌지 확인
  function handleOnChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);

    if (!checkEng.test(e.target.value)) {
      setDisabled(true);
    } else if (checkEng.test(e.target.value)) {
      setDisabled(false);
    }
  }

//클릭을 하면 사용자에게 확실하냐고 다시 확인한 후, 사용자가 입력한 도시명을 store에 저장합니다.
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
~~~~~~


## 2. **makers design system 활용**

📌 사용된 컴포넌트 <br/>
    
👉 mds Button 사용: HomeButton 컴포넌트 (`components > HomeButton.tsx`) <br/>
👉 mds Callout 사용: Error 페이지 에러 메세지를 담는 부분 (`pages > Error.tsx` ) <br/>
👉 mds Skeleton 사용: Loading 페이지 (`pages > Loading.tsx`) <br/>

📌 그 외 <br/>
👉 @sopt-makers/fonts, @sopt-makers/colors 활용 <br/>
(각 컴포넌트의 styledcomponent 코드에서 확인하실 수 있습니다.)
   

## 3. **외부 API 활용**
    - 외부 API를 사용하여 **날씨 정보**를 가져오고, 이를 화면에 표시하세요.
    - 필수 데이터: 현재 온도, 날씨 상태, 지역 이름 또는 좌표
    - 추천 API: https://www.weatherapi.com/docs/
    - API Key 또는 인증이 필요한 경우 직접 신청하여 사용해주세요.
  
👉 추천 API를 사용했으며, 현재 온도, 날씨 상태, 지역 이름(좌표 대신)을 모두 표기했습니다 <br/>
👉 API 연결 시 SWR을 사용했습니다.
   
## 4. **디자인 및 기능 자유**
👉 처음 Home 화면에서 사용자가 원하는 도시를 입력하도록 설정했습니다. <br/>
보다 유저 친화적인 ui를 위해 다양한 이모지를 사용하였고, mds의 font와 colors 도 사용하였습니다.
    
## 5. **기술 스택**
   
  📌 **SWR**
👉 날씨라는 데이터 특성상 사용자에게 (현재 날씨의 경우) 실시간으로 측정된 날씨를 보여주어야 한다고 생각했습니다.<br/>
그래서, 일반적인 `axios`가 아닌 `SWR`을 활용하는 게 훨씬 효율적이라고 생각이 들었습니다.<br/>
 15분에 한 번씩 리패치를 할 수 있도록 설정했습니다.<br/>

🧩 15분마다 (현재 날씨 API의 경우) 자동으로 데이터를 갱신하도록 합니다. (`refreshInterval`) <br/>
🧩 api요청과 ui렌더링 코드를 각각 독립적으로 관리하도록 하기 위해 데이터 패칭을 `useSWR`을 활용한 custom hook의 형태로 분리하였습니다.  <br/>
   
 📌 **react-datepicker**
👉 `Future` 페이지의 api는 미래의 특정 날짜의 예측 날씨를 보여줍니다. <br/>api 특성 상 하나의 날짜를 고정시키는게 아니라 사용자가 원하는 날짜를 선택할 수 있는 옵션을 주는게 좋을 것 같다고 생각했습니다. 

🧩 `input[type="date"]` 보다 브라우저에 따라 일관된 UI,UX 를 보여줄 수 있다고 판단하였습니다.  <br/>
🧩 다양한 커스터마이징을 하여 보다 사용자가 쉽게 날짜를 선택할 수 있도록 하였습니다. <br/>
🧩 대부분의 웹사이트에서 사용하는 방식이라서 직관적이고 익숙할 것이라고 판단하였습니다. <br/>

 📌**styled-components**
👉 유지보수성과 재사용성을 고려하여 styled component를 적용했습니다. 

🧩`commonstyle.ts`에 자주 쓰는 style code 등을 미리 선언해 두었습니다.  <br/>
🧩 명확한 디자인이 없어서 재사용성을 위한 공통 스타일 컴포넌트를 만들지는 못했습니다.<br/>


## 6.  **챌린징 요소 및 트러블슈팅 기록**
 **📌 mds 사용시 `storybook` ui 렌더링이 되지 않는 문제**

👉 `mds` 사용시, `storybook` 에서 보여지는 ui가 렌더링되지 않았습니다. <br/>
개발자 도구를 확인해보아도 css는 추가적으로 입혀져 있지 않았으며, 문서를 찾아봐도 특정 라이브러리가 추가로 필요한지 명확한 설명이 없었습니다.<br/>

🧩 기존 `mds`를 사용한 makers의 레포지토리 코드를 분석했습니다 <br/>
🧩 관련된 설정 파일 등을 모두 비교해 보았습니다.  <br/>
🧩 `import "@sopt-makers/ui/dist/index.css";` 를 추가해야 함을 발견하여 해결했습니다.

**📌 react-datepicker 커스텀의 어려움**

👉 `react-datepicker` 의 기본 적용은 쉬웠으나, 스타일 커스텀 및 특정 기능 적용에 어려움을 겪었습니다. <br/>
👉 선택된 날짜의 배경색 변경 불가 -> `dayClassName` 을 지정했으나, `react-datepicker` 기본 스타일이 우선 적용되었습니다. <br/>
👉 api 특성 상 미래날씨만 반환하기 때문에, 이를 반영하고 싶었습니다.<br/>

🧩`calendarClassName` 과 `dayClassName`을 사용하고, `!important`를 추가하여 기본 우선 순위를 높였습니다.<br/>
🧩 `renderCustomHeader` 를 사용했으며, `increaseMonth` 함수를 handling하는 버튼을 `react-icons/fa` 라이브러리를 사용하여 추가했습니다. <br/>또한, 년도는 drop-down으로 선택하는 것이 사용자 친화적이라 판단되어 `select`, `option`을 사용해 주었습니다. 



  
   
   
