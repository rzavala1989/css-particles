import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import character1 from './images/character1.png';
import character2 from './images/character2.png';
import character3 from './images/character3.png';
import character1GIF from './images/character1.GIF';
import character2GIF from './images/character2.GIF';
import character3GIF from './images/character3.GIF';

//TODO: build a JSON object for all the selectable characters

export const CharacterSelection = () => {
  return (
    <div>
      <h1>Choose Your Character</h1>
      <div className='box-container'>
        {/* <Link to='battle-enemy-1'> */}
        <button className='box-section-1'>
          <span className='title'>CHOOSE</span>
          <img src={character1} alt='character1' className='character-img' />
          <img
            src={character1GIF}
            alt='character1-gif'
            className='character-gif'
          />
          <span className='name'>Character One!</span>
        </button>
        {/* </Link> */}
      </div>
      <div className='box-container'>
        {/* <Link to='battle-enemy-2'> */}
        <button className='box-section-2'>
          <span className='title'>CHOOSE</span>
          <img src={character2} alt='character2' className='character-img' />
          <img
            src={character2GIF}
            alt='character2-gif'
            className='character-gif'
          />
          <span className='name'>Character Two!</span>
        </button>
        {/* </Link> */}
      </div>
      <div className='box-container'>
        {/* <Link to='battle-enemy-3'> */}
        <button className='box-section-3'>
          <span className='title'>CHOOSE</span>
          <img src={character3} alt='character3' className='character-img' />
          <img
            src={character3GIF}
            alt='character3-gif'
            className='character-gif'
          />
          <span className='name'>Character Three!</span>
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};
