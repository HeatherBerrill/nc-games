// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// const axios = require('axios');
import '../Styles/Categories.css';
import Nav from './Nav';
import Footer from './Footer';

const Categories = () => {
  return (
    <div className='categories'>
      <Nav />
      <h1> Categories Page</h1>
      <p> List of categories</p>
      <Footer />
    </div>
  );
};

export default Categories;
