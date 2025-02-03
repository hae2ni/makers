import styled from "styled-components";
import TabComponent from "../../components/TabComponent";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <LayoutContainer>
      <TabComponent />
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;
