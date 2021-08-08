import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./Landing.css";

const Landing = () => {
  return (
    <Container>
      <Row>
        <Col xs={4}>
         <Image src="LandingImg1.jpg" rounded />
        </Col>
        <Col xs={8}>
          <h4>เริ่มเขียนโปรแกรมในรูปแบบใหม่กับเราสมัครฟรีได้เลย</h4>
        </Col>
      </Row>
    </Container>
  )
}

export default Landing
