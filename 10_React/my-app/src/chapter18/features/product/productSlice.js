import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: []
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, { payload: product }) => { // 두번째 매개변수 action 대신에 구조분해 할당을 하여 별칭을 짓고 별칭 사용
      // state.productList.push(action.payload);
      state.productList.push(product);
    }
  }
});
// console.log(productSlice);

export const { addProduct } = productSlice.actions;

// 여러 곳에서 필요한 경우 Slice에서 export 한 후 필요한 곳에서 import 하여 사용하면 됨
// export const selectProductList = (state) => state.product.productList;

export default productSlice.reducer;