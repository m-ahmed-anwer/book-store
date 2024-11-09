import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/cart"); // Updated API endpoint
      return response.data;
    } catch (error) {
      console.error("Error fetching cart:", error); // Log error for debugging
      return rejectWithValue(error.response?.data || "Server error");
    }
  }
);

// Initial state for the cart
const initialState = {
  cartItems: [],
  total: 0,
  totalItems: 0,
  loading: false,
  error: null,
};

// Utility functions for cart operations
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((res) => res.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map((res) =>
      res.id === productToAdd.id ? { ...res, quantity: res.quantity + 1 } : res
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItem = (cartItems, itemToRemove) => {
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};

const updateQuantities = (cartItems) => {
  const totalItems = cartItems.reduce((total, res) => total + res.quantity, 0);
  const totalPrice = cartItems.reduce(
    (total, res) => total + res.price * res.quantity,
    0
  );
  return { totalItems, totalPrice };
};

// Create a Redux slice for the cart
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems = addCartItem(state.cartItems, action.payload);
      const { totalItems, totalPrice } = updateQuantities(state.cartItems);
      state.totalItems = totalItems;
      state.total = totalPrice;
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = removeItem(state.cartItems, action.payload);
      const { totalItems, totalPrice } = updateQuantities(state.cartItems);
      state.totalItems = totalItems;
      state.total = totalPrice;
    },
    incrementItem: (state, action) => {
      state.cartItems = state.cartItems.map((res) =>
        res.id === action.payload.id
          ? { ...res, quantity: res.quantity + 1 }
          : res
      );
      const { totalItems, totalPrice } = updateQuantities(state.cartItems);
      state.totalItems = totalItems;
      state.total = totalPrice;
    },
    decrementItem: (state, action) => {
      state.cartItems = state.cartItems
        .map((res) =>
          res.id === action.payload.id
            ? { ...res, quantity: res.quantity - 1 }
            : res
        )
        .filter((item) => item.quantity > 0);
      const { totalItems, totalPrice } = updateQuantities(state.cartItems);
      state.totalItems = totalItems;
      state.total = totalPrice;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
      state.totalItems = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
        const { totalItems, totalPrice } = updateQuantities(state.cartItems);
        state.totalItems = totalItems;
        state.total = totalPrice;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Could not fetch cart items";
      });
  },
});

export const {
  addItem,
  removeItemFromCart,
  incrementItem,
  decrementItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
