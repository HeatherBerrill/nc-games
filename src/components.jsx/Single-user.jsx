// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// const axios = require('axios');
import '../Styles/Single-user.css';

const SingleUser = () => {
  return (
    <div className='single-user'>
      <div className='single-user__content'>
        <h3> Username</h3>
        <p> Name: name</p>
        <div className='user-image-box'> </div>
      </div>
      <Link to='/users'>
        <button className='btn back-btn'> Back </button>
      </Link>
    </div>
  );
};

export default SingleUser;
