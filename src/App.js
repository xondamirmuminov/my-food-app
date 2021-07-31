import React from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import ProtectedRoutes from './containers/Auth/ProtectedRoutes';
import { publicURLs, protectedURLs } from './routes';
import Header from './containers/Sidebar/Header';
import { useSelector } from 'react-redux';

export default function App() {
  const { token, user } = useSelector(state => state.auth || {});
  console.log(token)

  if (token) {
    return (<div className="app">
      <Header />
      <div className='main-content'>
        <Redirect to="/" />
        <Switch>
          {
            protectedURLs.map((item, index) => <ProtectedRoutes key={index} {...item} />)
          }
        </Switch>
      </div>
    </div>)
  }

  return (
    <div className="app">
      <div>
        {
          token && <Redirect exact to="/login" />
        }
        <Switch>
          {
            publicURLs.map((item, index) => <Route key={index} {...item} />)
          }
        </Switch>
      </div>
    </div>
  )
}
