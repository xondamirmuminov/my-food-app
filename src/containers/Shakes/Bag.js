import React, { useState } from 'react';
import { Link, Switch } from 'react-router-dom';
import Shake2 from '../../assets/shake2.png';
import Salad from '../../assets/salad.svg';
import SoftDrink from '../../assets/soft-drink.svg';
import Snack from '../../assets/snack.svg';
import { Container, Flex, Bag2 } from '../../style/StyleShake';
import { FaMinus, FaPlus } from 'react-icons/all';
import Input from '../Input';

function Bag({ }) {
    const [activeLinkName, setActiveLinkName] = useState('order');
    const [activeTextName, setActiveTextName] = useState('l');
    const [costShake, setCostShake] = useState(0);
    let parseProduct = JSON.parse(localStorage.getItem(`${window.location.pathname === '/shakes' ? 'fruits' : window.location.pathname === '/shakes/vegetables' ? 'vegetables' : window.location.pathname === '/salads' ? 'salads' : window.location.pathname === '/snacks' ? 'snacks' : window.location.pathname === '/foods' ? 'foods' : window.location.pathname === '/drinks' ? 'drinks' : ''}`));
    let parseTotal = JSON.parse(localStorage.getItem('totalProduct'));
    let reducer = (cost, total) => cost + total;
    return (
        <Bag2>
            <div className="bag__header">
                <ul className="bag__header-list">
                    <li
                        onClick={() => setActiveLinkName('order')}
                        className={`bag__header-list-item ${activeLinkName === 'order' ? 'active' : ''}`}
                    >This Order</li>
                    <li
                        onClick={() => setActiveLinkName('cart')}
                        className={`bag__header-list-item ${activeLinkName === 'cart' ? 'active' : ''}`}
                    >Cart()</li>
                </ul>
                <div className="bag__inner-size">
                    <img
                        src={
                            window.location.pathname === '/shakes' ? Shake2
                                : window.location.pathname === '/salads' ? Salad
                                    : window.location.pathname === '/soft-drinks' ? SoftDrink
                                        : window.location.pathname === '/snacks' ? Snack
                                            : Shake2
                        }
                        alt="shake"
                    />
                    <p
                        onClick={() => setActiveTextName('xl')}
                        className={`bag__header-size-item ${activeTextName === 'xl' ? 'active-text' : ''}`}
                    >
                        XL
                    </p>
                    <p
                        onClick={() => setActiveTextName('l')}
                        className={`bag__header-size-item ${activeTextName === 'l' ? 'active-text' : ''}`}
                    >
                        L
                    </p>
                    <p
                        onClick={() => setActiveTextName('m')}
                        className={`bag__header-size-item ${activeTextName === 'm' ? 'active-text' : ''}`}
                    >
                        M
                    </p>
                    <p
                        onClick={() => setActiveTextName('s')}
                        className={`bag__header-size-item ${activeTextName === 's' ? 'active-text' : ''}`}
                    >
                        S
                    </p>
                </div>
                <div className="bag__inner-product">
                    <div className="bag__inner-product-header">{parseProduct[0]?.category}</div>
                    <div className="bag__inner-product-body">
                        {parseProduct.map(item => (
                            <div className="bag__inner-product-item">
                                <p>{item?.title}</p>
                                <div>
                                    <Input parse={parseProduct} cost={item?.cost} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bag__inner-total">
                    <h3>Total amount:</h3>
                    <h3 className="bag__total">{parseTotal?.reduce(reducer)}$</h3>
                </div>
            </div>
        </Bag2>
    )
}

export default Bag;