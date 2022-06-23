import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  const [email, setEmail] = useState('');

  const history = useHistory();

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem('user'));
    setEmail(result?.email);
  }, []);

  const logoutAndClearStorage = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <div>
        <Header
          profileIcon
          title="Profile"
        />
      </div>
      <div>
        <h3 data-testid="profile-email">{ email }</h3>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ logoutAndClearStorage }
        >
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
}
