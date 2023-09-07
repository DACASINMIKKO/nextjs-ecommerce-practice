import { createSlice } from "@reduxjs/toolkit";

const initialState = [{}];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      return action.payload;
    },
    filterByPrice: (state, action) => {
      const { data, min, max } = action.payload;
      const filteredProductsByPrice = data.filter((product) => {
        return product.price >= min && product.price <= max;
      });
      return filteredProductsByPrice;
    },
  },
});

export const { getProducts, filterByPrice } = productSlice.actions;
export default productSlice.reducer;
