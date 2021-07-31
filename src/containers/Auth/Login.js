import React, { useState, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import imageAnimated from '../../assets/auth/chef-animated.svg';
import { Sign } from '../../style/styleSignUp';
import Axios from '../../utils/axios';
import { signInAction, signUpAction } from '../../redux/actions/auth';
import { BiErrorCircle } from 'react-icons/all';

export default function Login() {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const history = useHistory();

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues(state => ({ ...state, [name]: value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const valueusInput = values;
    Axios.post('/auth/login', valueusInput)
      .then(({ data }) => {
        const { success, token, error, msg } = data;

        if (success) {
          dispatch(signInAction(data));
          history.push("/")
        } else if (!success) {
          console.log(error)
          setMessage(error || msg);
        }
      })
      .catch(err => {
        setMessage(err?.response?.data?.msg)
        console.log(err.message)
      })
  }

  return (
    <Sign className="login">
      <img src={imageAnimated} alt="ice-cream vendor" className="signup__img" />
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <p>Create account?</p>
          <Link to="/sign-up">Sign Up</Link>
        </div>
        <h3>{message !== '' ? <BiErrorCircle /> : null}{message !== '' ? message : null}</h3>
        <input
          value={values.email}
          onChange={handleInputChange}
          type="email"
          name="email"
          required
          placeholder="Email"
        />
        <input
          value={values.password}
          onChange={handleInputChange}
          type="password"
          required
          name="password"
          placeholder="Password"
        />
        <button className="form__btn" type="submit">Login</button>
      </form>
    </Sign>
  )
}
