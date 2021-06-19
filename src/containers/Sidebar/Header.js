import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <h3>Header</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/sign-up">Sign-Up</Link></li>
      </ul>
    </div>
  )
}
