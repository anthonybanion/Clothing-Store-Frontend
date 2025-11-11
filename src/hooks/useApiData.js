// hooks/useApiData.js
import { useState, useEffect } from 'react';

export const useApiData = (apiFunction, defaultValue = null) => {
  const [data, setData] = useState(defaultValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      try {
        const result = await apiFunction();
        if (isMounted) setData(result);
      } catch (err) {
        console.error('Error:', err);
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    loadData();

    return () => {
      isMounted = false;
    };
  }, [apiFunction]);

  return { data, loading, error };
};
