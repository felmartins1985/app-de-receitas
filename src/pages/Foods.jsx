import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import CardsFood from '../components/CardsFood';

export default function Foods() {
  const foods = useSelector((state) => state.foodReducer.foods);
  return (
    <div>
      <Header
        profileIcon
        title="Foods"
        searchIcon
        typeFood="food"
      />
      <CardsFood cards={ foods } />
    </div>
  );
}
