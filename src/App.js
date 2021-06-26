import React, { Component } from 'react';
import Home from './containers/Home';
import Login from './containers/Auth/Login';
import SignUp from './containers/Auth/SignUp';
import Sidebar from './containers/Sidebar';
import PageNotFound from './components/NotFoundPage';
import { Switch, Route } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import keys from './configs/keys';
import { refreshTokenSetup } from './utils';
import Header from './containers/Header';

const initialState = {
  user: {
    email: '',
    fullName: '',
    firstName: '',
    lastName: '',
    userImage: '',
  },
  isLoggedIn: false
}
class App extends Component {
  state = { ...initialState }

  onSuccess = (res) => {
    console.log('Successfull', res);
    const { tokenId, Ys: userProfile } = res;
    const { It: email, Ve: fullName, dS: lastName, hU: firstName, gJ: userImage } = userProfile;

    localStorage.setItem('token', tokenId);
    refreshTokenSetup(res);

    this.setState({
      isLoggedIn: true,
      user: {
        email,
        fullName,
        firstName,
        lastName,
        userImage
      }
    });
  }

  onLogoutSuccess = (res) => {
    console.log(res)
    console.log('Logout success');
    localStorage.removeItem('token');
    this.setState(initialState);
  }

  onFailure = (res) => {
    console.log(res);
    console.log('falid');
    localStorage.removeItem('token');
    this.setState(initialState);
  }

  render() {
    const { isLoggedIn, user } = this.state;
    console.log(user)
    if (isLoggedIn) {
      return (
        <div className="App">
          <Sidebar
            user={user}
            LogOutComponent={<GoogleLogout
              clientId={keys.GOOGLE_LOGIN_CLIENT_ID}
              buttonText="Sign out"
              onLogoutSuccess={this.onLogoutSuccess}
              icon={false}
            // render={() => (
            //   <FaSignOutAlt onClick={} className="sidebar__link-icon" />
            // )}
            >
            </GoogleLogout>}
          />
          <div className="main-content" style={{ paddingLeft: 260 }}>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      );
    };

    return (
      <div className="App">
        <div className="main-content" style={{ paddingLeft: 260 }}>
          <GoogleLogin
            clientId={keys.GOOGLE_LOGIN_CLIENT_ID}
            buttonText="Login"
            onSuccess={this.onSuccess}
            onFailure={this.onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
          <div></div>

          <Switch>
            <Route path="/login" exact component={Login} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
