import Social from './Social';
import '../Styles/Footer.css';
import background from '../Images/dice_crop.jpg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__social-container'>
        <Social className='footer_social' />
      </div>

      <img src={background} className='footer_logo' alt='logo'></img>
    </div>
  );
};

export default Footer;
