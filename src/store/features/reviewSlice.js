import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../utils/Constant";

const initialState = {
  review: [],
  singleReviewForUpdate: [],
  reviewError: "",
  updateReviewStatus: false,
  updateReviewStatusError: "",
  createdReviewStatus: false,
  createdReviewStatusError: "",
  deleteReviewStatus: false,
  deleteReviewStatusError: "",
};

// ! Get Review
export const fetchReview = createAsyncThunk("fetchReview", async ({ id }) => {
  return await axios
    .get(`${url}/api/v1/review/product/${id}`)
    .then((res) => res.data.reviewByProduct)
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

// ! get Review From Order Product User
export const getReviewFromOrderProductUser = createAsyncThunk(
  "getReviewFromOrderProductUser",
  async ({ productId, orderId, userId }) => {
    console.log("userId:", userId);
    console.log("orderId:", orderId);
    console.log("productId:", productId);
    return await axios
      .post(`${url}/api/v1/user-review`, {
        productId,
        orderId,
        userId,
      })
      .then((res) => res.data.review)
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

// ! Delete Review
export const deleteOrdeReview = createAsyncThunk(
  "deleteOrdeReview",
  async ({ id }) => {
    return await axios
      .delete(`${url}/api/v1/review/${id}`)
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
  }
);

// ! Add Review
export const addUserReview = createAsyncThunk(
  "addUserReview",
  async ({ name, rating, descriptions, productId, orderId, userId }) => {
    console.log("userId:", userId);
    console.log("orderId:", orderId);
    console.log("productId:", productId);
    console.log("descriptions:", descriptions);
    console.log("rating:", rating);
    console.log("name:", name);

    return await axios
      .post(`${url}/api/v1/review`, {
        name,
        rating,
        descriptions,
        productId,
        orderId,
        userId,
      })
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
  }
);

// ! Update Review
export const updateUserReview = createAsyncThunk(
  "updateUserReview",
  async ({ email, rating, descriptions, id }) => {
    return await axios
      .put(`${url}/api/v1/review/${id}`, {
        email,
        rating,
        descriptions,
      })
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
  }
);

const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState,
  reducers: {
    clearGetReviewFromOrderProductUser: (state, action) => {
      state.singleReviewForUpdate = [];
    },
  },

  extraReducers: (builder) => {
    // ! Fetch Address
    builder.addCase(fetchReview.pending, (state) => {
      state.reviewError = "";
      state.review = [];
    });
    builder.addCase(fetchReview.fulfilled, (state, action) => {
      state.reviewError = "";
      state.review = action.payload;
    });
    builder.addCase(fetchReview.rejected, (state, action) => {
      state.reviewError = action.payload.message;
      state.review = [];
    });

    // ! Add Review
    builder.addCase(addUserReview.pending, (state) => {
      state.createdReviewStatus = false;
      state.createdReviewStatusError = "";
    });
    builder.addCase(addUserReview.fulfilled, (state, action) => {
      state.createdReviewStatus = true;
      state.createdReviewStatusError = "";
    });
    builder.addCase(addUserReview.rejected, (state, action) => {
      state.createdReviewStatus = false;
      state.createdReviewStatusError = action.payload;
    });

    // ! update Review
    builder.addCase(updateUserReview.pending, (state) => {
      state.updateReviewStatus = false;
      state.updateReviewStatusError = "";
    });
    builder.addCase(updateUserReview.fulfilled, (state, action) => {
      state.updateReviewStatus = true;
      state.updateReviewStatusError = "";
    });
    builder.addCase(updateUserReview.rejected, (state, action) => {
      state.updateReviewStatus = false;
      state.updateReviewStatusError = action.payload;
    });

    // ! Delete Review
    builder.addCase(deleteOrdeReview.pending, (state) => {
      state.deleteReviewStatus = false;
      state.deleteReviewStatusError = "";
    });
    builder.addCase(deleteOrdeReview.fulfilled, (state, action) => {
      state.deleteReviewStatus = true;
      state.deleteReviewStatusError = "";
    });
    builder.addCase(deleteOrdeReview.rejected, (state, action) => {
      state.deleteReviewStatus = false;
      state.deleteReviewStatusError = action.payload;
    });

    // ! Get Review From Order Product User
    builder.addCase(getReviewFromOrderProductUser.pending, (state) => {
      state.singleReviewForUpdate = [];
    });
    builder.addCase(
      getReviewFromOrderProductUser.fulfilled,
      (state, action) => {
        state.singleReviewForUpdate = action.payload;
      }
    );
    builder.addCase(getReviewFromOrderProductUser.rejected, (state, action) => {
      state.singleReviewForUpdate = [];
    });
  },
});

export default reviewSlice.reducer;
export const { clearGetReviewFromOrderProductUser } = reviewSlice.actions;
