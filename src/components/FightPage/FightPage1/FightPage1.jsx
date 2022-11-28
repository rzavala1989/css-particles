import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
//Task Bar - interactivity with the app
//Health Bar - information pertinent to the user
import LeavesParticles from '../../Particles/LeavesParticles';
import RainParticles from '../../Particles/RainParticles';
import SmokeParticles from '../../Particles/SmokePartcles';
//images for each individual enemy

export const FightPage1 = () => {
  const navigate = useNavigate();

  //health bar variables
  const [health, setHealth] = useState(100);
  const [noFirstTask, setFirstTask] = useState(true);
  let [numberOfTasks, setNumberOfTasks] = useState(0);
  // current condition of enemy
  const [defaultImage, setEnemyImage] = useState();

  //Attack button - decreases health
  const Attack = (hp) => {
    if (health > 0) {
      setHealth(health - hp);
    }
  };

  //functions for health bar/task bar
  const completeTask = () => {
    if (numberOfTasks !== 0) {
      setNumberOfTasks(numberOfTasks - 1);
      if (numberOfTasks === 1) {
        navigate('/onelose'); //user wins
      }
    }
    Attack(noFirstTask ? 0 : health / numberOfTasks);
    //TODO change enemy image based on health
    if (numberOfTasks < 3) {
      setEnemyImage('https://i.imgur.com/1DQZV6U.gif');
    } else if (numberOfTasks < 6) {
      setEnemyImage('https://i.imgur.com/1DQZV6U.gif');
    } else {
      setEnemyImage('https://i.imgur.com/1DQZV6U.gif');
    }
  };

  //Task Bar functions
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== '') {
      setTodos([
        ...todos,
        { text: input, completed: false, id: Math.random() * 1000 },
      ]);
      setInput('');
      if (noFirstTask) {
        setFirstTask(false);
      }
      setNumberOfTasks(numberOfTasks + 1);
    }
  };

  return <div>FightPage1</div>;
};
