// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// const axios = require('axios');
import Social from './Social';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <h1> Footer</h1>
      <p> links</p>
      <Social className='footer_social' />
    </div>
  );
};

export default Footer;
