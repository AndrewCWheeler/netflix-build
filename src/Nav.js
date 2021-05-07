import React, { useState, useEffect } from 'react';
import Logo from './assets/netflix-logo.png';
import './Nav.css';

const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className='nav__contents'>
        <img className='nav__logo' src={Logo} alt='amazon' />
        <img
          className='nav__avatar'
          src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default Nav;
