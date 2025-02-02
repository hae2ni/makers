import useFuture from "../hooks/useFuture";

export default function Future() {
  const seoul = "Seoul";
  const dt = "2025-12-25";
  const { data } = useFuture({ location: seoul, date: dt });
  console.log(data);
  return <div>Future</div>;
}
