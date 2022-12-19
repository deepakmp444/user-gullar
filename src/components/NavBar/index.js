import { Col, Dropdown, Row } from "react-bootstrap";
import "../../styles/NavBar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import CartIcon from "../Icons/CartIcon";
import PeopleIcon from "../Icons/PeopleIcon";
import WishListIcon from "../Icons/WishListIcon";
import { useEffect, useState } from "react";
import { fetchProduct } from "../../store/features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/Search.css";

function NavBarComponet() {
  const [searchedData, setSearchedData] = useState("");
  const [linkClicked, setLinkClicked] = useState(false);
  const [lengthOfSearch, setLengthOfSearch] = useState(0);
  const { product } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchedData.length !== 0 && linkClicked === false) {
      dispatch(fetchProduct(searchedData));
    }
  }, [dispatch, linkClicked, searchedData]);

  useEffect(() => {
    if (lengthOfSearch !== searchedData.length) {
      setLinkClicked(false);
    }
  }, [lengthOfSearch, searchedData.length]);

  // Gullar heading CSS
  const fontSizeBig = {
    fontSize: "20px",
  };

  const searchQuery = (e) => {
    setSearchedData(e?.target?.value);
  };

  const handleSearchData = (value) => {
    setLengthOfSearch(value.length);
    setSearchedData(value);
    setLinkClicked(true);
  };

  return (
    <>
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
              value={searchedData}
              aria-label="Search"
              onChange={searchQuery}
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
            <div className="ms-2 mt-1 navBarDesktop">
              <Form.Control
                type="search"
                placeholder="Search"
                value={searchedData}
                aria-label="Search"
                onChange={searchQuery}
              />
            </div>
          </Row>
        </Row>
      </Container>
      {searchedData.length !== 0 && linkClicked === false && (
        <div className="center">
          <div className="search searchPosition p-3">
            {product.length === 0 && (
              <p className="mt-2 text-center">Product not found</p>
            )}
            {product.map((value) => {
              return (
                <Link
                  key={value.id}
                  className="link"
                  to="/"
                  onClick={() => handleSearchData(value.productSubheading)}
                >
                  <div className="listItem">{value.productSubheading}</div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default NavBarComponet;
