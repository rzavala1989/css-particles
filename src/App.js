import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FinishPage from './components/FinishPage/FinishPage';
import LandingPage from './components/LandingPage/LandingPage';
import { FightPage1 } from './components/FightPage/FightPage1/FightPage1';
import { FightPage2 } from './components/FightPage/FightPage2/FightPage2';
import { FightPage3 } from './components/FightPage/FightPage3/FightPage3';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
