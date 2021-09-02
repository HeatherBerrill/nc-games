import { useState, useEffect } from 'react';
import { postReview } from '../api';
import '../Styles/Create-review.css';

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

  console.log(title, designer, chosenCat, body);

  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();

    const reviewToAdd = {
      owner: loginUser.username,
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
        <button className='btn create-review__btn'> Submit </button>
      </form>
    </div>
  );
};

export default CreateReview;

{
  /* <form className='comment__form' onSubmit={handleSubmit}>
        <label htmlFor='new-comment'>Add New Comment</label>
        <input
          type='text'
          id='new-comment'
          value={newComment}
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
        ></input>
        <button> Submit </button>
      </form> */
}
