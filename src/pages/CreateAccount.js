import { useEffect, useState } from "react";
import { Col, Container, Row, Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createAccount } from "../store/features/userSlice";

function CreateAccount() {
  const { accountCreated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (accountCreated) {
      navigate("/");
    }
  }, [accountCreated, navigate]);

  const handleForm = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    if (name === "" || email === "" || password === "") {
      return alert("Please fill");
    }
    dispatch(createAccount({ name, email, password }));
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Container>
        <Row style={{ marginTop: "120px" }}>
          <Col sm={4}></Col>
          <Col sm={4}>
            <Card className="shadow-sm">
              <Card.Header>Gullar</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      name="name"
                      onChange={handleForm}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      onChange={handleForm}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleForm}
                    />
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button
                      variant="primary"
                      type="submit"
                      size="md"
                      onClick={submitForm}
                    >
                      Create new account
                    </Button>
                  </div>
                </Form>
              </Card.Body>
              <Link to="/login" className="text-center mb-3">
                Login
              </Link>
              <Link to="/forgotpassword" className="text-center mb-3">
                Forgot Password
              </Link>
            </Card>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </>
  );
}

export default CreateAccount;
