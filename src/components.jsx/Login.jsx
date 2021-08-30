// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// const axios = require('axios');
import '../Styles/Login.css';

const Login = () => {
  return (
    <div className='login'>
      <h3 className='login__title'> Login</h3>
      <form className='login__form'>
        <label htmlFor='first-name'>First Name:</label>
        <br />
        <input type='text' id='first-name' name='first-name'></input>
        <br />
        <label htmlFor='username'>Username:</label>
        <br />
        <input type='text' id='username' name='username'></input>
        <br />
        <label htmlFor='avatar-list'></label>
        <br />
        <select id='avatar-list'>
          <option defaultValue disabled>
            Choose
          </option>
          <option> Avatar 1 </option>
          <option> Avatar 2 </option>
          <option> Avatar 3 </option>
          <option> Avatar 4 </option>
        </select>
        <Link to='/users/:username'>
          <button className='btn login__btn'> Submit </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
