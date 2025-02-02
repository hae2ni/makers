import useCurrent from "../hooks/useCurrent";

export default function Current() {
  const seoul = "Seoul";
  const { data, isLoading, error } = useCurrent({ location: seoul });

  if (isLoading) {
    return <p>로딩중!!!!</p>;
  }

  if (error) {
    return <p>에러나옴</p>;
  }

  return <div>{data && <p>{data?.current?.cloud}</p>}</div>;
}
