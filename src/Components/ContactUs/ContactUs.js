import { Container, Form, Button, Card } from "react-bootstrap";
import React, { useRef } from "react";
import axios from "axios";
const ContactUs = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const details = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      number: phoneRef.current.value,
    };
    userDetail(details);
    event.target.reset();
  };
  const userDetail = async (detail) => {
    try {
      //console.log(detail);
      const response = await axios.put(
        "https://e-commerce-cad78-default-rtdb.firebaseio.com/e-commerce.json",
        detail
      );
      console.log(response.data);
      if (response) {
        alert("We'll contact you as soon as possible");
      }
    } catch (error) {
      console.log(error);
    }
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
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Enter your mobile number"
              ref={phoneRef}
            />
          </Form.Group>
          <div className="text-center">
            <Button variant="info" className="text-white" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};
export default ContactUs;
