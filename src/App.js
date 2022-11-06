import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListOfCoins from './pages/ListOfCoins/ListOfCoins';
import CoinDescription from './pages/components/CoinDescription/CoinDescription';
// import CoinsCatalogue from './pages/components/CoinsCatalogue/CoinsCatalogue';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} exact/>
      <Route path='/listofcoins' element={<ListOfCoins />} exact/>
      <Route path='/catalog/:id' element={<ListOfCoins />} exact/>
      <Route path='/coinpage/:id' element={<CoinDescription />} exact/>
    </Routes>
  );
}

export default App;
