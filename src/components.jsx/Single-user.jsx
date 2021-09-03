import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Styles/Single-user.css';
import { getSingleUser } from '../api';
import Footer from './Footer';

const SingleUser = ({ users, isLoading, setIsLoading }) => {
  const { username } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    setIsLoading(true);
    getSingleUser(username).then((user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <h3 className='loading'> Loading ...</h3>;

  return (
    <div className='single-user'>
      <div className='single-user__content'>
        <h3 className='single-user__username'> {user.username}</h3>
        <p className='single-user__name'> Name: {user.name} </p>
        <img
          alt='avatar image'
          src={user.avatar_url}
          className='user-image-box'
        ></img>
      </div>
      <Link to='/users'>
        <button className='btn single-user__back-btn'> Back </button>
      </Link>
      <Footer className='single-user__footer' />
    </div>
  );
};

export default SingleUser;
