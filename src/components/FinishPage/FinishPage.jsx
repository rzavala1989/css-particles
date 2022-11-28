import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import LeavesParticles from '../Particles/LeavesParticles';
import userDeath from './images/user_rip.GIF';
import oneDeath from './images/one_rip.GIF';
import twoDeath from './images/two_rip.GIF';

const FinishPage = ({ deathImage }) => {
  const getImage = () => {
    switch (deathImage) {
      case 1:
        return <img alt='deathpic' className='badge-icon' src={userDeath} />;
      case 2:
        return <img alt='deathpic' className='badge-icon' src={oneDeath} />;
      case 3:
        return <img alt='deathpic' className='badge-icon' src={twoDeath} />;
      default:
        return <img alt='deathpic' className='badge-icon' src={userDeath} />;
    }
  };
  return (
    <>
      <LeavesParticles />
      <div className='text-container'>
        <h1 className='header'> CONGRATS! YOU DEFEATED:</h1>
        <div className='message-contaner'>
          {getImage()}
          <h2>You earned a new badge!</h2>
        </div>
        <Link to='/'>
          <button className='replay-button'>Try Again?</button>
        </Link>
      </div>
    </>
  );
};
export default FinishPage;
