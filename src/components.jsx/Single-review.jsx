import { useState, useEffect } from 'react';
import {
  getReview,
  getComments,
  postComment,
  deleteComment,
  deleteReview
} from '../api';
import { useParams, useHistory } from 'react-router-dom';
import '../Styles/Single-review.css';
import '../Styles/index.css';
import Footer from './Footer';
import ReviewVotes from './Review-votes';
import CommentVotes from './Comment-votes';
import { Button, CircularProgress } from '@mui/material';

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
  const history = useHistory();
  useEffect(() => {
    setIsLoading(true);
    getReview(review_id).then((newReview) => {
      setReview(newReview);

      getComments(review_id).then((newComments) => {
        setComments(newComments);

        setIsLoading(false);
      });
    });
  }, [setReview, review_id]);

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
      setNewComment('');
      setIsLoading(false);
    });
  };

  const reviewToDelete = (review_id) => {
    setIsLoading(true);

    deleteReview(review_id)
      .then((response) => {
        history.push('/reviews');
      })
      .catch((error) => {});

    setIsLoading(false);
  };

  const commentToDelete = (comment_id) => {
    setIsLoading(true);

    deleteComment(comment_id).then(() => {
      const newComments = [];
      comments.forEach((comment) => {
        if (comment_id !== comment.comment_id) {
          newComments.push(comment);
        }
      });
      setComments(newComments);
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
    <div className='single-review'>
      <h4 className='single-review-page__title'> {review.title} </h4>
      <div className='single-review__content'>
        <img
          className='single-review__image'
          src={review.review_img_url}
          alt='review_image'
        ></img>
        <p className='single-review__owner'> Created by:{review.owner}</p>
        <p className='single-review__designer'>
          Game designer: {review.designer}
        </p>
        <p className='single-review__created-at'>
          Created on: {review.created_at}
        </p>
        <p className='single-review__category'>Category:{review.category}</p>
        <p className='single-review__comment-count'>
          Comments: {review.comment_count}
        </p>
        <p className='single-review__description'> {review.review_body}</p>
        <ReviewVotes className='single-review__votes' />
        <Button
          disabled={loginUser.username === review.owner ? false : true}
          onClick={() => {
            reviewToDelete(review.review_id);
          }}
          className='btn single-review__delete-btn'
          variant='contained'
          color='primary'
          size='small'
          style={{ margin: 2 }}
        >
          Delete
        </Button>
      </div>
      <form className='single-review__comment-form' onSubmit={handleSubmit}>
        {/* <label htmlFor='single-review__new-comment'>Add New Comment</label> */}
        <input
          placeholder='Add New Comment'
          type='text'
          id='new-comment'
          value={newComment}
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
        ></input>
        <Button
          variant='contained'
          type='submit'
          color='primary'
          size='small'
          style={{ margin: 15 }}
        >
          Submit
        </Button>
      </form>
      <ul className='single-review__comments-list'>
        {comments.map((comment) => {
          return (
            <li className='single-comment' key={comment.comment_id}>
              <h3 className='single-comment__author'> {comment.author}</h3>
              <p className='single-comment__body'> {comment.body} </p>
              <CommentVotes
                className='single-comment__votes'
                comment_id={comment.comment_id}
              />
              <Button
                disabled={loginUser.username === comment.author ? false : true}
                onClick={() => {
                  commentToDelete(comment.comment_id);
                }}
                className='btn single-comment__delete-btn'
                variant='contained'
                color='primary'
                size='small'
              >
                Delete
              </Button>
            </li>
          );
        })}
      </ul>

      <Footer className='single-review__footer' />
    </div>
  );
};

export default SingleReview;
