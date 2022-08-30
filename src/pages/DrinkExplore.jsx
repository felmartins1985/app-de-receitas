import React from 'react';
import { useHistory } from 'react-router-dom';
import { fetchApiRandom } from '../services/drinkApi';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DrinkExplore() {
  const history = useHistory();

  const recipeRandomSurprice = async () => {
    const id = await fetchApiRandom();
    history.push(`/drinks/${id}`);
  };

  return (
    <div>
      <Header
        profileIcon
        title="Explore Drinks"
      />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/drinks/ingredients') }
      >
        By Ingredient

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
