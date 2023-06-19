import React from "react";
import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartItemAction } from "../store/cart-item";
import { Form } from "react-router-dom";
export default function CartItem(props) {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();
  const addItemtoCart = () => {
    dispatch(cartItemAction.addItemToCart({ id, price, title }));
  };
  const removeItemfromCart = () => {
    dispatch(cartItemAction.removeItemFromCart(id));
  };
  return (
    <>
      <li className={classes.item}>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>
            ₦{total.toFixed(2)}
            <span className={classes.itemprice}>
              (₦{price.toFixed(2)}/item)
            </span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{quantity}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={removeItemfromCart}>-</button>
            <button onClick={addItemtoCart}>+</button>
          </div>
        </div>
      </li>
    </>
  );
}
