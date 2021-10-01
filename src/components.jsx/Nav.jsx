import { Link } from 'react-router-dom';
import Social from './Social';
import '../Styles/Nav.css';
import background from '../Images/dice_crop.jpg';
import { IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Nav = ({ loginUser, isOpen, setIsOpen }) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav'>
      <div className='dice_box'>
        <img src={background} className='dice' alt='dice'></img>
      </div>
      <div className='links'>
        <Link to='/' className='nav_link'>
          <HomeIcon color='primary' />
        </Link>
        <Link to='/account' className='nav_link'>
          <AccountCircleIcon color='primary' />
        </Link>
      </div>
      <p className='login-name'>
        Logged in as {loginUser.username.toUpperCase()}
      </p>
      <div className='menu-icon__container'>
        <IconButton
          onClick={() => {
            toggleMenu();
          }}
          className='menu__icon'
        >
          <MenuRoundedIcon color='primary' size='large' />
        </IconButton>
      </div>
      <div className='nav_social'>
        <Social />
      </div>
    </div>
  );
};

export default Nav;
