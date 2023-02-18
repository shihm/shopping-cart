import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import BookinCart from '../components/BookinCart';

function Cart() {
  const { cart,  clearCart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((book) => (
          /*<li key={book.id}>
            <div className="cart-item">
              <div className="cart-item-image">
                <img src={book.image} alt={book.title} />
              </div>
              <div className="cart-item-details">
                <div className="cart-item-title">{book.title}</div>
                <div className="cart-item-author">{book.author}</div>
                <div className="cart-item-price">${book.price}</div>
                <button onClick={() => removeFromCart(book.id)}>Remove from cart</button>
              </div>
            </div>
          </li>*/
          <BookinCart book={book} key={book.id}></BookinCart>
        ))}
      </ul>
      {cart.length > 0 && (
        <div>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
