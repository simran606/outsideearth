import React from 'react';
import '../../styles/contact.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Landingpage() {
  return (
  <div>
      <img className='contactimg' src='../../../Images/c.jpg' alt='serviceimg'/>
      <h1 className='contacth1'>Contact Us</h1>
      <Form className="formdiv">
      <div className="formsubdiv">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <br/>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <br/>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contact</Form.Label>
          <br/>
          <Form.Control type="number" placeholder="Enter phone number" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <br/>
          <Form.Control type="textarea" placeholder="Write here..." />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
        </div>
      </Form>
  </div>);
}

export default Landingpage;
