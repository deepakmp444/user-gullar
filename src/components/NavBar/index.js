import { Col, Dropdown, Row } from "react-bootstrap";
import "../../styles/NavBar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import CartIcon from "../Icons/CartIcon";
import PeopleIcon from "../Icons/PeopleIcon";
import WishListIcon from "../Icons/WishListIcon";

function NavBarComponet() {
  const fontSizeBig = {
    fontSize: "20px",
  };

  return (
    <Container fluid className="navBarIndex">
      <Row className="p-2 bg-light">
        <Col>
          <Link style={fontSizeBig} className="link" to="/">
            Gullar
          </Link>
        </Col>
        <Col className="navBarMobile">
          <Form.Control
            type="search"
            placeholder="Search"
            className=""
            aria-label="Search"
          />
        </Col>
        <Col>
          <div className="d-flex justify-content-end">
            <Button variant="light">
              <Link className="link" to="/cart">
                <CartIcon />
              </Link>
            </Button>
            <Button variant="light">
              <Link className="link" to="/cart">
                <WishListIcon />
              </Link>
            </Button>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <PeopleIcon />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Sign In</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
        <Row>
          <div className="ms-2 navBarDesktop">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </Row>
      </Row>
    </Container>
  );
}

export default NavBarComponet;
