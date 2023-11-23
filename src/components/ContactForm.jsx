import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import './ContactForm.css'
import { Form, FormGroup, Row, Col, Button } from "react-bootstrap";

const ContactForm = () => {

  const [state, handleSubmit] = useForm("mleyyran")
  const [contactPressed, setContactPressed] = useState(false)

  if (state.succeeded) {
    return <p>Thanks for contacting</p>;
  }



  return (

    <Form onSubmit={handleSubmit} className="contact-form">


      <FormGroup as={Col} className="mb-3 mt-3" controlId="username">
        <Form.Label className="form-label">Your Name</Form.Label>
        <Form.Control type="text" name="username" />
        <ValidationError prefix="Name" field="username" errors={state.errors} />
      </FormGroup>

      <FormGroup as={Col} className="mb-3 mt-3" controlId="email">
        <Form.Label className="form-label">Email</Form.Label>
        <Form.Control type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </FormGroup>

      <FormGroup className="mb-3 mt-3" controlId="message">
        <Form.Label className="form-label">Message</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </FormGroup>

      <Button variant="secondary" type="submit" disabled={state.submitting}>
        Submit
      </Button>


    </Form>


  );
}

export default ContactForm;
