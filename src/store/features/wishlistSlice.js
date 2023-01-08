import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../utils/Constant";

const initialState = {
  wishlist: [],
  wishlistError: "",
  wishlistCreatedMessage: "",
  wishlistCreatedMessageStatus: false,
  deletedWishlistStatus: false,
  deletedWishlistStatusError: "",
};

// ! Get Wishlist
export const fetchWishlist = createAsyncThunk("fetchWishlist", async () => {
  return await axios
    .get(`${url}/api/v1/wishlist`)
    .then((res) => res.data.wishlist)
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

// ! Delete Address
export const deleteUserWishlist = createAsyncThunk(
  "deleteUserWishlist",
  async ({ id }) => {
    return await axios
      .delete(`${url}/api/v1/wishlist/${id}`)
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

// ! Add Wishlist
export const addUserWishlist = createAsyncThunk(
  "addUserWishlist",
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
      .post(`${url}/api/v1/wishlist`, {
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

const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState,
  reducers: {
    clearWishlistMessageReducer: (state, action) => {
      state.wishlistCreatedMessage = "";
      state.wishlistCreatedMessageStatus = false;
    },
  },
  extraReducers: (builder) => {
    // ! Fetch Wishlist
    builder.addCase(fetchWishlist.pending, (state) => {
      state.wishlistError = "";
      state.wishlist = [];
    });
    builder.addCase(fetchWishlist.fulfilled, (state, action) => {
      state.wishlistError = "";
      state.wishlist = action.payload;
    });
    builder.addCase(fetchWishlist.rejected, (state, action) => {
      state.wishlistError = action.error.message;
      state.wishlist = [];
    });

    // ! Add Wishlist
    builder.addCase(addUserWishlist.pending, (state) => {
      state.wishlistCreatedMessage = "";
      state.wishlistCreatedMessageStatus = false;
    });
    builder.addCase(addUserWishlist.fulfilled, (state, action) => {
      state.wishlistCreatedMessage = action.payload;
      state.wishlistCreatedMessageStatus = true;
    });
    builder.addCase(addUserWishlist.rejected, (state, action) => {
      state.wishlistCreatedMessage = "";
      state.wishlistCreatedMessageStatus = false;
    });

    // ! Delete Wishlist
    builder.addCase(deleteUserWishlist.pending, (state) => {
      state.deletedWishlistStatus = false;
      state.deletedWishlistStatusError = "";
    });
    builder.addCase(deleteUserWishlist.fulfilled, (state, action) => {
      state.deletedWishlistStatus = true;
      state.deletedWishlistStatusError = "";
    });
    builder.addCase(deleteUserWishlist.rejected, (state, action) => {
      state.deletedWishlistStatus = false;
      state.deletedWishlistStatusError = action.payload;
    });
  },
});

export default wishlistSlice.reducer;
export const { clearWishlistMessageReducer } = wishlistSlice.actions;
