import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { orderAddressReducer } from "../../store/features/addressSlice";

function AddressForm() {
  const { orderAddress } = useSelector((state) => state.address);
  console.log("orderAddress:", orderAddress);
  const dispatch = useDispatch();
  const [formAddress, setFormAddress] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    landmark: "",
    pincode: "",
  });

  const handleAddress = (e) => {
    e.preventDefault();
    setFormAddress({
      ...formAddress,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setFormAddress(orderAddress);
  }, [orderAddress]);
  
  useEffect(() => {
    dispatch(orderAddressReducer(formAddress));
  }, [dispatch, formAddress]);

  return (
    <Form>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formAddress.name}
              onChange={handleAddress}
              placeholder="Enter name"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              name="email"
              value={formAddress.email}
              onChange={handleAddress}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              name="phone"
              value={formAddress.phone}
              onChange={handleAddress}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicState">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter state"
              name="state"
              value={formAddress.state}
              onChange={handleAddress}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              name="city"
              value={formAddress.city}
              onChange={handleAddress}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicLandmark">
            <Form.Label>Landmark</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter landmark"
              name="landmark"
              value={formAddress.landmark}
              onChange={handleAddress}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicPincode">
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter pincode"
              name="pincode"
              value={formAddress.pincode}
              onChange={handleAddress}
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default AddressForm;
