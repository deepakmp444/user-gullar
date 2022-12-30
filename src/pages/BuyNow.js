import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BuyNow() {
  const navigate = useNavigate();
  const backToShop = () => {
    navigate(-1);
  };

  const handleClick = async () => {
    const response = await fetch("http://localhost:9000/api/v1/orders/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 500 }),
    });

    // console
    const order = await response.json();
    const KEY = process.env.REACT_APP_RAZORPAY_KEY;
    console.log('process.REACT_APP_RAZORPAY_KEY:', process.env.REACT_APP_RAZORPAY_KEY)
    console.log("orderID", order);
    const options = {
      key: KEY, // Enter the Key ID generated from the Dashboard
      amount: order.response.amount,
      currency: "INR",
      name: "Deepak",
      description: "Test Transaction",
      image: "https://avatars.githubusercontent.com/u/48873989?v=4",
      order_id: order.response.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:9000/api/v1/paymentvarification",
      prefill: {
        name: "MR D",
        email: "MR@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <Container>
      <Row style={{ marginTop: "100px" }}>
        <Col sm={8} className="mb-5">
          <div>
            <div className="mb-3 text-success">
              <strong>Billing Address</strong>
            </div>
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter phone number"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicState">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="Enter state" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter city" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicLandmark">
                    <Form.Label>Landmark</Form.Label>
                    <Form.Control type="text" placeholder="Enter landmark" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPincode">
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control type="number" placeholder="Enter pincode" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
          <div>
            <h5 className="text-center">OR</h5>
          </div>
          <Card className="p-4 mb-5" style={{ backgroundColor: "#f2f2f2" }}>
            <div className="d-flex">
              <div>
                <Form.Check type="checkbox" />
              </div>
              <div className="ms-2">
                <span>Name</span>
                <span className="ms-2">Phone</span>
                <div>
                  <span>State</span>
                  <span className="ms-2">City</span>
                </div>
                <div>
                  <span>Landmark</span>
                  <span className="ms-2">Pincode</span>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className="p-4 mb-5" style={{ backgroundColor: "#f2f2f2" }}>
            <div>Have coupon?</div>
            <div>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Coupon Code"
                  aria-label="coupon"
                  aria-describedby="coupon"
                />
                <button className="btn btn-primary">Apply</button>
              </InputGroup>
            </div>
          </Card>
          <Card className="p-4" style={{ backgroundColor: "#f2f2f2" }}>
            <div className="d-flex justify-content-between">
              <div>Price:</div>
              <div>
                <strong>$329.00</strong>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div>Discount:</div>
              <div>
                <strong>$329.00</strong>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <div>Total:</div>
              <div>
                <strong>$329.00</strong>{" "}
              </div>
            </div>
            <div className="d-grid gap-2 mt-4">
              <Button variant="primary" size="sm" onClick={handleClick}>
                Make Purchase
              </Button>
              <Button variant="secondary" size="sm" onClick={backToShop}>
                Back to Shop
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BuyNow;
