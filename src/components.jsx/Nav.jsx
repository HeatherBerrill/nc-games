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
      <p className='login-name'> Logged in as {loginUser.username}</p>

      <div class='menu'>
        <input
          type='checkbox'
          className='menu__checkbox'
          id='menu-toggle'
        ></input>
        <label htmlFor='menu-toggle' className='menu__button'>
          <span className='menu__icon'> </span>
        </label>

        <div className='menu__background'> </div>
        <nav className='menu__nav'>
          <ul className='menu__list'>
            <Link className='menu__link' to='/'>
              <li className='menu__item'> Home </li>
            </Link>
            <Link className='menu__link' to='/login'>
              <li className='menu__item'> Login </li>
            </Link>
            <Link className='menu__link' to='/categories'>
              <li className='menu__item'> Categories </li>
            </Link>
            <Link className='menu__link' to='/users'>
              <li className='menu__item'> Our Users </li>
            </Link>
            <Link className='menu__link' to='/reviews'>
              <li className='menu__item'> All reviews </li>
            </Link>
          </ul>
        </nav>
      </div>

      <Social className='nav_social' />
    </div>
  );
};

export default Nav;
