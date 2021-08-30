// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// const axios = require('axios');
import '../Styles/Single-category.css';

const SingleCategory = () => {
  return (
    <div className='single-category'>
      <div className='single-category__content'>
        <h3 className='single-category__title'> Category Title</h3>
        <p className='single-category__description'>
          Description <br /> "One or more players around the table have a
          secret, and the rest of you need to figure out who! Players attempt to
          uncover each other's hidden role"
        </p>
        <Link to='/reviews/create-review'>
          <button className='btn reviews__btn'> Add New Review </button>
        </Link>
      </div>
      <div>
        <ul className='single-category__reviews-list'>
          <Link to='/reviews/:review_id'>
            <li> review 1 </li>
          </Link>
          <li> review 2 </li>
          <li> review 3 </li>
          <li> review 4 </li>
          <li> review 5 </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleCategory;
