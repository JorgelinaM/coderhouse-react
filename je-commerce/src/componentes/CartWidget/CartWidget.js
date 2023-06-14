import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  
  return (
    <div>
        <Link to="/cart">
          <img src='/img/shopping-cart.png' alt="Carrito" />
          <span>{totalQuantity}</span>
        </Link>
    </div>
  )
}

export default CartWidget