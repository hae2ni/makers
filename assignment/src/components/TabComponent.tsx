import { Tab } from "@sopt-makers/ui";

export default function TabComponent() {
  function handleTabOnChange() {
    //onChange 위한 함수입니다.
  }
  return (
    <div>
      <Tab
        onChange={handleTabOnChange}
        size="lg"
        style="primary"
        tabItems={["Tab1", "Tab2", "Tab3"]}
        translator={{
          Tab1: "탭1",
          Tab2: "탭2",
          Tab3: "탭3",
        }}
      />
    </div>
  );
}
