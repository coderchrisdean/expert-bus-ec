import { createSlice } from '@reduxjs/toolkit';
import { client } from '../App';
import { QUERY_CHECKOUT } from '../utils/queries';

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

export const checkout = (productIds) => async (dispatch) => {
    try {
        const {data}= await client.query({
            query: QUERY_CHECKOUT,
            variables: { products: productIds },
        });
    }
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId: data.checkout.session });
    } catch (err) {
        console.error("Error during checkout: ", err);
    }
};

export const { addToCart, setProducts } = eStoreSlice.actions;

export const CHECKOUT = 'CHECKOUT';

export default eStoreSlice.reducer;

