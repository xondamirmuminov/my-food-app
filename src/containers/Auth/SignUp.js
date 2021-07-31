import React, { useState, useCallback, useRef } from 'react';
import Axios from '../../utils/axios';
import { Sign } from '../../style/styleSignUp';
import { useHistory } from 'react-router-dom';
import imageIceCream from '../../assets/auth/ice-cream.svg';
import imageAnimated from '../../assets/auth/chef-animated.svg';
import { useDispatch } from 'react-redux';
import { signInAction, signUpAction } from '../../redux/actions/auth';
import { BiErrorCircle } from 'react-icons/all';

export default function SignUp() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  });

  const history = useHistory();

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues(state => ({ ...state, [name]: value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const valueusInput = values;
    Axios.post('/auth/sign-up', valueusInput)
      .then(({ data }) => {
        const { success, token, error, msg } = data;

        if (success) {
          dispatch(signUpAction(data));
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
    <Sign>
      <img src={imageIceCream} alt="ice-cream vendor" className="signup__img" />
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <h3>{message !== '' ? <BiErrorCircle /> : null}{message !== '' ? message : null}</h3>
        <input
          value={values.firstName}
          onChange={handleInputChange}
          type="text"
          name="firstName"
          required
          placeholder="First Name"
        />
        <input
          value={values.lastName}
          onChange={handleInputChange}
          type="text"
          name="lastName"
          required
          placeholder="Last Name"
        />
        <input
          value={values.phone}
          onChange={handleInputChange}
          type="number"
          name="phone"
          required
          placeholder="Phone number"
        />
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
          name="password"
          required
          placeholder="Password"
        />
        <button className="form__btn" type="submit">Sign Up</button>
      </form>
    </Sign>
  )
}