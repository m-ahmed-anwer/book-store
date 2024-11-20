import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const userAdapter = createEntityAdapter({
  selectId: (currentUser) => currentUser.id,
});

export const loginCredentials = createAsyncThunk(
  "user/loginCredentials",
  async ({ email, password }) => {
    const response = await axios.post("http://localhost:8000/api/users/login", {
      email,
      password,
    });
    return response.data;
  }
);

const initialState = userAdapter.getInitialState({
  message: null,
  error: false,
  currentUser: null,
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signout: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginCredentials.pending, (state) => {
        state.error = false;
      })
      .addCase(loginCredentials.fulfilled, (state, action) => {
        state.error = false;
        if (action.payload.success) {
          userAdapter.upsertOne(state, action.payload.user);
          state.currentUser = action.payload.user;
        } else {
          state.error = true;
          state.message = action.payload.message;
        }
      })
      .addCase(loginCredentials.rejected, (state) => {
        state.error = true;
        state.message = "Something went wrong";
      });
  },
});

export const getUserError = (state) => state.user.error;
export const getUserMessage = (state) => state.user.message;
export const getCurrentUser = (state) => state.user.currentUser;
export const getUserId = (state) =>
  state.user.currentUser ? state.user.currentUser.id : null;

export const { signout } = userSlice.actions;

export default userSlice.reducer;
