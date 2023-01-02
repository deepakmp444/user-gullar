import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../utils/Constant";

const initialState = {
  buyNowProduct: [],
  orderList: [],
  error: "",
  orderCancel: false,
  addressCreated: false,
};

// ! Get All Orders
export const fetchAllOrder = createAsyncThunk("fetchAllOrder", async () => {
  return await axios
    .get(`${url}/api/v1/orders`)
    .then((res) => res.data.allOrders)
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



// // ! fetchProductById
export const orderCancel = createAsyncThunk("orderCancel", async ({ id }) => {
  return await axios
    .put(`${url}/api/v1/cancelorder/${id}`)
    .then((res) => res.data.status)
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

const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {
    gotoProductBucket: (state, action) => {
      state.buyNowProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    // ! Get searched Product
    builder.addCase(fetchAllOrder.pending, (state) => {
      state.orderList = [];
      state.error = "";
    });

    builder.addCase(fetchAllOrder.fulfilled, (state, action) => {
      state.error = "";
      state.orderList = action.payload;
      console.log("action.payload:", action.payload);
    });
    builder.addCase(fetchAllOrder.rejected, (state, action) => {
      state.error = action.error.message;
      state.orderList = [];
    });

    // ! Order Cancel
    builder.addCase(orderCancel.pending, (state) => {
      state.orderCancel = false;
      state.error = "";
    });

    builder.addCase(orderCancel.fulfilled, (state, action) => {
      state.orderCancel = true;
      state.error = "";
    });
    builder.addCase(orderCancel.rejected, (state, action) => {
      state.orderCancel = false;
      state.error = action.error.message;
    });

   

  },
});

export default orderSlice.reducer;
export const { gotoProductBucket } = orderSlice.actions;
