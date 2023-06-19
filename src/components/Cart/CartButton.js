import React from "react";
import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart";
import { useSelector } from "react-redux";
export default function CartButton() {
    const dispatch = useDispatch()
    const opencartHandler=()=>{
        dispatch(cartAction.showCart())
    }
  const counter = useSelector((state)=>state.cartItem.totalAmount)
  return (
    <div>
      <button className={classes.buttons} onClick={opencartHandler}>
        <span>My Cart</span>
        <span className={classes.badge}>{counter}</span>
      </button>
    </div>
  );
}
