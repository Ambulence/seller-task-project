import { useState, useEffect } from 'react';

const JSON_API = 'https://jsonplaceholder.typicode.com/';

const useFetch = <T>(url: string, initialData?: any) => {
  const [data, setData] = useState<T>(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`${JSON_API}${url}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};

export default useFetch;
