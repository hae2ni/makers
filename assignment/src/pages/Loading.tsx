import { Skeleton } from "@sopt-makers/ui";

//로딩뷰,,, mds 스캘래톤 빌려 썼습니다!!
export default function Loading() {
  return (
    <>
      <Skeleton height={100} width={100} variant="default" />
    </>
  );
}
