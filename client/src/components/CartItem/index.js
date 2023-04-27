import React from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {

    dispatch({ type: REMOVE_FROM_CART, _id: item._id });
    idbPromise('cart', 'delete', { ...item });
    };
    const onChange = (e) => {
      const value = e.target.value;
      const quantity = parseInt(value);
      if (quantity === 0) {
        removeFromCart();
      } else {
        dispatch({ type: UPDATE_CART_QUANTITY, _id: item._id, purchaseQuantity: quantity });
        idbPromise('cart', 'put', { ...item, purchaseQuantity: quantity });
      }
    };



 
  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
