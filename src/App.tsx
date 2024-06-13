import React, { useState } from 'react';
import './App.css';
import CryptoDisplay from './components/cryptoDisplay';

const App: React.FC = () => {
  const [activeSymbol, setActiveSymbol] = useState('bitcoin');

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setActiveSymbol('bitcoin')}>BTC</button>
        <button onClick={() => setActiveSymbol('ethereum')}>ETH</button>
        <button onClick={() => setActiveSymbol('dogecoin')}>DOGE</button>
      </header>
      <main>
        <CryptoDisplay symbol={activeSymbol} />
      </main>
    </div>
  );
};

export default App;