import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { fetchDrinksIngredients } from '../services/drinkApi';

import { setIngredientExplore } from '../redux/actions';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DrinksIngredients() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      const numMax = 11;
      console.log('entrou');
      const result = await fetchDrinksIngredients();
      const ingredientsApi = result.filter((_, index) => index <= numMax);
      setIngredients(ingredientsApi);
    };
    callApi();
  }, []);

  const redirect = (name) => {
    dispatch(setIngredientExplore(name));
    history.push('/drinks');
  };
  return (
    <div>
      <Header
        profileIcon
        title="Explore Ingredients"
      />
      <div>
        {ingredients.length > 0 && ingredients.map(({ strIngredient1 }, index) => (
          <button
            key={ strIngredient1 }
            type="button"
            data-testid={ `${index}-ingredient-card` }
            onClick={ () => redirect(strIngredient1) }
          >
            <img
              src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
              alt={ strIngredient1 }
              data-testid={ `${index}-card-img` }
            />
            <h2 data-testid={ `${index}-card-name` }>
              { strIngredient1 }
            </h2>
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
}
