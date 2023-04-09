import { useQuery } from "react-query";
import axios from "axios";

export const useWeatherData = (location) => {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=5ELBGWGH3ELM5YZLGX42GV4B9&contentType=json`;

  const { isLoading, data, error, refetch } = useQuery(
    ["weather-data"],
    async () => {
      const response = await axios.get(url);
      return response.data;
    }
  );

  return { isLoading, data, error, refetch };
};
