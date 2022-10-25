import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function Home() {

  const getData = () => {
    console.log("We got clicked!");
    window.location.assign("http://localhost:3000/Quiz");
  }

return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Display Name</Form.Label>
        <Form.Control type="displayname" placeholder="Enter your display name!" />
        <Form.Text className="text-muted">
          Enter your Display Name and proceed!
        </Form.Text>
      </Form.Group>
      <Button onClick={getData}  variant="primary" type="submit">
        Submit
      </Button>
    </Form>

  );
}

  
