import React, { useState, useCallback, useRef } from 'react';
import Axios from '../../utils/axios';
import { Sign } from '../../style/styleSignUp';
import { useHistory } from 'react-router-dom';
import imageIceCream from '../../assets/auth/ice-cream.svg';
import imageAnimated from '../../assets/auth/chef-animated.svg';

export default function SignUp() {
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
            .then(data => {
                const { success, token } = data.data;
                if (success) {
                    alert('Your are logged in successfully')
                    localStorage.setItem('token', token)
                    history.push("/")
                }
                else {
                    alert('Error')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Sign>
            <img src={imageIceCream} alt="ice-cream vendor" className="signup__img" />
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <input
                    value={values.firstName}
                    onChange={handleInputChange}
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                />
                <input
                    value={values.lastName}
                    onChange={handleInputChange}
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                />
                <input
                    value={values.phone}
                    onChange={handleInputChange}
                    type="number"
                    name="phone"
                    placeholder="Phone number"
                />
                <input
                    value={values.email}
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <input
                    value={values.password}
                    onChange={handleInputChange}
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <button className="form__btn" type="submit">Sign Up</button>
            </form>
        </Sign>
    )
}