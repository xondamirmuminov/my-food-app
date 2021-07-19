import React, { useState } from 'react';
import Card from './Card.js';
import Banan from '../../assets/fruits/banan.jpg';
import Apple from '../../assets/fruits/apple.jpg';
import Watermelon from '../../assets/fruits/watermelon.jpg';
import Strawberry from '../../assets/fruits/strawberry.jpg';
import RedOrange from '../../assets/fruits/red-orange.jpg';
import Kiwi from '../../assets/fruits/kiwi.jpg';
import Date from '../../assets/fruits/date.jpg';
import BlueBerry from '../../assets/fruits/blue-berry.jpg';
import Pear from '../../assets/fruits/pear.jpg';
import Mango from '../../assets/fruits/mango.jpg';
import PineApple from '../../assets/fruits/pine.jpg';
import { Container } from '../../style/StyleShake';
import Bag from './Bag';

export default function Fruits({ bagHandler, isSelected, setIsSelected }) {
    const [totalValue, setTotalValue] = useState(1);
    const shakeFruit = [
        {
            title: 'Apple',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: Apple,
            cost: 2,
            total: totalValue,
            category: 'fruits',
        },
        {
            title: 'Banana',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: Banan,
            cost: 3,
            total: totalValue,
            category: 'fruits',
        },
        {
            title: 'Blueberry',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: BlueBerry,
            cost: 2,
            total: totalValue,
            category: 'fruits',
        },
        {
            title: 'Blood Orange',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: RedOrange,
            cost: 3,
            total: totalValue,
            category: 'fruits',
        },
        {
            title: 'Date',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: Date,
            cost: 1,
            total: totalValue,
            category: 'fruits',
        },
        {
            title: 'Green Pear',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: Pear,
            cost: 1,
            total: totalValue,
            category: 'fruits',
        },
        {
            title: 'Kiwi',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: Kiwi,
            cost: 2,
            total: totalValue,
            category: 'fruits',
        },
        {
            title: 'Mango',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: Mango,
            cost: 3,
            total: totalValue,
            category: 'fruits',
        },
        {
            title: 'Pineapple',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: PineApple,
            cost: 2,
            total: totalValue,
            category: 'fruits',
        },
        {
            title: 'Strawberry',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: Strawberry,
            cost: 3,
            total: totalValue,
            category: 'fruits',
        },
        {
            title: 'Watermelon',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: Watermelon,
            cost: 3,
            total: totalValue,
            category: 'fruits',
        },
    ]

    if (!localStorage.fruits) {
        localStorage.setItem('fruits', '[]');
    }


    const clickHandler = (data) => {
        bagHandler();
        let parseCost = JSON.parse(localStorage.getItem('totalProduct'));
        let parse = JSON.parse(localStorage.getItem('fruits'));
        if (parse.find(item => item.title === data.title)) {
            let findParse = parse.find(item => item.title === data.title);
            setTotalValue(findParse.total + 1);
        } else {
            parse.push(data);
            localStorage.fruits = JSON.stringify(parse);
            parseCost.push(data.cost);
            localStorage.totalProduct = JSON.stringify(parseCost);
        }
    }


    return (
        <main>
            <section className="home">
                <Container>
                    <div className="home__inner">
                        {
                            shakeFruit.map(item => {
                                return (
                                    <Card
                                        title={item.title}
                                        text={item.text}
                                        id={item.id}
                                        img={item.img}
                                        cost={item.cost}
                                        category={item.category}
                                        clickHandler={() => clickHandler(item)}
                                    />
                                )
                            })
                        }
                    </div>
                </Container>
            </section>
        </main>
    )
}