import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from "./productSlice";

function ProductList(props) {
  const items = useSelector((state) => state.product.productList);
  
  const dispatch = useDispatch();

  const [product, setProduct] = useState('');

  return (
    <>
      <input
        type='text'
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            
          }
        }}
      />
      <button
        type='button'
        onClick={() => dispatch(addProduct(product))}
      >
        상품 추가
      </button>
      <ul>
        {items.map(item => <li>{item}</li>)}
      </ul>
    </>
  );
}

export default ProductList;