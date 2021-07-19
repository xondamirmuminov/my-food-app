import React, { useState, useEffect } from 'react';
import { AiOutlineShopping, AiFillCheckCircle } from 'react-icons/all';
import './shape.css';

export default function Table({ img, title, cost }) {
    const [isSelected, setIsSelected] = useState(false);
    const addBagHandler = () => {
        setIsSelected(!isSelected);
    }
    return (
        <tr className="shakes__tr">
            <td className="shakes__td-img">
                {
                    isSelected ?
                        <div>
                            <AiFillCheckCircle />
                        </div>
                        :
                        null
                }

                <img src={img} alt="" />
            </td>
            <td className="shakes__td">
                {title}
            </td>
            <td className="shakes__td">
                {cost}
            </td>
            <td className="shakes__td">
                <button className="shakes__td-btn" onClick={addBagHandler}>Add to card <AiOutlineShopping /></button>
            </td>
        </tr>
    )
}