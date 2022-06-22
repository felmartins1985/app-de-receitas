import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function CardsDrink({ cards }) {
  const history = useHistory();

  const redirectDetailsPage = (id) => {
    history.push(`/drinks/${id}`);
  };
  return (
    <div>
      {
        cards.length > 0 && cards.map(({ strDrinkThumb, strDrink, idDrink }, index) => (
          <button
            data-testid={ `${index}-recipe-card` }
            key={ strDrink }
            onClick={ () => redirectDetailsPage(idDrink) }
            type="button"
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ strDrinkThumb }
              alt={ strDrink }
            />
            <h3 data-testid={ `${index}-card-name` }>{ strDrink }</h3>
          </button>
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
