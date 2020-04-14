/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import NavBar from '../components/NavBar';
import RandomList from '../components/RandomList';
import RecipeCategories from '../components/RecipeCategories';
import RecipeDetails from '../components/RecipeDetails';
import RecipesList from '../components/RecipesList';
import Home from '../components/Home';
import FindedMeal from '../components/FindedMeal';
import { SetCategories, SetRandom } from '../actions/actions';

const App = props => {
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

const mapStateToProps = state => ({
  mealCategories: state.mealCategories,
  mealRandom: state.mealRandom,
});

const mapDispatchToProps = dispatch => ({
  Categories: () => dispatch(SetCategories()),
  Random: () => dispatch(SetRandom()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
