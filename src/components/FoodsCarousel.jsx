import React, { useEffect, useState } from 'react';
import { fetchApiAllFoods } from '../services/foodApi';

export default function FoodsCarousel() {
  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    const getRecommended = async () => {
      const foodsRecommendation = await fetchApiAllFoods();
      const maxLength = 6;
      const filteredFoods = foodsRecommendation.filter((_, index) => index < maxLength);
      setRecommendations(filteredFoods);
      console.log('The 6', filteredFoods);
    };
    getRecommended();
  }, []);
  return (
    <div>
      Food Carousel
      {recommendations.map((food, index) => (
        <div
          key={ index }
          data-testid={ `${index}-recomendation-card` }
        >
          <img
            src={ food.strMealThumb }
            alt={ food.strMeal }
          />
          <p>{food.strCategory}</p>
          <h2 data-testid={ `${index}-recomendation-title` }>{food.strMeal}</h2>
        </div>
      ))}

    </div>
  );
}
