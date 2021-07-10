import React, { useState, useCallback, useRef } from 'react';
import { nanoid } from 'nanoid';
import Axios from '../../utils/axios';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Add = () => {
  const history = useHistory();
  const imageRef = useRef(null);
  const fileRef = useRef(null);
  const params = useParams();
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: 0,
    salePrice: 0,
    category: '',
    image: '',
    rate: 0,
    oldImageName: ''
  });

  const fetchProducts = async () => {
    try {
      const { data } = await Axios.get(`/products/${params.id}`);
      setValues({ ...data, oldImageName: data.image });
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const categories = [
    {
      name: "Salad",
      _id: nanoid(15)
    },
    {
      name: "Bread",
      _id: nanoid(15)
    },
    {
      name: "Drinks",
      _id: nanoid(15)
    },
  ];

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues(state => ({ ...state, [name]: value }));
  }, []);

  const handleImage = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setValues(state => ({ ...state, image, }));
    imageRef.current.src = image;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('price', +values.price);
    formData.append('salePrice', +values.salePrice);
    formData.append('rate', values.rate);
    if (fileRef.current?.files?.length) {
      formData.append('edit', true);
      formData.append('oldImageName', values.oldImageName);
      formData.append('image', fileRef.current.files[0]);
    }

    Axios.put(`/products/${params.id}`, formData)
      .then(data => {
        history.push('/products');
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <h2>Add Product</h2>
      <img src={values.image} ref={imageRef} alt="" />
      <form action="" onSubmit={handleSubmit}>
        <div className="form__input__wrapperr">
          <label htmlFor="name">Product name</label>
          <input
            type="text"
            className="form__input"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__input__wrapperr">
          <label htmlFor="name">Original Price</label>
          <input
            type="number"
            className="form__input"
            name="price"
            value={values.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__input__wrapperr">
          <label htmlFor="name">Sale Price</label>
          <input
            type="number"
            className="form__input"
            name="salePrice"
            value={values.salePrice}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__input__wrapperr">
          <label htmlFor="name">Category</label>
          <select
            name="category"
            onChange={handleInputChange}
            value={values.category}
            className="form__input"
          >
            {categories.map(item => {
              return (
                <option key={item._id}>{item.name}</option>
              )
            })}
          </select>
        </div>
        <div className="form__input__wrapperr">
          <label htmlFor="name">Image</label>
          <input
            type="file"
            name="image"
            ref={fileRef}
            onChange={handleImage}
          />
        </div>
        <div className="form__input__wrapperr">
          <label htmlFor="name">Rate</label>
          <input onChange={handleInputChange} value={values.rate} type="number" name="rate" />
        </div>
        <div className="form__input__wrapperr">
          <label htmlFor="name">Description</label>
          <textarea
            onChange={handleInputChange}
            name="description"
            value={values.description}
            className="form__input form__textarea"
          />
        </div>
        <button>Update product</button>
      </form>
    </div>
  );
}

export default Add;
