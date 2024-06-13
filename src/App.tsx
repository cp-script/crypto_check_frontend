import React, { useState } from 'react';
import './App.css';
import CryptoDisplay from './components/cryptoDisplay';

const App: React.FC = () => {
  const [activeSymbol, setActiveSymbol] = useState<string>('bitcoin');
  const [minutes, setMinutes] = useState<string>('');

  return (
    <div className="App">
      <header className="App-header">
        <div className="button-list">
          <button onClick={() => setActiveSymbol('bitcoin')}>BTC</button>
          <button onClick={() => setActiveSymbol('ethereum')}>ETH</button>
          <button onClick={() => setActiveSymbol('dogecoin')}>DOGE</button>
        </div>
        <div className="input-minute">
          <label>Minutes:</label>
          <input type="number" value={minutes} onChange={(e) => { setMinutes(e.target.value) }} />
        </div>
      </header>
      <main>
        <CryptoDisplay symbol={activeSymbol} minutes={Number(minutes)} />
      </main>
    </div>
  );
};

export default App;