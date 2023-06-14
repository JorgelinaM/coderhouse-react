import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cart, totalPrice, removeItem } = useContext(CartContext);

    return (
        <div>
            {cart.length > 0 ? (
                <>
                    <ul>
                        {cart.map(item => <li key={item.id}>{item.quantity}x {item.title} <button onClick={() => removeItem(item.id)}>Eliminar</button></li>)}
                    </ul>
                    <p><b>Total:</b> {totalPrice}</p>
                    <Link to="/checkout">Comprar</Link>
                </>
            )
            : <p>No hay productos en el carrito.</p>
            } 
        </div>
    )
}

export default Cart