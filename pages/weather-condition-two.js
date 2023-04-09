import { useWeatherData } from "./api/weathertwo";

export default function WeatherComponent() {
  const { isLoading, data, error } = useWeatherData("abuja");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const temperature = data?.days?.[0]?.temp;
  const humidity = data?.days?.[0]?.humidity;
  const location = data?.resolvedAddress;

  return (
    <div>
      <h2>{location}</h2>
      <p>Temperature: {temperature}</p>
      <p>Humidity: {humidity}</p>
    </div>
  );
}
