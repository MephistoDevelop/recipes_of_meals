/* eslint-disable  import/no-duplicates */
/* eslint-disable import/no-named-as-default */
/* eslint-disable arrow-parens */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import NavBar from './NavBar';
import RandomList from '../containers/RandomList';
import RecipeCategories from '../containers/RecipeCategories';
import RecipeDetails from '../containers/RecipeDetails';
import RecipesList from '../containers/RecipesList';
import Home from './Home';
import FindedMeal from '../containers/FindedMeal';
import { SetCategories, SetRandom } from '../actions/actions';

const App = (props) => {
  const { Categories, Random } = props;
  const { mealCategories, mealRandom } = props;

  useEffect(() => {
    Categories();
    Random();
  }, []);

  return (
    <div id="main-container" data-testid="div-home">
      <Router>
        <NavBar categories={[]} />
        <div id="content">
          <Route path="/home" component={() => <Home />} />
          <Route path="/random" component={() => <RandomList randomMeals={mealRandom} />} />
          <Route path="/details" component={() => <RecipeDetails />} />
          <Route path="/categories" component={() => <RecipeCategories categories={mealCategories} />} />
          <Route path="/meals" component={() => <RecipesList />} />
          <Route path="/finded" component={() => <FindedMeal />} />
        </div>
      </Router>
    </div>
  );
};

App.propTypes = {
  Categories: propTypes.func.isRequired,
  Random: propTypes.func.isRequired,
  mealCategories: propTypes.instanceOf(Array).isRequired,
  mealRandom: propTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({
  mealCategories: state.mealCategories,
  mealRandom: state.mealRandom,
});

const mapDispatchToProps = (dispatch) => ({
  Categories: () => dispatch(SetCategories()),
  Random: () => dispatch(SetRandom()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
