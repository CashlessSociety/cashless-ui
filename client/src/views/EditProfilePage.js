import React from 'react';
import Avatar from 'components/Avatar';
import Switch from "react-bootstrap-switch";

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
      <div className="wrapper editProfilePage">
        <ProfileEditHeader id={params.id} />
        <div className="section">
          <Container fluid>
            <Row>
              <Col>
                <Card>
                  <CardTitle tag="h2">About You</CardTitle>
                  <CardBody>
                    <Avatar /> <a className="changePhoto" href="#">Change Photo</a>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card>
                  <CardTitle tag="h4">
                    <Row>
                      <Col>
                        Skills Card
                      </Col>
                      <Col>
                        <Button
                          className="btnAdd"
                          onClick={() => setSkills([...skills, { id: Math.random() }])}
                        >
                          + Skill
                        </Button>
                      </Col>
                    </Row>
                  </CardTitle>
                  {skills.map((i) => (
                  <div className="skill">
                    <Row>
                      <Col>
                        <input 
                          type="text"
                          className="skill-name"
                          placeholder="Name of skill" 
                          onChange={(e) =>
                            console.log('changed:', e.target.value)
                          } 
                          />
                      </Col>
                    </Row>
                    <Row>
                      <Col className="label">Short description</Col>
                      <Col>
                        <textarea className="input-field" name="description"></textarea>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="label">Hourly rate</Col>
                      <Col className="dollar-input">
                        <input
                          type="number" 
                          className="input-field"
                          min="0"
                          placeholder="0"
                          onChange={(e) =>
                            console.log('changed:', e.target.value)
                          }
                        ></input>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="label">Skill hashtag</Col>
                      <Col>
                        <textarea name="hashTags" className="input-field hash-tags"></textarea>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="label">Icon</Col>
                      <Col>
                      from #skill_name
                      </Col>
                    </Row>
                    <Row className='divided'>
                      <Col>
                        <Row>
                          <Col className="label">Available</Col>
                          <Col>
                            {' '}
                            <Switch defaultValue={false} offColor="default" onColor="success" onText="" offText=""></Switch>
                          </Col>
                        </Row>
                      </Col>
                      <Col className='align-right'>
                        <Button className="btn-remove" onClick={() => remove(i.id)}>Remove</Button>
                      </Col>
                    </Row>
                  </div>
                ))}
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
