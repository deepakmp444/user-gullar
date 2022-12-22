import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice";
import userSlice from "./features/userSlice";
const store = configureStore({
  reducer: {
    product: productSlice,
    user: userSlice,
  },
});

export default store;
