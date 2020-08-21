import React from 'react';
import classes from './FooterList.module.css';

const Footer = (props) => (
  <>
    <li className={classes.List}>
      <a className={classes.Anchor} href={props.redirect}>
        <img src={props.icon} alt={props.alt} className={classes.Icon} />
      </a>
    </li>
  </>
);

export default Footer;
