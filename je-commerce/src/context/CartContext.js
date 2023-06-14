import { useState, createContext } from "react";

export const CartContext = createContext({ 
    cart: [],
    totalPrice: 0,
    totalQuantity: 0
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    
    const addItem = (item, quantity) => {
        const bookInCart = cart.find(book => book.id === item.id);

        if (bookInCart) {
            const updatedCart = cart.map(book => {
                if (book.id === bookInCart.id) {
                    return {
                        ...book,
                        quantity: book.quantity + quantity,
                    }
                } else {
                    return book;
                }
            });
            setCart(updatedCart);
            setTotalPrice(prevPrice => prevPrice + (bookInCart.price * bookInCart.quantity));
            setTotalQuantity(prevQuantity => prevQuantity + quantity);
        } else {
            setCart(prevCart => [
                ...prevCart,
                { 
                    ...item, 
                    quantity
                }
            ])
            setTotalPrice(prevPrice => prevPrice + (item.price * quantity));
            setTotalQuantity(prevQuantity => prevQuantity + quantity);
        }
    }


    const removeItem = (itemId) => {
        const bookToRemove = cart.find(book => book.id === itemId);
        const updatedCart = cart.filter(book => book.id !== itemId);
        setCart(updatedCart);
        setTotalPrice(prevPrice => prevPrice + (bookToRemove.price * bookToRemove.quantity));
        setTotalQuantity(prevQuantity => prevQuantity - bookToRemove.quantity);
    }

    
    const clear = () => {
        setCart([]);
        setTotalPrice(0);
        setTotalQuantity(0);
    }
  
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalPrice, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}