import React from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import ProtectedRoutes from './containers/Auth/ProtectedRoutes';
import { publicURLs, protectedURLs } from './routes';
import Header from './containers/Sidebar/Header';

export default function App() {
  const token = localStorage.token;
  return (
    <div className="app">
      {token ? <Header /> : ''}
      <div className={token ? 'main-content' : ''}>
        {
          token && <Redirect exact from={['/login', '/sign-up']} to="/" />
        }
        <Switch>
          {
            publicURLs.map((item, index) => <Route key={index} {...item} />)
          }
          {
            protectedURLs.map((item, index) => <ProtectedRoutes key={index} {...item} />)
          }
        </Switch>
      </div>
    </div>
  )
}
