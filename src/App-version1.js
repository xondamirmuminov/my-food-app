import React from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import Login from './containers/Auth/Login'
import SignUp from './containers/Auth/SignUp'
import Home from './containers/Home';

export default function App(props) {
  const token = "";

  if (token) {
    return (
      <div>
        <Switch>
          {
            protectedURLs.map((item, index) => <ProtectedRoutes key={index} {...item} />)
          }
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    )
  }

  return (
    <div>
      <Link to="/sign-up">Sign Up</Link>
      <Redirect to="/login" />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
    </div>
  )
}
