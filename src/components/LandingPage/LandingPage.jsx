import React from 'react';
import LeavesParticles from '../Particles/LeavesParticles';
import RainParticles from '../Particles/RainParticles';
import './style.css';

const LandingPage = () => {
  return (
    <>
      <div className='background1'>
        {/* <LeavesParticles /> */}
        <RainParticles />
      </div>
    </>
  );
};

export default LandingPage;
