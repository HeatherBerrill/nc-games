// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// const axios = require('axios');
import '../Styles/Create-review.css';

const CreateReview = () => {
  return (
    <div className='create-review'>
      <h3 className='create-review__title'> Create Review</h3>
      <form className='create-review__form'>
        <label htmlFor='title'>Title:</label>
        <br />
        <input type='text' id='title' name='title'></input>
        <br />
        <label htmlFor='designer'>Designer:</label>
        <br />
        <input type='text' id='username' name='username'></input>
        <br />
        <label htmlFor='category'></label>
        <br />
        <select id='category'>
          <option selected disabled>
            Choose
          </option>
          <option> Deck-building </option>
          <option> Dexterity </option>
          <option> Engine-building </option>
          <option> Hidden-roles </option>
          <option> Push your luck </option>
          <option> Role and write </option>
          <option> Strategy </option>
        </select>

        <select id='review-img'>
          <option defaultValue disabled>
            Choose
          </option>
          <option> Image 1 </option>
          <option> Image 2 </option>
          <option> Image 3 </option>
          <option> Image 4 </option>
          <option> Image 5 </option>
          <option> Image 6 </option>
          <option> Image 7 </option>
        </select>
        <Link to='/reviews/:review_id'>
          <button className='btn create-review__btn'> Submit </button>
        </Link>
      </form>
    </div>
  );
};

export default CreateReview;
