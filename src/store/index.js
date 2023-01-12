import { configureStore } from "@reduxjs/toolkit";
import addressSlice from "./features/addressSlice";
import cartSlice from "./features/cartSlice";
import orderSlice from "./features/orderSlice";
import productSlice from "./features/productSlice";
import reviewSlice from "./features/reviewSlice";
import userSlice from "./features/userSlice";
import wishlistSlice from "./features/wishlistSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    user: userSlice,
    order: orderSlice,
    address: addressSlice,
    review: reviewSlice,
    wishlist: wishlistSlice,
    cartList: cartSlice,
  },
});

export default store;
