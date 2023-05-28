import { Container, Form, Button, Card } from "react-bootstrap";
import React, { useRef } from "react";

const ContactUs = (props) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const details = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    props.userDetail(details);
    event.target.reset();
  };
  return (
    <Container className="w-50">
      <Card
        border="info"
        className="m-5 p-3"
        style={{ boxShadow: "0 2px 8px rgba(12, 89, 108, 0.26)" }}
      >
        <h2 className="text-center mb-4">CONTACT US</h2>
        <Form onSubmit={formSubmitHandler}>
          <Form.Group className="mb-3" controlId="formUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" ref={nameRef} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
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
          <Button variant="info" className="text-white" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
};
export default ContactUs;
