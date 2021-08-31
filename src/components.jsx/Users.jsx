import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Users.css';
import { getUsers } from '../api';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <section className='users'>
      <h1 className='users__title'> Users Page</h1>
      <ul className='users__list'>
        {users.map((user) => {
          return (
            <li key={user.username}>
              <h3> {user.username}</h3>
              <Link to={`/users/${user.username}`}>
                <button>View User</button>
              </Link>
            </li>
          );
        })}
      </ul>
      <Link to='/login'>
        <button className='btn users__btn'> Login </button>
      </Link>
    </section>
  );
};

export default Users;
