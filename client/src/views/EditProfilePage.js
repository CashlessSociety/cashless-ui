import React from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components
import ProfileEditHeader from 'components/Headers/ProfileEditHeader.js';
import { useParams } from 'react-router-dom';
import TopNavbar from 'components/Navbars/TopNavbar.js';
import UserContext from 'providers/User';

function ProfilePage() {
  const {
    user: { profile, id },
  } = React.useContext(UserContext);
  const [skills, setSkills] = React.useState([]);
  function remove (id) {
    const filtered = skills.filter(s => s.id !== id)
    setSkills(filtered)
  }
  const params = useParams();
  let selfProfile = false;
  if (id === params.id) {
    selfProfile = true;
  } else {
    // Fetch profile and set
    console.log('Fetch other profile');
  }
  React.useEffect(() => {
    document.body.classList.add('profile-page');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove('profile-page');
      document.body.classList.remove('sidebar-collapse');
    };
  }, []);
  return (
    <>
      <TopNavbar />
      <div className="wrapper">
        <ProfileEditHeader id={params.id} />
        <div className="section">
          <Container fluid>
            <Row>
              <Col>
                <Card>
                  <CardTitle tag="h2">Profile</CardTitle>
                  <CardBody></CardBody>
                </Card>
              </Col>
              <Col>
                <Card className="bg-dark">
                  <CardTitle tag="h4">
                    <Row>
                      <Col>
                        <span className="text-light">Skills available</span>
                      </Col>
                      <Col>
                        <Button
                          onClick={() => setSkills([...skills, { id: Math.random() }])}
                          className="bg-light text-dark"
                        >
                          + skill
                        </Button>
                      </Col>
                    </Row>
                  </CardTitle>
                </Card>
                {skills.map((i) => (
                  <Card key={i.id}>
                    <CardBody>
                      <Row>
                        <Col>Skill</Col>
                        <Col>
                          <select>
                            <option>Web development</option>
                          </select>
                        </Col>
                      </Row>
                      <Row>
                        <Col>Hourly rate</Col>
                        <Col>
                          <input
                            type="number"
                            value="40"
                            onChange={(e) =>
                              console.log('changed:', e.target.value)
                            }
                          ></input>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Row>
                            <Col>Available</Col>
                            <Col>
                              {' '}
                              <input
                                className="form-check-input"
                                type="checkbox"
                                onChange={(e) =>
                                  console.log('changed:', e.target.value)
                                }
                                id="flexCheckDefault"
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col>
                          <Button onClick={() => remove(i.id)}>Remove</Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                ))}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
