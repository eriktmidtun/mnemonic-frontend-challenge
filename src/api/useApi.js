import { useState, useEffect } from "react";
import fetchIcons from "./fetchIcons";

const useApi = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  console.log("test")
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const results = await fetchIcons();
        if (results.status !== 200) {
          throw Error("Kunne ikke laste inn data");
        }
        const parsedResults = await results.json();
        setData(parsedResults);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, loading, error };
};

export default useApi;