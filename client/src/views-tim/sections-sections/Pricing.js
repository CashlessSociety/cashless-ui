import React from "react";

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
} from "reactstrap";

// core components

function Pricing() {
  const [pills, setPills] = React.useState("1");
  const [plan, setPlan] = React.useState("1");
  return (
    <>
      <div className="cd-section" id="pricing">
        <div
          className="pricing-1 section-image"
          id="pricing-1"
          style={{
            backgroundImage: "url(" + require("assets/img/pricing1.jpg") + ")",
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Pick the best plan for you</h2>
                <h4 className="description">
                  You have Free Unlimited Updates and Premium Support on each
                  package.
                </h4>
                <div className="section-space"></div>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <Card className="card-pricing card-plain">
                  <CardBody>
                    <h5 className="category">Bravo Pack</h5>
                    <div className="icon icon-warning">
                      <i className="now-ui-icons media-1_button-power"></i>
                    </div>
                    <CardTitle tag="h3">$10</CardTitle>
                    <ul>
                      <li>Complete documentation</li>
                      <li>Working materials in Sketch</li>
                    </ul>
                    <Button
                      className="btn-neutral btn-round"
                      color="warning"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Add to Cart
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-pricing">
                  <CardBody>
                    <h5 className="category">Alpha Pack</h5>
                    <div className="icon icon-info">
                      <i className="now-ui-icons objects_diamond"></i>
                    </div>
                    <CardTitle tag="h3">$67</CardTitle>
                    <ul>
                      <li>Working materials in EPS</li>
                      <li>6 months access to the library</li>
                    </ul>
                    <Button
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Add to Cart
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-pricing card-plain">
                  <CardBody>
                    <h5 className="category">Charlie Pack</h5>
                    <div className="icon icon-success">
                      <i className="now-ui-icons media-2_sound-wave"></i>
                    </div>
                    <CardTitle tag="h3">$69</CardTitle>
                    <ul>
                      <li>Working materials in PSD</li>
                      <li>1 year access to the library</li>
                    </ul>
                    <Button
                      className="btn-neutral btn-round"
                      color="success"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Add to Cart
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-pricing card-plain">
                  <CardBody>
                    <h5 className="category">Extra Pack</h5>
                    <div className="icon icon-danger">
                      <i className="now-ui-icons education_atom"></i>
                    </div>
                    <CardTitle tag="h3">$159</CardTitle>
                    <ul>
                      <li>Complete documentation</li>
                      <li>2GB cloud storage</li>
                    </ul>
                    <Button
                      className="btn-neutral btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Add to Cart
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pricing-2" id="pricing-2">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Pick the best plan for you</h2>
                <Nav
                  className="nav-pills-info justify-content-center"
                  pills
                  role="tablist"
                >
                  <NavItem>
                    <NavLink
                      className={pills === "1" ? "active" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        setPills("1");
                      }}
                      role="tablist"
                      href="#pablo"
                    >
                      Legal Entity
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={pills === "2" ? "active" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        setPills("2");
                      }}
                      role="tablist"
                      href="#pablo"
                    >
                      Individual
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-pricing card-plain">
                  <CardBody>
                    <h5 className="category">Enterprise</h5>
                    <CardTitle tag="h1">
                      <small>$</small>
                      59
                    </CardTitle>
                    <ul>
                      <li>
                        <b>10GB</b> Disk Space
                      </li>
                      <li>
                        <b>100GB</b> Monthly Bandwidth
                      </li>
                      <li>
                        <b>20</b> Email Accounts
                      </li>
                      <li>
                        <b>Unlimited</b> subdomains
                      </li>
                    </ul>
                    <Button
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Sign Up
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card
                  className="card-pricing card-background card-raised"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/pricing2.jpg") + ")",
                  }}
                >
                  <CardBody>
                    <h5 className="category text-info">Professional</h5>
                    <CardTitle tag="h1">
                      <small>$</small>
                      29
                    </CardTitle>
                    <ul>
                      <li>
                        <b>5GB</b> Disk Space
                      </li>
                      <li>
                        <b>50GB</b> Monthly Bandwidth
                      </li>
                      <li>
                        <b>10</b> Email Accounts
                      </li>
                      <li>
                        <b>Unlimited</b> subdomains
                      </li>
                    </ul>
                    <Button
                      className="btn-neutral btn-round"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Sign Up
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-pricing card-plain">
                  <CardBody>
                    <h5 className="category">Standard</h5>
                    <CardTitle tag="h1">
                      <small>$</small>
                      17
                    </CardTitle>
                    <ul>
                      <li>
                        <b>2GB</b> Disk Space
                      </li>
                      <li>
                        <b>25GB</b> Monthly Bandwidth
                      </li>
                      <li>
                        <b>5</b> Email Accounts
                      </li>
                      <li>
                        <b>Unlimited</b> subdomains
                      </li>
                    </ul>
                    <Button
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Get Started
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="pricing-3 section-image"
          id="pricing-3"
          style={{
            backgroundImage: "url(" + require("assets/img/pricing3.jpg") + ")",
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Pick the best plan for you</h2>
                <h4 className="description">
                  You have Free Unlimited Updates on each package.
                </h4>
                <div className="section-space"></div>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto" md="4">
                <Card className="card-pricing">
                  <CardBody>
                    <h5 className="category">Freelance</h5>
                    <CardTitle tag="h1">
                      <small>$</small>
                      29<small>/mo</small>
                    </CardTitle>
                    <ul>
                      <li>1 GB of space</li>
                      <li>Limited Support</li>
                      <li>Support at $25/hour</li>
                      <li>Limited cloud access</li>
                    </ul>
                    <Button
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Get Started
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="4">
                <Card
                  className="card-pricing card-raised"
                  data-background-color="blue"
                >
                  <CardBody>
                    <h5 className="category">Business</h5>
                    <CardTitle tag="h1">
                      <small>$</small>
                      59<small>/mo</small>
                    </CardTitle>
                    <ul>
                      <li>5 GB of space</li>
                      <li>UnLimited Support</li>
                      <li>Unlimited Downloads</li>
                      <li>Full cloud access</li>
                    </ul>
                    <Button
                      className="btn-neutral btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Get Started
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pricing-4" id="pricing-4">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Pick the best plan for you</h2>
                <h4 className="description">
                  You have Free Unlimited Updates and Premium Support on each
                  package.
                </h4>
                <div className="section-space"></div>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-pricing card-plain">
                  <CardBody>
                    <h5 className="category">Starter</h5>
                    <div className="icon icon-danger">
                      <i className="now-ui-icons tech_headphones"></i>
                    </div>
                    <CardTitle tag="h3">
                      <small>$</small>
                      10
                    </CardTitle>
                    <ul>
                      <li>1000 MB</li>
                      <li>3 email</li>
                      <li>5 Databases</li>
                    </ul>
                    <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Get it Now
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-pricing" data-background-color="blue">
                  <CardBody>
                    <h5 className="category">Professional</h5>
                    <div className="icon icon-info">
                      <i className="now-ui-icons tech_headphones"></i>
                    </div>
                    <CardTitle tag="h3">
                      <small>$</small>
                      40
                    </CardTitle>
                    <ul>
                      <li>Unlimited MB</li>
                      <li>Unlimited emails</li>
                      <li>Full Support</li>
                    </ul>
                    <Button
                      className="btn-neutral disabled btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Current Plan
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-pricing card-plain">
                  <CardBody>
                    <h5 className="category">Basic</h5>
                    <div className="icon icon-warning">
                      <i className="now-ui-icons tech_headphones"></i>
                    </div>
                    <CardTitle tag="h3">
                      <small>$</small>
                      20
                    </CardTitle>
                    <ul>
                      <li>1000 MB</li>
                      <li>3 email</li>
                      <li>No Support</li>
                    </ul>
                    <Button
                      className="btn-round"
                      color="warning"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Upgrade Plan
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="pricing-5 section-pricing-5 section-image"
          id="pricing-5"
          style={{
            backgroundImage: "url(" + require("assets/img/bg31.jpg") + ")",
          }}
        >
          <Container>
            <Row>
              <Col md="4">
                <h2 className="title">Choose a plan for your next project</h2>
                <Nav className="nav-pills-info" pills role="tablist">
                  <NavItem>
                    <NavLink
                      className={plan === "1" ? "active" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        setPlan("1");
                      }}
                      role="tablist"
                      href="#pablo"
                    >
                      Expensive
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={plan === "2" ? "active" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        setPlan("2");
                      }}
                      role="tablist"
                      href="#pablo"
                    >
                      Cheaper
                    </NavLink>
                  </NavItem>
                </Nav>
                <p className="description">
                  You have Free Unlimited Updates and Premium Support on each
                  package. You also have 20 days to request a refund if you're
                  not happy with your purchase.
                </p>
              </Col>
              <Col className="ml-auto mr-auto" md="7">
                <TabContent className="tab-space" activeTab={"plan" + plan}>
                  <TabPane tabId="plan1">
                    <Row>
                      <Col md="6">
                        <Card className="card-pricing card-raised">
                          <CardBody>
                            <h5 className="category">Plus</h5>
                            <CardTitle tag="h1">
                              <small>$</small>
                              100
                            </CardTitle>
                            <ul>
                              <li>
                                <b>15</b> Projects
                              </li>
                              <li>
                                <b>5GB</b> Storage
                              </li>
                              <li>
                                <b>Unlimited</b> users
                              </li>
                              <li>
                                <b>No time</b> tracking
                              </li>
                            </ul>
                            <Button
                              className="btn-round"
                              color="info"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Buy Now!
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="6">
                        <Card className="card-pricing card-plain">
                          <CardBody>
                            <h5 className="category">Maximum</h5>
                            <CardTitle tag="h1">
                              <small>$</small>
                              120
                            </CardTitle>
                            <ul>
                              <li>
                                <b>25</b> Projects
                              </li>
                              <li>
                                <b>15GB</b> Storage
                              </li>
                              <li>
                                <b>Unlimited</b> users
                              </li>
                              <li>
                                <b>No time</b> tracking
                              </li>
                            </ul>
                            <Button
                              className="btn-round"
                              color="info"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Buy Now!
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="plan2">
                    <Row>
                      <Col md="6">
                        <Card className="card-pricing card-raised">
                          <CardBody>
                            <h5 className="category">Standard</h5>
                            <CardTitle tag="h1">
                              <small>$</small>
                              20
                            </CardTitle>
                            <ul>
                              <li>
                                <b>5</b> Projects
                              </li>
                              <li>
                                <b>2GB</b> Storage
                              </li>
                              <li>
                                <b>Unlimited</b> users
                              </li>
                              <li>
                                <b>No time</b> tracking
                              </li>
                            </ul>
                            <Button
                              className="btn-round"
                              color="info"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Buy Now!
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="6">
                        <Card className="card-pricing card-plain">
                          <CardBody>
                            <h5 className="category">Premium</h5>
                            <CardTitle tag="h1">
                              <small>$</small>
                              60
                            </CardTitle>
                            <ul>
                              <li>
                                <b>7</b> Projects
                              </li>
                              <li>
                                <b>3GB</b> Storage
                              </li>
                              <li>
                                <b>Unlimited</b> users
                              </li>
                              <li>
                                <b>No time</b> tracking
                              </li>
                            </ul>
                            <Button
                              className="btn-round"
                              color="info"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Buy Now!
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Pricing;
