import React from 'react'
import classes from './MainCourseList.module.css'
import { Link } from 'react-router-dom'
export default function MainCourseList(props) {
  return (
    <li className={classes.list}>
      <h3 className={classes.title}>{props.title}</h3>
      <p className={classes.description}>{props.description}<Link to={props.link}>Tap for more</Link></p>
    </li>
  )
}
