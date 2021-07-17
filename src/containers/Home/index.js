import React, { useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Carousel from './Carousel';
import { FaCubes, BsFillHeartFill, GiRibbonMedal, AiFillStar, AiFillDatabase } from 'react-icons/all';
import { Main } from '../../style/StyleHome';
import All from './All';
import SwitchSelector from "react-switch-selector";
import { BsSearch } from 'react-icons/all';


export default function Home() {
    const [tabName, setTabName] = useState('all');
    const [lactose, setLactose] = useState('');
    const [vegan, setVegan] = useState('');
    const [gluten, setGluten] = useState('');


    const handleCLick = type => {
        setTabName(type)
    };
    /* console.log(vegan) */

    //REACT SWITCH TOGGLER

    const options = [
        {
            label: 'No',
            value: "no",
            selectedBackgroundColor: "#bc0000",
        },
        {
            label: "Yes",
            value: "yes",
            selectedBackgroundColor: "#ff2c68"
        }
    ];

    const onLactose = (newValue) => {
        setLactose(newValue)
    };

    const onVegan = (newValue) => {
        setVegan(newValue)
    };

    const onGluten = (newValue) => {
        setGluten(newValue)
    };

    console.log(lactose);
    console.log(vegan);
    console.log(gluten);


    const initialSelectedIndex = options.findIndex(({ value }) => value === "");
    return (
        <Main>
            <div className="top">
                <form action="">
                    <button type="submit"><BsSearch /></button>
                    <input type="text" placeholder="Search anything, find everything" />
                </form>
                <div className="top__switch" style={{ width: 100, height: 25 }}>
                    <SwitchSelector
                        onChange={onLactose}
                        options={options}
                        initialSelectedIndex={initialSelectedIndex}
                        backgroundColor={"#ffcfdc"}
                        fontColor={"#f5f6fa"}
                        fontSize={"20px"}
                    />
                    <span className="label">
                        Lactose
                    </span>
                </div>
                <div className="top__switch" style={{ width: 100, height: 25 }}>
                    <SwitchSelector
                        onChange={onVegan}
                        options={options}
                        initialSelectedIndex={initialSelectedIndex}
                        backgroundColor={"#ffcfdc"}
                        fontColor={"#f5f6fa"}
                        fontSize={"20px"}
                    />
                    <span className="label">
                        Vegan
                    </span>
                </div>
                <div className="top__switch" style={{ width: 100, height: 25 }}>
                    <SwitchSelector
                        onChange={onGluten}
                        options={options}
                        initialSelectedIndex={initialSelectedIndex}
                        backgroundColor={"#ffcfdc"}
                        fontColor={"#f5f6fa"}
                        fontSize={"20px"}
                    />
                    <span className="label">
                        Gluten Free
                    </span>
                </div>
            </div>

            <Carousel />
            <div className="tab">
                <ul className="tab__list">
                    <li className={`tab__list-item ${tabName === 'all' ? 'active' : ''}`}
                        onClick={() => handleCLick('all')}
                    >
                        <span className="icons">
                            <FaCubes />
                        </span>
                        All categories
                    </li>
                    <li className="tab__list-item"
                        onClick={() => handleCLick('pop')}
                    >
                        <span className="icons">
                            <BsFillHeartFill />
                        </span>
                        Popular
                    </li>
                    <li className="tab__list-item"
                        onClick={() => handleCLick('best')}
                    >
                        <span className="icons">
                            <GiRibbonMedal />
                        </span>
                        Best Sellers
                    </li>
                    <li className="tab__list-item"
                        onClick={() => handleCLick('fav')}
                    >
                        <span className="icons">
                            <AiFillStar />
                        </span>
                        Favorites
                    </li>
                    <li className="tab__list-item"
                        onClick={() => handleCLick('last')}
                    >
                        <span className="icons">
                            <AiFillDatabase />
                        </span>
                        Last orders
                    </li>
                </ul>
            </div>
            {
                tabName === 'all' ?
                    <All />
                    :
                    null
            }

        </Main>
    )
}