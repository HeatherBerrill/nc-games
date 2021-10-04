import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import '../Styles/index.css';
import Footer from './Footer';
import { getVotedReviews } from '../api';
import { Button, CircularProgress } from '@mui/material';
import background from '../Images/outline2.jpg';

const Home = ({ isLoading, setIsLoading, setReviews, reviews }) => {
  useEffect(() => {
    setIsLoading(true);
    getVotedReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

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
    <section className='home'>
      <div className='menubar'>
        <Link to='/categories' className='menubar__link'>
          <p className='menubar__item menubar__categories'> categories</p>
        </Link>
        <Link to='/reviews' className='menubar__link'>
          <p className='menubar__item menubar__reviews'> all reviews</p>
        </Link>
        <Link to='/users' className='menubar__link'>
          <p className='menubar__item menubar__users'> our users</p>
        </Link>
      </div>
      <div className='home-content'>
        <p className='games-welcome__1'>Welcome to NC Games!</p>
        <p className='games-welcome__2'>Review your favourite games</p>
        <Link to={'/reviews'} className='btn_link'>
          <Button
            variant='contained'
            color='primary'
            size='small'
            className='home__review-btn'
            style={{ margin: 45 }}
          >
            Get Started...
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
