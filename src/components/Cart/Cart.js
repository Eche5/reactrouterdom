import React from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart";
import { useSelector } from "react-redux";
import { json,redirect } from "react-router-dom";
import { Formik, Field, Form } from "formik";

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
            <button onClick={showOrderHandler}>Order</button>
          </div>
        </>
      )}
      {showOrder && (
        <Formik
          initialValues={{ name: "", email: "" }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <Field name="name" type="text" />
            <Field name="email" type="email" />
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
          </Form>
        </Formik>
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
