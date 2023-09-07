import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./features/testSlice";
import productReducer from "./features/productSlice";

const store = configureStore({
  reducer: {
    test: testReducer,
    product: productReducer,
  },
});

export default store;
