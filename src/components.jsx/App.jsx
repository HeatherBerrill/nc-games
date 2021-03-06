import '../Styles/App.css';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
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
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
  const [review, setReview] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#906099',
        dark: '#46314a',
        light: '#d6a4e0'
      }
    },
    typography: {
      fontFamily: 'Ubuntu',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div className='app'>
        <Nav
          loginUser={loginUser}
          setLoginUser={setLoginUser}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />;
        <Switch>
          <Route exact path='/'>
            <Home
              setReviews={setReviews}
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
            <CreateReview
              loginUser={loginUser}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              reviews={reviews}
              setReviews={setReviews}
            />
          </Route>

          <Route exact path='/reviews/:review_id'>
            <SingleReview
              loginUser={loginUser}
              review={review}
              setReview={setReview}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </Route>

          <Route exact path='/reviews'>
            <Reviews
              reviews={reviews}
              setReviews={setReviews}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
