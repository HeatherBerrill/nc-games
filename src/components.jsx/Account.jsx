import { useEffect } from 'react';
import { getUsers } from '../api';
import '../Styles/Account.css';
import Footer from './Footer';
const Account = ({
  setUsers,
  users,
  loginUser,
  setLoginUser,
  isLoading,
  setIsLoading
}) => {
  // const switchUser = () => {
  //   loginUser();
  // };

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, [loginUser, setUsers]);

  console.log(loginUser.username, 'in acount');

  if (isLoading) return <h3 className='loading'> Loading ...</h3>;

  return (
    <div className='account'>
      <h3 className='account__message'>
        You are logged in as{' '}
        <span className='bold__username'>{loginUser.username}</span>
      </h3>
      <ul className='switch-user__list'>
        {users.map((user) => {
          return (
            <li className='account__user' key={user.username}>
              <h3 className='account-user__list'> {user.username}</h3>
              <button
                className='btn switch-user__btn'
                onClick={() => {
                  setLoginUser(user);
                }}
              >
                Switch to User
              </button>
            </li>
          );
        })}
      </ul>
      <Footer className='account__footer' />
    </div>
  );
};

export default Account;
