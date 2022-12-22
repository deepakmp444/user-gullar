import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };
  
  return (
    <Container>
      <Row style={{ marginTop: "100px" }}>
        <Col sm={4}></Col>
        <Col sm={4}>
          <Card className="shadow-sm">
            <Card.Header>Forgot Password</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary" size="md">
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
            <button className="btn btn-light mb-3" onClick={onClickBack}>
              Back
            </button>
          </Card>
        </Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
}

export default ForgotPassword;
