import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { getReview, getComments } from '../api';
import { useParams } from 'react-router-dom';
import '../Styles/Single-review.css';
import Footer from './Footer';

const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(review_id).then((newComments) => {
      setComments(newComments);
    });
  }, [review_id]);
  console.log(comments, 'comments');

  useEffect(() => {
    getReview(review_id).then((newReview) => {
      setReview(newReview);
    });
  }, [review_id]);

  return (
    <div className='single-review'>
      <h3 className='single-review__title'> {review.title} </h3>
      <div className='single-review__content'>
        <img
          className='review__image'
          src={review.review_img_url}
          alt='review_image'
        ></img>
        <p className='single-review__description'> {review.review_body}</p>
        <p className='single-review__votes'> review votes : {review.votes} </p>
        <button className='btn single-review__btn'> Vote </button>
      </div>
      <form className='comment__form'>
        <label htmlFor='new-comment'>Add New Comment</label>
        <input type='text' id='new-comment'></input>
        <button> Submit </button>
      </form>
      <div>
        <ul className='single-review__comments-list'>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <h3> {comment.author}</h3>
                <p> {comment.body} </p>
                <p> votes: {comment.votes} </p>
                <button className='btn single-review__btn'> Vote </button>
              </li>
            );
          })}
        </ul>
      </div>
      <Footer className='single-review__footer' />
    </div>
  );
};

export default SingleReview;
