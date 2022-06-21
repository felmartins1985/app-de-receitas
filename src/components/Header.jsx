import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import profileIconImage from '../images/profileIcon.svg';
import searchIconImage from '../images/searchIcon.svg';
import CardsFood from './CardsFood';
import CardsDrink from './CardsDrink';

export default function Header({ profileIcon, title, searchIcon, typeFood }) {
  const [searchBar, setSearchBar] = useState(false);
  const history = useHistory();

  const foods = useSelector((state) => state.foodReducer.foods);
  const drinks = useSelector((state) => state.drinkReducer.drinks);

  const redirectProfile = () => {
    history.push('/profile');
  };

  return (
    <div>
      <header>
        {profileIcon
         && (
           <button
             type="button"
             onClick={ redirectProfile }
             src={ profileIconImage }
           >
             <img
               data-testid="profile-top-btn"
               src={ profileIconImage }
               alt="profile Icon"
             />
           </button>
         )}
        <h2 data-testid="page-title">{ title }</h2>
        {searchIcon
         && (
           <button
             type="button"
             onClick={ () => setSearchBar(!searchBar) }
           >
             <img
               data-testid="search-top-btn"
               src={ searchIconImage }
               alt="search Icon"
             />
           </button>
         )}
      </header>
      {searchBar && <SearchBar typeFood={ typeFood } />}
      <div>
        {typeFood === 'food'
          ? <CardsFood cards={ foods } /> : <CardsDrink cards={ drinks } /> }
      </div>
    </div>
  );
}

Header.propTypes = {
  profileIcon: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  searchIcon: PropTypes.bool,
  typeFood: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

Header.defaultProps = {
  searchIcon: false,
  typeFood: '',
};
