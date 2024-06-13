import { useState, useEffect } from 'react';
import { HistoricalPrice } from '../components/historyTable';

const uri = process.env.REACT_APP_SERVER_URI ? `${process.env.REACT_APP_SERVER_URI}` : "http://localhost:8000";

interface PriceData {
  latest: number;
  average: number;
  history: HistoricalPrice[];
  count: number;
}

const useCryptoData = (symbol: string, minutes: number = 60) => {
  const [data, setData] = useState<PriceData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${uri}/price/${symbol}?minutes=${minutes}`);
        const result = await response.json();
        setData(result);
      } catch (e) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 60000);

    return () => clearInterval(intervalId);
  }, [symbol, minutes]);

  return { data, loading, error };
};

export default useCryptoData;