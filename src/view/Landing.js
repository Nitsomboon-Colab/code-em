import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import "./Landing.css";

const Landing = () => {
  return (
    <Container className="landingContainer">

      {/* Sign Up Row */}
      <Row className="signupBox" >
        <Col md={12} lg={5}>
         <Image src="LandingImg1.jpg" className="topImg"/>
        </Col>

        <Col md={12} lg={6}>
          <h1>เริ่มเขียนโปรแกรมในรูปแบบใหม่กับเราสมัครฟรีได้เลย</h1>

          {/* Sign Up form */}
          <Form>
            <Form.Group className="mt-4 mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" style={{minWidth:"8vw"}}>
              Sign Up
            </Button>
        </Form>

        {/* Discliamer */}
        <div style={{marginTop:"6vh"}}>
          <p className="mb-2">Code'em <a href="#">Terms of Service</a> & <a href="#">Privacy Policy.</a></p>
          <h5>Or sign up using: </h5>
          <div className="icoBox">
            <Image src="facbookIco.png" className="icoImg"/>
            <Image src="googleIco.png" className="icoImg"/>
            <Image src="githubIco.png" className="icoImg"/>
          </div>
        </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <h3>ตัวเลือกคอร์สที่หลากหลาย</h3>
        <div className="divider"></div>

        <Nav variant="tabs" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link eventKey="link-1">Python</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Excel</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">Web Development</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4">JavaScript</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-5">Data Science</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-6">AWS Certification</Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>

    </Container>
  )
}

export default Landing
