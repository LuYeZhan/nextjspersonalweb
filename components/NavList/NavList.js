import React from 'react';
import classes from './NavList.module.css';

const Nav = (props) => (
  <>
    <li className={classes.List}>
      <a className={classes.Anchor} href={props.redirect}>
        {props.navContent}
      </a>
    </li>
  </>
);

export default Nav;
