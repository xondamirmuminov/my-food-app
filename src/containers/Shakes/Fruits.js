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
import axios from '../../utils/axios';
import Loader from '../../components/Loader';

export default function Fruits({ bagHandler }) {
    const [totalValue, setTotalValue] = useState(1);
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const [totalShake, setTotalShake] = useState(JSON.parse(localStorage.getItem('total')))
    // const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) ?? []);

    if (!localStorage.fruits) {
        localStorage.setItem('fruits', '[]');
    }

    // useEffect(() => {
    //     localStorage.setItem('cart', cart);
    // }, [cart])

    const clickHandler = data => {
        bagHandler();
        // Savatchg mahsulotni qo'shish
        // let cartItem = { ...product, amount: 1 }
        // setCart([...cart, cartItem]);

        let parseCost = JSON.parse(localStorage.getItem('totalProduct'));
        let parse = JSON.parse(localStorage.getItem('fruits'));
        if (parse.find(item => item._id === data._id)) {
            let findParse = parse.find(item => item._id === data._id);
            setTotalValue(findParse.total + 1);
        } else {
            parse.push(data);
            localStorage.fruits = JSON.stringify(parse);
            parseCost.push(data.salePrice);
            localStorage.totalProduct = JSON.stringify(parseCost);
            let parseTotal = JSON.parse(localStorage.total) + data.salePrice;
            localStorage.setItem('total', parseTotal)
            setTotalShake(parseTotal)
        }
    }

    const getBook = async () => {
        setLoading(true)
        try {
            const res = await axios.get('/products/');
            setProduct(res.data)
            setLoading(false)
        }
        catch (error) {
            console.log(error, 'salom tentak')
            setLoading(false)
        }
    }

    useEffect(() => {
        getBook()
    }, [])

    return (
        <main>
            <Loader loading={loading} />
            <section className="home">
                <Container>
                    <div className="home__inner">
                        {
                            product.map(item => {
                                return (
                                    <Card
                                        title={item.name}
                                        text={item.description === '' ? 'Lorem ipsum dolor, sit amet consectetur adipisicing' : item.description}
                                        id={item._id}
                                        key={item._id}
                                        img={item.image}
                                        cost={item.salePrice}
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