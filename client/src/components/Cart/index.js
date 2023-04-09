import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector, useDispatch } from 'react-redux'; // replace with useSelector, useDispatch
import { toggleCart, addMultipleToCart, checkout } from '../../store/eStoreSlice'; // replace with toggleCart, addMultipleToCart, checkout 
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import './style.css';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const state = useSelector((state) => state.eStore); // replace with useSelector
  const dispatch = useDispatch(); // replace with useDispatch

  // no longer needed with redux
  // useEffect(() => {
  //   if (data) {
  //     stripePromise.then((res) => {
  //       res.redirectToCheckout({ sessionId: data.checkout.session });
  //     });
  //   }
  // }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch( addMultipleToCart ([...cart] )); // addMultipleToCart from eStoreSlice
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  //add handleToggleCart function
  function handleToggleCart() {
    dispatch(toggleCart());
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    dispatch(checkout(productIds)); //dispatch handles the checkout with redux and redirects to stripe
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={handleToggleCart}>
        <span role="img" aria-label="trash">
          🛒
        </span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={handleToggleCart}>
        [close]
      </div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          Nothing added to cart yet!
        </h3>
        )};
    </div>
  );
};

export default Cart;
