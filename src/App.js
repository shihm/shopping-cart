
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Homepage from "./pages/home";
import Item from "./pages/item";
import Cart from "./pages/cart";
import CartButton from "./components/CartButton";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart" style={{ float: 'right' }}><CartButton></CartButton></Link>

        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/item" element={<Item />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
