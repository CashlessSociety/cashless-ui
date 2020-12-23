import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DropdownFixedNavbar from "components/Navbars/DropdownFixedNavbar.js";
import AboutUsHeader from "components/Headers/AboutUsHeader.js";
import Footer from "components/Footers/Footer.js";

function AboutUs() {
  const [specialitySelect, setSpecialitySelect] = React.useState(null);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("about-us");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <DropdownFixedNavbar />
      <div className="wrapper">
        <AboutUsHeader />
        <div className="section">
          <div className="about-description text-center">
            <div className="features-3">
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto" md="8">
                    <h2 className="title">Simpler. Smarter. Faster.</h2>
                    <h4 className="description">
                      The CloudCheckr Cloud Management Platform (CMP) provides
                      full visibility and control to reduce costs, improve
                      cybersecurity posture, and automate critical tasks.
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-success icon-circle">
                        <i className="now-ui-icons objects_globe"></i>
                      </div>
                      <h4 className="info-title">Asset Management</h4>
                      <p className="description">
                        Cross-account dashboards provide sophisticated reporting
                        for enterprise.
                      </p>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-info icon-circle">
                        <i className="now-ui-icons education_atom"></i>
                      </div>
                      <h4 className="info-title">Resource Utilization</h4>
                      <p className="description">
                        CloudCheckr provides summary and detailed usage
                        statistics for resources.
                      </p>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-primary icon-circle">
                        <i className="now-ui-icons tech_watch-time"></i>
                      </div>
                      <h4 className="info-title">Self-Healing</h4>
                      <p className="description">
                        CloudCheckr enables users to save money, time, and
                        effort.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="separator-line bg-info"></div>
          <div className="projects-5">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">We have many advantages</h2>
                  <h4 className="description">
                    This is the paragraph where you can write more details about
                    your projects. Keep you user engaged by providing meaningful
                    information.
                  </h4>
                  <div className="section-space"></div>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto" md="5">
                  <Card
                    className="card-background card-background-product card-raised"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/project8.jpg") + ")",
                    }}
                  >
                    <CardBody>
                      <CardTitle tag="h2">Social Analytics</CardTitle>
                      <p className="card-description">
                        Insight to help you create, connect, and convert.
                        Understand Your Audience's Interests, Influence,
                        Interactions, and Intent. Discover emerging topics and
                        influencers to reach new audiences.
                      </p>
                      <Badge className="badge-neutral">Analytics</Badge>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="mr-auto" md="5">
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons ui-2_chat-round"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">
                        Listen to Social Conversations
                      </h4>
                      <p className="description">
                        Gain access to the demographics, psychographics, and
                        location of unique people who talk about your brand.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons business_chart-pie-36"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Performance Analyze</h4>
                      <p className="description">
                        Unify data from Facebook, Instagram, Twitter, LinkedIn,
                        and Youtube to gain rich insights from easy-to-use
                        reports.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons design-2_ruler-pencil"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Social Conversions</h4>
                      <p className="description">
                        Track actions taken on your website that originated from
                        social, and understand the impact on your bottom line.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col className="ml-auto mt-5" md="5">
                  <div className="info info-horizontal">
                    <div className="icon icon-warning">
                      <i className="now-ui-icons users_single-02"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Work With Any Team</h4>
                      <p className="description">
                        Whether it’s for work or even the next family vacation,
                        Trello helps your team.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-warning">
                      <i className="now-ui-icons business_chart-bar-32"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">A Productivity Platform</h4>
                      <p className="description">
                        Integrate the apps your team already uses directly into
                        your workflow.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-warning">
                      <i className="now-ui-icons arrows-1_refresh-69"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Always In Sync</h4>
                      <p className="description">
                        No matter where you are, Trello stays in sync across all
                        of your devices.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col className="mr-auto" md="5">
                  <Card
                    className="card-background card-background-product card-raised"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/project9.jpg") + ")",
                    }}
                  >
                    <CardBody>
                      <CardTitle tag="h2">Trello lets you work.</CardTitle>
                      <p className="card-description text-white">
                        Trello’s boards, lists, and cards enable you to organize
                        and prioritize your projects in a fun, flexible and
                        rewarding way.
                      </p>
                      <Badge className="badge-neutral">Trello</Badge>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="about-team team-4">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">We are nerd rockstars</h2>
                  <h4 className="description">
                    This is the paragraph where you can write more details about
                    your team. Keep you user engaged by providing meaningful
                    information.
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto" lg="7" xl="6">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="5">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/olivia.jpg")}
                            ></img>
                          </a>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <CardTitle tag="h4">Ella Evelyn</CardTitle>
                          <h6 className="category">Air Crew Member</h6>
                          <p className="card-description">
                            Think in the morning. Act in the noon. Eat in the
                            evening. Sleep in the night......
                          </p>
                          <CardFooter>
                            <Button
                              className="btn-icon btn-neutral"
                              color="twitter"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-twitter"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="facebook"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-facebook-square"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="google"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-google"></i>
                            </Button>
                          </CardFooter>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="7" xl="6">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="5">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/emily.jpg")}
                            ></img>
                          </a>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <CardTitle tag="h4">Mila Skylar</CardTitle>
                          <h6 className="category">Architect</h6>
                          <p className="card-description">
                            Love cures people - both the ones who give it and
                            the ones who receive it...
                          </p>
                          <CardFooter>
                            <Button
                              className="btn-icon btn-neutral"
                              color="linkedin"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-linkedin"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="facebook"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-facebook-square"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="dribbble"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-dribbble"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="google"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-google"></i>
                            </Button>
                          </CardFooter>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="7" xl="6">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="5">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/james.jpg")}
                            ></img>
                          </a>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <CardTitle tag="h4">Daniel Carter</CardTitle>
                          <h6 className="category">Aviation Inspector</h6>
                          <p className="card-description">
                            Keep your face always toward the sunshine - and
                            shadows will fall behind you...
                          </p>
                          <CardFooter>
                            <Button
                              className="btn-icon btn-neutral"
                              color="youtube"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fa fab-youtube"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="twitter"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-twitter"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="instagram"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-instagram"></i>
                            </Button>
                          </CardFooter>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="7" xl="6">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="5">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/michael.jpg")}
                            ></img>
                          </a>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <CardTitle tag="h4">Dylan Wyatt</CardTitle>
                          <h6 className="category">Conservation Scientist</h6>
                          <p className="card-description">
                            There is only one corner of the universe you can be
                            certain of improving, and that's your own self...
                          </p>
                          <CardFooter>
                            <Button
                              className="btn-icon btn-neutral"
                              color="linkedin"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-linkedin"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="facebook"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-facebook-square"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="google"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-google"></i>
                            </Button>
                          </CardFooter>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="about-office">
            <Container>
              <Row className="text-center">
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Our office is our second home</h2>
                  <h4 className="description">
                    Here are some pictures from our office. You can see the
                    place looks like a palace and is fully equiped with
                    everything you need to get the job done.
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bg27.jpg")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bg24.jpg")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bg28.jpg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/project6.jpg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/project14.jpg")}
                  ></img>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="about-contact">
            <Container>
              <Row>
                <Col className="mr-auto ml-auto" md="8">
                  <h2 className="text-center title">Want to work with us?</h2>
                  <h4 className="text-center description">
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one and contact us about any
                    further collaboration. We will get back to you in a couple
                    of hours.
                  </h4>
                  <Form className="contact-form">
                    <Row>
                      <Col md="4">
                        <label>First name</label>
                        <InputGroup
                          className={firstFocus ? "input-group-focus" : ""}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons users_circle-08"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            autoComplete="firstname"
                            placeholder="First Name..."
                            type="text"
                            onFocus={() => setFirstFocus(true)}
                            onBlur={() => setFirstFocus(false)}
                          ></Input>
                        </InputGroup>
                      </Col>
                      <Col md="4">
                        <label>Your email</label>
                        <InputGroup
                          className={emailFocus ? "input-group-focus" : ""}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons ui-1_email-85"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            autoComplete="email"
                            placeholder="Email Name..."
                            type="text"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                          ></Input>
                        </InputGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label className="control-label">Speciality</label>
                          <Select
                            className="react-select react-select-primary"
                            onChange={(value) => setSpecialitySelect(value)}
                            classNamePrefix="react-select"
                            placeholder="Speciality"
                            value={specialitySelect}
                            name=""
                            options={[
                              {
                                value: "1",
                                label: "I'm a Designer",
                              },
                              { value: "2", label: "I'm a Developer" },
                              { value: "3", label: "I'm a Hero" },
                            ]}
                          ></Select>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-auto mr-auto text-center" md="4">
                        <Button
                          className="btn-round mt-4"
                          color="info"
                          size="lg"
                        >
                          Let's talk
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
