import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { flex } from "../styles/commonStyles";
import { fontsObject } from "@sopt-makers/fonts";
import { useEffect, useState } from "react";
import { colors } from "@sopt-makers/colors";

const TAB_ARR = [
  { name: "current", path: "/current" },
  { name: "forecast", path: "/forecast" },
  { name: "future", path: "/future" },
];

// 필수 구현 Tabcomponent입니다.
export default function TabComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [clickedTab, setClickedTab] = useState("");

  useEffect(() => {
    setClickedTab(location.pathname);
  }, [location.pathname]);

  function handleClickTabButton(path: string) {
    setClickedTab(path);
    navigate(path);
  }

  return (
    <>
      <NavContainer>
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

const NavContainer = styled.nav`
  ${flex}
  ${fontsObject.HEADING_4_24_B}
`;

const TabButton = styled.button<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? "black" : colors.gray200)};
`;
