import React, { useEffect, useState } from 'react';

import Router from 'next/router';
import classes from './index.module.css';
import Project from '../components/Project/Project';
import NavList from '../components/NavList/NavList';
import FooterList from '../components/FooterList/FooterList.js';
import Contact from '../components/Contact/Contact';

function indexPage(props) {
  const [project, setProject] = useState([
    'react, hooks, redux, firebase',
    'html + css',
    ' Node.Js + PUG',
    'React Hooks App with socket.io',
    ' NodeJs express handlebar',
    'MERN Stack ',
    'tinder app created with vanilla Js',
    ' canvas and vanilla js',
  ]);

  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const background = document.getElementsByTagName('html')[0];
    background.style.backgroundColor = '#4a4f9b';
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = '#fff';
    const nextId = document.getElementById('__next');
    nextId.style.padding = '3rem';
  }, []);

  // this is the awfull code for the searcher component
  // const searchHandler = (event) => {
  //   const result = event.target.value;
  //   const filteredProject = project.filter((p) =>
  //     p.toLowerCase().includes(result)
  //   );
  //   setSearched(true);
  //   console.log(filteredProject);
  //   console.log(searched);
  // };

  return (
    <>
      <header className={classes.Header}>
        <h1 className={classes.Title}>Code Mentors</h1>
        <nav>
          <ul className={classes.Ul}>
            <NavList navContent='About Code Mentors' href='' link='#about' />
            <NavList navContent='Contact' href='' link='#contact' />
            <NavList navContent='Blog' href='' link='/blog' />
          </ul>
        </nav>
      </header>

      <div id='about'>
        <div className={classes.About}>
          <p className={classes.AboutContent}>
            Do you wanna change career? Become a developer. Are you struggling
            with your project and searching for help. Wanna improve your code
            and don't know how? Here at Code Mentor you will find a mentor to
            help you with all of this and much more.
          </p>

          <img
            className={classes.Img}
            src='../assets/mentorship.jpg'
            alt='photo of code mentors'
          />
        </div>
      </div>

      <div>
        <h2 className={classes.Title}>How it works?</h2>
        <div className={classes.Blank}></div>
      </div>

      <h2 className={classes.Title}>Projects</h2>

      <div className={classes.Container}>
        <Project
          name='Burger App'
          url='https://react-my-burger-75352.web.app/'
          description={project[0]}
          image='../assets/burger.jpg'
          alt='burger project'
        />
        <Project
          name='Natours App'
          url='https://luyezhan.github.io/Natours/'
          description={project[1]}
          image='../assets/natours.png'
          alt='natours front project'
        />
        <Project
          name='Natours Api'
          url='https://natours11api.herokuapp.com/'
          description={project[2]}
          image='../assets/natoursApi.png'
          alt='natours Api project'
        />
        <Project
          name='Kiwi-Me App'
          url='https://kiwi-me.firebaseapp.com/'
          description={project[3]}
          image='../assets/kiwi.png'
          alt='Kiwi project'
        />
        <Project
          name='Tomeu bnb app'
          url='https://tomeu.herokuapp.com/'
          description={project[4]}
          image='../assets/tomeu.png'
          alt='Tomeu project'
        />
        <Project
          name='Social Network App'
          url='https://listenandtalk-a3074.firebaseapp.com/'
          description={project[5]}
          image='../assets/listenandtalk.png'
          alt='listen & talk  project'
        />
        <Project
          name='My tinder app'
          url='https://luyezhan.github.io/Loveweb/'
          description={project[6]}
          image='../assets/loveapp.png'
          alt='tinder  project'
        />
        <Project
          url='https://luyezhan.github.io/Code-Invader//'
          description={project[7]}
          image='../assets/codeinvader.png'
          alt='Game project '
        />
      </div>

      <Contact />

      <footer className={classes.FooterContainer}>
        <FooterList
          icon='../icons/githubicon.png'
          redirect='https://github.com/luyezhan'
        />
        <FooterList
          icon='../icons/linkedinicon.png'
          redirect='https://www.linkedin.com/in/luyezhan/'
        />
        <FooterList
          icon='../icons/InstagramIcon.png'
          redirect='https://www.instagram.com/luyezhan/'
        />
      </footer>
    </>
  );
}

export default indexPage;
