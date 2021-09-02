import { useState, useEffect } from 'react';
import { getReview, getComments, postComment } from '../api';
import { useParams } from 'react-router-dom';
import '../Styles/Single-review.css';
import Footer from './Footer';
import ReviewVotes from './Review-votes';
import CommentVotes from './Comment-votes';

const SingleReview = ({
  loginUser,
  review,
  setReview,
  isLoading,
  setIsLoading
}) => {
  const { review_id } = useParams();

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getReview(review_id).then((newReview) => {
      setReview(newReview);

      getComments(review_id).then((newComments) => {
        setComments(newComments);
        setIsLoading(false);
      });
    });
  }, [review_id]);

  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();

    const commentToAdd = {
      username: loginUser.username,
      body: newComment
    };
    postComment(review_id, commentToAdd).then((commentFromApi) => {
      setComments((currComments) => {
        return [...currComments, commentFromApi];
      });
      setIsLoading(false);
    });
  };

  if (isLoading) return <h3 className='loading'> Loading ...</h3>;

  return (
    <div className='single-review'>
      <h4 className='single-review__title'> {review.title} </h4>
      <div className='single-review__content'>
        <img
          className='review__image'
          src={review.review_img_url}
          alt='review_image'
        ></img>
        <p className='single-review__description'> {review.review_body}</p>
        <ReviewVotes className='single-review__votes' />
      </div>
      <form className='comment__form' onSubmit={handleSubmit}>
        <label htmlFor='new-comment'>Add New Comment</label>
        <input
          type='text'
          id='new-comment'
          value={newComment}
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
        ></input>
        <button> Submit </button>
      </form>
      <div>
        <ul className='single-review__comments-list'>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <h3> {comment.author}</h3>
                <p> {comment.body} </p>
                <CommentVotes
                  className='single-comment__votes'
                  comment_id={comment.comment_id}
                />
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
