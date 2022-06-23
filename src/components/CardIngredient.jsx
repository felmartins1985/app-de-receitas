import React from 'react';
// import React, { useEffect, useState } from 'react';

// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { fetchApiIngredients } from '../services/foodApi';
// import { filterByIngredient } from '../redux/actions';

export default function CardIngredient() {
  // const dispatch = useDispatch();
  // const history = useHistory();

  // const [ingredients, setIngredients] = useState([]);

  // useEffect(() => {
  //   const callApi = async () => {
  //     const result = await fetchApiIngredients();
  //     const numbMax = 11;
  //     const ingredientApi = result.filter((_, index) => index <= numbMax);
  //     setIngredients(ingredientApi);
  //   };
  //   callApi();
  // }, []);

  // const ingredientRecipes = () => {
  //   dispatch(filterByIngredient);
  //   history.push('/foods');
  // };

  return (
    <div>
      {/* {ingredients.length > 0 && ingredients.map(({ strIngredient1 }, index) => (
        <button
          key={ strIngredient1 }
          type="button"
          data-testid={ `${index}-ingredient-card` }
          onClick={ ingredientRecipes }
        >
          <img
            data-testid={ `${index}-card-img` }
            alt={ strIngredient1 }
          />
          <h2 data-testid={ `${index}-card-name` }>{ strIngredient1 }</h2>
        </button>
      ))} */}
    </div>
  );
}
