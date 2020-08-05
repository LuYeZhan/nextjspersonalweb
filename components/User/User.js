import React from 'react';
import classes from './User.module.css';

const user = (props) => (
  <div>
    <h1>{props.name}</h1>
    <p>Age: {props.age}</p>
    <p>Email: {props.email}</p>
    <style jsx>
      {`
        div {
          border: 1px solid #eee;
          box-shadow: 0 2px 3px #ccc;
          padding: 20px;
          text-align: center;
        }
      `}
    </style>
  </div>
);

export default user;
