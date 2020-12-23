import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
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
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import PricingHeader from "components/Headers/PricingHeader.js";
import Footer from "components/Footers/Footer.js";

function Pricing() {
  const [firstNameFocus, setFirstNameFocus] = React.useState(false);
  const [lastNameFocus, setLastNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("pricing");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("pricing");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ScrollTransparentNavbar />
      <div className="wrapper">
        <PricingHeader />
        <div className="main">
          <div className="pricing-4">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="6">
                  <h4 className="description">
                    To get started, you will need to choose a plan for your
                    needs. You have Free Unlimited Updates and Premium Support
                    on each package.
                  </h4>
                  <div className="section-space"></div>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Card className="card-pricing card-plain">
                    <CardBody>
                      <h6 className="category">Starter</h6>
                      <div className="icon icon-info">
                        <i className="now-ui-icons business_briefcase-24"></i>
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
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Get it Now
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-pricing" data-background-color="black">
                    <CardBody>
                      <h6 className="category">Professional</h6>
                      <div className="icon icon-success">
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
                      <h6 className="category">Basic</h6>
                      <div className="icon icon-danger">
                        <i className="now-ui-icons design_palette"></i>
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
                        color="danger"
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
          <div className="section section-frequently">
            <Container>
              <div className="text-center">
                <h3 className="title">Frequently Asked Questions</h3>
              </div>
              <Row>
                <Col className="ml-auto" md="4">
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="now-ui-icons shopping_credit-card"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">
                        Can I cancel my subscription?
                      </h4>
                      <p>
                        Yes, you can cancel and perform other actions on your
                        subscriptions via the My Account page.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col className="mr-auto" md="4">
                  <div className="info info-horizontal">
                    <div className="icon icon-success">
                      <i className="now-ui-icons shopping_box"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">
                        Is there any discount for an annual subscription?
                      </h4>
                      <p>
                        Yes, we offer a 40% discount if you choose annual
                        subscription for any plan.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto" md="4">
                  <div className="info info-horizontal">
                    <div className="icon icon-success">
                      <i className="now-ui-icons business_money-coins"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">
                        Which payment methods do you take?
                      </h4>
                      <p>
                        WooCommerce comes bundled with PayPal (for accepting
                        credit card and PayPal account).
                      </p>
                    </div>
                  </div>
                </Col>
                <Col className="mr-auto" md="4">
                  <div className="info info-horizontal">
                    <div className="icon icon-info">
                      <i className="now-ui-icons business_bulb-63"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">
                        Any other questions we can answer?
                      </h4>
                      <p>We are happy to help you. Contact us.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div
            className="contactus-1 section-image"
            style={{
              backgroundImage: "url(" + require("assets/img/bg27.jpg") + ")",
            }}
          >
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="5">
                  <h2 className="title">Get in Touch</h2>
                  <h4 className="description">
                    You need more information? Check what other persons are
                    saying about our product. They are very happy with their
                    purchase.
                  </h4>
                  <div className="info info-horizontal">
                    <div className="icon icon-info">
                      <i className="now-ui-icons location_pin"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Find us at the office</h4>
                      <p className="description">
                        Bld Mihail Kogalniceanu, nr. 8, <br></br>
                        7652 Bucharest, <br></br>
                        Romania
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-info">
                      <i className="now-ui-icons tech_mobile"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Give us a ring</h4>
                      <p className="description">
                        Michael Jordan <br></br>
                        +40 762 321 762 <br></br>
                        Mon - Fri, 8:00-22:00
                      </p>
                    </div>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="5">
                  <Card className="card-contact card-raised">
                    <Form id="contact-form" method="post" role="form">
                      <CardHeader className="text-center">
                        <CardTitle tag="h4">Contact Us</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col className="pr-2" md="6">
                            <label>First name</label>
                            <InputGroup
                              className={
                                firstNameFocus ? "input-group-focus" : ""
                              }
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="now-ui-icons users_circle-08"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                autoComplete="name"
                                placeholder="First Name..."
                                type="text"
                                onFocus={() => setFirstNameFocus(true)}
                                onBlur={() => setFirstNameFocus(false)}
                              ></Input>
                            </InputGroup>
                          </Col>
                          <Col className="pl-2" md="6">
                            <FormGroup>
                              <label>Last name</label>
                              <InputGroup
                                className={
                                  lastNameFocus ? "input-group-focus" : ""
                                }
                              >
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="now-ui-icons text_caps-small"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  autoComplete="name"
                                  placeholder="Last Name..."
                                  type="text"
                                  onFocus={() => setLastNameFocus(true)}
                                  onBlur={() => setLastNameFocus(false)}
                                ></Input>
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
                        <FormGroup>
                          <label>Email address</label>
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
                              placeholder="Email Here..."
                              type="email"
                              onFocus={() => setEmailFocus(true)}
                              onBlur={() => setEmailFocus(false)}
                            ></Input>
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <label>Your message</label>
                          <Input
                            id="message"
                            name="message"
                            rows="6"
                            type="textarea"
                          ></Input>
                        </FormGroup>
                        <Row>
                          <Col md="6">
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                I'm not a robot
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <Button
                              className="btn-round pull-right"
                              color="info"
                              type="submit"
                            >
                              Send Message
                            </Button>
                          </Col>
                        </Row>
                      </CardBody>
                    </Form>
                  </Card>
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

export default Pricing;
