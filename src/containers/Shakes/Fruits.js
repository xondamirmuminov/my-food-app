import React, { useState, useEffect } from 'react';
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

export default function Fruits() {
    // const [totalValue, setTotalValue] = useState(1);
    // const [totalShake, setTotalShake] = useState(JSON.parse(localStorage.getItem('total')))
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) ?? []);
    const shakeFruit = [
        {
            id: 1,
            title: 'Apple',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: Apple,
            cost: 2,
            category: 'fruits',
        },
        {
            id: 2,
            title: 'Banana',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: Banan,
            cost: 3,
            category: 'fruits',
        },
        {
            id: 3,
            title: 'Blueberry',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: BlueBerry,
            cost: 2,
            category: 'fruits',
        },
        {
            id: 4,
            title: 'Blood Orange',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: RedOrange,
            cost: 3,
            category: 'fruits',
        },
        {
            id: 5,
            title: 'Date',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: Date,
            cost: 1,
            category: 'fruits',
        },
        {
            id: 6,
            title: 'Green Pear',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: Pear,
            cost: 1,
            category: 'fruits',
        },
        {
            id: 7,
            title: 'Kiwi',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: Kiwi,
            cost: 2,
            category: 'fruits',
        },
        {
            id: 8,
            title: 'Mango',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: Mango,
            cost: 3,
            category: 'fruits',
        },
        {
            id: 9,
            title: 'Pineapple',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: PineApple,
            cost: 2,
            category: 'fruits',
        },
        {
            id: 10,
            title: 'Strawberry',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: Strawberry,
            cost: 3,
            category: 'fruits',
        },
        {
            id: 11,
            title: 'Watermelon',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            img: Watermelon,
            cost: 3,
            category: 'fruits',
        },
    ]

    // if (!localStorage.cart) {
    //     localStorage.setItem('cart', '[]');
    // }

    useEffect(() => {
        localStorage.setItem('cart', cart);
    }, [cart])

    const clickHandler = product => {
        // bagHandler();
        // Savatchg mahsulotni qo'shish
        let cartItem = { ...product, amount: 1 }
        setCart([...cart, cartItem]);

        // let = shakeFruit.find(item => item.title === data.title);
        // let parseCost = JSON.parse(localStorage.getItem('totalProduct'));
        // let parse = JSON.parse(localStorage.getItem('fruits'));
        // if (parse.find(item => item.title === data.title)) {
        //         let findParse = parse.find(item => item.title === data.title);
        //         setTotalValue(findParse.total + 1);
        // } else {
        //     parse.push(data);
        //     localStorage.fruits = JSON.stringify(parse);
        //     parseCost.push(data.cost);
        //     localStorage.totalProduct = JSON.stringify(parseCost);
        //     let parseTotal = JSON.parse(localStorage.total) + data.cost;
        //     localStorage.setItem('total', parseTotal)
        //     setTotalShake(parseTotal)
        // }
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
                                        key={item.id}
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