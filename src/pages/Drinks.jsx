import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import CardsDrink from '../components/CardsDrink';

export default function Drinks() {
  const drinks = useSelector((state) => state.drinkReducer.drinks);
  return (
    <div>
      <Header
        profileIcon
        title="Drinks"
        searchIcon
        typeFood="drink"
      />
      <CardsDrink cards={ drinks } />
    </div>
  );
}
