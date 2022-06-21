import React from 'react';
import PropTypes from 'prop-types';

export default function CardsDrink({ cards }) {
  return (
    <div>
      {
        cards.length > 0 && cards.map(({ strDrinkThumb, strDrink }, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ strDrink }>
            <img
              data-testid={ `${index}-card-img` }
              src={ strDrinkThumb }
              alt={ strDrink }
            />
            <h3 data-testid={ `${index}-card-name` }>{ strDrink }</h3>
          </div>
        ))
      }
    </div>
  );
}

CardsDrink.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
};

CardsDrink.defaultProps = {
  cards: [],
};
