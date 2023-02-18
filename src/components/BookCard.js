import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function BookCard(props) {
    const { addToCart } = useContext(CartContext);
    
    return (
        <div className="book-card">
            <img src={props.book.image} alt={props.book.title} />
            <h2>{props.book.title}</h2>
            <p>Author: {props.book.author}</p>
            <p>Price: ${props.book.price}</p>
            <button onClick={() => addToCart(props.book)}>Add to Cart</button>
        </div>
    );
}

export default BookCard;
