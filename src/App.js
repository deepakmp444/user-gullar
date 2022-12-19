import { Routes, Route } from "react-router-dom";
import NavBarComponet from "./components/NavBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <NavBarComponet />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
