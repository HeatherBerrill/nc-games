import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Users.css';
import { getUsers } from '../api';
import Footer from './Footer';

const Users = ({ users, setUsers, isLoading, setIsLoading }) => {
  useEffect(() => {
    setIsLoading(true);
    getUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, [setUsers]);

  if (isLoading) return <h3 className='loading'> Loading ...</h3>;

  return (
    <section className='users'>
      <h1 className='users__title'> Our Fans </h1>
      <ul className='users__list'>
        {users.map((user) => {
          return (
            <li className='users__single' key={user.username}>
              <h3 className='users__username'> {user.username}</h3>
              <Link to={`/users/${user.username}`}>
                <button className='btn users-single__btn'>View User</button>
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
