import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSortedReviews } from '../api';
import '../Styles/Reviews.css';
import { getReviews } from '../api';
import Footer from './Footer';

const Reviews = ({ reviews, setReviews, isLoading, setIsLoading }) => {
  const [newSort, setNewSort] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [setReviews]);

  const sortReviews = (event) => {
    event.preventDefault();
    getSortedReviews(newSort).then((reviews) => {
      setReviews(reviews);
    });
  };

  if (isLoading) return <h3 className='loading'> Loading ...</h3>;

  return (
    <section className='reviews'>
      <h1 className='reviews__title'> All Reviews </h1>
      <label htmlFor='sort-dropdown'></label>
      <br />
      <form className='reviews-sort-form' onSubmit={sortReviews}>
        <select
          type='dropdown'
          name='sort'
          id='sort-dropdown'
          onChange={(event) => {
            setNewSort(event.target.value);
          }}
        >
          <option defaultValue disabled>
            Choose
          </option>
          <option value='created_at'> Most recent </option>
          <option value='comment_count'> Most Comments </option>
          <option value='votes'> Most voted </option>
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
                <button>Read Review</button>
              </Link>
              <h3> {review.title} </h3>

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
      <Footer className='reviews__footer' />
    </section>
  );
};

export default Reviews;
