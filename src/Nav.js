import React, { useState, useEffect } from 'react';
import Logo from './assets/netflix-logo.png';
import './Nav.css';
import { useHistory } from 'react-router-dom';

const Nav = () => {
  const [show, handleShow] = useState(false);
  const history = useHistory();

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
      <div className="nav__contents">
        <img
          onClick={() => history.push('/')}
          className="nav__logo"
          src={Logo}
          alt="amazon"
        />
        <img
          onClick={() => history.push('/profile')}
          className="nav__avatar"
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
