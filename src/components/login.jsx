import React from 'react'
import { Col, Row, Container, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";

const login = () => {
    return (
        <Row noGutters xs={2}>
        <Col md={7} lg={7} className="gris"><img alt="Consumer" width="70%" className="m-auto d-block" src="indice.jpg"/> </Col>
        <Col md={5} lg={5} className="m-auto p-5">
          <Container>
            <h2>Welcome!</h2>
            <p>Please sign-in to your account and start the adventure</p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="john@example.com" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label><Link to="/forgot" className="float-right">Forgot your password</Link>
              <Form.Control type="password" placeholder="*********" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>

            <Link to="/dashboard/users" className="btn btn-primary sign-in">
              Sign in
            </Link>
          </Form>
              <p className="text-center my-4">New on our platform? <Link to="/create"> Create an account </Link> </p> 
          <Row className="px-5 text-center">
                <Col lg={5} className="linea"></Col>
                <Col lg={2} className="leyenda">Or</Col>
                <Col lg={5} className="linea"></Col>
          </Row>
          <Row className="d-block my-3 text-center">
              <li className="fab fa-facebook-square"></li>
              <li className="fab fa-twitter-square"></li>
              <li className="fas fa-envelope-square"></li>
              <li className="fab fa-github-square"></li>
          </Row>
          </Container>
        </Col>
      </Row>
    )
}

export default login
