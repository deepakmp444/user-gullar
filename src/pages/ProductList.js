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
import { Link, useParams } from "react-router-dom";
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

  return (
    <>
      <Container>
        <Row style={{ marginTop: "80px" }}>
          <Col sm={12} className="heightFromTop">
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
                              <Link
                                className="link"
                                to={`/product/${value.SubCategory}/${value.id}`}
                              >
                                {value.productHeading}
                              </Link>
                            </div>
                            <div className="mt-1">
                              <strong>
                                <span className="text-success">
                                  Rs{" "}
                                  {Math.min(
                                    ...value.ProductPropJson.map(
                                      (product) => product.price
                                    )
                                  )}
                                </span>
                              </strong>
                            </div>
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
