import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  clearUpdatedInfoAndError,
  userNamePasswordUpdate,
  userNameUpdate,
  userPasswordUpdate,
  userVarified,
} from "../../store/features/userSlice";

function Profile() {
  const {
    accountVarified,
    userProfile,
    accountVarifiedError,
    userProfileChangeMessage,
    userProfileChangeMessageError,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    let timer1 = setTimeout(() => dispatch(clearUpdatedInfoAndError()), 3000);
    return () => {
      clearTimeout(timer1);
    };
  }, [dispatch, userProfileChangeMessage, userProfileChangeMessageError]);

  const [formData, setFormData] = useState({
    name: "",
    oldPassword: "",
    newPassword: "",
  });

  const UserEmailVerify = (email) => {
    dispatch(userVarified({ email }));
  };

  const handleForm = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (formData.name && !formData.newPassword && !formData.oldPassword) {
      console.log("formData.name:");
      dispatch(
        userNameUpdate({
          name: formData.name,
          email: userProfile.email,
        })
      );
    }

    if (formData.newPassword && formData.oldPassword && !formData.name) {
      console.log(
        "formData.newPassword && formData.oldPassword:",
        formData.newPassword && formData.oldPassword
      );
      dispatch(
        userPasswordUpdate({
          oldPassword: formData.oldPassword,
          newPassword: formData.newPassword,
          email: userProfile.email,
        })
      );
    }

    if (formData.newPassword && formData.oldPassword && formData.name) {
      console.log(
        "formData.newPassword && formData.oldPassword && formData.name:",
        formData.newPassword && formData.oldPassword && formData.name
      );
      dispatch(
        userNamePasswordUpdate({
          name: formData.name,
          oldPassword: formData.oldPassword,
          newPassword: formData.newPassword,
          email: userProfile.email,
        })
      );
    }
  };
  return (
    <Container>
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          <Row>
            {accountVarified && <kbd className="mt-2">Email sent</kbd>}
            {accountVarifiedError && (
              <kbd className="mt-2">{accountVarifiedError}</kbd>
            )}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder={userProfile.email}
                disabled
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button
                className={
                  userProfile.verified ? "btn btn-success" : "btn btn-primary"
                }
                size="sm"
                disabled={userProfile.verified}
                onClick={() => UserEmailVerify(userProfile.email)}
              >
                {userProfile.verified ? "Verified" : "Verify"}
              </Button>
            </div>
          </Row>

          {userProfileChangeMessage && (
            <h6 className="mt-3 mb-2">
              <kbd>{userProfileChangeMessage}</kbd>
            </h6>
          )}

          {userProfileChangeMessageError && (
            <h6 className="mt-3 mb-2">
              <kbd>{userProfileChangeMessageError}</kbd>
            </h6>
          )}

          <Form className="mt-3">
            <Form.Group className="mb-3 mt-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={userProfile.name}
                name="name"
                onChange={handleForm}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Old Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Old Password"
                name="oldPassword"
                onChange={handleForm}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="New Password"
                name="newPassword"
                onChange={handleForm}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={formSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
}

export default Profile;
