import React from "react";
import classes from "./MainCourseMeals.module.css";
import MealItemForm from "./MealItemForm";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartItemAction } from "../store/cart-item";
export default function MainCourseMeals(props) {
  const dispatch = useDispatch();
      const { title, price, id } = props;

  const addItemtoCart = () => {
    dispatch(
      cartItemAction.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
  return (
    <li className={classes.list}>
      <div>
        <h3>{props.title}</h3>
      </div>
      <div className={classes.price}>₦{props.price}</div>
      <div>
        <button onClick={addItemtoCart}>+add</button>
      </div>
    </li>
  );
}
