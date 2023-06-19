import React from "react";
import styles from "./MealItemForm.module.css";
import MealFormInput from "./MealFormInput";
import { cartItemAction } from "../store/cart-item";
import { useDispatch } from "react-redux";
export default function MealItemForm(props) {
  const dispatch = useDispatch()
  const addItemtocart = (e) => {
    e.preventDefault()
    dispatch(cartItemAction.addItemToCart({
      id: props.id,
      title: props.title,
      price: props.price,
    }))
  };
  return (
    <form onSubmit={addItemtocart} className={styles.form}>
      <MealFormInput
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
}
