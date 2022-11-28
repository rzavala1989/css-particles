import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import { FightPage1 } from './components/FightPage/FightPage1/FightPage1';
import { FightPage2 } from './components/FightPage/FightPage2/FightPage2';
import { FightPage3 } from './components/FightPage/FightPage3/FightPage3';
import FinishPage from './components/FinishPage/FinishPage';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/fightone' element={<FightPage1 />} />
        <Route path='/fighttwo' element={<FightPage2 />} />
        <Route path='/fightthree' element={<FightPage3 />} />
        <Route path='/onelose' element={<FinishPage deathImage={1} />} />
        <Route path='/twolose' element={<FinishPage deathImage={2} />} />
        <Route path='/threelose' element={<FinishPage deathImage={3} />} />
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
