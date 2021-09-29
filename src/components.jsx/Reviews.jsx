import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSortedReviews } from '../api';
import '../Styles/Reviews.css';
import '../Styles/index.css';
import { getReviews } from '../api';
import Footer from './Footer';
import { Button, CircularProgress } from '@mui/material';

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
    setIsLoading(true);
    getSortedReviews(newSort).then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  };

  if (isLoading) {
    return (
      <section className='loading_screen'>
        <div className='spinner-box'>
          <CircularProgress color='primary' />
        </div>
      </section>
    );
  }

  return (
    <section className='reviews'>
      <h3 className='reviews__title'> Reviews </h3>
      <Link to='/reviews/create-review' className='btn_link'>
        <Button
          className='btn reviews-new-review__btn'
          variant='contained'
          color='primary'
          size='small'
        >
          Add New Review
        </Button>
      </Link>
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
        <Button
          // className='btn sort__btn'
          variant='contained'
          color='primary'
          size='small'
        >
          {' '}
          Sort{' '}
        </Button>
      </form>

      <ul className='reviews__list'>
        {reviews.map((review) => {
          return (
            <li className='reviews__single' key={review.review_id}>
              <h4 className='reviews__category'> {review.category}</h4>
              <Link to={`/reviews/${review.review_id}`} className='btn_link'>
                <Button
                  //  className='btn reviews-single__btn'
                  variant='contained'
                  color='primary'
                  size='small'
                >
                  Read Review
                </Button>
              </Link>
              <p className='reviews-single__title'> {review.title} </p>

              <p className='reviews__owner'> {review.owner} </p>
              <img
                alt={review.title}
                className='reviews-list__thumbnail'
                src={review.review_img_url}
              ></img>
              <p className='reviews__votes'> votes: {review.votes} </p>
            </li>
          );
        })}
      </ul>
      <Footer className='reviews__footer' />
    </section>
  );
};

export default Reviews;
