import { useNavigate } from "react-router";

const TAB_ARR = [
  { name: "current", path: "/current" },
  { name: "forecast", path: "/forecast" },
  { name: "future", path: "/future" },
];

// 필수 구현 Tabcomponent입니다.
export default function TabComponent() {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        {TAB_ARR.map((tab) => {
          return (
            <button key={tab.name} onClick={() => navigate(tab.path)}>
              {tab.name}
            </button>
          );
        })}
      </nav>
    </>
  );
}
