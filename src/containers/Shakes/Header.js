import React, { useState } from 'react';
import { RiFileChart2Fill } from 'react-icons/ri';
import { Link, NavLink, Switch, Route } from 'react-router-dom';
import { Container } from '../../style/StyleShake';
import { ReactComponent as ProfileImage } from '../../assets/profile.svg';
import { FaBorderAll, GoListUnordered, AiOutlineShopping } from 'react-icons/all';
import './shape.css';
import '../../style/StyleShake';
import Fruits from './Fruits';
import Shakes from './index';

export default function Header({ bagCount }) {
    const [activeLinkName, setActiveLinkName] = useState('card');
    const [activeText, setActiveText] = useState('fruits');
    return (
        <header className="header">
            <Container>
                <nav className="header__inner">
                    <ul className="header__list-all">
                        <li className="header__list-all-item">
                            <Link
                                exact
                                to="/shakes"
                                onClick={() => setActiveLinkName('card')}
                                className={`header__list-all-link ${activeLinkName === 'card' ? 'active' : ''}`}
                            ><FaBorderAll /></Link>
                        </li>
                        <li className="header__list-all-item">
                            <Link
                                to="/shakes/table"
                                onClick={() => setActiveLinkName('table')}
                                className={`header__list-all-link ${activeLinkName === 'table' ? 'active' : ''}`}
                            ><GoListUnordered /></Link>
                        </li>
                    </ul>
                    <ul className="header__list">
                        <li className="header__list-item">
                            <Link
                                to="/shakes"
                                onClick={() => setActiveText('fruits')}
                                className={`header__list-link ${activeText === 'fruits' ? 'active-category' : ''}`}
                            >Fruits</Link>
                        </li>
                        <li className="header__list-item">
                            <Link
                                to="/shakes"
                                onClick={() => setActiveText('vegetables')}
                                className={`header__list-link ${activeText === 'vegetables' ? 'active-category' : ''}`}
                            >Vegetables</Link>
                        </li>
                        <li className="header__list-item">
                            <Link
                                to="/shakes"
                                onClick={() => setActiveText('based')}
                                className={`header__list-link ${activeText === 'based' ? 'active-category' : ''}`}
                            >Based on & Topping</Link>
                        </li>
                    </ul>

                    {/* <div className="header__inner-cart">
                        <button className="header__cart">
                            <AiOutlineShopping/>
                            <span className="cart__product">{bagCount ?? 0}</span>
                        </button>
                    </div> */}
                </nav>
            </Container>
        </header>
    )
}