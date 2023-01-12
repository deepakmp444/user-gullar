import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../utils/Constant";

const initialState = {
  cartList: [],
  cartListError: "",
  cartCreatedMessage: "",
  cartCreatedMessageStatus: false,
  deletedCartStatus: false,
  deletedCartStatusError: "",
};

// !  fetch Cart List
export const fetchCartList = createAsyncThunk("fetchCartList", async () => {
  return await axios
    .get(`${url}/api/v1/cart`)
    .then((res) => res.data.cart)
    .catch((err) => {
      console.log("err", err);
      if (err.response.status === 404) {
        throw Error(err.message);
      }
      if (err.response.status === 500) {
        throw Error(err.message);
      }
      if (err.response.status !== 404) {
        throw Error(err.response.data.message);
      }
    });
});

// ! Delete User Cart
export const deleteUserCart = createAsyncThunk(
  "deleteUserCart",
  async ({ id }) => {
    return await axios
      .delete(`${url}/api/v1/cart/${id}`)
      .then((res) => res.data.satus)
      .catch((err) => {
        console.log("err", err);
        if (err.response.status === 404) {
          throw Error(err.message);
        }
        if (err.response.status === 500) {
          throw Error(err.message);
        }
        if (err.response.status !== 404) {
          throw Error(err.response.data.message);
        }
      });
  }
);

// ! Add Cart
export const addUserCart = createAsyncThunk(
  "addUserCart",
  async ({
    productId,
    productType,
    imgUrl,
    heading,
    subHeading,
    qty,
    price,
    color,
    size,
    mrp,
  }) => {
    return await axios
      .post(`${url}/api/v1/cart`, {
        productId,
        productType,
        imgUrl,
        heading,
        subHeading,
        qty,
        price,
        color,
        size,
        mrp,
      })
      .then((res) => res.data.message)
      .catch((err) => {
        console.log("err", err);
        if (err.response.status === 404) {
          throw Error(err.message);
        }
        if (err.response.status === 500) {
          throw Error(err.message);
        }
        if (err.response.status !== 404) {
          throw Error(err.response.data.message);
        }
      });
  }
);

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    clearCartMessageReducer: (state, action) => {
      state.cartCreatedMessage = "";
      state.cartCreatedMessageStatus = false;
    },
    increaseQtyReducer: (state, action) => {
      console.log("action:", action.payload);
      const updatedData = state.cartList.map((item) => {
        if (item.id === action.payload.id) {
          item.qty += 1;
        }
        return item;
      });
      state.cartList = updatedData;
    },
    decreaseQtyReducer: (state, action) => {
      console.log("action:", action.payload);

      const updatedData = state.cartList.map((item) => {
        if (item.id === action.payload.id) {
          item.qty -= 1;
        }
        return item;
      });
      state.cartList = updatedData;
    },
  },
  extraReducers: (builder) => {
    // ! Fetch Cart
    builder.addCase(fetchCartList.pending, (state) => {
      state.cartListError = "";
      state.cartList = [];
    });
    builder.addCase(fetchCartList.fulfilled, (state, action) => {
      state.cartListError = "";
      state.cartList = action.payload;
    });
    builder.addCase(fetchCartList.rejected, (state, action) => {
      state.cartListError = action.error.message;
      state.cartList = [];
    });

    // ! Add Cart
    builder.addCase(addUserCart.pending, (state) => {
      state.cartCreatedMessage = "";
      state.cartCreatedMessageStatus = false;
    });
    builder.addCase(addUserCart.fulfilled, (state, action) => {
      state.cartCreatedMessage = action.payload;
      state.cartCreatedMessageStatus = true;
    });
    builder.addCase(addUserCart.rejected, (state, action) => {
      state.cartCreatedMessage = "";
      state.cartCreatedMessageStatus = false;
    });

    // ! Delete Cart
    builder.addCase(deleteUserCart.pending, (state) => {
      state.deletedCartStatus = false;
      state.deletedCartStatusError = "";
    });
    builder.addCase(deleteUserCart.fulfilled, (state, action) => {
      state.deletedCartStatus = true;
      state.deletedCartStatusError = "";
    });
    builder.addCase(deleteUserCart.rejected, (state, action) => {
      state.deletedCartStatus = false;
      state.deletedCartStatusError = action.payload;
    });
  },
});

export default cartSlice.reducer;
export const {
  clearCartMessageReducer,
  increaseQtyReducer,
  decreaseQtyReducer,
} = cartSlice.actions;
