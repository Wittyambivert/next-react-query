import axios from "axios";
import { useQuery } from "react-query";

export default function getReal() {
  const url = "http://localhost:8000/api/account/getAllUsers";
  const { isLoading, error, data } = useQuery(["real-estate"], async () => {
    const res = await axios.get(url);
    return res.data;
  });

  console.log(data);
  return (
    <>
      <div>{/* <h1>{data.email}</h1> */}</div>
    </>
  );
}
