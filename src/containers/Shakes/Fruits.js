import React, { useState, useEffect } from 'react';
import Card from './Card.js';
import PineApple from '../../assets/fruits/pine.jpg';
import { Container } from '../../style/StyleShake';
import axios from '../../utils/axios';
import Loader from '../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../../redux/actions/auth';

export default function Fruits({ bagHandler }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const product = useSelector((state) => state.product);

    const clickHandler = data => {
        bagHandler();

        if (product.find(item => item?._id === data?._id)) {
            let findProduct = product.find(item => item?._id === data?._id);
            dispatch(productAction(findProduct?.amount + 1))
        } else {
            dispatch(productAction(data))
        }
    }

    const getProduct = async () => {
        setLoading(true)
        try {
            const res = await axios.get('/products/');
            console.log(res)
            setLoading(false)
            setProducts(res.data)
        }
        catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <main>
            <Loader loading={loading} />
            <section className="home">
                <Container>
                    <div className="home__inner">
                        {
                            products.map(item => {
                                return (
                                    <Card
                                        title={item.name}
                                        text={item.description === '' ? 'Lorem ipsum dolor, sit amet consectetur adipisicing' : item.description}
                                        id={item._id}
                                        key={item._id}
                                        img={item.image}
                                        rate={item.rate}
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