import React from 'react';
import PropTypes from 'prop-types';

export default function CardsFood({ cards }) {
  return (
    <div>
      {
        cards.length > 0 && cards.map(({ strMealThumb, strMeal }, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ strMeal }>
            <img
              data-testid={ `${index}-card-img` }
              src={ strMealThumb }
              alt={ strMeal }
            />
            <h3 data-testid={ `${index}-card-name` }>{ strMeal }</h3>
          </div>
        ))
      }
    </div>
  );
}

CardsFood.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
};

CardsFood.defaultProps = {
  cards: [],
};
