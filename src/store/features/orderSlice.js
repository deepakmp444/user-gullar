import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../utils/Constant";

const initialState = {
  buyNowProduct: [],
  orderList: [],
  error: "",
};

// ! Get All Orders
export const fetchAllOrder = createAsyncThunk(
  "fetchAllOrder",
  async (search) => {
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
  }
);

// // ! Get ProductList
// export const fetchProductList = createAsyncThunk(
//   "fetchProductList",
//   async (search) => {
//     return await axios
//       .get(`${url}/api/v1/product/type/${search}`)
//       .then((res) => res.data.result)
//       .catch((err) => {
//         console.log("err", err);
//         if (err.response.status === 404) {
//           throw Error(err.message);
//         }
//         if (err.response.status === 500) {
//           throw Error(err.message);
//         }
//         if (err.response.status !== 404) {
//           throw Error(err.response.data.message);
//         }
//       });
//   }
// );

// // ! fetchProductById
// export const fetchProductById = createAsyncThunk(
//   "fetchProductById",
//   async (id) => {
//     return await axios
//       .get(`${url}/api/v1/product/${id}`)
//       .then((res) => res.data.product)
//       .catch((err) => {
//         console.log("err", err);
//         if (err.response.status === 404) {
//           throw Error(err.message);
//         }
//         if (err.response.status === 500) {
//           throw Error(err.message);
//         }
//         if (err.response.status !== 404) {
//           throw Error(err.response.data.message);
//         }
//       });
//   }
// );

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

    //     // ! Get All Product
    //     builder.addCase(fetchProductList.pending, (state) => {
    //       state.productLoading = true;
    //       state.productList = [];
    //       state.error = "";
    //     });

    //     builder.addCase(fetchProductList.fulfilled, (state, action) => {
    //       state.productLoading = false;
    //       state.error = "";
    //       state.productList = action.payload;
    //     });
    //     builder.addCase(fetchProductList.rejected, (state, action) => {
    //       state.productLoading = true;
    //       state.error = action.error.message;
    //       state.productList = [];
    //     });

    //     // ! Single Product
    //     builder.addCase(fetchProductById.pending, (state) => {
    //       state.productLoading = true;
    //       state.singleProduct = {};
    //       state.error = "";
    //     });

    //     builder.addCase(fetchProductById.fulfilled, (state, action) => {
    //       state.productLoading = false;
    //       state.error = "";
    //       state.singleProduct = action.payload;
    //     });
    //     builder.addCase(fetchProductById.rejected, (state, action) => {
    //       state.productLoading = true;
    //       state.error = action.error.message;
    //       state.singleProduct = {};
    //     });
  },
});

export default orderSlice.reducer;
export const { gotoProductBucket } = orderSlice.actions;
