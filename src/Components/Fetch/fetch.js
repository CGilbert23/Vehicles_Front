import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [cars, setCars] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data");
          }
          return res.json();
        })
        .then((data) => {
          setCars(data.vehicles);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch Aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortController.abort();
  }, [url]);

  return { cars, setCars, isPending, error };
};

export default useFetch;
