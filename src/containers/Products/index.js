import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import ProductItem from './ProductItem';
import Axios from '../../utils/axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../../components/Loader';

export default function Products(props) {
  const { lang } = props;
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await Axios.get('/products');
      setProducts(res.data);
      setLoading(false);
    }
    catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const goToNewProductPage = useCallback(() => {
    history.push('/products/new');
  }, [history]);

  return (
    <div>
      <button onClick={goToNewProductPage}>Add</button>
      <h2>Products page</h2>
      <Loader loading={loading} />
      {
        products.map((item, index) => {
          return (
            <ProductItem
              key={index}
              data={item}
              lang={lang}
              fetchProducts={fetchProducts}
            />
          )
        })
      }
    </div>
  )
}
