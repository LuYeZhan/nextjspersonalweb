import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

const indexPage = (props) => (
  <div>
    <h1>The main Page of {props.appName}</h1>
    <div>
      <p>
        Go to
        <a href='https://react-my-burger-75352.web.app/'> burger react app</a>
      </p>
    </div>
    <div>
      <p>
        Go to
        <a href='https://luyezhan.github.io/Natours/'> Natours html + css</a>
      </p>
    </div>
    <div>
      <p>
        Go to
        <a href='https://natours11api.herokuapp.com/'>
          {' '}
          Natours API Node.Js + PUG
        </a>
      </p>
    </div>
    <div>
      <p>
        Go to
        <a href='https://kiwi-me.firebaseapp.com/'>
          {' '}
          Kiwi hackaton React Hooks App with socket.io
        </a>
      </p>
    </div>
    <div>
      <p>
        Go to
        <a href='https://tomeu.herokuapp.com/'>
          {' '}
          Tomeu Node.Js express handlebar
        </a>
      </p>
    </div>
    <div>
      <p>
        Go to
        <a href='https://listenandtalk-a3074.firebaseapp.com/'>
          {' '}
          Listen and Talk MERN Stack social network using sound only
        </a>
      </p>
    </div>
    <div>
      <p>
        Go to
        <a href='https://luyezhan.github.io/team-7-xxxlutz/'>
          {' '}
          vanilla javascript + html + css, ironhack hackaton winning project
        </a>
      </p>
    </div>
    <div>
      <p>
        Go to
        <a href='https://luyezhan.github.io/Loveweb/'>
          {' '}
          tinder app created with vanilla Js
        </a>
      </p>
    </div>
    <div>
      <p>
        Go to
        <a href='https://luyezhan.github.io/Code-Invader//'>
          {' '}
          mi first game using canvas and vanilla js
        </a>
      </p>
    </div>
    <button onClick={() => Router.push('/auth')}>Go to Auth</button>
  </div>
);

indexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: 'Super App ' });
    }, 1000);
  });
  return promise;
};

export default indexPage;
