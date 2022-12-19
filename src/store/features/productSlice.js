import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../utils/Constant";
const initialState = {
  product: [],
  productLoading: true,
  error: "",
  singleProduct: {},
  updated: false,
  deleted: false,
};

// ! Get All Product
export const fetchProduct = createAsyncThunk("fetchProduct", async (search) => {
  return await axios
    .get(`${url}/api/v1/product/?product=${search}`)
    .then((res) => res.data.result)
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

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    closeUpdateToggle: (state, action) => {
      state.updated = false;
    },
  },
  extraReducers: (builder) => {
    // ! Get All Product
    builder.addCase(fetchProduct.pending, (state) => {
      state.productLoading = true;
      state.product = [];
      state.error = "";
    });

    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.productLoading = false;
      state.error = "";
      state.product = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.productLoading = true;
      state.error = action.error.message;
      state.product = [];
    });
  },
});

export default productSlice.reducer;
// export const { closeUpdateToggle } = SubCategorySlice.actions;
