import React from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import img1 from "../../assests/product/bannerv1.png";
function OrderCard({ value }) {
  return (
    <Card className="p-3 mb-3 bg-light">
      <Row>
        <Col sm={6}>
          <div>
            <strong>Order Id</strong>: {value.id}
            <span className="text-success"> &#x2022;{value.orderStatus}</span>
          </div>
          <div className="text-muted">Date: {value.createdAt}</div>
        </Col>
        <Col sm={6}>
          <Button variant="outline-danger" size="sm">
            Cancel order
          </Button>{" "}
          <Button
            variant="primary"
            size="sm"
            disabled={`value.trackingId === null`}
          >
            Track order
          </Button>{" "}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={4}>
          <div className="text-muted">Contact</div>
          <div>Name: {value.OrderAddress.name}</div>
          <div>Phone: {value.OrderAddress.phone}</div>
          <div>Email: {value.OrderAddress.email}</div>
        </Col>
        <Col sm={4}>
          <div className="text-muted">Shipping address</div>
          <div>{value.OrderAddress.landmark}</div>
          <div>{value.OrderAddress.city}</div>
          <div>{value.OrderAddress.state}</div>
          <div>{value.OrderAddress.pincode}</div>
        </Col>
        <Col sm={4}>
          <div className="text-muted">Payment</div>
          <div>
            <h6>
              <Badge bg="success">
                {value.paymentStatus === "true" ? "Success" : "Refunded"}
              </Badge>
            </h6>
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        {value.ProductOrderList.map((value, index) => {
          return (
            <Col sm={4} className="mb-2">
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded"
                    src={value.imgUrl}
                    height="50"
                    width="50"
                    alt="loading"
                  />
                </div>
                <div className="ms-3">
                  <div>{value.heading}</div>
                  <div>{value.subHeading}</div>
                  <div className="d-flex">
                    <div>{value.color}</div>
                    <div className="ms-2">{value.size}</div>
                  </div>
                  <div className="d-flex">
                    <div>QTY: {value.qty}</div>
                    <div className="ms-2">Price: {value.price}</div>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}

        {/* <Col sm={4} className="mb-2">
          <div className="d-flex">
            <div className="d-flex align-items-center">
              <img
                className="rounded"
                src={img1}
                height="50"
                width="50"
                alt="loading"
              />
            </div>
            <div className="ms-3">
              <div>Heading</div>
              <div>subHeadinhg</div>
              <div className="d-flex">
                <div>Color</div>
                <div className="ms-2">Size</div>
              </div>
              <div className="d-flex">
                <div>Qty</div>
                <div className="ms-2">Price</div>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={4} className="mb-2">
          <div className="d-flex">
            <div className="d-flex align-items-center">
              <img
                className="rounded"
                src={img1}
                height="50"
                width="50"
                alt="loading"
              />
            </div>
            <div className="ms-3">
              <div>Heading</div>
              <div>subHeadinhg</div>
              <div className="d-flex">
                <div>Color</div>
                <div className="ms-2">Size</div>
              </div>
              <div className="d-flex">
                <div>Qty</div>
                <div className="ms-2">Price</div>
              </div>
            </div>
          </div>
        </Col> */}
      </Row>
    </Card>
  );
}

export default OrderCard;
