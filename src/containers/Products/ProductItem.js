import React, { useContext } from 'react'
import ProductFooter from './ProductFooter';
import UserContext from '../../context/UserContext';

export default function ProductItem(props) {
  const contextValue = useContext(UserContext);

  return (
    <div className="product-item">
      <h5>{props.data.name}</h5>
      <ProductFooter lang={props.lang} text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, veniam voluptates! Architecto quidem veritatis cupiditate." />
    </div>
  )
}
