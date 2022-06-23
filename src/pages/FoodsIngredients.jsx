import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { fetchFoodIngredients } from '../services/foodApi';

import { setIngredientExplore } from '../redux/actions';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FoodsIngredients() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      const numMax = 11;
      const result = await fetchFoodIngredients();
      const ingredientsApi = result.filter((_, index) => index <= numMax);
      setIngredients(ingredientsApi);
    };
    callApi();
  }, []);

  const redirect = (name) => {
    dispatch(setIngredientExplore(name));
    history.push('/foods');
  };

  return (
    <div>
      <Header
        profileIcon
        title="Explore Ingredients"
      />
      <div>
        {ingredients.length > 0 && ingredients.map(({ strIngredient }, index) => (
          <button
            key={ strIngredient }
            type="button"
            data-testid={ `${index}-ingredient-card` }
            onClick={ () => redirect(strIngredient) }
          >
            <img
              src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
              alt={ strIngredient }
              data-testid={ `${index}-card-img` }
            />
            <h2 data-testid={ `${index}-card-name` }>
              { strIngredient }
            </h2>
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
}
