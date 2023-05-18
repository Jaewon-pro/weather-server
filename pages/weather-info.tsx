import Layout from "@/app/components/layout";
import Weather from "@/app/components/weather.module";

export default function WeatherInfo() {
  return (
    <Layout>
      <Weather weather={null} />
    </Layout>
  );
}
