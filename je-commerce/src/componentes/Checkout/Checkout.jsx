import { useState, useContext } from "react"
import { collection, addDoc } from "firebase/firestore"

import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config"

const Checkout = () => {
    const { cart, clear } = useContext(CartContext);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmation, setEmailConfirmation] = useState('');
    const [error, setError] = useState('');
    const [orderId, setOrderId] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !lastName || !phone || !email) {
            setError('Complete todos los campos.');
            return;
        }

        if (email !== emailConfirmation) {
            setError('El email debe ser el mismo en los dos campos.');
            return;
        }

        const orden = {
            items: cart.map(book => ({
                id: book.id,
                title: book.title,
                quantity: book.quantity,
            })),
            total: cart.reduce((total, book) => total + book.price * book.quantity, 0),
            name,
            lastName,
            phone,
            email
        };

        addDoc(collection(db, "orders"), orden)
            .then((docRef) => {
                setOrderId(docRef.id);
                clear();
            })
            .catch((error) => {
                console.error(error);
                setError("Ha ocurrido un error y no se ha podido finalizar la compra.");
            })
    }

    return (
        <section>
        {!orderId ? (
            <>
                <h2>Checkout</h2>
                <form onSubmit={handleSubmit}>
                    {cart.map(book => (
                        <div key={book.id}>
                            <p>{book.title} x{book.quantity}</p>
                            <p>Precio: ${book.price} </p>
                            <hr />
                        </div>
                    ))}

                    <div>
                        <label>Nombre <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>
                    </div>
                    <div>
                        <label>Apellido <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /></label>
                    </div>
                    <div>
                        <label>Teléfono <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} /></label>
                    </div>
                    <div>
                        <label>Email <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
                    </div>
                    <div>
                        <label>Confirmación de Email <input type="text" value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)} /></label>
                    </div>

                    {error ? <p style={{color: 'red'}}>{error}</p> : ''}

                    <button type="submit">Finalizar Compra</button>
                </form>
            </>)
            :
            (<>
                <h2>Gracias por su compra.</h2>
                <p>Le enviaremos un mail con los detalles. El ID de su orden es: {orderId}</p>
            </>)
        }
        </section>
    )
}

export default Checkout;