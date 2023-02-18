import React,{useContext} from 'react';
import { CartContext } from '../context/CartContext';

function BookinCart(props) {
    const { removeFromCart } = useContext(CartContext);
    return (
        <div className="book-card">
            <img src={props.book.image} alt={props.book.title} />
            <h2>{props.book.title}</h2>
            <p>Author: {props.book.author}</p>
            <p>Price: ${props.book.price}</p>
            <p>Quantity:{props.book.quantity}</p>
            <button onClick={() => removeFromCart(props.book.id)}>Remove</button>
        </div>
    );
}

export default BookinCart;
