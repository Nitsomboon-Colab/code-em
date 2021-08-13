import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import "./Login.css";

const Login = () => {
  return (
    <>
      <Container style={{marginTop: "5vh"}}>
        <Row className="justify-content-center">
          <Col xs="6" className="contentHeader">
            <h4>{`Log In To Your Code</em> Account!`}</h4>
            <hr className="signUpDivider"/>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-center">
          <Col md ="6" lg="4" className="contentContainer">
            {/* <h4>Log In To Your Code'em Account!</h4>
            <hr className="signUpDivider"/> */}

            {/* Content (ie. buttons, form) */}
            <div className="btnForm">
              <Button variant="primary" size="md" ><Image src="facbookIco.png"/> Continue with Facebook</Button>
              <Button variant="light" size="md"><Image src="googleIco.png"/>Continue with Google</Button>
              <Button variant="light" size="md" ><Image src="githubIco.png"/>Continue with Github</Button> 
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email"/>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="Password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" size="lg" id="login">LOGIN</Button>
            </div>

            {/* Forget password and sign up links */}
            <div style={{textAlign: "center"}}>
              <p style={{display: "inline"}}>or </p>
              <a href="#" style={{display: "inline"}}>Forget Password</a>
              <br/>
              <p style={{display: "inline"}}>Don't have an account? </p>
              <a href="#" style={{display: "inline", textDecoration: "none", fontWeight:"bolder"}}> Sign up</a>
            </div>

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
