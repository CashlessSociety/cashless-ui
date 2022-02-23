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
import { printIntrospectionSchema } from 'graphql';

class AvailabilityToggle extends React.Component {
  constructor(props) {
      super(props);
      this.state = {isOn: props.isOn || false};
  }
  render() {
      return (
          <div>
              <Switch defaultValue={this.state.isOn} offColor="default" onColor="success" onText="" offText="" onChange={(el, val) => {
                this.setState({isOn: val})}
              }></Switch>
              <div className="availabilityText">{(this.state.isOn === true)? 'Available' : 'Not Available'}</div>
          </div>
      );
  }
}

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
              <Col id="about-you">
                <Card>
                  <CardTitle tag="h2">About You</CardTitle>
                  <CardBody>
                    <Avatar /> <a className="changePhoto" href="#">Change Photo</a>
                    <div className="about-you-fields">
                      <div>
                        <label>First Name</label><br />
                        <input type="text" name="FirstName" />
                      </div>
                      <div>
                        <label>Last Name</label><br />
                        <input type="text" name="LastName" />
                      </div>
                      <div>
                        <label>Your Title</label><br />
                        <input type="text" name="Title" />
                      </div>
                      <div>
                        <label>Short bio about you or your company</label><br />
                        <textarea name="bio"></textarea>
                      </div>
                    </div>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardTitle tag="h2">My Portfolio / Gallery</CardTitle>
                    <CardBody className="divided about-you-fields">
                      <div class="link-input">
                        <label>Website or Relevant Link</label><br />
                        <input type="text" name="website" />
                      </div>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardTitle tag="h2">Social Media Accounts</CardTitle>
                    <CardBody className="social-media about-you-fields">
                      <Row>
                        <Col className="label">Instagram</Col>
                        <Col>
                          <input type="text" className="input-field" name="instagram" />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="label">Twitter</Col>
                        <Col>
                          <input type="text" className="input-field" name="twitter" />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="label">Facebook</Col>
                        <Col>
                          <input type="text" className="input-field" name="facebook" />
                        </Col>
                      </Row>
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
                      <Col className="label">Skill hashtags</Col>
                      <Col>
                        <textarea name="hashTags" className="input-field hash-tags"></textarea>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="label">Icon</Col>
                      <Col>
                      from #firsthashtag
                      </Col>
                    </Row>
                    <Row className='divided'>
                      <Col className='availability'>
                          <AvailabilityToggle isOn={false} />
                      </Col>
                      <Col className='col-remove'>
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
