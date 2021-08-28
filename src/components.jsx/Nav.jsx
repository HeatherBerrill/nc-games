// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// const axios = require('axios');
import Social from './Social';
import Menu from './Menu';
import '../Styles/Nav.css';

const Nav = () => {
  return (
    <div className='nav'>
      <img src='../../Images/dice.png' className='logo' alt='logo'></img>
      <Link to='/'>
        <h3> Home</h3>
      </Link>
      <Link to='/login'>
        <h3> Login </h3>
      </Link>
      <Social className='nav_social' />
      <Menu />
    </div>
  );
};

export default Nav;
