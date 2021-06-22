import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

export default function Header() {
  return (
    <div>
      <h3>Header</h3>
      <ul>
        <li>
          <NavLink
            to="/"
            exact={true}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/login"
          >Login</NavLink></li>
        <li>
          <NavLink
            exact
            to="/sign-up"
          >Sign-Up</NavLink></li>
      </ul>
    </div>
  )
}
