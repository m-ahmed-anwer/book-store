import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: "",
  email: "",
  image: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      const { id, name, email, image } = action.payload;
      state.id = id;
      state.name = name;
      state.email = email;
      state.image = image;
    },
    logout(state) {
      state.id = null;
      state.name = "";
      state.email = "";
      state.image = "";
    },
    updateProfile(state, action) {
      const { name, image } = action.payload;
      if (name) state.name = name;
      if (image) state.image = image;
    },
  },
});

export const { setCurrentUser, logout, updateProfile } = userSlice.actions;

export default userSlice.reducer;
