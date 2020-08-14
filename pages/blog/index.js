import React, { useEffect, useState } from 'react';
import classes from './Blog.module.css';
import NavList from '../../components/NavList/NavList';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import CommentsWidget from '../../components/CommentsWidget/CommentsWidget';

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

      <section className='col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-light px-0'>
        {post && <CommentsWidget />}
      </section>

      <section className='col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-light px-0'></section>
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
