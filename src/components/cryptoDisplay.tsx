import React from 'react';
import useCryptoData from '../hooks/useCryptoData';

interface CryptoDisplayProps {
  symbol: string;
}

const CryptoDisplay: React.FC<CryptoDisplayProps> = ({ symbol }) => {
  const { data, loading, error } = useCryptoData(symbol);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{symbol.toUpperCase()}</h1>
      <p>Latest Price: {data?.latest} EUR</p>
      <p>Average Price: {data?.average} EUR</p>
      {/* Bonus: Add meaningful display of historic data here */}
    </div>
  );
};

export default CryptoDisplay;