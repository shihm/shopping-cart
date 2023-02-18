import React, { createContext,  useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    const addToCart = (book) => {

        const existingBookIndex = cart.findIndex((item) => item.id === book.id);

        if (existingBookIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingBookIndex].quantity++;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...book, quantity: 1 }]);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    const removeFromCart = (bookId) => {

        const existingBookIndex = cart.findIndex((item) => item.id === bookId);

        if (existingBookIndex !== -1) {
            const updatedCart = [...cart];
            if (updatedCart[existingBookIndex].quantity > 1) {
                updatedCart[existingBookIndex].quantity--;
            } else {
                updatedCart.splice(existingBookIndex, 1);
            }
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
