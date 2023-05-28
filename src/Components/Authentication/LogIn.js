import { Container, Form, Button, Card } from "react-bootstrap";
import React, { useRef, useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/auth-context";
const LogIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const authCntxt = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC6OdLY9C0kOd2mxJvavlBZUH89ThT4u9I",
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      );
      const token = response.data.idToken;
      authCntxt.LogIn(token);
      if (response) {
        alert("Successfully Logged In");
      }

      history('/store');

    } catch (err) {
      const alertmsg = err.response.data.error.message;
      alert(alertmsg);
    }
    setIsLoading(false);
    event.target.reset();
  };
  return (
    <Container className="w-50">
      <Card
        className="m-5 p-3"
        style={{
          boxShadow: "0 2px 8px rgba(12, 89, 108, 0.26)",
          backgroundColor: "rgb(234, 248, 250)",
        }}
      >
        <h2 className="text-center mb-5">LOG IN</h2>
        <Form onSubmit={formSubmitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              ref={emailRef}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </Form.Group>
          <div className="text-center">
            {!isLoading ? (
              <Button variant="info" className="text-white mb-2" type="submit">
                Log In
              </Button>
            ) : (
              <p style={{ color: "rgb(10, 216, 248)" }}>Sending request..</p>
            )}
            <p>
              New user?{" "}
              <Link to="/signUp">
                <Button variant="link" className="text-info">
                  Create an account
                </Button>
              </Link>
            </p>
          </div>
        </Form>
      </Card>
    </Container>
  );
};
export default LogIn;
