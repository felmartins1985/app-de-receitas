import React from 'react';
import { useHistory } from 'react-router-dom';
import { fetchApiRandom } from '../services/foodApi';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FoodExplore() {
  const history = useHistory();

  const recipeRandomSurprice = async () => {
    const id = await fetchApiRandom();
    history.push(`/foods/${id}`);
  };

  return (
    <div>
      <Header
        profileIcon
        title="Explore Foods"
      />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/foods/ingredients') }
      >
        By Ingredient

      </button>
      <button
        type="button"
        data-testid="explore-by-nationality"
        onClick={ () => history.push('/explore/foods/nationalities') }
      >
        By Nationality

      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ recipeRandomSurprice }
      >
        Surprise me!

      </button>
      <Footer />
    </div>
  );
}
