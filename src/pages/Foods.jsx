import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Foods() {
  return (
    <div>
      <Header
        profileIcon
        title="Foods"
        searchIcon
        typeFood="food"
      />
      Foods
      <Footer />
    </div>
  );
}
