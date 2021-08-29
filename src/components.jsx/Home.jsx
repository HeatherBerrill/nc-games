// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// const axios = require('axios');
import '../Styles/Home.css';
import Search from './Search';

const Home = () => {
  return (
    <section className='home'>
      <div className='menubar'>
        <Link to='/categories' className='menubar_link'>
          <p className='menubar_item menubar__categories'> categories</p>
        </Link>
        <Link to='/users' className='menubar_link'>
          <p className='menubar_item menubar__users'> our fans</p>
        </Link>
        <Link to='/reviews' className='menubar_link'>
          <p className='menubar_item menubar__reviews'> all reviews</p>
        </Link>
      </div>
      <Search className='search' />
      <div className='reviews_list'>
        <p> most voted reviews...</p>
        <ul>
          <li> Review 1 </li>
          <li> Review 2 </li>
          <li> Review 3 </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
