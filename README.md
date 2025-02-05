1. **필수 컴포넌트 구현**
    
    다음 2개의 컴포넌트를 직접 구현하여 뷰를 완성하세요.
    
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


2. **makers design system 활용**

    📌 사용된 컴포넌트
   👉 mds Button 사용: HomeButton 컴포넌트 (`components > HomeButton.tsx`)
   👉 mds Callout 사용: Error 페이지 에러 메세지를 담는 부분 (`pages > Error.tsx` )
   👉 mds Skeleton 사용: Loading 페이지 (`pages > Loading.tsx`)

   📌 그 외
   👉 @sopt-makers/fonts, @sopt-makers/colors 활용 <br/>
   (각 컴포넌트의 styledcomponent 코드에서 확인하실 수 있습니다.)
   

3. **외부 API 활용**
    - 외부 API를 사용하여 **날씨 정보**를 가져오고, 이를 화면에 표시하세요.
    - 필수 데이터: 현재 온도, 날씨 상태, 지역 이름 또는 좌표
    - 추천 API: https://www.weatherapi.com/docs/
    - API Key 또는 인증이 필요한 경우 직접 신청하여 사용해주세요.
  
  👉 추천 API를 사용했으며, 현재 온도, 날씨 상태, 지역 이름(좌표 대신)을 모두 표기했습니다
  👉 API 연결 시 SWR을 사용했습니다.
   
4. **디자인 및 기능 자유**
    - UI/UX는 지원자의 판단에 따라 자유롭게 설계해 주세요.
    - 사용자가 직관적으로 이해할 수 있는 인터페이스를 구현하는 데 초점을 맞춰주세요.
    - 
5. **기술 스택**
    - React와 TypeScript를 필수적으로 사용하여 과제를 수행해주세요.
    - 이외의 라이브러리 사용은 자유입니다. 단, 선택한 라이브러리의 사용 이유를 명확히 코드 또는 문서(README) 에서 설명해주세요.



  
6.  **챌린징 요소 및 트러블슈팅 기록**
    - 과제 수행 중 마주한 어려움(챌린징 요소)을 기록하고, 이를 해결하기 위해 시도한 방법과 최종적으로 채택한 솔루션을 문서화해주세요.
    - 문제 해결 과정을 설명함으로써 지원자의 문제 해결 능력을 확인할 예정입니다.
    - 해당 내용은 프로젝트의 **README** 파일로 제출해주세요.
  
   
