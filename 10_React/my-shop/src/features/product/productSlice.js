import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectedProduct: null,
};

// 상품 정보를 담을 slice를 만듦
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.productList = action.payload;
    },
    getSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  }
});

export const { getAllProducts, getSelectedProduct } = productSlice.actions;

export const selectProductList = (state) => state.product.productList;
export const selectselectedProduct = (state) => state.product.selectedProduct;

export default productSlice.reducer;