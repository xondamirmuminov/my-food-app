import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductFooter from './ProductFooter';
import UserContext from '../../context/UserContext';
import { BiEdit, BiTrashAlt } from 'react-icons/all';
import axios from '../../utils/axios';

export default function ProductItem(props) {
  const contextValue = useContext(UserContext);
  const { name, description, salePrice, rate, _id } = props.data;

  const handleDeleteProduct = async () => {
    try {
      const data = await axios.delete(`/products/${_id}`);
      if (data.status >= 200 && data.status < 300) {
        props.fetchProducts();
      }
    }
    catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="product-item">
      <button onClick={handleDeleteProduct}><BiTrashAlt size={22} color="tomato" /></button>
      <Link to={`/products/edit/${_id}`}><BiEdit /></Link>
      <h5>{name}</h5>
      <ProductFooter lang={props.lang} text={description} />
    </div>
  )
}
