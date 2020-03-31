import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch, useSelector, connect } from 'react-redux';
import { NavBar } from './NavBar';
import { RandomList } from './RandomList';
import { RecipeCategories } from './RecipeCategories';
import { RecipeDetails } from './RecipeDetails';
import RecipesList from './RecipesList';
import { Home } from './Home';
import FindedMeal from './FindedMeal';
import { SetCategories } from '../actions/actions';

const App = (props) => {
  const [categories, setCategories] = useState(0);
  const [randomMeal, setRandomMeal] = useState({});
  const categoriesArr = [];
  const randomMeals = [];
  const { Categories } = props
  const { mealCategories } = props;

  useEffect(() => {
    Categories();

  }, []);

  const saveRedux = () => {
    // Categories();

    console.log(`Im meal from state: ${mealCategories}`);
  };

  return (
    <div id="main-container">
      <Router>
        <input type="button" onClick={() => saveRedux()} value="Dispatch" />
        <NavBar categories={categories} />
        <div id="content">
          <Route path="/home" component={() => <Home />} />
          <Route path="/random" component={() => <RandomList randomMeals={randomMeal} />} />
          <Route path="/details" component={() => <RecipeDetails />} />
          <Route path="/categories" component={() => <RecipeCategories categories={mealCategories} />} />
          <Route path="/meals" component={() => <RecipesList />} />
          <Route path="/finded" component={() => <FindedMeal />} />
        </div>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mealCategories: state.mealCategories
});

const mapDispatchToProps = (dispatch) => ({
  Categories: () => dispatch(SetCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);