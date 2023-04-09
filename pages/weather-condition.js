import { useState } from "react";
import { getWeatherData } from "./api/weather";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    const data = await getWeatherData(city);
    setWeatherData(data);
  };

  return (
    <>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {weatherData && (
        <div>
          <h2>{weatherData.location}</h2>
          <p>Temperature: {weatherData.temperature}</p>
          <p>Humidity: {weatherData.humidity}</p>
        </div>
      )}
    </>
  );
}
