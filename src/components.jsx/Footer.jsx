// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// const axios = require('axios');
import Social from './Social';
import '../Styles/Footer.css';
import logo from '../Images/dice.png';

const Footer = () => {
  return (
    <div className='footer'>
      <Social className='footer_social' />
      <img src={logo} className='footer_logo' alt='logo'></img>
    </div>
  );
};

export default Footer;
