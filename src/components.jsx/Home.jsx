// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// const axios = require('axios');
import '../Styles/Home.css';
import Nav from './Nav';

const Home = () => {
  return (
    <div className='home'>
      <Nav className='nav' />
      <div className='menubar'>
        <Link to='/categories'>
          <p className='menubar__categories'> categories</p>
        </Link>
        <Link to='/users'>
          <p className='menubar__users'> our fans</p>
        </Link>
        <Link to='/reviews'>
          <p className='menubar__reviews'> all reviews</p>
        </Link>
      </div>
      <p> Search Bar</p>

      <p> most voted reviews...</p>
      <ul>
        <li> Review 1 </li>
        <li> Review 2 </li>
        <li> Review 3 </li>
      </ul>
    </div>
  );
};

export default Home;
