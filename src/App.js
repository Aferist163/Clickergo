import React, { useState } from 'react';
import Coin from './components/Coin';
import Shop from './components/Shop';
import './App.css';

function App() {
  const [coins, setCoins] = useState(0);
  const [coinPerClick, setCoinPerClick] = useState(1);
  const [isShopOpen, setIsShopOpen] = useState(false);

  const handleCoinClick = () => {
    setCoins(coins + coinPerClick);
  };

  const handleOpenShop = () => {
    setIsShopOpen(true);
  };

  const handleCloseShop = () => {
    setIsShopOpen(false);
  };

  const handleUpgrade = (newCoinPerClick, newCost) => {
    setCoins(coins - newCost);
    setCoinPerClick(newCoinPerClick);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Clicker Game</h1>
        <p>Coins: {coins}</p>
        <p>Coins per click: {coinPerClick}</p>
        <Coin onClick={handleCoinClick} />
        <button onClick={handleOpenShop}>Shop</button>
      </header>
      {isShopOpen && (
        <Shop
          coins={coins}
          coinPerClick={coinPerClick}
          onClose={handleCloseShop}
          onUpgrade={handleUpgrade}
        />
      )}
    </div>
  );
}

export default App;
