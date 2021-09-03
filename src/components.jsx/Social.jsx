import '../Styles/Social.css';
import facebook from '../Images/facebook-logo.png';
import insta from '../Images/insta-logo.png';
import reddit from '../Images/reddit-logo.png';
import twitter from '../Images/twitter-logo.png';

const Social = () => {
  return (
    <div className='social'>
      <img src={facebook} className='facebook'></img>
      <img src={insta} className='insta'></img>
      <img src={reddit} className='reddit'></img>
      <img src={twitter} className='twitter'></img>
    </div>
  );
};

export default Social;
