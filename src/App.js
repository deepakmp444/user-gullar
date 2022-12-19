import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import NavBarComponet from "./components/NavBar";
import Search from "./components/Search";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <NavBarComponet />
      <Search />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
