import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Styles/Single-user.css';
import { getSingleUser } from '../api';

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
        <h3> {user.username}</h3>
        <p> Name: {user.name} </p>
        <img
          alt='avatar image'
          src={user.avatar_url}
          className='user-image-box'
        ></img>
      </div>
      <Link to='/users'>
        <button className='btn back-btn'> Back </button>
      </Link>
    </div>
  );
};

export default SingleUser;
