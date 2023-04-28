import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
export const redirectToCheckout = createAsyncThunk(
    "eStore/redirectToCheckout",
    async (products) => {
        const stripe = await stripePromise;
        await stripe.redirectToCheckout({ sessionId: products.checkout.session });
    }
);

const initialState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: "",
};

const eStoreSlice = createSlice({
  name: "eStore",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    addMultipleToCart: (state, action) => {
      action.payload.forEach((product) => {
        state.cart.push(product);
      });
    },
    updateCartQuantity: (state, action) => {
      const { _id, purchaseQuantity } = action.payload;
      const itemToUpdate = state.cart.find((product) => product._id === _id);
      if (itemToUpdate) {
        itemToUpdate.purchaseQuantity = purchaseQuantity;
      }
    },
    removeFromCart: (state, action) => {
      const newState = state.cart.filter((product) => {
        return product._id !== action.payload;
      });
      state.cart = newState;
    },
    toggleCart: (state, action) => {
      state.cartOpen = !state.cartOpen;
    },

    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
    extraReducers: (builder) => {
        builder.addCase(redirectToCheckout.fulfilled, (state, action) => { state.cartOpen = false });
    }

    
});
export const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});
export const checkout = (productIds) => async (dispatch) => {
  try {
    const { data } = await client.query({
      query: QUERY_CHECKOUT,
      variables: { products: productIds },
    });

    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId: data.checkout.session });
  } catch (err) {
    console.error("Error during checkout: ", err);
  }
};

export const {
  addToCart,
  addMultipleToCart,
  updateCartQuantity,
  removeFromCart,
  toggleCart,
  clearCart,
  setProducts,
  setCurrentCategory,
  setCategories,
} = eStoreSlice.actions;

export const CHECKOUT = "CHECKOUT";

export default eStoreSlice.reducer;
