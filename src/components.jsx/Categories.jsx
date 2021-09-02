import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Categories.css';
import { getCategories } from '../api';

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
      <h1 className='cat__title'> Categories </h1>
      <ul className='cat__list'>
        {categories.map((category) => {
          return (
            <li key={category.slug}>
              <h3> {category.slug}</h3>
              <Link to={`/categories/${category.slug}`}>
                <button>Read Category Reviews</button>
              </Link>
            </li>
          );
        })}
      </ul>
      <form className='cat__form'>
        <label htmlFor='new-cat'>Add New Category</label>
        <input type='text' id='new-cat'></input>
        <button> Submit </button>
      </form>
    </section>
  );
};

export default Categories;
