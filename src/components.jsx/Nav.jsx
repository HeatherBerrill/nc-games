import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Social from './Social';
import Menu from './Menu';
import '../Styles/Nav.css';
import logo from '../Images/dice.png';
import { IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Nav = ({ loginUser, isOpen, setIsOpen }) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav'>
      <div className='logo_box'>
        <img src={logo} className='logo' alt='logo'></img>
      </div>
      <div className='links'>
        <Link to='/' className='nav_link'>
          <p className='link'> Home</p>
        </Link>
        <Link to='/account' className='nav_link'>
          <p className='link'> Account </p>
        </Link>
      </div>
      <p className='login-name'> Logged in as {loginUser.username}</p>
      <div>
        <IconButton
          onClick={() => {
            toggleMenu();
          }}
        >
          <MenuRoundedIcon color='primary' size='large' />
        </IconButton>
      </div>

      <Social className='nav_social' />
    </div>
  );
};

export default Nav;
