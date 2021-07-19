import React, { useState } from 'react';
import './shape.css';
import { AiFillCheckCircle } from 'react-icons/all';

export default function Card({ title, img, text, cost, clickHandler }) {
    const [isSelected, setIsSelected] = useState(false);
    const addBagHandler = () => {
        setIsSelected(!isSelected);
        clickHandler()
    }
    return (
        <div onClick={addBagHandler} className="home__card">
            <div className={isSelected ? 'home__card-check' : 'home__card-not-check'}>
                <AiFillCheckCircle />
            </div>
            <img className="home__card-img" src={img} />
            <div className="home__card-body">
                <div className="d-flex a-center j-beetwen">
                    <h2 className="home__card-title">{title}</h2>
                    <button className="home__card-cost">{cost}$</button>
                </div>
                <p className="home__card-text">{text}</p>
            </div>
        </div>
    )
}