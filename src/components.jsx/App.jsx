import '../Styles/App.css';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Categories from './Categories';
import Home from './Home';
import Users from './Users';
import SingleUser from './Single-user';
import Login from './Login';
import SingleCategory from './Single-category';
import CreateReview from './Create-review';
import SingleReview from './Single-review';
import Nav from './Nav';
import Footer from './Footer';
import Menu from './Menu';
import Reviews from './Reviews';

function App() {
  const [reviews, setReviews] = useState([]);

  return (
    <div className='app'>
      <Nav />
      <Footer />

      <Switch>
        <Route exact path='/'>
          <Home reviews={reviews} />
        </Route>

        <Route exact path='/users'>
          <Users />
        </Route>

        <Route exact path='/users/:username'>
          <SingleUser />
        </Route>

        <Route exact path='/login'>
          <Login />
        </Route>

        <Route exact path='/categories'>
          <Categories />
        </Route>

        <Route exact path='/categories/:slug'>
          <SingleCategory />
        </Route>

        <Route exact path='/reviews/create-review'>
          <CreateReview />
        </Route>

        <Route exact path='/reviews/:review_id'>
          <SingleReview />
        </Route>

        <Route exact path='/reviews'>
          <Reviews reviews={reviews} setReviews={setReviews} />
        </Route>

        <Route exact path='/menu'>
          <Menu />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
