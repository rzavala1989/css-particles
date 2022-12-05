import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
//Task Bar - interactivity with the app
//Health Bar - information pertinent to the user
import LeavesParticles from '../../Particles/LeavesParticles';
import RainParticles from '../../Particles/RainParticles';
import SmokeParticles from '../../Particles/SmokePartcles';
//images for each individual enemy
import nastyIdle from './images/nasty_idle_1.GIF';
import nastyDamageOne from './images/nasty_damage_1.GIF';
import nastyDamageTwo from './images/nasty_damage_2.GIF';
import nastyDamageThree from './images/nasty_damage_3.GIF';
import { HealthBar } from '../../HealthBar/HealthBar';
import TaskBar from '../../TaskBar/TaskBar';

export const FightPage1 = () => {
  const navigate = useNavigate();

  //health bar variables
  const [health, setHealth] = useState(100);
  const [noFirstTask, setFirstTask] = useState(true);
  let [numberOfTasks, setNumberOfTasks] = useState(0);
  // current condition of enemy
  const [currentEnemyImage, setEnemyImage] = useState(nastyIdle);

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
      setEnemyImage(nastyDamageThree);
    } else if (numberOfTasks < 6) {
      setEnemyImage(nastyDamageTwo);
    } else {
      setEnemyImage(nastyDamageOne);
    }
  };

  //Task Bar functions -- glorified todo list
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

  return (
    //When enemy has most of its health, show good weather (Leaves)
    //When enemy takes a moderate amount of damage, show bad weather (Rain)
    //When enemy takes a substantial amount of damage, show even worse weather to simulate more intense conditions (Smoke)

    // !! All of this is for effect and user experience. It is not necessary for the game to function. !! //

    //Show a task bar that the user can add tasks to
    //SHow a health bar
    //Show an enemy
    <>
      {health > 66 && <LeavesParticles />}
      {health <= 66 && health > 40 && <RainParticles />}
      {health <= 40 && <SmokeParticles />}

      <div className='root'>
        <div className='task-div'>
          <TaskBar
            input={input}
            todos={todos}
            setTodos={setTodos}
            inputTextHandler={handleChange}
            submitTodoHandler={handleSubmit}
            completeTask={completeTask}
            numberOfTasks={numberOfTasks}
            setNumOfTasks={setNumberOfTasks}
            noFirstTask={noFirstTask}
          />
        </div>
        <div className='right-side'>
          <div className='health-div'>
            <HealthBar health={health} name='NASTY' />
          </div>
          <div className='monster-div'>
            <img src={currentEnemyImage} alt='monster' />
          </div>
        </div>
      </div>
    </>
  );
};
