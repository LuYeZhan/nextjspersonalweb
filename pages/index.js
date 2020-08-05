import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import classes from './index.module.css';
import Project from '../components/Project/Project';

const indexPage = (props) => (
  <div>
    <h1>{props.appName}'s personal page</h1>
    <h2>Projects</h2>
    <div className={classes.Container}>
      <Project
        name='Burger App'
        url='https://react-my-burger-75352.web.app/'
        description='react, hooks, redux, firebase'
        image='../assets/burger.jpg'
        alt='burger project'
      />
      <Project
        name='Natours App'
        url='https://luyezhan.github.io/Natours/'
        description=' html + css'
        image='../assets/burger.jpg'
        alt='natours front project'
      />
      <Project
        name='Natours Api'
        url='https://natours11api.herokuapp.com/'
        description=' Node.Js + PUG'
        image='../assets/burger.jpg'
        alt='natours Api project'
      />
      <Project
        name='Kiwi-Me App'
        url='https://kiwi-me.firebaseapp.com/'
        description='React Hooks App with socket.io'
        image='../assets/burger.jpg'
        alt='Kiwi project'
      />
      <Project
        name='Tomeu bnb app'
        url='https://tomeu.herokuapp.com/'
        description=' NodeJs express handlebar'
        image='../assets/burger.jpg'
        alt='Tomeu project'
      />
      <Project
        name='Social Network App'
        url='https://listenandtalk-a3074.firebaseapp.com/'
        description='MERN Stack '
        image='../assets/burger.jpg'
        alt='listen & talk  project'
      />
      <Project
        name='My tinder app'
        url='https://luyezhan.github.io/Loveweb/'
        description='tinder app created with vanilla Js'
        image='../assets/burger.jpg'
        alt='tinder  project'
      />
      <Project
        url='https://luyezhan.github.io/Code-Invader//'
        description=' canvas and vanilla js'
        image='../assets/burger.jpg'
        alt='Game project'
      />
    </div>
    <button onClick={() => Router.push('/contact')}>Contact me</button>
  </div>
);

indexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: 'Lu Ye Zhan' });
    }, 1000);
  });
  return promise;
};

export default indexPage;
