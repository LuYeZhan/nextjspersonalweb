import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

const indexPage = (props) => (
  <div>
    <h1>The main Page of {props.appName}</h1>
    <p>
      Go to
      <Link href='/auth'>
        <a> Auth</a>
      </Link>
    </p>
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
