import { Container, Col, Row,Button } from "react-bootstrap"
import "./LandingYell.css"

const LandingYell = () => {
    return (
        <Container className = "bg-2" fluid> 
            <Row>
                <Col xs = {1}></Col>
                <Col className = "colMe" xs = {6} >
                    <div className = "couseMe">
                        <p>
                            เลือกวิธีการเรียนที่เหมาะสมกับคุณ
                        </p>

                        <h3 className = "hMe">
                            เลือกที่จะเรียนกับเรา
                        </h3>

                        <p>
                            คอร์สที่มีป้ายว่า Official เป็นคอร์สที่สอนโดยเรา โดยคอร์สที่ติดคำว่า Pro นั้นจะเป็นรูปแบบจ่ายรายเดือน
                        </p>
                    </div>

                    

                </Col>
            </Row>

            <Row>
                <Col xs = {1}></Col>
                <Col xs = {5}>
                    <div className="mb-2" >
                        <Button variant = "primary" size = "sm">
                            เช็คคอร์สโดยเรา
                        </Button>{' '}   
                    </div> 
                </Col>
                <Col className = "colOther" xs = {5} >
                    <div>
                        <h3 className = "couseOthers">
                            ซื้อคอร์สจากผู้สอน
                        </h3>

                        <p className = "aboutOthers">
                            คอร์สที่มีป้ายว่า Intructor คือคอร์สที่สอนโดยผู้สอนท่านอื่นที่นำคอร์สมาขายบนแพลตฟอร์มของเรา
                        </p>

                        <div className ="butOthers">
                            <Button variant = "primary" size = "sm">
                                เช็คคอร์สจากผู้สอน
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default LandingYell
