import InputComponent from "../components/InputComponent";

export default function Home() {
  return (
    <div>
      <p>Hi, Which city's weather would you like to know?</p>
      <p>If you wanna know current weather of your selected city, please click 'current' tab</p>
      <p>If you wanna know next 7 days weather of your selected city, please click 'forecast' tab</p>
      <p>If you wanna know far future weather of your selected city, please click 'future' tab</p>
      <InputComponent />
    </div>
  );
}
