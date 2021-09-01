import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../Styles/Votes.css';
import { updateVotes } from '../api';

const Votes = () => {
  const { review_id } = useParams();
  const [voteChange, setVoteChange] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [votes, setVotes] = useState(0);

  //   useEffect(() => {
  //       setVotes(votes)
  //     console.log(votes)
  //     });
  //   }, [votes]);

  const incVotes = () => {
    setHasError(false);

    setVoteChange((currVoteChange) => {
      return currVoteChange + 1;
    });
    console.log(voteChange, 'votechange');
    console.log(votes, 'votes');

    updateVotes(review_id, 1)
      .then((review) => {
        console.log(review);
      })
      .catch(() => {
        setHasError(true);
        setVoteChange((currVoteChange) => {
          return currVoteChange - 1;
        });
      });
  };

  return (
    <div className='votes'>
      <p> {votes + voteChange} </p>
      {hasError && <p> Sorry. There has been a problem, try again later...</p>}
      <button className='btn btn__votes' onClick={incVotes}>
        Vote
      </button>
    </div>
  );
};

export default Votes;
