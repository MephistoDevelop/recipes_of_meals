/* eslint-disable arrow-parens */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { FindMeal } from '../actions/actions';

let meals = [];
export const rendered = false;
const CategoryFilter = (props) => {
  const [render, setRender] = useState(false);
  const { FindMeal, mealSearch } = props;

  useEffect(() => {
    FindMeal('');
  }, []);

  const findMeal = (e) => {
    const nameBox = document.getElementById('txt-name').value;
    try {
      if (nameBox.length > 2) {
        FindMeal(nameBox);
        mealSearch.forEach((item) => {
          if (item !== null) {
            meals = item;
            setRender(true);
          }
        });
      }
    } catch (error) {
      if (e.target.value.length > 2) {
        FindMeal(e.target.value);
        mealSearch.forEach((item) => {
          if (item !== null) {
            meals = item;
            setRender(true);
          }
        });
      }
    }
  };


  return (
    <div className="d-flex" id="filter-container">
      <input data-testid="name-mealbox" id="txt-name" type="text" placeholder="Find Recipe" onChange={(e) => findMeal(e)} />
      <input data-testid="btn-search" type="button" id="btn-search" value="Search" onClick={() => findMeal()} />
      {render === true ? (
        <Redirect
          from="*"
          to={{
            pathname: '/finded',
            state: { mealSearch: meals },
          }}
        />
      ) : (
          <Redirect
            from="*"
            to={{
              pathname: '/home',
            }}
          />
        )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  mealSearch: state.mealSearch,
});

const mapDispatchToProps = (dispatch) => ({
  FindMeal: (name) => dispatch(FindMeal(name)),
});

CategoryFilter.propTypes = ({
  FindMeal: propTypes.func.isRequired,
  mealSearch: propTypes.instanceOf(Array).isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
