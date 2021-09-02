import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Review-votes.css';
import { getReview, updateVotes } from '../api';

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
    <div className='votes'>
      <p> Votes: {votes + voteChange} </p>
      {hasError && <p> Sorry. There has been a problem, try again later...</p>}
      <button className='btn btn__votes' onClick={incVotes}>
        Vote
      </button>
    </div>
  );
};

export default ReviewVotes;
