import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getReviews } from '../api';
import '../Styles/Reviews.css';
// import { useParams } from 'react-router-dom';

const Reviews = ({ reviews, setReviews }) => {
  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
    });
  }, []);

  console.log(reviews);

  return (
    <section className='reviews'>
      <h1 className='reviews__title'> All Reviews </h1>
      <label htmlFor='sort-dropdown'></label>
      <br />
      <form className='reviews-sort-form'>
        <select id='sort-dropdown'>
          <option defaultValue disabled>
            Choose
          </option>
          <option> Most recent </option>
          <option> Most comments </option>
          <option> Most votes </option>
        </select>
        <button className='btn sort__btn'> Submit </button>

        <Link to='/reviews/create-review'>
          <button className='btn reviews__btn'> Add New Review </button>
        </Link>
      </form>

      <ul className='reviews__list'>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <h3> {review.category}</h3>
              <Link to={`/reviews/${review.review_id}`}>
                <h3> {review.title} </h3>
              </Link>
              <p> {review.designer} </p>
              <img
                alt={review.title}
                className='review-list__thumbnail'
                src={review.review_img_url}
              ></img>
              <p> votes: {review.votes} </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Reviews;
