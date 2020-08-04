import React from 'react';
import Router from 'next/router';
import User from '../../components/User/User';

const authIndexPage = (props) => {
  return (
    <div>
      <h1>The {props.appName} Page</h1>
      <User name='Lu' age={33} />
      <button onClick={() => Router.push('/')}>Go to Home</button>
    </div>
  );
};

authIndexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: 'Super App (Auth)' });
    }, 1000);
  });
  return promise;
};

export default authIndexPage;
