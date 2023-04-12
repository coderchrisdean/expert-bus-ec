import { createSlice } from '@reduxjs/toolkit';
import { client } from '../App';
import { QUERY_CHECKOUT } from '../utils/queries';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

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
        const { data }= await client.query({
            query: QUERY_CHECKOUT,
            variables: { products: productIds },
        });
    
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId: data.checkout.session });
    } catch (err) {
        console.error("Error during checkout: ", err);
    }
};

export const { addToCart, setProducts } = eStoreSlice.actions;

export const CHECKOUT = 'CHECKOUT';

export default eStoreSlice.reducer;

