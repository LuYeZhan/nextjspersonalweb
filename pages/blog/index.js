import React, { useEffect, useState } from 'react';
import classes from './Blog.module.css';
import NavList from '../../components/NavList/NavList';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';

function blog(props) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const background = document.getElementsByTagName('html')[0];
    background.style.backgroundColor = '#4a4f9b';
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = '#fff';
    const nextId = document.getElementById('__next');
    nextId.style.padding = '3rem';
    axios
      .get(
        'https://baconipsum.com/api/?type=meat-and-filler&paras=4&format=text'
      )
      .then((response) => setPost(response.data));
  }, []);

  return (
    <>
      <header className={classes.Header}>
        <h1 className={classes.Title}> Blog page</h1>
        <nav>
          <ul className={classes.Ul}>
            <NavList navContent='About Lu' href='' link='/#about' />
            <NavList navContent='Contact' href='' link='/#contact' />
            <NavList navContent='Blog' href='' link='/blog' />
          </ul>
        </nav>
      </header>

      <main>
        <section className={classes.Section}>
          <div className={classes.Post}>{post}</div>
          <div className={classes.Comments}>
            <p>This is the comment section</p>
          </div>
        </section>
      </main>
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
