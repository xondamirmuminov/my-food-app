import React, { Component, createContext } from 'react';
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
import Products from './containers/Products';
import AddProduct from './containers/Products/Add';
import UserContext from './context/UserContext';


const initialState = {
  user: {
    email: '',
    fullName: '',
    firstName: '',
    lastName: '',
    userImage: '',
    lang: 'uz'
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

  changeLanguage = lang => this.setState({ user: { ...this.state.user, lang } })

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
    if (true) {
      return (
        <UserContext.Provider value={user}>
          <div className="App">
            <Sidebar
              user={user}
              changeLanguage={this.changeLanguage}
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
                <Route path="/products" exact component={(routeProps) => <Products {...routeProps} lang={user.lang} />} />
                <Route path="/products/new" exact component={() => <AddProduct lang={user.lang} />} />
                <Route path="/login" exact component={Login} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </div>

        </UserContext.Provider>

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
