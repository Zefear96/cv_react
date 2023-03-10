import React from "react";
import { Button, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <div className="mt-4 text-center">
        <h3>My contact</h3>
        <p>Phone: +0(999) 666 666</p>
        <p>Email: arara@gmail.com</p>
        <p>Address: St.Luis, Tradelakes</p>
      </div>

      <Form className="mt-5 w-50 d-flex justify-content-center flex-column m-auto ">
        <h3 className="text-center">Write me</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Contact;
