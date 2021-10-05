import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Categories.css';
import '../Styles/index.css';
import { getCategories } from '../api';
import Footer from './Footer';
import { Button, CircularProgress } from '@mui/material';

const Categories = ({ categories, setCategories, isLoading, setIsLoading }) => {
  useEffect(() => {
    setIsLoading(true);
    getCategories().then((categories) => {
      setCategories(categories);
      setIsLoading(false);
    });
  }, []);

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
    <section className='categories'>
      <h3 className='cat__title'> Categories </h3>
      <ul className='cat__list'>
        {categories.map((category) => {
          return (
            <li className='cat__item' key={category.slug}>
              <h4 className='cat__name'> {category.slug}</h4>
              <Link to={`/categories/${category.slug}`} className='btn_link'>
                <Button variant='contained' color='primary' size='small'>
                  Read Category Reviews
                </Button>
              </Link>
            </li>
          );
        })}
      </ul>

      <Footer className='cat__footer' />
    </section>
  );
};

export default Categories;
