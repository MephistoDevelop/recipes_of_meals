import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import propTypes from 'prop-types';

const RecipeCategories = ({ categories }) => {
  const objects = [];
  const [detailView, setDetailView] = useState(false);
  const [categoryObj, setCatgoryObj] = useState({});
  const history = useHistory();

  if (history.location && history.location.state && history.location.state.from) {
    const state = { ...history.location.state };
    delete state.from;
    history.replace({ ...history.location, state });
  }

  const showDetails = (category) => {
    setDetailView(true);
    setCatgoryObj(category);
  };

  const setItems = () => {
    for (let i = 0; i < categories.length; i += 1) {
      objects.push((
        <div role="button" tabIndex={0} key={i} className="item-list-object col justify-content-center" onKeyPress={null} onClick={() => showDetails(categories[i])}>
          <div className="d-flex justify-content-center hover01">
            <figure>
              <img alt="thumb meal" className="img-item random-img" src={categories[i].strCategoryThumb} />
            </figure>
          </div>
          <div className="text-center text">{categories[i].strCategory}</div>
        </div>
      ));
    }
    return objects;
  };

  return (
    <div id="recipe-list-container col">
      <div data-testid="categories-header" id="recipe-list-header">Categories </div>
      <div className="trios ">
        {setItems()}
        {(detailView === true) ? (
          <Redirect
            from="*"
            to={{
              pathname: '/meals',
              state: { category: categoryObj },
            }}
          />
        ) : null}
      </div>
    </div>

  );
};

RecipeCategories.propTypes = ({
  categories: propTypes.instanceOf(Array).isRequired,
});
export default RecipeCategories;
