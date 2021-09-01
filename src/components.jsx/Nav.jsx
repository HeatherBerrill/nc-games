// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Social from './Social';

import '../Styles/Nav.css';
import logo from '../Images/dice.png';
const Nav = ({ loginUser }) => {
  return (
    <div className='nav'>
      <div className='logo_box'>
        <img src={logo} className='logo' alt='logo'></img>
      </div>
      <div className='links'>
        <Link to='/' className='nav_link'>
          <p className='link'> Home</p>
        </Link>
        <Link to='/account' className='nav_link'>
          <p className='link'> Account </p>
        </Link>
      </div>
      <p className='login-name'> You are logged in as {loginUser.username}</p>
      <Link to='/menu'>
        <div className='menu__icon'></div>
      </Link>

      <Social className='nav_social' />
    </div>
  );
};

export default Nav;
