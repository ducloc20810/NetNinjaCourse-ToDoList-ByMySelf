import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [shouldRefetch, refetch] = useState({});

  const refresh = () => {
    refetch({});
  };
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status !== 200) throw Error("Cannot fetch data");
        else return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, [url, shouldRefetch]);

  return { data, isPending, error, refresh };
};

export default useFetch;
