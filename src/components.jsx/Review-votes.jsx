import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Review-votes.css';
import { getReview, updateVotes } from '../api';
import { Button } from '@mui/material';

const ReviewVotes = (review) => {
  const { review_id } = useParams();
  const [voteChange, setVoteChange] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    getReview(review_id).then((review) => {
      setVotes(review.votes);
    });
  }, [votes, review]);

  const incVotes = () => {
    setHasError(false);

    setVoteChange((currVoteChange) => {
      return currVoteChange + 1;
    });

    updateVotes(review_id, 1)
      .then((review) => {})
      .catch(() => {
        setHasError(true);
        setVoteChange((currVoteChange) => {
          return currVoteChange - 1;
        });
      });
  };

  return (
    <div className='review__votes'>
      <p className='review__votes-count'> Votes: {votes + voteChange} </p>
      {hasError && <p> Sorry. There has been a problem, try again later...</p>}
      <Button
        //  className='btn btn__votes'
        variant='contained'
        color='primary'
        size='small'
        onClick={incVotes}
      >
        Vote
      </Button>
    </div>
  );
};

export default ReviewVotes;
