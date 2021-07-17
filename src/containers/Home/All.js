import React, { Component } from 'react'
import Card from './Card'
import HotDrinks from '../../assets/home/hot-drink.jpg';
import Salad from '../../assets/home/salad.jpg'
import Sandwich from '../../assets/home/sandwich.jpg'
import Shakes from '../../assets/home/shake.jpg'
import Snacks from '../../assets/home/snacks.jpg'
import SoftDrinks from '../../assets/home/cola.jpg'
import { Link } from 'react-router-dom'
import { Main } from '../../style/StyleAll';


export default class All extends Component {
    render() {
        return (
            <Main>
                <div className="top">
                    <Link >
                        <Card
                            img={HotDrinks}
                            label="Hot Drinks"
                        />
                    </Link>
                    <Link>
                        <Card
                            img={Salad}
                            label="Salads"
                        />
                    </Link>
                    <Link>
                        <Card
                            img={Sandwich}
                            label="Sandwiches"
                        />
                    </Link>
                    <Link to="/shakes">
                        <Card
                            img={Shakes}
                            label="Shakes"
                        />
                    </Link>
                    <Link>
                        <Card
                            img={Snacks}
                            label="Snacks"
                        />
                    </Link>
                    <Link>
                        <Card
                            img={SoftDrinks}
                            label="Soft Drinks"
                        />
                    </Link>
                </div>
            </Main>
        )
    }
}
