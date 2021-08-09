import { Col, Container, Row, Button, Image } from "react-bootstrap";
import "./LandingLast1.css";

const LandingLast1 = () => {
    return (
        <Container className = "page">
            <Row >
                <Col xs = {12} sm = {4}>
                    <Image src="img.jpg" rounded />
                </Col>
                        
                <Col xs ={12} sm = {8}>
                    <h2>
                        มาร่วมสอนกับเรา
                    </h2>
                    <p>
                        ร่วมสอนกับเรา สอนในสิ่งที่คุณรัก เราจะจัดเตรียมเครื่องมือการสอน
                        เพื่อให้คุณได้นำไปประกอบหลักสูตรที่คุณสร้าง
                    </p>
                    <Button variant="primary" size = "sm">
                        สมัครเลยวันนี้!
                    </Button>
                </Col>
            </Row>
        </Container>
    )
    
}

export default LandingLast1
