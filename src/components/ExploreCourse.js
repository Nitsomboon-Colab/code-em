// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// import { BsFillStarFill } from "react-icons/bs";
// // import "./ExploreCourse.css";

// // Explore course styles
// import styled from "styled-components";
// const ExploreCourseStyles = styled.div`
//   /* To be remove (replace with a proper template in the future) */
//   #sub-title1 {
//     font-size: 15px;
//   }

//   #sub-title2 {
//     font-size: 14px;
//     color: #6e6e6e;
//   }

//   /* Nav tabs */
//   .nav-tabs {
//     border-bottom: none;

//     button {
//       background-color: transparent !important;
//     }
//     .nav-link {
//     color: black !important;
//     border: none !important;
//     font-size: large;
//     }
//     .nav-link.active{
//       font-weight: bold;
//     }
//   }

//   /* Tab content pane */
//   .tab-content {
//     border: 1px solid #a0a0a0;
//     border-radius: 20px;
//     padding: 2%;

//     /* Tab pane ie. acutal content */
//     .tab-pane {
//       margin: 0 2vw;
//       & > h4 {
//         font-weight: bold;
//       }
//       .course-review {
//         display: inline-flex;
//         align-items: center;
//         color: #FB8200;
//       }
//       .course-price {
//         font-weight: 700;
//       }
//     }

//     /* Courses card */
//     .card {
//       margin-top: 4vh;
//       .card-title {
//         font-weight: bold;
//       }
//       & > img {
//         object-fit: contain;
//         max-width: auto;
//       }
//     }
//   }
// `;

// const ExploreCourse = () => {
//   return (
//     <ExploreCourseStyles>
//       <Tabs defaultActiveKey="python" className="mb-2">
//         <Tab eventKey="python" title="Python">
//           {/* Content header */}
//           <h4>อัพสกิลการเขียนโค้ดด้วยภาษา Python</h4>

//           {/* Content text */}
//           <p>
//             Python เป็นหนึ่งในภาษาที่นิยมใช้กับ machine learning หรือ data engineering ซึ่งเป็นหัวข้อที่มาแรงมากในช่วงที่ผ่านมา.
//             Python ยังมีความสามารถในการใช้สร้างแอพโทรศัพท์, เดสก์ท็อป และเป็นที่นิยมในการใช้สร้างเว็บไซต์ด้วยเช่นกัน เรียกได้ว่าเป็นภาษาที่ทำได้หลายอย่างมากๆ
//           </p>

//           {/* Explore more button */}
//           <Button 
//           variant="outline-primary"
//           >
//             <strong>ศึกษาเพิ่มเติมเกี่ยวกับ Python</strong>
//           </Button>

//           {/* Related course cards */}
//           <Row>
//             <Col md={6} lg={3}>
//               <Card className="course-card">
//                 <Card.Img variant="top" src="courses/py1.jpg"/>
//                 <Card.Body>
//                   <Card.Title>Python 101 ปูพรมพื้นฐานเริ่มจาก 0</Card.Title>
//                   <Card.Text>
//                     <span id="sub-title2">Wachirachai Nitsomboon</span> <br/>
//                     <span id="sub-title1" className="course-review">
//                       <FullFiveStars />
//                     </span> <br/>
//                     <span className="course-price">
//                       0 THB
//                     </span> <br/>
//                     Official
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col md={6} lg={3}>
//               <Card className="course-card">
//                 <Card.Img variant="top" src="courses/py2.jpg"/>
//                 <Card.Body>
//                   <Card.Title>Python Masterclass สรุปหัวข้อและการนำไปใช้จริง</Card.Title>
//                   <Card.Text>
//                     <span id="sub-title2">Wachirachai Nitsomboon</span> <br/>
//                     <span id="sub-title1" className="course-review">5.0 </span> <br/>
//                     0 THB <br/>
//                     Official
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col md={6} lg={3}>
//               <Card className="course-card">
//                 <Card.Img variant="top" src="courses/py4.jpg"/>
//                 <Card.Body>
//                   <Card.Title>Learn Python for data enginerring</Card.Title>
//                   <Card.Text>
//                     <span id="sub-title2">Pronprom Kumthong</span> <br/>
//                     <span id="sub-title1">4.5 star star star star star</span> <br/>
//                     1,200 THB <br/>
//                     Official
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col md={6} lg={3}>
//               <Card className="course-card">
//                 <Card.Img variant="top" src="courses/py5.jpg"/>
//                 <Card.Body>
//                   <Card.Title>Python in practice เรียน Python เพื่อใช้ในชีวิตจริง</Card.Title>
//                   <Card.Text>
//                     <span id="sub-title2">Nattaphong Samipak</span> <br/>
//                     <span id="sub-title1">4.6 star star star star star</span> <br/>
//                     2,000 THB <br/>
//                     Official
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Tab>

//         <Tab eventKey="excel" title="Excel">
//           <h4>อัพสกิลการเขียนโค้ดด้วยภาษา Python</h4>
//         </Tab>
//         <Tab eventKey="web-dev" title="Web Development">
//           <h4>อัพสกิลการเขียนโค้ดด้วยภาษา Python</h4>
//         </Tab>
//         <Tab eventKey="js" title="JavaScript">
//           <h4>อัพสกิลการเขียนโค้ดด้วยภาษา Python</h4>
//         </Tab>
//         <Tab eventKey="data-sci" title="Data Science">
//           <h4>อัพสกิลการเขียนโค้ดด้วยภาษา Python</h4>
//         </Tab>
//         <Tab eventKey="aws" title="AWS Certification">
//           <h4>อัพสกิลการเขียนโค้ดด้วยภาษา Python</h4>
//         </Tab>
//       </Tabs>
//     </ExploreCourseStyles>
//   );
// }

// const FullFiveStars = () => {
//   return (
//     <>
//       <span style={{marginRight: "1vw"}}>
//         5.0
//       </span>
//       <BsFillStarFill />
//       <BsFillStarFill />
//       <BsFillStarFill />
//       <BsFillStarFill />
//       <BsFillStarFill />
//     </>
//   );
// };

// export default ExploreCourse
