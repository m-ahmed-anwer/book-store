"use client";

import { Provider } from "react-redux";
import store from "./store";
import { fetchPosts } from "./postSlice";
import { fetchCart } from "./cartSlice";

store.dispatch(fetchPosts());
store.dispatch(fetchCart("672aed44b56ac350a1b8829d"));

export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
