import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../utils/Constant";
const initialState = {
  userProfile: {},
  logout: false,
  profileLoading: true,
  error: "",
  updated: false,
  accountCreated: false,
  deleted: false,
};

// ! User create account
export const createAccount = createAsyncThunk(
  "createAccount",
  async ({ name, email, password }) => {
    return await axios
      .post(`${url}/api/v1/user/create-account`, {
        name,
        email,
        password,
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

// ! User login
export const loginAccount = createAsyncThunk(
  "loginAccount",
  async ({ email, password }) => {
    return await axios
      .post(`${url}/api/v1/user/login`, {
        email,
        password,
      })
      .then((res) => res.data.profile)
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

// !  getUserProfile
export const getUserProfile = createAsyncThunk("getUserProfile", async () => {
  return await axios
    .get(`${url}/api/v1/user/me`)
    .then((res) => res.data.profile)
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

// !  userLogout
export const userLogout = createAsyncThunk("userLogout", async () => {
  return await axios
    .post(`${url}/api/v1/user/logout`)
    .then((res) => res.data.succes)
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

const userSlice = createSlice({
  name: "productSlice",
  initialState,
  //   reducers: {
  //     getProfile: (state, action) => {
  //       state.userProfile = action.payload;
  //     },
  //   },
  extraReducers: (builder) => {
    // ! Account create
    builder.addCase(createAccount.pending, (state) => {
      state.accountCreated = false;
      state.error = "";
    });
    builder.addCase(createAccount.fulfilled, (state, action) => {
      state.accountCreated = true;
      state.error = "";
    });
    builder.addCase(createAccount.rejected, (state, action) => {
      state.accountCreated = false;
      state.error = action.error.message;
    });

    // ! Login
    builder.addCase(loginAccount.pending, (state) => {
      state.profileLoading = true;
      state.userProfile = {};
      state.error = "";
    });
    builder.addCase(loginAccount.fulfilled, (state, action) => {
      state.profileLoading = false;
      state.userProfile = action.payload;
      console.log("action.payload:", action.payload);
      state.error = "";
    });
    builder.addCase(loginAccount.rejected, (state, action) => {
      state.profileLoading = true;
      state.userProfile = {};
      state.error = action.error.message;
    });

    // ! get Profile
    builder.addCase(getUserProfile.pending, (state) => {
      state.profileLoading = true;
      state.userProfile = {};
      state.error = "";
    });
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.profileLoading = false;
      state.userProfile = action.payload;
      state.error = "";
    });
    builder.addCase(getUserProfile.rejected, (state, action) => {
      state.profileLoading = true;
      state.userProfile = {};
      state.error = action.error.message;
    });

    // ! userLogout
    builder.addCase(userLogout.pending, (state) => {
      state.logout = false;
      state.error = "";
    });
    builder.addCase(userLogout.fulfilled, (state, action) => {
      state.logout = true;
      state.error = "";
    });
    builder.addCase(userLogout.rejected, (state, action) => {
      state.logout = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
// export const { closeUpdateToggle } = SubCategorySlice.actions;
