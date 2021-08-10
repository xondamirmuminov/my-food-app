import React, { useState, useEffect } from 'react';
import { FaMinus, FaPlus } from 'react-icons/all';
import { InputInner } from '../style/StyleAll';
import { useSelector, useDispatch } from 'react-redux';
import { productAction } from '../redux/actions/auth';

export default function Input({ handle, cost, add, remove, name, id }) {
    const reduxProduct = useSelector((state) => state.auth.product);
    const dispatch = useDispatch();
    let findProduct = reduxProduct.find(item => item._id == id);
    const [product, setProduct] = useState(findProduct.amount ?? 1);

    const handleValue = (e) => {
        setProduct(e.target.value);
    };

    const plusValue = () => {
        setProduct(product + 1)
        add(cost);
        dispatch(productAction(findProduct, product))
    };
    const minusValue = () => {
        setProduct(product - 1)
        remove(cost);
        dispatch(productAction(findProduct, product))
    };

    useEffect(() => {
        setProduct(findProduct.amount)
    }, []);


    return (
        <InputInner>
            <button className="bag__inner-product-btn" disabled={!product} onClick={minusValue}><FaMinus /></button>
            <input type="number" value={product} onChange={handleValue} />
            <button className="bag__inner-product-btn" onClick={plusValue}><FaPlus /></button>
        </InputInner>
    )
}