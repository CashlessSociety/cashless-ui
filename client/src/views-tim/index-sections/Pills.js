import React from "react";

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Pills() {
  const [horizontalTabs, setHorizontalTabs] = React.useState("1");
  const [verticalTabs, setVerticalTabs] = React.useState("1");
  const [iconHorizontalTabs, setIconHorizontalTabs] = React.useState("1");
  const [iconVerticalTabs, setIconVerticalTabs] = React.useState("1");
  const [justIconHorizontalTabs, setJustIconHorizontalTabs] = React.useState(
    "1"
  );
  const [justIconVerticalTabs, setJustIconVerticalTabs] = React.useState("1");
  return (
    <>
      <div className="section section-pills">
        <Container>
          <div id="navigation-pills">
            <div className="title">
              <h4>Navigation Pills</h4>
            </div>
            <Row>
              <Col sm="6">
                <p className="category">Horizontal tabs</p>
                <Nav className="nav-pills-info" pills role="tablist">
                  <NavItem>
                    <NavLink
                      className={horizontalTabs === "1" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setHorizontalTabs("1");
                      }}
                    >
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={horizontalTabs === "2" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setHorizontalTabs("2");
                      }}
                    >
                      Settings
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={horizontalTabs === "3" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setHorizontalTabs("3");
                      }}
                    >
                      Options
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent
                  className="tab-space"
                  activeTab={"horizontalTabs" + horizontalTabs}
                >
                  <TabPane tabId="horizontalTabs1">
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits. <br></br>
                    <br></br>
                    Dramatically visualize customer directed convergence without
                    revolutionary ROI.
                  </TabPane>
                  <TabPane tabId="horizontalTabs2">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas. <br></br>
                    <br></br>
                    Dramatically maintain clicks-and-mortar solutions without
                    functional solutions.
                  </TabPane>
                  <TabPane tabId="horizontalTabs3">
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas. <br></br>
                    <br></br>
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </TabPane>
                </TabContent>
              </Col>
              <Col md="6">
                <p className="category">Vertical tabs</p>
                <Row>
                  <Col md="4">
                    <Nav
                      className="nav-pills-info flex-column"
                      pills
                      role="tablist"
                    >
                      <NavItem>
                        <NavLink
                          className={verticalTabs === "1" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setVerticalTabs("1");
                          }}
                        >
                          Profile
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={verticalTabs === "2" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setVerticalTabs("2");
                          }}
                        >
                          Settings
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={verticalTabs === "3" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setVerticalTabs("3");
                          }}
                        >
                          Options
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col md="8">
                    <TabContent activeTab={"verticalTabs" + verticalTabs}>
                      <TabPane tabId="verticalTabs1">
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits. <br></br>
                        <br></br>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                      </TabPane>
                      <TabPane tabId="verticalTabs2">
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas. <br></br>
                        <br></br>
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                      </TabPane>
                      <TabPane tabId="verticalTabs3">
                        Completely synergize resource taxing relationships via
                        premier niche markets. Professionally cultivate
                        one-to-one customer service with robust ideas. <br></br>
                        <br></br>
                        Dynamically innovate resource-leveling customer service
                        for state of the art customer service.
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="title">
              <p className="category">With Icons</p>
            </div>
            <Row>
              <Col md="6">
                <Nav
                  className="nav-pills-info nav-pills-icons"
                  pills
                  role="tablist"
                >
                  <NavItem>
                    <NavLink
                      className={iconHorizontalTabs === "1" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setIconHorizontalTabs("1");
                      }}
                    >
                      <i className="now-ui-icons objects_umbrella-13"></i>
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={iconHorizontalTabs === "2" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setIconHorizontalTabs("2");
                      }}
                    >
                      <i className="now-ui-icons shopping_shop"></i>
                      Messages
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={iconHorizontalTabs === "3" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setIconHorizontalTabs("3");
                      }}
                    >
                      <i className="now-ui-icons ui-2_settings-90"></i>
                      Settings
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent
                  className="tab-space"
                  activeTab={"iconHorizontalTabs" + iconHorizontalTabs}
                >
                  <TabPane tabId="iconHorizontalTabs1">
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits. <br></br>
                    <br></br>
                    Dramatically visualize customer directed convergence without
                    revolutionary ROI.
                  </TabPane>
                  <TabPane tabId="iconHorizontalTabs2">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas. <br></br>
                    <br></br>
                    Dramatically maintain clicks-and-mortar solutions without
                    functional solutions.
                  </TabPane>
                  <TabPane tabId="iconHorizontalTabs3">
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas. <br></br>
                    <br></br>
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </TabPane>
                </TabContent>
              </Col>
              <Col md="6">
                <Row>
                  <Col lg="3" md="6">
                    <Nav
                      className="nav-pills-info nav-pills-icons flex-column"
                      pills
                      role="tablist"
                    >
                      <NavItem>
                        <NavLink
                          className={iconVerticalTabs === "1" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setIconVerticalTabs("1");
                          }}
                        >
                          <i className="now-ui-icons objects_umbrella-13"></i>
                          Home
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={iconVerticalTabs === "2" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setIconVerticalTabs("2");
                          }}
                        >
                          <i className="now-ui-icons ui-2_settings-90"></i>
                          Settings
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col md="8">
                    <TabContent
                      activeTab={"iconVerticalTabs" + iconVerticalTabs}
                    >
                      <TabPane tabId="iconVerticalTabs1">
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits. <br></br>
                        <br></br>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                      </TabPane>
                      <TabPane tabId="iconVerticalTabs2">
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas. <br></br>
                        <br></br>
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="title">
              <p className="category">Just Icons</p>
            </div>
            <Row>
              <Col md="6">
                <Row>
                  <Col md="3">
                    <Nav
                      className="nav-pills-primary nav-pills-just-icons flex-column"
                      pills
                      role="tablist"
                    >
                      <NavItem>
                        <NavLink
                          className={
                            justIconHorizontalTabs === "1" ? "active" : ""
                          }
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setJustIconHorizontalTabs("1");
                          }}
                        >
                          <i className="now-ui-icons objects_umbrella-13"></i>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={
                            justIconHorizontalTabs === "2" ? "active" : ""
                          }
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setJustIconHorizontalTabs("2");
                          }}
                        >
                          <i className="now-ui-icons ui-2_settings-90"></i>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col md="8">
                    <TabContent
                      activeTab={
                        "justIconHorizontalTabs" + justIconHorizontalTabs
                      }
                    >
                      <TabPane tabId="justIconHorizontalTabs1">
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits. <br></br>
                        <br></br>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                      </TabPane>
                      <TabPane tabId="justIconHorizontalTabs2">
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas. <br></br>
                        <br></br>
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </Col>
              <Col md="6">
                <Nav
                  className="nav-pills-primary nav-pills-just-icons"
                  pills
                  role="tablist"
                >
                  <NavItem>
                    <NavLink
                      className={justIconVerticalTabs === "1" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setJustIconVerticalTabs("1");
                      }}
                    >
                      <i className="now-ui-icons objects_umbrella-13"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={justIconVerticalTabs === "2" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setJustIconVerticalTabs("2");
                      }}
                    >
                      <i className="now-ui-icons shopping_shop"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={justIconVerticalTabs === "3" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setJustIconVerticalTabs("3");
                      }}
                    >
                      <i className="now-ui-icons ui-2_settings-90"></i>
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent
                  className="tab-space"
                  activeTab={"justIconVerticalTabs" + justIconVerticalTabs}
                >
                  <TabPane tabId="justIconVerticalTabs1">
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits. <br></br>
                    <br></br>
                    Dramatically visualize customer directed convergence without
                    revolutionary ROI.
                  </TabPane>
                  <TabPane tabId="justIconVerticalTabs2">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas. <br></br>
                    <br></br>
                    Dramatically maintain clicks-and-mortar solutions without
                    functional solutions.
                  </TabPane>
                  <TabPane tabId="justIconVerticalTabs3">
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas. <br></br>
                    <br></br>
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Pills;
