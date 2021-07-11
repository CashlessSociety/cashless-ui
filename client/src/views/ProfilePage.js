import React from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components
import ProfilePageHeader from 'components/Headers/ProfileHeader.js';
import { useParams } from 'react-router-dom';
import TopNavbar from 'components/Navbars/TopNavbar.js';
import UserContext from 'providers/User';

function ProfilePage() {
  const {
    user: { profile, id },
  } = React.useContext(UserContext);
  const [pills, setPills] = React.useState('1');
  const params = useParams();
  let selfProfile = false
  if (id === params.id) {
    selfProfile = true
  } else {
    // Fetch profile and set
    console.log('Fetch other profile')
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
        <ProfilePageHeader profile={profile} id={params.id} selfProfile={selfProfile} />
        <div className="section">
          <Container fluid>
            <div className="button-container">
              <Button
                className="btn-round mr-1"
                color="primary"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                size="lg"
                disabled
              >
                Follow
              </Button>
            </div>
            <Row>
              <Col xs="12" md="4" xl="3">
                <Card
                  className="bg-dark"
                  style={{
                    padding: '0 15px',
                    width: '100%',
                    height: '100%',
                    color: 'white',
                  }}
                >
                  <CardTitle>Send me a message on:</CardTitle>
                  <CardBody>
                  <p
                    style={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    }}
                  >
                    <span>@username</span>
                    <Button disabled>
                      Message <i className="fab fa-instagram"></i>
                    </Button>
                  </p>
                  <p
                    style={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    }}
                  >
                    <span>@username</span>
                    <Button disabled>
                      Message <i className="fab fa-twitter"></i>
                    </Button>
                  </p>
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12" md="8" xl="9">
                <div className="nav-align-center">
                  <Nav className="nav-pills-primary" pills role="tablist">
                    <NavItem>
                      <NavLink
                        onClick={(e) => {
                          e.preventDefault();
                          setPills('1');
                        }}
                        className={pills === '1' ? 'active' : ''}
                        role="tablist"
                        href="#pablo"
                      >
                        <span>Skills</span>
                        {/* <i className="now-ui-icons design_image"></i> */}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        onClick={(e) => {
                          e.preventDefault();
                          setPills('2');
                        }}
                        className={pills === '2' ? 'active' : ''}
                        role="tablist"
                        href="#pablo"
                      >
                        <span>Credits Ledger</span>
                        {/* <i className="now-ui-icons location_world"></i> */}
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <TabContent className="gallery" activeTab={'pills' + pills}>
                  <TabPane tabId="pills1">Skills...</TabPane>
                  <TabPane tabId="pills2">Credits ledger...</TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
