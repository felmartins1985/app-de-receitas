import React, { useEffect, useState } from 'react';
import { fetchApiAllDrinks } from '../services/drinkApi';

export default function DrinksCarousel() {
  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    const getRecommended = async () => {
      const drinksRecommendation = await fetchApiAllDrinks();
      const maxLength = 6;
      const filteredDrinks = drinksRecommendation.filter((_, index) => index < maxLength);
      setRecommendations(filteredDrinks);
      console.log('The 6', filteredDrinks);
    };
    getRecommended();
  }, []);
  return (
    <div>
      Drink Carousel
      {recommendations.map((drink, index) => (
        <div
          key={ index }
          data-testid={ `${index}-recomendation-card` }
        >
          <img
            src={ drink.strDrinkThumb }
            alt={ drink.strDrink }
          />

          {drink.strAlcoholic === 'Alcoholic'
            ? <p data-testid="recipe-category">{drink.strAlcoholic}</p>
            : <p data-testid="recipe-category">{drink.strCategory}</p>}
          <h2 data-testid={ `${index}-recomendation-title` }>{drink.strDrink}</h2>
        </div>
      ))}

    </div>
  );
}
