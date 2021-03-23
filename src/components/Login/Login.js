import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Login() {
  return (
    <div className="d-flex flex-column align-items-center flex-md-row flex-md-wrap justify-content-center">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control type="text" id="username" name="username" required placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control type="password" id="password" name="password" required placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  )
}