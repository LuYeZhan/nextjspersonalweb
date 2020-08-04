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
        url='https://react-my-burger-75352.web.app/'
        description='My burger app, react, hooks, redux, firebase'
        image='../assets/burger.jpg'
        alt='burger project'
      />
      <Project
        url='https://luyezhan.github.io/Natours/'
        description='Natours html + css'
        image='../assets/burger.jpg'
        alt='natours front project'
      />
      <Project
        url='https://natours11api.herokuapp.com/'
        description='Natours API Node.Js + PUG'
        image='../assets/burger.jpg'
        alt='natours Api project'
      />
      <Project
        url='https://kiwi-me.firebaseapp.com/'
        description='Kiwi hackaton React Hooks App with socket.io'
        image='../assets/burger.jpg'
        alt='Kiwi project'
      />
      <Project
        url='https://tomeu.herokuapp.com/'
        description='Tomeu Node.Js express handlebar'
        image='../assets/burger.jpg'
        alt='Tomeu project'
      />
      <Project
        url='https://listenandtalk-a3074.firebaseapp.com/'
        description='Listen and Talk MERN Stack social network using sound only'
        image='../assets/burger.jpg'
        alt='listen & talk  project'
      />
      <Project
        url='https://luyezhan.github.io/Loveweb/'
        description='tinder app created with vanilla Js'
        image='../assets/burger.jpg'
        alt='tinder  project'
      />
      <Project
        url='https://luyezhan.github.io/Code-Invader//'
        description='mi first game using canvas and vanilla js'
        image='../assets/burger.jpg'
        alt='tinder  project'
      />
    </div>
    <button onClick={() => Router.push('/auth')}>Go to Auth</button>
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
