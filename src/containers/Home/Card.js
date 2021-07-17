import React from 'react';


export default function Card(props) {

    return (
        <div className="card">
            <img src={props.img} alt="" />
            <h3 className="label">{props.label}</h3>
        </div>
    )
}
