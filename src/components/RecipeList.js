import React from 'react';

export const RecipeList = ({ categories }) => {
  const objects = [];
  const setItems = () => {

    for (let i = 0; i < categories.length; i += 1) {
      objects.push((
        <div className="item-list-object col justify-content-center">
          <div className="d-flex justify-content-center hover01">
            <figure>
              <img className="img-item random-img" src={categories[i].strCategoryThumb} />
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
      <div id="recipe-list-header" className="text">Recipes Categories </div>
      <div className="trios ">
        {setItems()}
      </div>
    </div>
  );
};