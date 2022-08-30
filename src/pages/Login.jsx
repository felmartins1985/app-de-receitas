import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/login.css';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    const { history } = props;
    history.push('/foods');
  };

  const regex = /\S+@\S+\.\S+/;
  const minLengthPass = 6;
  return (
    <form className="loginForm">
      <div className="loginContainer">
        <input
          className="inputLogin"
          placeholder="Email"
          data-testid="email-input"
          type="email"
          name="email"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
          id="login_email"
        />

        <input
          className="inputLogin"
          placeholder="Password"
          data-testid="password-input"
          type="password"
          name="password"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
          id="login_password"
        />

        <button
          className="loginBtn"
          type="submit"
          onClick={ submit }
          disabled={ !(password.length > minLengthPass && regex.test(email)) }
          data-testid="login-submit-btn"
        >
          Enter
        </button>
      </div>
    </form>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
