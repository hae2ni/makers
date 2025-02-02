import { SearchField } from "@sopt-makers/ui";
export default function SearchFieldComponent() {
  function handleSubmit() {}
  function handleReset() {}

  return (
    <SearchField placeholder="Please enter the name of city" value="" onSubmit={handleSubmit} onReset={handleReset} />
  );
}
