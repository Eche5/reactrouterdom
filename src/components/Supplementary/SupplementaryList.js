import React from 'react'
import { Link } from 'react-router-dom';
import classes from './SupplementaryList.module.css'
export default function SupplementaryList(props) {
  return (
    <li className={classes.list}>
      <h3 className={classes.title}>{props.title}</h3>
      <p className={classes.description}>
        {props.description}
        <Link to={props.link}>Tap for more</Link>
      </p>
    </li>
  );
}
