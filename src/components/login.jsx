import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Login = ({handleSubmit}) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

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
              <Form.Control type="email" placeholder="john@example.com" name="email" onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" >
              <Form.Label>Password</Form.Label><Link to="/forgot" className="float-right">Forgot your password</Link>
              <Form.Control type="password" placeholder="*********" name="pass" onChange={(e) => setPass(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>

            <Button className="btn btn-primary sign-in" onClick={() => handleSubmit(email, pass)}>
              Sign in
            </Button>
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

const mapStateTopProps = state =>({
      
})

const mapDispatchToProps = dispatch =>({
    handleSubmit(email, pass){
      dispatch({
        type: "si login",
        email,
        pass
      })
    }
})


export default connect(mapStateTopProps, mapDispatchToProps)(Login)
