import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Styles/Single-category.css';
import { getCategoryReviews, getCategories } from '../api';
import Footer from './Footer';
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

  if (isLoading) return <h3 className='loading'> Loading ...</h3>;

  console.log(reviews, 'in get');

  return (
    <div className='single-category'>
      <div className='single-category__content'>
        <h3 className='single-category__title'> {category.slug}</h3>
        <p className='single-category__description'>
          Description: {category.description}
        </p>
        <Link to='/reviews/create-review'>
          <button className='btn single-category__add-review-btn'>
            {' '}
            Add New Review{' '}
          </button>
        </Link>
      </div>
      <ul className='single-category__reviews-list'>
        {reviews.map((review) => {
          return (
            <li
              className='single-category__single-review'
              key={review.review_id}
            >
              <Link to={`/reviews/${review.review_id}`}>
                <button className=' btn single-category__review-btn'>
                  Read Review
                </button>
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
