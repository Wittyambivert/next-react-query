import { useQuery } from "react-query";
import axios from "axios";

export default function Weather() {
  const url =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/abuja?unitGroup=us&key=5ELBGWGH3ELM5YZLGX42GV4B9&contentType=json";

  const { isLoading, data, error } = useQuery("weather-api", async () => {
    const response = await axios.get(url);
    return response.data;
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message} </h2>;
  }

  //   const temperature = data?.days?.[0]?.temp;
  //   const humidity = data?.days?.[0]?.humidity;
  //   const location = data?.resolvedAddress;

  //   return (
  //     <>
  //       <div>
  //         <h2>Current Weather</h2>
  //         <p>Temperature: {temperature}°F</p>
  //         <p>Humidity: {humidity}%</p>
  //         <p>Location: {location}</p>
  //       </div>
  //     </>
  //   );

  return (
    <>
      <div>
        <h2>Current Weather detains in {data.resolvedAddress}</h2>
      </div>
    </>
  );
}
