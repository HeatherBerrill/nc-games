import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import Footer from './Footer';
import { getVotedReviews } from '../api';

const Home = ({ isLoading, setIsLoading, setReviews, reviews }) => {
  useEffect(() => {
    setIsLoading(true);
    getVotedReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [setReviews]);

  if (isLoading) return <h3 className='loading'> Loading ...</h3>;

  return (
    <section className='home'>
      <div className='menubar'>
        <Link to='/categories' className='menubar__link'>
          <p className='menubar__item menubar__categories'> categories</p>
        </Link>
        <Link to='/reviews' className='menubar__link'>
          <p className='menubar__item menubar__reviews'> all reviews</p>
        </Link>
        <Link to='/users' className='menubar__link'>
          <p className='menubar__item menubar__users'> our fans</p>
        </Link>
      </div>

      <div className='home__reviews-list-container'>
        <p className='rated-reviews__title'> most voted reviews...</p>
        <ul className='reviews__list'>
          {reviews.map((review) => {
            return (
              <li className={'home__single-review'} key={review.review_id}>
                <h3 className='home__review-category'> {review.category}</h3>
                <Link to={`/reviews/${review.review_id}`}>
                  <button className='btn home__review-btn'>Read Review</button>
                </Link>
                <h3 className='home__review-title'> {review.title} </h3>

                <p className='home__review-owner'> {review.owner} </p>
                <img
                  alt='review image'
                  className='home__review-list-thumbnail'
                  src={review.review_img_url}
                ></img>
                <p className='home__review-votes'> votes: {review.votes} </p>
              </li>
            );
          })}
        </ul>
        <Link to={'/reviews'}>
          <button className='btn home__review-btn'>All Reviews</button>
        </Link>
      </div>
      <Footer className='home__footer' />
    </section>
  );
};

export default Home;
