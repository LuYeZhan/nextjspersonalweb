import React from 'react';
import classes from './Contact.module.css';
import NavList from '../../components/NavList/NavList';

const contact = (props) => (
  <>
    <div id='contact' className={classes.Title}>
      <h3>Contact</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt
        delectus porro aliquid, doloribus quo et! Autem, magni, dicta ab beatae
        sint suscipit facilis eveniet consectetur assumenda provident incidunt
        quo.
      </p>
    </div>
    <form className={classes.FormContainer}>
      <div className={classes.FlexContainer}>
        <input type='text' defaultValue='name' className={classes.Input} />
        <input type='email' defaultValue='email' className={classes.Input} />
      </div>
      <textarea
        type='textarea'
        defaultValue='your comment'
        className={classes.Textarea}
      />
      <button className={classes.Button} type='submit'>
        Submit
      </button>
    </form>
  </>
);

// contact.getInitialProps = (context) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ appName: 'Contact' });
//     }, 1000);
//   });
//   return promise;
// };

export default contact;
