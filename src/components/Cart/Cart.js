import React, { useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart";
import { useSelector } from "react-redux";
import { json, redirect } from "react-router-dom";
import { cartItemAction } from "../store/cart-item";

export default function Cart() {
  const dispatch = useDispatch();
  const [isOrdered, setIsOrdered] = useState(false);
  const cartItems = useSelector((state) => state.cartItem.items);
  const opencartHandler = () => {
    dispatch(cartAction.showCart());
  };
  const showOrderHandler = () => {
    dispatch(cartAction.showOrder());
  };
  const closeOrderHandler = () => {
    dispatch(cartAction.showCart());
    dispatch(cartAction.showOrder());
  };
  const submitOrderHandler = (e) => {
    e.preventDefault();
    dispatch(cartItemAction.reserCart());
    setIsOrdered(true);
  };
  const showOrder = useSelector((state) => state.cart.showOrder);

  return (
    <Modal>
      {!showOrder && (
        <>
          {cartItems.length === 0 && <h2>Your Cart is Empty</h2>}
          {cartItems.length > 0 && <h2>Your Shopping Cart</h2>}
          <ul className={classes["cart-items"]}>
            {cartItems.map((item) => {
              return (
                <CartItem
                  item={{
                    id: item.id,
                    title: item.title,
                    quantity: item.quantity,
                    total: item.totalPrice,
                    price: item.price,
                  }}
                />
              );
            })}
          </ul>
          <div className={classes.button}>
            <button onClick={opencartHandler}>Close</button>
            {cartItems.length > 0 && (
              <button onClick={showOrderHandler}>Order</button>
            )}
          </div>
        </>
      )}
      {showOrder && !isOrdered && (
        <form onSubmit={submitOrderHandler}>
          <div>
            <label htmlFor="name">Name: </label>
            <input id="name" name="name" type="text" />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input id="email" name="email" type="email" />
          </div>
          <button
            className={classes.close}
            type="submit"
            onClick={closeOrderHandler}
          >
            Close
          </button>
          <button className={classes.order} type="submit">
            Order
          </button>
        </form>
      )}
      {isOrdered && showOrder && (
        <>
          <h1>Your Order has been made, you will be contacted shortly</h1>
          <button
            className={classes.close}
            type="submit"
            onClick={closeOrderHandler}
          >
            Close
          </button>
        </>
      )}
    </Modal>
  );
}

export async function action({ request, params }) {
  const data = await request.formData();
  const infoData = {
    name: data.get("name"),
    address: data.get("address"),
  };
  const response = await fetch(
    "https://newfoodapp-6f76d-default-rtdb.firebaseio.com/information.json",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(infoData),
    }
  );
  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "could not add new data", status: 500 });
  }
  return redirect("/");
}
