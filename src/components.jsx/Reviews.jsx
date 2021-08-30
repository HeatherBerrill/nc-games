// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// const axios = require('axios');
import '../Styles/Reviews.css';

const Reviews = () => {
  return (
    <section className='reviews'>
      <h1 className='reviews__title'> All Reviews </h1>
      <ul className='reviews__list'>
        <Link to='/reviews/:review_id'>
          <li> Review 1 </li>
        </Link>
        <li> Review 2 </li>
        <li> Review 3 </li>
        <li> Review 4 </li>
        <li> Review 5 </li>
      </ul>
      <Link to='/reviews/create-review'>
        <button className='btn reviews__btn'> Add New Review </button>
      </Link>
    </section>
  );
};

export default Reviews;
