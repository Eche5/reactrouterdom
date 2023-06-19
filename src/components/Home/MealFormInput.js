import React from "react";
import styles from "./MealFormInput.module.css";
const MealFormInput = React.forwardRef((props,ref) => {
  return (
    <section className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} id={props.input.id} {...props.input} />
    </section>
  );
});
export default MealFormInput;
