import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";

import { FaGalacticRepublic, FaGalacticSenate, FaFulcrum, FaGitkraken } from "react-icons/fa";

// Home container styles
import styled from 'styled-components';
const HomeContainer = styled(Container)`
  box-sizing: border-box;
  height: calc(100vh - 79px);
`;

// Profile banner styles
const ProfileBanner = styled(Row)`
  background-color: bisque;
  padding: 0 clamp(1rem, 8vw, 10rem);

  .banner-img {
    text-align: center;
  }

  .banner-details {
    margin-top: 2% !important;
  }

  .badges {
    margin: 0 4px;
  }
`;

// Home body styles
const HomeBody = styled(Row)`
  padding: 0 clamp(1rem, 10vw, 10rem);

  .home-nav-col {
    border-right: 1px solid black;
    padding-right: 0 !important;

    nav {
      display: flex;
      flex-direction: column;
    }

    .nav-link.active {
      background-color: blue;
      color: white !important;
    }
  }

  .tab-content {
    border: none !important;

    .accordion {
      margin-top: 3vh;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .accordion-item {
        box-shadow: 0 3px 4px gray;
      }

      .accordion-button:focus {
        box-shadow: none !important;
      }
    }
  }
`;

const Home = () => {
  return (
    <>
      <HomeContainer fluid>
        {/* Profile banner */}
        <ProfileBanner className={'pt-3 pb-3'}>
          {/* Profile rounded img */}
          <Col xs={12} md={2} className="banner-img">
            <Image src="avatar.png" roundedCircle />
          </Col>

          {/* Profile banner details */}
          <Col xs={12} md={10} className="banner-details">
            <h5>
              Wachirachai Nitsomboon
              <span>Pro</span>
            </h5>

            {/* Badges */}
            <div className="badges">
              <FaGalacticRepublic /> 240
              <FaGalacticSenate /> 240
              <FaFulcrum /> 240
              <FaGitkraken /> 240
              127,240
              Rank 8
            </div>
          </Col>
        </ProfileBanner>
      
        {/* Home body */}
        <Tab.Container defaultActiveKey="officialCourse">
          <HomeBody>
            {/* Nav column */}
            <Col xs={12} sm={4} md={3} xl={2} className={'home-nav-col'}>
              <Nav>
                {/* First section */}
                <Nav.Item className={'mt-4'}>
                  Courses
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="officialCourse">Official courses</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="boughtCourse">Bought courses</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="browseCourse">Browse</Nav.Link>
                </Nav.Item>

                {/* Second section */}
                <Nav.Item>
                  Practice
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="randomQuiz">Random quiz</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="dailyQuiz">Daily challenge</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="dungeonQuiz">Dungeon</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col xs={12} sm={8} md={9} xl={10}>
              {/* Tab content column */}
              <Tab.Content className={'mt-4'}>
                <Tab.Pane eventKey="officialCourse">
                  {/* Tab content header */}
                  <h3>Official Courses</h3>

                  {/* Tab content accordian */}
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Accordion Item #1</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Accordion Item #2</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Tab.Pane>
                <Tab.Pane eventKey="boughtCourse">
                  BCD
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </HomeBody>
        </Tab.Container>
      </HomeContainer>
    </>
  )
}

export default Home
