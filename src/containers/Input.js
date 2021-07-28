import React, { useState, useEffect } from 'react';
import { FaMinus, FaPlus } from 'react-icons/all';
import { InputInner } from '../style/StyleAll';

export default function Input({ handle, cost, add, remove, name, id }) {
    let amount = JSON.parse(localStorage.getItem(id))
    const [product, setProduct] = useState(amount ?? 1);
    const parseCost = JSON.parse(localStorage.getItem('totalProduct'));



    const handleValue = (e) => {
        setProduct(e.target.value);
    }

    const plusValue = () => {
        setProduct(product + 1)
        parseCost.push(cost);
        localStorage.totalProduct = JSON.stringify(parseCost)
        add(cost);
    }
    const minusValue = () => {
        setProduct(product - 1)
        remove(cost);
    }
    useEffect(() => {
        setProduct(amount)
    }, [])

    useEffect(() => {
        localStorage.setItem(id, JSON.stringify(product));
    }, [product])


    useEffect(() => {
        if (amount == 0) {
            console.log(amount)
            let parseFruits = JSON.parse(localStorage.getItem('fruits'));
            let findId = parseFruits.find(item => item._id == id.toString());
            let filterParse = parseFruits.filter(item => item !== findId);
            localStorage.setItem('fruits', JSON.stringify(filterParse));
        }
    }, [])

    return (
        <InputInner>
            <button className="bag__inner-product-btn" disabled={!product} onClick={minusValue}><FaMinus /></button>
            <input type="number" value={product} onChange={handleValue} />
            <button className="bag__inner-product-btn" onClick={plusValue}><FaPlus /></button>
        </InputInner>
    )
}