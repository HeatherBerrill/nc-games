import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Comment-votes.css';
import { getComments, updateCommentVotes } from '../api';
import { Button } from '@mui/material';

const CommentVotes = ({ comment_id }) => {
  const { review_id } = useParams();
  const [voteChange, setVoteChange] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [votes, setVotes] = useState(0);
  const [comment, setComment] = useState({});

  useEffect(() => {
    getSingleComment(review_id);
  }, [review_id, votes]);

  const getSingleComment = (review_id) => {
    getComments(review_id).then((result) => {
      const singleComment = result.filter((singleComment) => {
        return singleComment.comment_id === comment_id;
      });
      setComment(singleComment[0]);
      setVotes(comment.votes);
    });
  };

  const incCommentVotes = () => {
    setHasError(false);

    setVoteChange((currVoteChange) => {
      return currVoteChange + 1;
    });

    updateCommentVotes(comment_id, 1)
      .then((comment) => {})
      .catch(() => {
        setHasError(true);
        setVoteChange((currVoteChange) => {
          return currVoteChange - 1;
        });
      });
  };

  return (
    <div className='comment__votes'>
      <p className='comment__votes-count'> Votes: {votes + voteChange} </p>
      {hasError && <p> Sorry. There has been a problem, try again later...</p>}
      <Button
        className='btn comment-btn__votes'
        variant='contained'
        color='primary'
        size='small'
        onClick={incCommentVotes}
      >
        Vote
      </Button>
    </div>
  );
};

export default CommentVotes;
