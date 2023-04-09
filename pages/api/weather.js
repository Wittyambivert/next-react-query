// api.js
import axios from "axios";

export async function getWeatherData(city) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=5ELBGWGH3ELM5YZLGX42GV4B9&contentType=json`;

  const response = await axios.get(url);
  const data = response.data;

  const temperature = data?.days?.[0]?.temp;
  const humidity = data?.days?.[0]?.humidity;
  const location = data?.resolvedAddress;

  return { temperature, humidity, location };
}
