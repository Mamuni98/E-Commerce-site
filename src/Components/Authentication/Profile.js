import React, { useRef, useContext } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import AuthContext from "../contexts/auth-context";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const passwordRef = useRef();
  const authCntxt = useContext(AuthContext);
  const history = useNavigate();
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC6OdLY9C0kOd2mxJvavlBZUH89ThT4u9I",
        {
          idToken: authCntxt.token,
          password: passwordRef.current.value,
          returnSecureToken: true,
        }
      );
      if (response) {
        alert("Password changed successfully");
      }
      history("/");
    } catch (err) {
      const errorMsg = err.response.data.error.message;
      alert(errorMsg);
    }
    event.target.reset();
  };
  return (
    <Container className="w-50">
      <Card
        className="w-75 m-5 p-1"
        style={{
          boxShadow: "0 2px 8px rgba(12, 89, 108, 0.26)",
          backgroundColor: "rgb(234, 248, 250)",
        }}
      >
        <Card.Body>
          <div className="text-center mb-3">
            <CgProfile size="100px" />
          </div>
          <h2 className="text-center mb-3">Reset Password</h2>

          <Form className="text-center" onSubmit={formSubmitHandler}>
            <Form.Group id="password">
              <Form.Label>Enter new password</Form.Label>
              <Form.Control type="password" required ref={passwordRef} />
            </Form.Group>
            <Button variant="info" className="mt-3" type="submit">
              Change Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Profile;
