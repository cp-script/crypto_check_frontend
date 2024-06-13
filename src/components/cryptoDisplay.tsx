import React from 'react';
import useCryptoData from '../hooks/useCryptoData';
import HistoryTable from './historyTable';

interface CryptoDisplayProps {
  symbol: string;
  minutes?: number;
}

const CryptoDisplay: React.FC<CryptoDisplayProps> = ({ symbol, minutes }) => {
  const { data, loading, error } = useCryptoData(symbol, minutes);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{symbol.toUpperCase()}</h1>
      <p>Latest Price: {data?.latest} EUR</p>
      <p>Average Price: {data?.average} EUR</p>
      <HistoryTable history={data?.history || []} />
    </div>
  );
};

export default CryptoDisplay;