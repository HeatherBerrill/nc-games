import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Styles/Single-category.css';
import '../Styles/index.css';
import { getCategoryReviews, getCategories } from '../api';
import Footer from './Footer';
import { Button, CircularProgress } from '@mui/material';

const SingleCategory = ({
  categories,
  setCategories,
  isLoading,
  setIsLoading,
  reviews,
  setReviews
}) => {
  const { slug } = useParams();
  const [category, setCategory] = useState({});

  useEffect(() => {
    setIsLoading(true);
    getCategories().then((categories) => {
      setCategories(categories);
      const filteredCat = categories.filter((category) => {
        return category.slug === slug;
      });
      const singleCat = filteredCat[0];
      setCategory(singleCat);
    });

    getCategoryReviews(slug).then((reviews) => {
      setReviews(reviews);

      setIsLoading(false);
    });
  }, [slug]);

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
    <div className='single-category'>
      <div className='single-category__content'>
        <h3 className='single-category__title'> {category.slug}</h3>
        <p className='single-category__description'>{category.description}</p>
        <Link to='/reviews/create-review' className='btn_link'>
          <Button
            className='btn single-category__add-review-btn'
            variant='contained'
            color='primary'
            size='small'
          >
            Add New Review
          </Button>
        </Link>
      </div>
      <ul className='single-category__reviews-list'>
        {reviews.map((review) => {
          return (
            <li
              className='single-category__single-review'
              key={review.review_id}
            >
              <Link to={`/reviews/${review.review_id}`} className='btn_link'>
                <Button
                  className=' btn single-category__review-btn'
                  variant='contained'
                  color='primary'
                  size='small'
                >
                  Read Review
                </Button>
              </Link>
              <h3 className='single-category__review-title'>{review.title}</h3>

              <p className='single-category__review-owner'>{review.owner}</p>
              <img
                alt={review.title}
                className='single-category__review-list-thumbnail'
                src={review.review_img_url}
              ></img>
              <p className='single-category__review-votes'>
                votes: {review.votes}
              </p>
            </li>
          );
        })}
      </ul>
      <Footer className='single-category__footer' />
    </div>
  );
};

export default SingleCategory;
