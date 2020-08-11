import React, { useEffect } from 'react';
import classes from './Blog.module.css';
import NavList from '../../components/NavList/NavList';

function blog(props) {
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
        <h1 className={classes.Title}> Blog page</h1>
        <nav>
          <ul className={classes.Ul}>
            <NavList navContent='back to Home page' href='' link='/' />
          </ul>
        </nav>
      </header>
      <h2>Blog</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt
        delectus porro aliquid, doloribus quo et! Autem, magni, dicta ab beatae
        sint suscipit facilis eveniet consectetur assumenda provident incidunt
        quo.
      </p>
    </>
  );
}

// blog.getInitialProps = (context) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ appName: 'Blog' });
//     }, 1000);
//   });
//   return promise;
// };

export default blog;
