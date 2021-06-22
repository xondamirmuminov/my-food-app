import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
  const [activeLinkName, setActiveLinkName] = useState('home');
  return (
    <div>
      <h3>Header</h3>
      <ul>
        <li>
          <Link
            to="/"
            onClick={() => setActiveLinkName('home')}
            className={`nav-link ${activeLinkName === 'home' ? 'active' : ''}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            onClick={() => setActiveLinkName('login')}
            className={`nav-link ${activeLinkName === 'login' ? 'active' : ''}`}
          >Login</Link></li>
        <li>
          <Link
            to="/sign-up"
            onClick={() => setActiveLinkName('sign-up')}
            className={`nav-link ${activeLinkName === 'sign-up' ? 'active' : ''}`}
          >Sign-Up</Link></li>
      </ul>
    </div>
  )
}
