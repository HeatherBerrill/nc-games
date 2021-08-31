import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Styles/Single-category.css';
import { getCategoryReviews, getSortedReviews } from '../api';

const SingleCategory = ({ categories, reviews, setReviews }) => {
  const { slug } = useParams();
  const [category, setCategory] = useState({});

  useEffect(() => {
    getCategoryReviews(slug).then((reviews) => {
      setReviews(reviews);
      setCategory(slug);
    });
  }, [slug]);

  return (
    <div className='single-category'>
      <div className='single-category__content'>
        <h3 className='single-category__title'> {category.slug}</h3>
        <p className='single-category__description'>
          Description <br /> {category.description}
        </p>
        <Link to='/reviews/create-review'>
          <button className='btn reviews__btn'> Add New Review </button>
        </Link>
      </div>
      <div>
        <ul className='single-category__reviews-list'>
          {reviews.map((review) => {
            return (
              <li key={review.review_id}>
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
    </div>
  );
};

export default SingleCategory;
