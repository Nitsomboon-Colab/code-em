import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Form from 'react-bootstrap/Form';

import './EditProfile.css';

const EditProfile = () => {
  return (
    <>
      {/* Content header */}
      <Container style={{marginTop: "5vh"}}>
        <Row>
          <Col sm={12} className="contentHeader">
            <h2>{`Edit Profile`}</h2>
            <hr className="EidieProfile"/>
          </Col>
        </Row>
      </Container>

      {/* Content Profile details and from */}
      <Container style={{marginTop: "5vh"}}>
        <Row>
          <Col sm={2} className="contentProfile">
            <h3>{`Profile details`}</h3>
          </Col>
          <Col sm={3} className="text-center">
            <Image src="profileImg.png" class="rounded mx-auto d-block"/>
            <a href="#" style={{textAlign: "center", fontWeight:"bolder"}}>Choose Photo</a>
          </Col>
          <Col sm={4}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Content form */}
      <Container style={{marginTop: "3vh"}}>
        <Row className="justify-content-center">
          <Col sm={6} className="contentContainer">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Bio</Form.Label>
                <Form.Control placeholder="Share something about yourself (200 characters max)" as="textarea" rows={3} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="City, Country" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicGithub">
                <Form.Label>Github</Form.Label>
                <Form.Control type="text" placeholder="..." />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLinkedIn">
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control type="text" placeholder="..." />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPersonal website">
                <Form.Label>Personal website</Form.Label>
                <Form.Control type="text" placeholder="..." />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EditProfile;
