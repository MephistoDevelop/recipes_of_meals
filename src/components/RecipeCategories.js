import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom'
export const RecipeCategories = ({ categories }) => {
  const objects = [];
  const [detailView, setDetailView] = useState(false);

  const showDetails = (category) => {
    alert('Clickeado !!' + JSON.stringify(category));
    setDetailView(true);
  };

  const setItems = () => {

    for (let i = 0; i < categories.length; i += 1) {
      objects.push((
        <div key={i} className="item-list-object col justify-content-center" onClick={(e) => showDetails(categories[i])}>
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
      <div id="recipe-list-header">Categories </div>
      <div className="trios ">
        {setItems()}
        {(detailView === true) ? <Redirect from="*" to={{
          pathname: "/meals",
          state: { meals: "Hello  Meals Prop" }
        }} /> : null}
      </div>
    </div>

  );
};