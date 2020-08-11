import React, { useEffect } from 'react';

import Router from 'next/router';
import classes from './index.module.css';
import Project from '../components/Project/Project';
import NavList from '../components/NavList/NavList';
import FooterList from '../components/FooterList/FooterList.js';
import Contact from '../components/Contact/Contact';

function indexPage(props) {
  useEffect(() => {
    const background = document.getElementsByTagName('html')[0];
    background.style.backgroundColor = '#4a4f9b';
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = '#fff';
    const nextId = document.getElementById('__next');
    nextId.style.padding = '3rem';
  }, []);

  return (
    <>
      <header className={classes.Header}>
        <h1 className={classes.Title}>Lu Ye Zhan's personal page</h1>
        <nav>
          <ul className={classes.Ul}>
            <NavList navContent='About Lu' href='' link='#about' />
            <NavList navContent='Contact' href='' link='#contact' />
            <NavList navContent='Blog' href='' link='/blog' />
          </ul>
        </nav>
      </header>
      <div id='about'>
        <h2>About Lu</h2>
        <img
          className={classes.Img}
          src='../assets/personal.jpeg'
          alt='photo of Lu'
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt
          delectus porro aliquid, doloribus quo et! Autem, magni, dicta ab
          beatae sint suscipit facilis eveniet consectetur assumenda provident
          incidunt quo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt
          delectus porro aliquid, doloribus quo et! Autem, magni, dicta ab
          beatae sint suscipit facilis eveniet consectetur assumenda provident
          incidunt quo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt
          delectus porro aliquid, doloribus quo et! Autem, magni, dicta ab
          beatae sint suscipit facilis eveniet consectetur assumenda provident
          incidunt quo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt
          delectus porro aliquid, doloribus quo et! Autem, magni, dicta ab
          beatae sint suscipit facilis eveniet consectetur assumenda provident
          incidunt quo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt
          delectus porro aliquid, doloribus quo et! Autem, magni, dicta ab
          beatae sint suscipit facilis eveniet consectetur assumenda provident
          incidunt quo.
        </p>
      </div>
      <h2 className={classes.ProjectTitle}>Projects</h2>
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

      <Contact id='contact' />

      <footer className={classes.FooterContainer}>
        <FooterList
          footerContent='Github'
          redirect='https://github.com/luyezhan'
        />
        <FooterList
          footerContent='Linkedin'
          redirect='https://www.linkedin.com/in/luyezhan/'
        />
        <FooterList
          footerContent='Instagram'
          redirect='https://www.instagram.com/luyezhan/'
        />
      </footer>
    </>
  );
}

// indexPage.getInitialProps = (context) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ appName: 'Lu Ye Zhan' });
//     }, 1000);
//   });
//   return promise;
// };

export default indexPage;
