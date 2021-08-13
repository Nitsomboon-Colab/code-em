import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import ExploreCourse from "../components/ExploreCourse";
import OfficialPlan from "../components/OfficialPlan";
import "./Landing.css";

const Landing = () => {
  return (
    <>
      <Container className="landingContainer">

        {/* Sign Up Row */}
        <Row className="signupBox" >

          {/* Image to the left of the sign up */}
          <Col xs={12} md={6} xl={4}>
            <Image src="LandingImg1.jpg" className="topImg" fluid/>
          </Col>

          <Col xs={12} md={6} xl={6} className="mt-4">
            <h2>
              เริ่มเขียนโปรแกรมกับเราวันนี้ <br/>
              สมัครฟรีได้เลย
            </h2>

            {/* Sign Up form */}
            <Form>
              <Form.Group className="mt-4 mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" className="signUpInput"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" className="signUpInput"/>
              </Form.Group>

              <Button variant="primary" type="submit" style={{minWidth:"8vw"}}>
                Sign Up
              </Button>
          </Form>

          {/* Discliamer */}
          <div style={{marginTop:"6vh"}}>
            <p className="mb-2">Code'em <a href="#">Terms of Service</a> {"&"} <a href="#">Privacy Policy.</a></p>
            <h5>Or sign up using: </h5>
            <div className="icoBox">
              <Image src="facbookIco.png" className="icoImg"/>
              <Image src="googleIco.png" className="icoImg"/>
              <Image src="githubIco.png" className="icoImg"/>
            </div>
          </div>
          </Col>
        </Row>

        {/* Course selection */}
        <Row className="mt-5 mb-5">
          <h3>ตัวเลือกคอร์สที่หลากหลาย</h3>
          <div className="divider"></div>

          {/* Explore course tap*/}
          <ExploreCourse />
        </Row>

      </Container>

      {/* Secnond section */}
      <Container className="landing-goal-container" fluid>

        {/* Landing Goal */}
        <Row className="goalFirstRow">
          <div>
            <p>เริ่มการเขียนโปรแกรมกับเรา</p>
            <h5>
              เป้าหมายของเราคือการนำทางให้กับคุณ เพื่อทำให้การเรียนมีความเรียบง่ายขึ้น <br/>
              หมดกับปัญหาที่ไม่รู้ว่าควรจะเริ่มต้นเรียนจากไหนด้วยการเรียนกับเรา
            </h5>
          </div>
        </Row>

        <Row className="goalSecondRow">
          <Col id="goal" xs={12} md={4}>
            <h4><center>Learn</center></h4>
            <p>
              เรียนการเขียนโปรแกรมที่สอนอย่างครอบคลุม เริ่มตั้งแต่หัวข้อที่เบสิคที่สุด ไปจนถึงหัวข้อระดับสูง
            </p>
            <p>
              เลือกที่จะเรียนกับเรา หรือซื้อคอร์สกับผู้สอนที่ทำงานร่วมกับเรา
            </p>
          </Col>

          <Col id="goal" xs={12} md={4}>
            <h4><center>Practice</center></h4>
            <p>
              ฝึกทักษะการเขียนโปรแกรม ไปกับโจทย์ที่สมจริง ทั้งการทำ Quiz ท้ายบทเรียน หรือ Challenge ที่มีการอัพเดทใหม่ทุกเดือน
            </p>
          </Col>

          <Col id="goal" xs={12} md={4}>
            <h4><center>Community</center></h4>
            <p>
              เข้าร่วมสังคมนักเขียนโค้ดเพื่อหาเพื่อนเรียนไปด้วยกัน หรือจะเข้ามาสอบถามปัญหาเกี่ยวกับเรื่องโค้ดที่คุณมี
              พร้อมแลกเปลี่ยน อัพเดทข่าวสารความรู้ในวงการ ไปกับเราได้เลย
            </p>
          </Col>
        </Row>
        
      </Container>

      {/* Yellow container */}
      <Container className = "landing-guide-container" fluid> 
        <Row>
          {/* Spacer */}
          <Col xs={0} sm={1} ></Col>
          <Col xs={12} sm={11}>
            <div>
              <p>
                เลือกวิธีการเรียนที่เหมาะสมกับคุณ
              </p>
              <h2>เลือกที่จะเรียนกับเรา</h2>
              <p>
                คอร์สที่มีป้ายว่า Official จะเป็นคอร์สที่ทาง Code'em เป็นคนจัดสอนเอง <br/>
                โดยคอร์สที่ติดป้าย Pro ด้วยนั้นจะเป็นรูปแบบจ่ายรายเดือนเพื่อเข้าถึง
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={0} sm={1}></Col>
          <Col xs={12} sm={3} >
            <div className="mb-2" >
                <Button variant = "primary" size = "md">
                    เช็คคอร์สโดยเรา
                </Button>{' '}   
            </div> 
          </Col>
          <Col xs={12} sm={7} className="instrcutorSide">
            <div>
              <h2>ซื้อคอร์สจากผู้สอน</h2>
              <p>
                  คอร์สที่มีป้ายว่า Intructor คือคอร์สที่สอนโดยผู้สอนท่านอื่น <br/>
                  ที่นำคอร์สมาขายบนแพลตฟอร์มของเรา
              </p>
              <div className ="butOthers">
                <Button variant = "primary" size = "md">
                  เช็คคอร์สจากผู้สอน
                </Button>
              </div>
            </div>
          </Col>
        </Row>

      </Container>

      {/* Official plan */}
      <Container className="official-plan-container">
        <OfficialPlan/>
      </Container>
    </>
  );
}

export default Landing