import React from 'react';
import classes from './NavList.module.css';
import Link from 'next/link';

const Nav = (props) => (
  <>
    <li className={classes.List}>
      <p>
        <Link href={props.link}>
          <a className={classes.Anchor} href={props.href}>
            {props.navContent}
          </a>
        </Link>
      </p>
    </li>
  </>
);

export default Nav;
