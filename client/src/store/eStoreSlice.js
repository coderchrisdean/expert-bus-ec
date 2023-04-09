import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
};

const eStoreSlice = createSlice({
    name: 'eStore',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
    },
    setProducts: (state, action) => {
        state.products = action.payload;
    }
}
});

export const { addToCart, setProducts } = eStoreSlice.actions;

export default eStoreSlice.reducer;

