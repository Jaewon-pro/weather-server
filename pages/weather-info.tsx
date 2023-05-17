import NavBar from "@/app/components/navbar/navbar";
import Weather from "@/app/components/weather.module";

export default function WeatherInfo() {
  return (
    <>
      <NavBar />
      <Weather weather={null} />
    </>
  );
}
