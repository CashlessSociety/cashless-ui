import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
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

function PreFooter() {
  const [emailFocus1, setEmailFocus1] = React.useState(false);
  const [emailFocus2, setEmailFocus2] = React.useState(false);
  return (
    <>
      <div className="section section-pre-footer" data-background-color="gray">
        <div id="pre-footer-areas">
          <Container>
            <div className="title">
              <h3>Pre-Footer Areas</h3>
            </div>
          </Container>
          <div className="social-line social-line-white text-center">
            <Container>
              <Row className="justify-content-center">
                <Col md="12">
                  <h4 className="title">Thank you for your support!</h4>
                </Col>
                <Button
                  className="btn-round"
                  color="twitter"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-twitter"></i> Twitter · 2.5k
                </Button>
                <Button
                  className="btn-round"
                  color="facebook"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-facebook-square"></i> Facebook · 3.2k
                </Button>
                <Button
                  className="btn-round"
                  color="google"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-google-plus"></i> Google · 1.2k
                </Button>
                <Button
                  className="btn-round"
                  color="dribbble"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-dribbble"></i> Dribbble · 1.8k
                </Button>
              </Row>
            </Container>
          </div>
          <br></br>
          <br></br>
          <div className="social-line social-line-big-icons social-line-white">
            <Container>
              <Row>
                <Col md="2">
                  <Button
                    className="btn-neutral btn-icon btn-footer"
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-neutral btn-icon btn-footer"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-neutral btn-icon btn-footer"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-google-plus"></i>
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-neutral btn-icon btn-footer"
                    color="dribbble"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-dribbble"></i>
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-neutral btn-icon btn-footer"
                    color="youtube"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-youtube"></i>
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-neutral btn-icon btn-footer"
                    color="instagram"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-instagram"></i>
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
          <br></br>
          <br></br>
          <div className="social-line social-line-big-icons social-line-black">
            <Container>
              <Row>
                <Col md="2">
                  <Button
                    className="btn-icon btn-footer"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    outline
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-icon btn-footer"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    outline
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-icon btn-footer"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    outline
                  >
                    <i className="fab fa-google-plus"></i>
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-icon btn-footer"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    outline
                  >
                    <i className="fab fa-dribbble"></i>
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-icon btn-footer"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    outline
                  >
                    <i className="fab fa-youtube"></i>
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-icon btn-footer"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    outline
                  >
                    <i className="fab fa-instagram"></i>
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="subscribe-line subscribe-line-white">
            <Container>
              <Row>
                <Col md="6">
                  <h4 className="title mt-0">
                    Get Tips &amp; Tricks every Week!
                  </h4>
                  <p className="description">
                    Join our newsletter and get news in your inbox every week!
                    We hate spam too, so no worries about this.
                  </p>
                </Col>
                <Col md="6">
                  <Card className="card-plain card-form-horizontal">
                    <CardBody>
                      <Form action="" method="">
                        <Row>
                          <Col sm="8">
                            <InputGroup
                              className={emailFocus1 ? "input-group-focus" : ""}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="now-ui-icons ui-1_email-85"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Your Email..."
                                type="text"
                                onFocus={() => setEmailFocus1(true)}
                                onBlur={() => setEmailFocus1(false)}
                              ></Input>
                            </InputGroup>
                          </Col>
                          <Col sm="4">
                            <Button
                              block
                              className="btn-round"
                              color="info"
                              type="button"
                            >
                              Subscribe
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <br></br>
          <br></br>
          <div
            className="subscribe-line subscribe-line-image"
            style={{
              backgroundImage: "url(" + require("assets/img/bg7.jpg") + ")",
            }}
          >
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <div className="text-center">
                    <h4 className="title">Subscribe to our Newsletter</h4>
                    <p className="description">
                      Join our newsletter and get news in your inbox every week!
                      We hate spam too, so no worries about this.
                    </p>
                  </div>
                  <Card className="card-raised card-form-horizontal">
                    <CardBody>
                      <Form action="" method="">
                        <Row>
                          <Col sm="8">
                            <InputGroup
                              className={emailFocus2 ? "input-group-focus" : ""}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="now-ui-icons ui-1_email-85"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Your Email..."
                                type="email"
                                onFocus={() => setEmailFocus2(true)}
                                onBlur={() => setEmailFocus2(false)}
                              ></Input>
                            </InputGroup>
                          </Col>
                          <Col sm="4">
                            <Button
                              block
                              className="btn-round"
                              color="info"
                              type="button"
                            >
                              Subscribe
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreFooter;
