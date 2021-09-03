import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Categories.css';
import { getCategories } from '../api';
import Footer from './Footer';

const Categories = ({ categories, setCategories, isLoading, setIsLoading }) => {
  useEffect(() => {
    setIsLoading(true);
    getCategories().then((categories) => {
      setCategories(categories);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <h3 className='loading'> Loading ...</h3>;

  return (
    <section className='categories'>
      <h3 className='cat__title'> Categories </h3>
      <ul className='cat__list'>
        {categories.map((category) => {
          return (
            <li className='cat__item' key={category.slug}>
              <h4 className='cat__name'> {category.slug}</h4>
              <Link to={`/categories/${category.slug}`}>
                <button className='btn categories__btn'>
                  Read Category Reviews
                </button>
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
