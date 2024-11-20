import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCart = createAsyncThunk("cart/fetchCart", async (userId) => {
  const response = await axios.get(
    `http://localhost:8000/api/shopping/get-cart/${userId}`
  );

  return response.data;
});

export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async ({ userId, item }) => {
    const response = await axios.put(
      `http://localhost:8000/api/shopping/create/${userId}`,
      { item }
    );
    return response.data;
  }
);

export const removeItemFromCart = createAsyncThunk(
  "cart/removeItemFromCart",
  async ({ userId, id }) => {
    const response = await axios.delete(
      `http://localhost:8000/api/shopping/delete/${userId}/${id}`
    );
    return response.data;
  }
);

export const decrementItem = createAsyncThunk(
  "cart/decrementItem",
  async ({ userId, productId }) => {
    const response = await axios.post(
      `http://localhost:8000/api/shopping/reduce/${userId}`,
      { productId }
    );
    return response.data;
  }
);

const initialState = {
  cartItems: {},
  total: 0,
  totalItems: 0,
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;

        const cart = action.payload || {};
        const items = cart.items || [];
        state.cartItems = cart;
        state.totalItems = items.reduce(
          (total, item) => total + (item.unit || 0),
          0
        );
        state.total = items.reduce((total, item) => {
          return total + (item.product.price * item.unit || 0);
        }, 0);

        state.cartItems = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Could not fetch cart items";
      })
      .addCase(addItemToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.loading = false;

        if (action.payload.success) {
          state.cartItems = action.payload.data || {};
          const items = state.cartItems.items || [];
          state.totalItems = items.reduce(
            (total, item) => total + (item.unit || 0),
            0
          );
          state.total = items.reduce((total, item) => {
            return total + (item.product.price * item.unit || 0);
          }, 0);
        } else {
          state.error = "Could not addd item to cart";
        }
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Could not add item to cart";
      })
      .addCase(removeItemFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success) {
          state.cartItems = action.payload.data || {};
          const items = state.cartItems.items || [];
          state.totalItems = items.reduce(
            (total, item) => total + (item.unit || 0),
            0
          );
          state.total = items.reduce((total, item) => {
            return total + (item.product.price * item.unit || 0);
          }, 0);
        } else {
          state.error =
            action.payload.message || "Could not remove item from cart";
        }
      })
      .addCase(removeItemFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || "Could not remove item from cart failed";
      })
      .addCase(decrementItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(decrementItem.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success) {
          state.cartItems = action.payload.data || {};
          const items = state.cartItems.items || [];
          state.totalItems = items.reduce(
            (total, item) => total + (item.unit || 0),
            0
          );
          state.total = items.reduce((total, item) => {
            return total + (item.product.price * item.unit || 0);
          }, 0);
        } else {
          state.error =
            action.payload.message || "Could not decrease item from cart";
        }
      })
      .addCase(decrementItem.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || "Could not decrease item from cart failed";
      });
  },
});

export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotal = (state) => state.cart.total;
export const selectCartTotalItems = (state) => state.cart.totalItems;
export const selectCartLoading = (state) => state.cart.loading;
export const selectCartError = (state) => state.cart.error;

export default cartSlice.reducer;
