import React from "react";
import CartButton from "../Cart/CartButton";
import classes from "./MainNavigation.module.css";
import MealSummary from "../Summary/MealSummary";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function MainNavigation() {
  const showCart = useSelector((state) => state.cart.showCart);

  return (
    <>
      {showCart && <Cart />}
      <div className={classes.header}>
        <Link to="/"><h1>JOCINE</h1></Link>
        <nav>
          <ul>
            <li>
              <CartButton />
            </li>
          </ul>
        </nav>
      </div>
      <MealSummary />
    </>
  );
}
