import './App.css';
import { FinishPage } from './components/FinishPage';
import { LandingPage } from './components/LandingPage';
import { MainPage } from './components/MainPage';

function App() {
  return (
    <div className='App'>
      <LandingPage />
      <MainPage />
      <FinishPage />
    </div>
  );
}

export default App;
