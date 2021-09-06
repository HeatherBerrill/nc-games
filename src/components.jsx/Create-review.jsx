import { useState, useEffect } from 'react';
import { postReview } from '../api';
import '../Styles/Create-review.css';
import deckBuilding from '../Images/deckBuilding.jpg';
import dexterity from '../Images/dexterity.jpg';
import engineBuilding from '../Images/engineBuilding.jpg';
import hiddenRoles from '../Images/hiddenRoles.jpg';
import pushyourluck from '../Images/pushyourluck.jpg';
import Strategy from '../Images/Strategy.jpg';
import rollandwrite from '../Images/rollandwrite.jpg';
import Footer from './Footer';

const CreateReview = ({
  setReviews,
  reviews,
  loginUser,
  isLoading,
  setIsLoading
}) => {
  const [chosenCat, setChosenCat] = useState('');
  const [title, setTitle] = useState('');
  const [designer, setDesigner] = useState('');
  const [body, setBody] = useState('');
  const [img, setImg] = useState('');

  console.log(title, designer, chosenCat, body);

  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();

    const reviewToAdd = {
      owner: loginUser.username,
      review_img_url: img,
      title: title,
      review_body: body,
      designer: designer,
      category: chosenCat
    };
    postReview(reviewToAdd).then((reviewFromApi) => {
      setReviews((currReviews) => {
        return [...currReviews, reviewFromApi];
      });
      setIsLoading(false);
      setTitle('');
      setDesigner('');
      setBody('');
      setChosenCat('');
      setImg('');
    });
  };

  if (isLoading) return <h3 className='loading'> Loading ...</h3>;

  return (
    <div className='create-review'>
      <h3 className='create-review__title'> Create Review</h3>
      <form className='create-review__form' onSubmit={handleSubmit}>
        <label htmlFor='title'>Title:</label>
        <br />
        <input
          className='create-review__title-input'
          value={title}
          type='text'
          id='title'
          name='title'
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
        <br />
        <label htmlFor='designer'>Designer:</label>
        <br />
        <input
          className='create-review__designer-input'
          value={designer}
          type='text'
          id='designer'
          name='designer'
          onChange={(event) => {
            setDesigner(event.target.value);
          }}
        ></input>
        <br />
        <label htmlFor='body'>Write Your Review:</label>
        <br />
        <input
          className='create-review__body-input'
          value={body}
          type='text'
          id='body'
          name='body'
          onChange={(event) => {
            setBody(event.target.value);
          }}
        ></input>
        <br />
        <label htmlFor='category'></label>
        <br />
        <select
          className='create-review__category-dropdown'
          value={chosenCat}
          onChange={(event) => {
            setChosenCat(event.target.value);
          }}
          id='category'
        >
          <option disabled defaultValue value=''>
            Choose Category
          </option>
          <option value='deck-building'> Deck-building </option>
          <option value='dexterity'> Dexterity </option>
          <option value='engine-building'> Engine-building </option>
          <option value='hidden-roles'> Hidden-roles </option>
          <option value='push your luck'> Push your luck </option>
          <option value='roll and write'> Role and write </option>
          <option value='strategy'> Strategy </option>
        </select>

        <select
          className='create-review__img-dropdown'
          value={img}
          onChange={(event) => {
            setImg(event.target.value);
          }}
          id='img_url'
        >
          <option disabled defaultValue value=''>
            Choose Review Image
          </option>
          <option value={deckBuilding}>Deck-building</option>
          <option value={dexterity}>Dexterity</option>
          <option value={engineBuilding}>Engine-building</option>
          <option value={hiddenRoles}>Hidden-roles</option>
          <option value={pushyourluck}>Push your luck</option>
          <option value={rollandwrite}>Role and write</option>
          <option value={Strategy}>Strategy</option>
        </select>

        <button className='btn create-review__btn'> Submit </button>
      </form>
      <Footer className='create-review__footer' />
    </div>
  );
};

export default CreateReview;
