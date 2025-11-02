import { useState, useEffect } from 'react';

export const useApiData = (apiFunction) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await apiFunction();
        setData(result.data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [apiFunction]);

  return { data, loading };
};
