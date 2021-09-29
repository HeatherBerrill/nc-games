import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Social from './Social';
import '../Styles/Menu.css';
import IconButton from '@mui/material/IconButton';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

const Menu = ({ isOpen, setIsOpen }) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? 'menu' : 'menu-hidden'}>
      <Link to='/'>
        <IconButton
          onClick={() => {
            toggleMenu();
          }}
        >
          <HighlightOffRoundedIcon
            className={isOpen ? 'close-menu' : 'btn-hidden'}
            style={{ color: 'white', size: 'large' }}
          />
        </IconButton>
      </Link>
      <ul className='menu__list'>
        <Link
          to='/'
          className='menu__link'
          onClick={() => {
            toggleMenu();
          }}
        >
          <li className='menu__item'> Home </li>
        </Link>
        <Link
          to='/categories'
          className='menu__link'
          onClick={() => {
            toggleMenu();
          }}
        >
          <li className='menu__item'> Categories </li>
        </Link>
        <Link
          to='/users'
          className='menu__link'
          onClick={() => {
            toggleMenu();
          }}
        >
          <li className='menu__item'> Users </li>
        </Link>
        <Link
          to='/reviews'
          className='menu__link'
          onClick={() => {
            toggleMenu();
          }}
        >
          <li
            className='menu__item'
            onClick={() => {
              toggleMenu();
            }}
          >
            {' '}
            All reviews{' '}
          </li>
        </Link>
      </ul>
      <div className='menu-social__container'>
        <Social className='menu__social' />
      </div>
    </div>
  );
};

export default Menu;
