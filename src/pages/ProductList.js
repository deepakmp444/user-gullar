import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import banner from "../assests/product/bannerv1.png";
import WishListIcon from "../components/Icons/WishListIcon";
import { fetchProductList } from "../store/features/productSlice";
import "../styles/productList.css";
function ProductList() {
  const { name } = useParams();
  console.log("name:", name);
  const productList = useSelector((state) => state.product.productList);
  console.log("productList:", productList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductList(name));
  }, [dispatch, name]);

  // const
  return (
    <>
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
          <Col
            sm={3}
            className="fixed-bottom hideInDesktop"
            style={{ marginTop: "40px" }}
          >
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
            {productList.length === 0 ? (
              <h1>Loading ...</h1>
            ) : (
              <>
                <div className="text-muted" style={{ fontSize: "20px" }}>
                  <strong>
                    <kbd>{productList.length}</kbd> {name} found
                  </strong>
                </div>
                <Row className="mt-3 mb-5">
                  {productList.map((value) => {
                    return (
                      <Col key={value.id} className="center mb-3">
                        <div className="cardWidth" style={{ width: "250px" }}>
                          <Link to={`${value.id}`}>
                            <img
                              src={value.ProductPropJson[0].img}
                              className="rounded imgSize"
                              height="250"
                              alt=""
                            />
                          </Link>
                          <div className="d-flex justify-content-between">
                            <div className="mt-1">
                              <strong>
                                {Math.min(
                                  ...value.ProductPropJson.map(
                                    (product) => product.price
                                  )
                                )}
                              </strong>
                            </div>
                            <div>
                              <button className="btn btn-light mt-2 ms-5">
                                <WishListIcon width="15" height="15" />
                              </button>
                            </div>
                          </div>
                          <div style={{ marginTop: "-10px" }}>
                            <Link
                              className="link"
                              to={`/product/${value.SubCategory}/${value.id}`}
                            >
                              {value.productHeading}
                            </Link>
                          </div>
                          <div className="text-muted">
                            {value.productSubheading}
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductList;
