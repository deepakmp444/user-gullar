import { Routes, Route } from "react-router-dom";
import NavBarComponet from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <div>
      <NavBarComponet />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
