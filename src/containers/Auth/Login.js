import React, { Component } from 'react';
import imageIceCream from '../../assets/auth/ice-cream.svg';
import imageAnimated from '../../assets/auth/chef-animated.svg';
import { StyledLogin } from '../../style/auth';

export default class Login extends Component {
  render() {
    return (
      <StyledLogin className="login">
        <div className="login__left">
          <img src="" alt="" className="logo" />
          <div className="slider">
            <img src={imageAnimated} alt="POS" className="slider-image" />
          </div>
          <h3>Sell and never get it back!</h3>
        </div>
        <div className="login__right">
          <h3 className="login__title">Welcome back</h3>
          <div className="login__sub-title">Please, sign in to continue</div>
          <form action="#" className="login__form">
            <div className="login__form-wrapper">
              <input type="text" name="login" placeholder="Login" />
            </div>
            <div className="login__form-wrapper">
              <input type="password" name="password" placeholder="Password" />
            </div>
            <button className="main-btn">Sign In</button>
          </form>
          <div className="login__copy-right">
            &copy; 2020 - Alicode academy
          </div>
        </div>
      </StyledLogin>
    )
  }
}
