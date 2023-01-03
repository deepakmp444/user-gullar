import { Routes, Route } from "react-router-dom";
import NavBarComponet from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import BuyNow from "./pages/BuyNow";
import CancelOrder from "./pages/CancelOrder";
import Cart from "./pages/Cart";
import ConfirmOrder from "./pages/ConfirmOrder";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgetPassword";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import OrderHistory from "./pages/OrderHistory";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Setting from "./pages/Setting";
import UserEmailVerify from "./pages/UserEmailVerify";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <div>
      <NavBarComponet />
      <ProtectedRoute>
        <Routes>
          {/* <Route element={<ProtectedRoute />}> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/account-verify" element={<UserEmailVerify />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buynow" element={<BuyNow />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/confirm-order" element={<ConfirmOrder />} />
          <Route path="/cancel-order" element={<CancelOrder />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product/:name" element={<ProductList />} />
          <Route path="/product/:name/:id" element={<Product />} />
          <Route path="*" element={<PageNotFound />} />
          {/* </Route> */}
        </Routes>
      </ProtectedRoute>
    </div>
  );
}

export default App;
