import React, { useEffect, useState } from 'react';
import './shape.css';
import { AiFillCheckCircle, AiFillStar } from 'react-icons/all';

export default function Card({ title, img, text, cost, rate, clickHandler }) {
    const [isSelected, setIsSelected] = useState(false);
    const [star, setStar] = useState(0);
    const addBagHandler = () => {
        setIsSelected(!isSelected);
        clickHandler()
    }
    let obj = {
        1: 'oneStar',
        2: 'twoStar',
        3: 'threeStar',
        4: 'fourStar',
        5: 'fiveStar',
    }
    const handleRate = e => {
        setStar(e)
        localStorage.setItem('star', JSON.stringify(e))
    }

    useEffect(() => {
        handleRate(obj[rate])
    }, [star])

    console.log(star)

    return (
        <div onClick={addBagHandler} className="home__card">
            <div className={isSelected ? 'home__card-check' : 'home__card-not-check'}>
                <AiFillCheckCircle />
            </div>
            <img className="home__card-img" src={img} />
            <div className={`home__card-rate-inner ${star}`}>
                <span className="home__card-rate"><AiFillStar /></span>
                <span className="home__card-rate"><AiFillStar /></span>
                <span className="home__card-rate"><AiFillStar /></span>
                <span className="home__card-rate"><AiFillStar /></span>
                <span className="home__card-rate"><AiFillStar /></span>
            </div>
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