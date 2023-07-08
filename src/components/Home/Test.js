import React from 'react'
import { useSelector } from 'react-redux'
export default function Test() {
    const cart = useSelector((state)=>state.cartItem.cartItem)
    console.log(cart);
  return (
    <div>
      
    </div>
  )
}
