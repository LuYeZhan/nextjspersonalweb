import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const errorPage = () => (
  <div>
    <h1>oops something went wrong</h1>
    <p>
      try
      <Link href='/'>
        <a> going back </a>
      </Link>
    </p>
    <button onClick={() => Router.push('/')}>Going back</button>
  </div>
);

export default errorPage;
