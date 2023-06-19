import React from 'react'
import classes from './MealSummary.module.css'
import img from '../../assests/intro-1654286969.webp'
export default function MealSummary() {
  return (
    <div className={classes.container}>
        <img src={img}/>
    </div>
  )
}
