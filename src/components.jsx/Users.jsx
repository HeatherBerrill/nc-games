import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Users.css';
import '../Styles/index.css';
import { getUsers } from '../api';
import Footer from './Footer';
import { Button, CircularProgress } from '@mui/material';

const Users = ({ users, setUsers, isLoading, setIsLoading }) => {
  useEffect(() => {
    setIsLoading(true);
    getUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, [setUsers]);

  if (isLoading) {
    return (
      <section className='loading_screen'>
        <div className='spinner-box'>
          <CircularProgress color='primary' />
        </div>
      </section>
    );
  }

  return (
    <section className='users'>
      <h1 className='users__title'> Our Users </h1>
      <ul className='users__list'>
        {users.map((user) => {
          return (
            <li className='users__single' key={user.username}>
              <h3 className='users__username'> {user.username}</h3>
              <Link to={`/users/${user.username}`} className='btn_link'>
                <Button
                  // className='btn users-single__btn'
                  variant='contained'
                  color='primary'
                  size='small'
                >
                  View User
                </Button>
              </Link>
            </li>
          );
        })}
      </ul>
      <Footer className='users__footer' />
    </section>
  );
};

export default Users;
