// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// const axios = require('axios');
import Social from './Social';
import '../Styles/Menu.css';

const Menu = () => {
  return (
    <div className='menu'>
      <Link to='/'>
        <div className='close__menu'></div>
      </Link>
      <h3 className='menu__title'> Menu Page</h3>
      <ul className='menu__list'>
        <Link to='/'>
          <li className='menu__item'> Home </li>
        </Link>
        <Link to='/login'>
          <li className='menu__item'> Login </li>
        </Link>
        <Link to='/categories'>
          <li className='menu__item'> Categories </li>
        </Link>
        <Link to='/users'>
          <li className='menu__item'> Our Users </li>
        </Link>
        <Link to='/reviews'>
          <li className='menu__item'> All reviews </li>
        </Link>
      </ul>
      <Social className='menu__social' />
    </div>
  );
};

export default Menu;
