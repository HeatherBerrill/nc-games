import '../Styles/Social.css';
import facebook from '../Images/facebook-logo.png';
import insta from '../Images/insta-logo.png';
import reddit from '../Images/reddit-logo.png';
import twitter from '../Images/twitter-logo.png';

const Social = () => {
  return (
    <div className='social'>
      <img src={facebook} className='facebook' alt='facebook_logo'></img>
      <img src={insta} className='insta' alt='instagram_logo'></img>
      <img src={reddit} className='reddit' alt='reddit_logo'></img>
      <img src={twitter} className='twitter' alt='twitter_logo'></img>
    </div>
  );
};

export default Social;
