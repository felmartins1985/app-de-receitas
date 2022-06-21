import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FoodsNationalities() {
  return (
    <div>
      <Header
        profileIcon
        title="Explore Nationalities"
        searchIcon
        typeFood="food"
      />
      <Footer />
    </div>
  );
}
