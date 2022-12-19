import React from "react";
import {
  Col,
  Container,
  Row,
  Accordion,
  Form,
  Card,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import banner from "../assests/product/bannerv1.png";
import Star from "../components/Icons/Star";
import WishListIcon from "../components/Icons/WishListIcon";
import "../styles/productList.css";
function ProductList() {
  return (
    <Container>
      <Row style={{ marginTop: "80px" }}>
        <Col className="hideSideBar" sm={3}>
          <Accordion defaultActiveKey={["0", "1", "2"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>
                <Form.Label>Set Price</Form.Label>
                <Form.Range />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Color</Accordion.Header>
              <Accordion.Body>
                <Form.Check type="checkbox" label="Black" />
                <Form.Check type="checkbox" label="White" />
                <Form.Check type="checkbox" label="Red" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Size</Accordion.Header>
              <Accordion.Body>
                <Form.Check type="checkbox" label="S" />
                <Form.Check type="checkbox" label="M" />
                <Form.Check type="checkbox" label="XL" />
                <Form.Check type="checkbox" label="XXL" />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col sm={3} className="fixed-bottom hideInDesktop" style={{ marginTop: "40px" }}>
          <div className="d-flex justify-content-around bgFilter">
            <DropdownButton
              variant="outline-secondary"
              title="Color"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item>Black</Dropdown.Item>
              <Dropdown.Item>White</Dropdown.Item>
              <Dropdown.Item>Red</Dropdown.Item>
              <Dropdown.Item>Separated link</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              variant="outline-secondary"
              title="Size"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item>S</Dropdown.Item>
              <Dropdown.Item>M</Dropdown.Item>
              <Dropdown.Item>XL</Dropdown.Item>
              <Dropdown.Item>XXL</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              variant="outline-secondary"
              title="Price"
              id="input-group-dropdown-1"
            >
              <div className="p-3">
                <Form.Label>Set Price</Form.Label>
                <Form.Range />
              </div>
            </DropdownButton>
          </div>
        </Col>
        <Col sm={9} className="heightFromTop">
          <div className="text-muted" style={{ fontSize: "20px" }}>
            <strong>
              <kbd>32</kbd> Items found
            </strong>
          </div>
          <Row className="mt-3 mb-5">
            <Col className="center mb-3">
              <div className="cardWidth" style={{ width: "250px" }}>
                <Link to="/product">
                  <img
                    src={banner}
                    className="rounded imgSize"
                    height="250"
                    alt=""
                  />
                </Link>

                <div className="d-flex justify-content-between">
                  <div className="mt-1">
                    <strong>$29.95</strong>
                  </div>
                  <div>
                    <button className="btn btn-light mt-2 ms-5">
                      <WishListIcon width="15" height="15" />
                    </button>
                  </div>
                </div>
                <div style={{ marginTop: "-10px" }}>
                  <Link className="link" to="/product">
                    Huetrap
                  </Link>
                </div>
                <div className="text-muted">
                  Men Beige & Black Typography Printed Sustainable T-shirt
                </div>
              </div>
            </Col>
            <Col className="center mb-3">
              <div className="cardWidth" style={{ width: "250px" }}>
                <Link to="/product">
                  <img
                    src={banner}
                    className="rounded imgSize"
                    height="250"
                    alt=""
                  />
                </Link>

                <div className="d-flex justify-content-between">
                  <div className="mt-1">
                    <strong>$29.95</strong>
                  </div>
                  <div>
                    <button className="btn btn-light mt-2 ms-5">
                      <WishListIcon width="15" height="15" />
                    </button>
                  </div>
                </div>
                <div style={{ marginTop: "-10px" }}>
                  <Link className="link" to="/product">
                    Huetrap
                  </Link>
                </div>
                <div className="text-muted">
                  Men Beige & Black Typography Printed Sustainable T-shirt
                </div>
              </div>
            </Col>
            <Col className="center mb-3">
              <div className="cardWidth" style={{ width: "250px" }}>
                <Link to="/product">
                  <img
                    src={banner}
                    className="rounded imgSize"
                    height="250"
                    alt=""
                  />
                </Link>

                <div className="d-flex justify-content-between">
                  <div className="mt-1">
                    <strong>$29.95</strong>
                  </div>
                  <div>
                    <button className="btn btn-light mt-2 ms-5">
                      <WishListIcon width="15" height="15" />
                    </button>
                  </div>
                </div>
                <div style={{ marginTop: "-10px" }}>
                  <Link className="link" to="/product">
                    Huetrap
                  </Link>
                </div>
                <div className="text-muted">
                  Men Beige & Black Typography Printed Sustainable T-shirt
                </div>
              </div>
            </Col>
            <Col className="center mb-3">
              <div className="cardWidth" style={{ width: "250px" }}>
                <Link to="/product">
                  <img
                    src={banner}
                    className="rounded imgSize"
                    height="250"
                    alt=""
                  />
                </Link>

                <div className="d-flex justify-content-between">
                  <div className="mt-1">
                    <strong>$29.95</strong>
                  </div>
                  <div>
                    <button className="btn btn-light mt-2 ms-5">
                      <WishListIcon width="15" height="15" />
                    </button>
                  </div>
                </div>
                <div style={{ marginTop: "-10px" }}>
                  <Link className="link" to="/product">
                    Huetrap
                  </Link>
                </div>
                <div className="text-muted">
                  Men Beige & Black Typography Printed Sustainable T-shirt
                </div>
              </div>
            </Col>
            <Col className="center mb-3">
              <div className="cardWidth" style={{ width: "250px" }}>
                <Link to="/product">
                  <img
                    src={banner}
                    className="rounded imgSize"
                    height="250"
                    alt=""
                  />
                </Link>

                <div className="d-flex justify-content-between">
                  <div className="mt-1">
                    <strong>$29.95</strong>
                  </div>
                  <div>
                    <button className="btn btn-light mt-2 ms-5">
                      <WishListIcon width="15" height="15" />
                    </button>
                  </div>
                </div>
                <div style={{ marginTop: "-10px" }}>
                  <Link className="link" to="/product">
                    Huetrap
                  </Link>
                </div>
                <div className="text-muted">
                  Men Beige & Black Typography Printed Sustainable T-shirt
                </div>
              </div>
            </Col>
            <Col className="center mb-3">
              <div className="cardWidth" style={{ width: "250px" }}>
                <Link to="/product">
                  <img
                    src={banner}
                    className="rounded imgSize"
                    height="250"
                    alt=""
                  />
                </Link>

                <div className="d-flex justify-content-between">
                  <div className="mt-1">
                    <strong>$29.95</strong>
                  </div>
                  <div>
                    <button className="btn btn-light mt-2 ms-5">
                      <WishListIcon width="15" height="15" />
                    </button>
                  </div>
                </div>
                <div style={{ marginTop: "-10px" }}>
                  <Link className="link" to="/product">
                    Huetrap
                  </Link>
                </div>
                <div className="text-muted">
                  Men Beige & Black Typography Printed Sustainable T-shirt
                </div>
              </div>
            </Col>
            <Col className="center mb-3">
              <div className="cardWidth" style={{ width: "250px" }}>
                <Link to="/product">
                  <img
                    src={banner}
                    className="rounded imgSize"
                    height="250"
                    alt=""
                  />
                </Link>

                <div className="d-flex justify-content-between">
                  <div className="mt-1">
                    <strong>$29.95</strong>
                  </div>
                  <div>
                    <button className="btn btn-light mt-2 ms-5">
                      <WishListIcon width="15" height="15" />
                    </button>
                  </div>
                </div>
                <div style={{ marginTop: "-10px" }}>
                  <Link className="link" to="/product">
                    Huetrap
                  </Link>
                </div>
                <div className="text-muted">
                  Men Beige & Black Typography Printed Sustainable T-shirt
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductList;
