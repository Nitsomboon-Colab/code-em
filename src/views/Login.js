import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

// import "./Login.css";

// Login container styles
import styled from 'styled-components';
const LoginContainer= styled(Container)`
  text-align: center;
  margin-top: 5vh;

  div.row {
    justify-content: center;
    & h4 {
      font-weight: bolder;
    }
    & hr {
      width: 100%;
    }
  }

  .btn-and-forms {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 50vh;
    img {
      max-width: 36px;
      margin-left: 1vw;
      margin-right: 2vw;
    }
    button {
      text-align: left !important;
      box-shadow: 2px 2px 4px gray;
      &:hover {
        box-shadow: 6px 6px 0px #10162F;
        transform: translate(-2px, -2px);
      }
      &:last-child {
        text-align: center !important;
        background-color: #FA8100;
        border-color: #FA8100;
      }
    }
  }
  input {
    border-color: gray;
    border-width: 2px;
    &:focus {
      border-color: #10162F;
      box-shadow: 6px 6px 0px #10162F;
      transform: translate(-2px, -2px);
    }
  }
`;

const Login = () => {
  return (
    <>
      <LoginContainer>
        <Row>
          <Col xs="6">
            <h4>{`Log In To Your Code</em> Account!`}</h4>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col md ="6" lg="4" className="contentContainer">

            {/* Content (ie. buttons, form) */}
            <div className="btn-and-forms">
              {/* Upper buttons (social) */}
              <Button variant="primary" size="md" >
                <Image src="facbookIco.png"/> Continue with Facebook
              </Button>
              <Button variant="light" size="md">
                <Image src="googleIco.png"/>Continue with Google
              </Button>
              <Button variant="light" size="md" >
                <Image src="githubIco.png"/>Continue with Github
              </Button> 

              {/* ID and password form */}
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email"/>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="Password" placeholder="Password" />
              </Form.Group>

              {/* Login button */}
              <Button variant="primary" size="lg" >LOGIN</Button>
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
      </LoginContainer>
    </>
  );
}

export default Login;
