import '../Styles/App.css';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Categories from './Categories';
import Home from './Home';
import Users from './Users';
import SingleUser from './Single-user';
import Account from './Account';
import SingleCategory from './Single-category';
import CreateReview from './Create-review';
import SingleReview from './Single-review';
import Nav from './Nav';

import Menu from './Menu';
import Reviews from './Reviews';

function App() {
  const [reviews, setReviews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loginUser, setLoginUser] = useState({
    username: 'grumpy19',
    avatar_url: 'https://www.tumbit.com/profile-image/4/original/mr-grumpy.jpg',
    name: 'Paul Grump'
  });

  return (
    <div className='app'>
      <Nav loginUser={loginUser} setLoginUser={setLoginUser} />

      <Switch>
        <Route exact path='/'>
          <Home
            reviews={reviews}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </Route>

        <Route exact path='/users'>
          <Users
            users={users}
            setUsers={setUsers}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </Route>

        <Route exact path='/users/:username'>
          <SingleUser
            users={users}
            setUsers={setUsers}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </Route>

        <Route exact path='/account'>
          <Account
            users={users}
            setUsers={setUsers}
            loginUser={loginUser}
            setLoginUser={setLoginUser}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </Route>

        <Route exact path='/categories'>
          <Categories
            categories={categories}
            setCategories={setCategories}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </Route>

        <Route exact path='/categories/:slug'>
          <SingleCategory
            reviews={reviews}
            setReviews={setReviews}
            categories={categories}
            setCategories={setCategories}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </Route>

        <Route exact path='/reviews/create-review'>
          <CreateReview />
        </Route>

        <Route exact path='/reviews/:review_id'>
          <SingleReview isLoading={isLoading} setIsLoading={setIsLoading} />
        </Route>

        <Route exact path='/reviews'>
          <Reviews
            reviews={reviews}
            setReviews={setReviews}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </Route>

        <Route exact path='/menu'>
          <Menu />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
