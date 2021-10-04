import { useEffect } from 'react';
import { getUsers } from '../api';
import '../Styles/Account.css';
import '../Styles/index.css';
import Footer from './Footer';
import { Button, CircularProgress } from '@mui/material';

const Account = ({
  setUsers,
  users,
  loginUser,
  setLoginUser,
  isLoading,
  setIsLoading
}) => {
  useEffect(() => {
    setIsLoading(true);
    getUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, [loginUser, setUsers]);

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
    <div className='account'>
      <h3 className='account__message'>
        You are logged in as&nbsp;
        <span className='bold__username'>{loginUser.username}</span>
      </h3>
      <ul className='switch-user__list'>
        {users.map((user) => {
          return (
            <li className='account__user' key={user.username}>
              <h3 className='account-user__list'> {user.username}</h3>
              <Button
                className='btn switch-user__btn'
                variant='contained'
                color='primary'
                size='small'
                onClick={() => {
                  setLoginUser(user);
                }}
                style={{ margin: 5 }}
              >
                Switch to User
              </Button>
            </li>
          );
        })}
      </ul>
      <Footer className='account__footer' />
    </div>
  );
};

export default Account;
