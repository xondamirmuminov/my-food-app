import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import ProductItem from './ProductItem';


const products = [
  { name: 'Coca Cola' },
  { name: 'Fanta' },
  { name: 'Pepsi' },
  { name: 'Sprite' },
];

export default function Products(props) {
  const { lang } = props;
  const history = useHistory();
  console.log(props);

  const goToNewProductPage = useCallback(() => {
    history.push('/products/new');
  }, [history]);

  return (
    <div>
      <button onClick={goToNewProductPage}>Add</button>
      <h2>Products page</h2>
      {
        products.map((item, index) => {
          return (
            <ProductItem data={item} lang={lang} key={index} />
          )
        })
      }
    </div>
  )
}
