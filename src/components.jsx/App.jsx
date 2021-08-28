import '../Styles/App.css';
import { Switch, Route } from 'react-router-dom';
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

function App() {
  return (
    <div className='app'>
      <Nav />
      <Footer />
      <Menu />

      <Switch>
        <Route exact path='/'>
          <Home />
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

        <Route exact path='/create-review'>
          <CreateReview />
        </Route>

        <Route exact path='/reviews/:review_id'>
          <SingleReview />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
