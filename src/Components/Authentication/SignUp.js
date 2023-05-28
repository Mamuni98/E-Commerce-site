import { Container, Form, Button, Card } from "react-bootstrap";
import React, { useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useNavigate();
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC6OdLY9C0kOd2mxJvavlBZUH89ThT4u9I",
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      );
      console.log(response);
      if (response) {
        alert("Successfully Signed up");
      }

      history('/logIn');
      
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
        style={{ boxShadow: "0 2px 8px rgba(12, 89, 108, 0.26)", backgroundColor:"rgb(234, 248, 250)"}}
      >
        <h2 className="text-center mb-5">SIGN UP</h2>
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
              <Button variant="info" className="text-white mb-3" type="submit">
                Sign Up
              </Button>
            ) : (
              <p style={{ color: "rgb(10, 216, 248)" }}>Sending request..</p>
            )}
            <p>
              Already have an account?{" "}
              <Link to='/logIn'><Button variant="link" className="text-info">
                Go to Log In
              </Button></Link>
            </p>
          </div>
        </Form>
      </Card>
    </Container>
  );
};
export default SignUp;
