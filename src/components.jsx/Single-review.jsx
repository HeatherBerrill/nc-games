// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// const axios = require('axios');
import '../Styles/Single-review.css';

const SingleReview = () => {
  return (
    <div className='single-review'>
      <h3 className='single-review__title'> Review Title</h3>
      <div className='single-review__content'>
        <div className='review-image__box'></div>
        <p className='single-review__description'>
          "Few games are equiped to fill a player with such a defined sense of
          mild-peril, but a friendly game of Jenga will turn the
          mustn't-make-it-fall anxiety all the way up to 11! Fiddly fun for all
          the family, this game needs little explaination. Whether you're a
          player who chooses to play it safe, or one who lives life on the edge,
          eventually the removal of blocks will destabilise the tower and all
          your Jenga dreams come tumbling down.",
        </p>
        <p className='single-review__votes'> review votes </p>
        <button className='btn single-review__btn'> Vote </button>
      </div>
      <div>
        <ul className='single-review__comments-list'>
          <li> comment 1 </li>
          <li> comment 2 </li>
          <li> comment 3 </li>
          <li> comment 4 </li>
          <li> comment 5 </li>
        </ul>
        <form className='comment__form'>
          <label htmlFor='new-comment'>Add New Comment</label>
          <input type='text' id='new-comment'></input>
          <button> Submit </button>
        </form>
      </div>
    </div>
  );
};

export default SingleReview;
