import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from "./productSlice";

function ProductList(props) {
  const items = useSelector((state) => state.product.productList);
  
  const dispatch = useDispatch();

  const [product, setProduct] = useState('');

  const handleAddProduct = () => {
    dispatch(addProduct(product));
    setProduct('');
  };

  return (
    <>
    <p>
      상품 추가: 
      <input
        type='text'
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            handleAddProduct();
          }
        }}
      />
      <button
        type='button'
        onClick={handleAddProduct}
      >
        추가
      </button>
    </p>
    <p>
      상품 목록
      <ul>
        {items.map(item => <li>{item}</li>)}
      </ul>
    </p>
    </>
  );
}

export default ProductList;