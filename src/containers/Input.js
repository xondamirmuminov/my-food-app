import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/all';
import { InputInner } from '../style/StyleAll';

export default function Input({ handle, cost, add, remove }) {
    const [product, setProduct] = useState(1);
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

    return (
        <InputInner>
            <button className="bag__inner-product-btn" disabled={!product} onClick={minusValue}><FaMinus /></button>
            <input type="number" value={product} onChange={handleValue} />
            <button className="bag__inner-product-btn" onClick={plusValue}><FaPlus /></button>
        </InputInner>
    )
}