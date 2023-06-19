import React from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart";
import { useSelector } from "react-redux";
import { Form, json,redirect } from "react-router-dom";
export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItem.items);
  const opencartHandler = () => {
    dispatch(cartAction.showCart());
  };
  console.log(cartItems);
  const showOrderHandler = () => {
    dispatch(cartAction.showOrder());
  };
  const closeOrderHandler = () => {
    dispatch(cartAction.showCart());
    dispatch(cartAction.showOrder());
  };
  const showOrder = useSelector((state) => state.cart.showOrder);

  return (
    <Modal>
      {!showOrder && (
        <>
          {cartItems.length === 0 && <h2>Your Cart is Empty</h2>}
          {cartItems.length > 0 && <h2>Your Shopping Cart</h2>}
          <ul>
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
            <button onClick={showOrderHandler}>Order</button>
          </div>
        </>
      )}
      {showOrder && (
        <Form method="post">
          <div>
            <label htmlFor="name">Name </label>
            <input id="name" type="text" name="name" required />
          </div>
          <div>
            <label htmlFor="address">Address </label>
            <input id="address" type="text" name="address" required />
          </div>
          <div>
            <button onClick={closeOrderHandler}>Cancel Order</button>
            <button>Place Order</button>
          </div>
        </Form>
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
