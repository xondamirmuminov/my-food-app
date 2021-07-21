import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Flex } from '../../style/StyleShake';
import './shape.css';
import '../../style/StyleShake';
import Fruits from './Fruits';
import FruitsTable from './FruitsTable';
import Header from './Header';
import Bag from './Bag';

function Shakes() {
    return (
        <BrowserRouter>
            <div className="shakes">
                <Flex>
                    <div>
                        <Header />
                        {/* <Switch>
                            <Route path="/shakes" exact>
                                <Fruits />
                            </Route>
                            <Route path="/shakes/table">
                                <FruitsTable />
                            </Route>
                        </Switch> */}
                    </div>
                    <section className="bag">
                        <div className="bag__inner">
                            <Bag />
                        </div>
                    </section>
                </Flex>
            </div>
        </BrowserRouter>
    )
}

export default Shakes;