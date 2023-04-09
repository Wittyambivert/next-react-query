import { useQuery } from "react-query";
import axios from "axios";

export default function getCatFact() {
  const url = "https://catfact.ninja/fact";
  const { isLoading, error, data } = useQuery(["cat-key"], async () => {
    const res = await axios.get(url);
    return res.data;
  });

  isLoading && <div>Loading ...</div>;
  error && (
    <div>
      Something went wrong <br /> {error.message}
    </div>
  );

  const fact = data?.fact;

  return (
    <>
      <div style={{ width: "40vw", margin: "0 auto" }}>
        <h1>Cat fact</h1>
        <p>{fact}</p>
      </div>
    </>
  );
}
