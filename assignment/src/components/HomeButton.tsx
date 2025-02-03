import { Button } from "@sopt-makers/ui";
import { useNavigate } from "react-router";

//mds 사용한 부분입니다.
export default function HomeButton() {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate("/")} rounded="md" size="md" theme="white">
      Home
    </Button>
  );
}
