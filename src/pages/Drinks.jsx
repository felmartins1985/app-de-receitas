import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Drinks() {
  return (
    <div>
      <Header
        profileIcon
        title="Drinks"
        searchIcon
        typeFood="drink"
      />
      Drinks
      <Footer />
    </div>
  );
}
