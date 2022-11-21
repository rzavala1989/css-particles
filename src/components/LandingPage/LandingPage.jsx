import React from 'react';
import LeavesParticles from '../Particles/LeavesParticles';
import RainParticles from '../Particles/RainParticles';
import SmokeParticles from '../Particles/SmokePartcles';
import { CharacterSelection } from '../CharacterSelection/CharacterSelection';
import './style.css';

const LandingPage = () => {
  return (
    <>
      <LeavesParticles />
      <CharacterSelection />
      {/* <RainParticles /> */}
      {/* <SmokeParticles /> */}
    </>
  );
};

export default LandingPage;
