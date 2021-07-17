import React from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import ProtectedRoutes from './containers/Auth/ProtectedRoutes';
import { publicURLs, protectedURLs } from './routes';

export default function App() {
  const token = localStorage.getItem('token');
  return (
    <div>
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
  )
}
