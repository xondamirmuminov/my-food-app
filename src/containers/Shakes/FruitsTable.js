import React, { useState } from 'react';
import Table from './Table.js';
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


export default function FruitsTable({ bagHandler }) {
    const shakeFruit = [
        {
            title: 'Apple',
            img: Apple,
            cost: '2$',
        },
        {
            title: 'Banana',
            img: Banan,
            cost: '3$',
        },
        {
            title: 'Blueberry',
            img: BlueBerry,
            cost: '2$',
        },
        {
            title: 'Blood Orange',
            img: RedOrange,
            cost: '3$',
        },
        {
            title: 'Date',
            img: Date,
            cost: '1$',
        },
        {
            title: 'Green Pear',
            img: Pear,
            cost: '1$',
        },
        {
            title: 'Kiwi',
            img: Kiwi,
            cost: '2$',
        },
        {
            title: 'Mango',
            img: Mango,
            cost: '3$',
        },
        {
            title: 'Pineapple',
            img: PineApple,
            cost: '2$',
        },
        {
            title: 'Strawberry',
            img: Strawberry,
            cost: '3$',
        },
        {
            title: 'Watermelon',
            img: Watermelon,
            cost: '3$',
        },
    ]
    const clickHandler = (data) => {
        bagHandler()
    }
    return (
        <section className="home">
            <Container>
                <table className="home__table">
                    <thead className="home__table-head">
                        <tr>
                            <th></th>
                            <th>Shake</th>
                            <th>Shake price</th>
                            <th>Sell</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            shakeFruit.map(item => {
                                return (
                                    <Table
                                        title={item.title}
                                        img={item.img}
                                        cost={item.cost}
                                        clickHandler={() => clickHandler(item)}
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
            </Container>
        </section>
    )
}