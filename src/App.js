import { Routes, Route } from "react-router-dom";
import NavBarComponet from "./components/NavBar";
import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <div>
      <NavBarComponet />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:name" element={<ProductList />} />
        <Route path="/product/:name/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
