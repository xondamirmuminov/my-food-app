import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
// import keys from '../../configs/keys';
import { refreshTokenSetup } from '../../utils';
export default class SignUpGoogle extends Component {

  onSuccess = (res) => {
    console.log('Successfull');
    const { tokenId } = res;
    localStorage.setItem('token', tokenId)
    refreshTokenSetup(res);
  }

  onLogoutSuccess = (res) => {
    console.log(res)
    console.log('Logout success');
    localStorage.removeItem('token');
  }

  onFailure = (res) => {
    console.log(res);
    console.log('falid');
    localStorage.removeItem('token');
  }

  render() {
    return (
      <div>
        <h2>Sign Up page</h2>
        <GoogleLogin
          // clientId={keys.GOOGLE_LOGIN_CLIENT_ID}
          buttonText="Login"
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
        <div></div>
        <GoogleLogout
          // clientId={keys.GOOGLE_LOGIN_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={this.onLogoutSuccess}
        >
        </GoogleLogout>
      </div>
    )
  }
}
