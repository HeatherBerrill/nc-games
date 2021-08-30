// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// const axios = require('axios');
import '../Styles/Users.css';

const Users = () => {
  return (
    <section className='users'>
      <h1 className='users__title'> Users Page</h1>
      <ul className='users__list'>
        <li> User 1 </li>
        <li> User 2 </li>
        <li> User 3 </li>
        <li> User 4 </li>
        <li> User 5 </li>
      </ul>
      <Link to='/login'>
        <button className='btn users__btn'> Login </button>
      </Link>
    </section>
  );
};

export default Users;
