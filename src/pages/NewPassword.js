import { useState } from "react";
import { Col, Container, Row ,Button, Card, Form} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  userPasswordChange,
} from "../store/features/userSlice";

function NewPassword() {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const { id } = useParams();
  
  const { PasswordChangeInfo, PasswordChangeInfoError } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const handlePassword = (e) => {
    e.preventDefault();
    if (!password) {
      return alert("Please enter password");
    }
    if (password !== rePassword) {
      return alert("Password and Re Password don't match");
    }
    dispatch(userPasswordChange({ password, rePassword, id }));
  };

  return (
    <Container>
      <Row style={{ marginTop: "100px" }}>
        <Col sm={4}></Col>
        <Col sm={4}>
          <Card className="shadow-sm">
            <Card.Header>Change your password</Card.Header>
            <Card.Body>
              <h6 className="mt-2 mb-2">
                {PasswordChangeInfoError && (
                  <kbd>{PasswordChangeInfoError}</kbd>
                )}
              </h6>
              <h6 className="mt-2 mb-2">
                {PasswordChangeInfo && <kbd>{PasswordChangeInfo}</kbd>}
              </h6>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRePassword">
                  <Form.Label>Re Password</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter re-password"
                    onChange={(e) => setRePassword(e.target.value)}
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" size="md" onClick={handlePassword}>
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
}

export default NewPassword;
