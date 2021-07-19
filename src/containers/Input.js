import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/all';
import { InputInner } from '../style/StyleAll';

export default function Input({ handle, cost }) {
    const [product, setProduct] = useState(1);
    if (!localStorage.totalProduct) {
        localStorage.setItem('totalProduct', '[]')
    }
    const parseCost = JSON.parse(localStorage.getItem('totalProduct'));

    const handleValue = (e) => {
        setProduct(e.target.value);
    }

    const plusValue = () => {
        setProduct(product + 1)
        parseCost.push(cost);
        localStorage.totalProduct = JSON.stringify(parseCost)
    }
    const minusValue = () => {
        setProduct(product - 1)
    }

    return (
        <InputInner>
            <button className="bag__inner-product-btn" disabled={!product} onClick={minusValue}><FaMinus /></button>
            <input type="number" value={product} onChange={handleValue} />
            <button className="bag__inner-product-btn" onClick={plusValue}><FaPlus /></button>
        </InputInner>
    )
}