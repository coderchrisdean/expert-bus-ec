import { configureStore } from "@reduxjs/toolkit";
import eStoreSlice from "./eStoreSlice";

const initialState = {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
};

const reducer = (state = initialState, action) => {
    
    return state;
};

const store = configureStore({
    reducer: {
        storeSlice: eStoreSlice,

    }});

export default store;