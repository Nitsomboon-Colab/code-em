import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BsFillStarFill } from "react-icons/bs";
import "./ExploreCourse.css";

const ExploreCourse = () => {
  return (
    <Tabs defaultActiveKey="python" className="mb-2 courseTabs">
      <Tab eventKey="python" title="Python">
      <Container className="tap-pane-container">
        {/* Content header */}
        <h4>อัพสกิลการเขียนโค้ดด้วยภาษา Python</h4>

        {/* Content text */}
        <p>
          Python เป็นหนึ่งในภาษาที่นิยมใช้กับ machine learning หรือ data engineering ซึ่งเป็นหัวข้อที่มาแรงมากในช่วงที่ผ่านมา.
          Python ยังมีความสามารถในการใช้สร้างแอพโทรศัพท์, เดสก์ท็อป และเป็นที่นิยมในการใช้สร้างเว็บไซต์ด้วยเช่นกัน เรียกได้ว่าเป็นภาษาที่ทำได้หลายอย่างมากๆ
        </p>

        {/* Explore more button */}
        <Button 
        variant="outline-primary"
        >
          <strong>ศึกษาเพิ่มเติมเกี่ยวกับ Python</strong>
        </Button>

        {/* Related course cards */}
        <Row>
          <Col md={6} lg={3}>
            <Card className="coursesCard">
              <Card.Img variant="top" src="courses/py1.jpg"/>
              <Card.Body>
                <Card.Title>Python 101 ปูพรมพื้นฐานเริ่มจาก 0</Card.Title>
                <Card.Text>
                  <span id="sub-title2">Wachirachai Nitsomboon</span> <br/>
                  <span id="sub-title1" className="courseReview">
                    <FullFiveStars />
                  </span> <br/>
                  <span className="coursePrice">
                    0 THB
                  </span> <br/>
                  Official
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="coursesCard">
              <Card.Img variant="top" src="courses/py2.jpg"/>
              <Card.Body>
                <Card.Title>Python Masterclass สรุปหัวข้อและการนำไปใช้จริง</Card.Title>
                <Card.Text>
                  <span id="sub-title2">Wachirachai Nitsomboon</span> <br/>
                  <span id="sub-title1" className="courseReview">5.0 </span> <br/>
                  0 THB <br/>
                  Official
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="coursesCard">
              <Card.Img variant="top" src="courses/py4.jpg"/>
              <Card.Body>
                <Card.Title>Learn Python for data enginerring</Card.Title>
                <Card.Text>
                  <span id="sub-title2">Pronprom Kumthong</span> <br/>
                  <span id="sub-title1">4.5 star star star star star</span> <br/>
                  1,200 THB <br/>
                  Official
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="coursesCard">
              <Card.Img variant="top" src="courses/py5.jpg"/>
              <Card.Body>
                <Card.Title>Python in practice เรียน Python เพื่อใช้ในชีวิตจริง</Card.Title>
                <Card.Text>
                  <span id="sub-title2">Nattaphong Samipak</span> <br/>
                  <span id="sub-title1">4.6 star star star star star</span> <br/>
                  2,000 THB <br/>
                  Official
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        </Container>

      </Tab>
      <Tab eventKey="excel" title="Excel">
        <h4>อัพสกิลการเขียนโค้ดด้วยภาษา Python</h4>
      </Tab>
      <Tab eventKey="web-dev" title="Web Development">
        <h4>อัพสกิลการเขียนโค้ดด้วยภาษา Python</h4>
      </Tab>
      <Tab eventKey="js" title="JavaScript">
        <h4>อัพสกิลการเขียนโค้ดด้วยภาษา Python</h4>
      </Tab>
      <Tab eventKey="data-sci" title="Data Science">
        <h4>อัพสกิลการเขียนโค้ดด้วยภาษา Python</h4>
      </Tab>
      <Tab eventKey="aws" title="AWS Certification">
        <h4>อัพสกิลการเขียนโค้ดด้วยภาษา Python</h4>
      </Tab>
    </Tabs>
  )
}

const FullFiveStars = () => {
  return (
    <>
      <span style={{marginRight: "1vw"}}>
        5.0
      </span>
      <BsFillStarFill />
      <BsFillStarFill />
      <BsFillStarFill />
      <BsFillStarFill />
      <BsFillStarFill />
    </>
  );
};

export default ExploreCourse
