import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';

export default function Footer() {
  return (
    <footer data-testid="footer" className="footer">
      <button type="button">
        <img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="drink" />
      </button>
      <button type="button">
        <img data-testid="explore-bottom-btn" src={ exploreIcon } alt="explore" />
      </button>
      <button type="button">
        <img data-testid="food-bottom-btn" src={ mealIcon } alt="meal" />
      </button>
    </footer>

  );
}
