import { Routes, Route } from "react-router-dom";
import NavBarComponet from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./pages/Cart";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgetPassword";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <div>
      <NavBarComponet />
      <ProtectedRoute>
        <Routes>
          {/* <Route element={<ProtectedRoute />}> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product/:name" element={<ProductList />} />
          <Route path="/product/:name/:id" element={<Product />} />
          {/* </Route> */}
        </Routes>
      </ProtectedRoute>
    </div>
  );
}

export default App;
