import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function CardsFood({ cards }) {
  const history = useHistory();

  const redirectDetailsPage = (id) => {
    history.push(`/foods/${id}`);
  };
  return (
    <div>
      {
        cards.length > 0 && cards.map(({ strMealThumb, strMeal, idMeal }, index) => (
          <button
            data-testid={ `${index}-recipe-card` }
            key={ strMeal }
            onClick={ () => redirectDetailsPage(idMeal) }
            type="button"
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ strMealThumb }
              alt={ strMeal }
            />
            <h3 data-testid={ `${index}-card-name` }>{ strMeal }</h3>
          </button>
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
