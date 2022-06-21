import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Footer() {
  return (
    <footer data-testid="footer" className="footer">
      Footer
      <button
        type="button"
        data-testid="drinks-bottom-btn"
      >
        <img src={ drinkIcon } alt="drink" />
      </button>
      <button
        type="button"
        data-testid="explore-bottom-btn"
      >
        <img src={ exploreIcon } alt="explore" />
      </button>
      <button
        type="button"
        data-testid="food-bottom-btn"
      >
        <img src={ mealIcon } alt="meal" />
      </button>
    </footer>

  );
}
