import './style.css';
import React from 'react';
import { LinearProgress } from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

export const HealthBar = ({ health }) => {
  const ProgressBarColor = () => {
    if (health > 67) {
      return 'green';
    } else if (health > 34) {
      return 'yellow';
    } else {
      return 'red';
    }
  };
  const StyledHealthBar = styled(LinearProgress)(() => ({
    width: '80%',
    height: '10px',
    backgroundColor: 'grey',
    border: 'none',
    borderRadius: '25px',
    [`& .${linearProgressClasses.bar}`]: {
      //brings in the color of the bar based on state
      backgroundColor: ProgressBarColor(),
    },
  }));

  return (
    <div className='healthbox'>
      <label htmlFor='' className='namelabel'>
        NASTY
      </label>
      <div className='hpbox'>
        <StyledHealthBar variant='determinate' value={health} />
      </div>
    </div>
  );
};
