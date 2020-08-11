import React from 'react';
import classes from './FooterList.module.css';

const Footer = (props) => (
  <>
    <li className={classes.List}>
      <p>
        <a className={classes.Anchor} href={props.redirect}>
          {props.footerContent}
        </a>
      </p>
    </li>
  </>
);

export default Footer;
