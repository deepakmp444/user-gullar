import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../utils/Constant";
const initialState = {
  address: [],
  addressLoading: true,
  orderAddress: {},
  error: "",
};

// ! Get Address
export const fetchAddress = createAsyncThunk("fetchAddress", async () => {
  return await axios
    .get(`${url}/api/v1/address`)
    .then((res) => res.data.address)
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

// ! Add Address
export const addAdress = createAsyncThunk("addAdress", async ({ address }) => {
  return await axios
    .post(`${url}/api/v1/address`, {})
    .then((res) => res.data.address)
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

const addressSlice = createSlice({
  name: "addressSlice",
  initialState,
  reducers: {
    orderAddressReducer: (state, action) => {
      state.orderAddress = action.payload;
    //   console.log('action.payload:', action.payload)
    },
  },
  extraReducers: (builder) => {
    // ! Fetch Address
    builder.addCase(fetchAddress.pending, (state) => {
      state.addressLoading = true;
      state.address = [];
    });
    builder.addCase(fetchAddress.fulfilled, (state, action) => {
      state.addressLoading = false;
      state.address = action.payload;
    });
    builder.addCase(fetchAddress.rejected, (state, action) => {
      state.addressLoading = true;
      state.address = [];
    });

    // ! Add Address
    builder.addCase(addAdress.pending, (state) => {
      state.addressLoading = true;
      state.error = "";
    });

    builder.addCase(addAdress.fulfilled, (state, action) => {
      state.addressLoading = false;
      state.error = "";
    });

    builder.addCase(addAdress.rejected, (state, action) => {
      state.addressLoading = true;
      state.error = action.error.message;
    });
  },
});

export default addressSlice.reducer;
export const { orderAddressReducer } = addressSlice.actions;
