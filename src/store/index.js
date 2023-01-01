import { configureStore } from "@reduxjs/toolkit";
import addressSlice from "./features/addressSlice";
import orderSlice from "./features/orderSlice";
import productSlice from "./features/productSlice";
import userSlice from "./features/userSlice";
const store = configureStore({
  reducer: {
    product: productSlice,
    user: userSlice,
    order:orderSlice,
    address: addressSlice
  },
});

export default store;
