import { useEffect } from 'react';
import { getUsers } from '../api';
import '../Styles/Account.css';

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
        You are logged in as {loginUser.username}
      </h3>

      <p className='switch-user__message'>Switch User </p>

      <ul className='switch-user__list'>
        {users.map((user) => {
          return (
            <li key={user.username}>
              <h3> {user.username}</h3>
              <button
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
    </div>
  );
};

export default Account;
