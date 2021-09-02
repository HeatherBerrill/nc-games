import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
// import Search from './Search';
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
      {/* <Search className='search' /> */}
      <div className='home__reviews-list'>
        <p> most voted reviews...</p>
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
      </div>
      <Footer className='home__footer' />
    </section>
  );
};

export default Home;
