// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// const axios = require('axios');
import '../Styles/Categories.css';

const Categories = () => {
  return (
    <section className='categories'>
      <h1 className='cat_title'> Categories Page</h1>
      <ul className='cat_list'>
        <li> Category 1 </li>
        <li> Category 2 </li>
        <li> Category 3 </li>
        <li> Category 4 </li>
        <li> Category 5 </li>
      </ul>
      <form className='cat_form'>
        <label htmlFor='new-cat'>Add New Category</label>
        <input type='text' id='new-cat'></input>
        <button> Submit </button>
      </form>
    </section>
  );
};

export default Categories;
