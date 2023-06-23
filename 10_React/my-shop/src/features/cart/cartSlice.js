import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [
    // {
    //   id: '1',
    //   title: 'Arc 11 Pro',
    //   price: 299000,
    //   count: 2
    // },
    // {
    //   id: '3',
    //   title: 'Aerus Z',
    //   price: 199000,
    //   count: 1
    // },
  ]
};

// 장바구니 정보를 담을 slice 만들기
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Quiz: 상품의 id값을 받아와서 해당 상품의 장바구니 수량을 1씩 증가/감소
    increaseCount: (state, action) => {
      const targetItem = state.cartList.find((cart) => cart.id === action.payload);
      targetItem.count += 1;
    },
    decreaseCount: (state, { payload: id }) => { // action 대신 구조분해할당으로 별칭(id)을 지어 사용해보기
      const targetItem = state.cartList.find((cart) => cart.id === id);
      targetItem.count -= 1;
    },
    // initialState와 동일한 형태의 객체를 넘겨주면 장바구니에 아이템을 추가하는 리듀서 만들기
    // 이미 들어있는 상품이면 수량만 증가
    // 장바구니에 없는 상품이면 새롭게 추가
    addItemToCart: (state, { payload: item }) => {
      // item = { id, title, price, count }; 를 받아옴
      // console.log(item);
      const targetItem = state.cartList.find((cart) => cart.id === item.id);
      if (targetItem) {
        targetItem.count += item.count;
      } else {
        state.cartList.push(item);
      }
    },
    // 장바구니에서 삭제
    removeItemFromCart: (state, { payload: id }) => {
      // console.log(item);
      const targetItemIndex = state.cartList.findIndex((cart) => cart.id === id);
      state.cartList.splice(targetItemIndex, 1);

      // filter() 사용 시
      // const newCartList = state.cartList.filter((cart) => cart.id !== id);
      // state.cartList = newCartList;
    },
  }
});

export const { increaseCount, decreaseCount, addItemToCart, removeItemFromCart } = cartSlice.actions;

export const selectCartList = (state) => state.cart.cartList;

export default cartSlice.reducer;