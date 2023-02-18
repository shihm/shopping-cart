import { useState, useRef} from 'react';
import cartIcon from '../assets/cart.svg'
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartButton() {
  
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseDown = (event) => {
    const startX = event.pageX - position.x;
    const startY = event.pageY - position.y;

    const handleMouseMove = (event) => {
      const newPosX = event.pageX - startX;
      const newPosY = event.pageY - startY;
      setPosition({ x: newPosX, y: newPosY });
    };
  
    document.addEventListener('mousemove', handleMouseMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', handleMouseMove);
    });
  };

  const { cart } = useContext(CartContext)

  function getTotalQuantity(books) {
    return books.reduce((total, book) => total + book.quantity, 0);
  }

  return (
    <button
      ref={buttonRef}

      style={{ transform: `translate(${position.x}px, ${position.y}px)`, borderRadius:'50%' }}
      onMouseDown={handleMouseDown}
    >
      <div style={{color:'red', fontSize:'20px'}}>{getTotalQuantity(cart)}</div>
      <img src={cartIcon} width="50px" alt='Cart' />
      
    </button>
  );
}

export default CartButton;