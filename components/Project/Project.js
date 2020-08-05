import React from 'react';
import classes from './Project.module.css';

const project = (props) => (
  <figure className={classes.Figure}>
    <h3 className={classes.Title}>{props.name}</h3>
    <a className={classes.Anchor} href={props.url}>
      <img className={classes.Img} src={props.image} alt={props.alt} />
    </a>
    <figcaption>{props.description}</figcaption>
  </figure>
);

export default project;
