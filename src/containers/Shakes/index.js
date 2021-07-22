import React, { useState, useEffect } from 'react';
import { Link, NavLink, Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container, Flex } from '../../style/StyleShake';
import './shape.css';
import '../../style/StyleShake';
import Fruits from './Fruits';
import FruitsTable from './FruitsTable';
import Header from './Header';
import Bag from './Bag';
import MyContext from './context';

function Shakes() {
    const check = JSON.parse(localStorage.getItem('product'))
    const [bagCount, setBagCount] = useState(check ?? 0);
    const handler = () => {
        localStorage.setItem('product', bagCount + 1);
        setBagCount(bagCount + 1)
    }
    return (
        <>
            <React.StrictMode>
                <BrowserRouter>
                    <div className="shakes">
                        <Flex>
                            <div>
                                <Header bagCount={bagCount} />
                                <Switch>
                                    <Route path="/shakes"
                                        exact component={() =>
                                            <Fruits
                                                bagHandler={() => handler()}
                                            />}
                                    />

                                    <Route
                                        path="/shakes/table"
                                        component={() =>
                                            <FruitsTable
                                                bagHandler={() => handler()}
                                            />} />
                                </Switch>
                            </div>
                            <section className="bag">
                                <div className="bag__inner">
                                    <Bag />
                                </div>
                            </section>
                        </Flex>
                    </div>
                </BrowserRouter>
            </React.StrictMode>
        </>
    )
}

export default Shakes;