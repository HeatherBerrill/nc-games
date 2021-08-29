// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// const axios = require('axios');
import Social from './Social';
import Menu from './Menu';
import '../Styles/Nav.css';
import logo from '../Images/dice.png';
const Nav = () => {
  return (
    <div className='nav'>
      <div className='logo_box'>
        <img src={logo} className='logo' alt='logo'></img>
      </div>
      <div className='links'>
        <Link to='/' className='nav_link'>
          <p className='link'> Home</p>
        </Link>
        <Link to='/login' className='nav_link'>
          <p className='link'> Login </p>
        </Link>
      </div>
      <Menu className='menu' />
      <Social className='nav_social' />
    </div>
  );
};

export default Nav;
