import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
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
import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar.js";
import BlogPostsHeader from "components/Headers/BlogPostsHeader.js";
import FooterBlackSocial from "components/Footers/FooterBlackSocial.js";

function BlogPosts() {
  const [emailFocus, setEmailFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("blog-posts");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-posts");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <FixedTransparentNavbar />
      <div className="wrapper">
        <BlogPostsHeader />
        <div className="projects-4">
          <Container fluid>
            <Row>
              <Col className="px-0" md="6">
                <Card
                  className="card-fashion card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project10.jpg") + ")",
                  }}
                >
                  <CardBody>
                    <CardTitle className="text-left" tag="div">
                      <h2>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          The world's biggest yacht sets sail. It has lasers.
                        </a>
                      </h2>
                    </CardTitle>
                    <CardFooter className="text-left">
                      <div className="stats">
                        <span>
                          <i className="now-ui-icons users_circle-08"></i>
                          Nicholas Deleon
                        </span>
                        <span>
                          <i className="now-ui-icons tech_watch-time"></i>
                          June 2, 2020
                        </span>
                      </div>
                      <div className="stats-link pull-right">
                        <a
                          className="footer-link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Yachts
                        </a>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col className="px-0" md="3">
                <Card className="card-fashion">
                  <CardTitle tag="div">
                    <h4>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Why Early Sailors Were Stalled for Millennia in the...
                      </a>
                    </h4>
                  </CardTitle>
                  <CardBody>
                    <CardFooter>
                      <div className="stats">
                        <span>
                          <i className="now-ui-icons users_circle-08"></i>
                          Jon Russell
                        </span>
                        <span>
                          <i className="now-ui-icons tech_watch-time"></i>
                          June 2, 2020
                        </span>
                      </div>
                      <div className="stats-link pull-right">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Sea
                        </a>
                        ‚{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Magazine
                        </a>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col className="px-0" md="3">
                <Card
                  className="card-fashion card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project11.jpg") + ")",
                  }}
                ></Card>
              </Col>
            </Row>
            <Row>
              <Col className="px-0" md="3">
                <Card
                  className="card-fashion card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project12.jpg") + ")",
                  }}
                ></Card>
              </Col>
              <Col className="px-0" md="3">
                <Card className="card-fashion arrow-left">
                  <CardTitle tag="div">
                    <h4>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        My Depressing Summers in Belize
                      </a>
                    </h4>
                  </CardTitle>
                  <CardBody>
                    <CardFooter>
                      <div className="stats">
                        <span>
                          <i className="now-ui-icons users_circle-08"></i>
                          John Bruno
                        </span>
                        <span>
                          <i className="now-ui-icons tech_watch-time"></i>
                          June 2, 2020
                        </span>
                      </div>
                      <div className="stats-link pull-right">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Opinion
                        </a>
                        ‚{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Outdoor
                        </a>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col className="px-0" md="6">
                <Card
                  className="card-fashion card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project13.jpg") + ")",
                  }}
                >
                  <CardBody>
                    <CardTitle className="text-left" tag="div">
                      <h2>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          China Wants Fish, So Africa Goes Hungry
                        </a>
                      </h2>
                    </CardTitle>
                    <CardFooter className="text-left">
                      <div className="stats">
                        <span>
                          <i className="now-ui-icons users_circle-08"></i>
                          Joanna Klein
                        </span>
                        <span>
                          <i className="now-ui-icons tech_watch-time"></i>
                          June 2, 2020
                        </span>
                      </div>
                      <div className="stats-link pull-right">
                        <a
                          className="footer-link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          People
                        </a>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="main">
          <Container>
            <div className="section">
              <h3 className="title text-center">
                You may also be interested in
              </h3>
              <br></br>
              <Row>
                <Col md="4">
                  <Card className="card-plain card-blog">
                    <div className="card-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded img-raised"
                          src={require("assets/img/bg5.jpg")}
                        ></img>
                      </a>
                    </div>
                    <CardBody>
                      <h6 className="category text-info">Enterprise</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Autodesk looks to future of 3D printing with Project
                          Escher
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a
                        traditional boxed software company selling licenses.{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Read More
                        </a>
                      </p>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/olivia.jpg")}
                        ></img>
                        <span>Anna Spark</span>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-plain card-blog">
                    <div className="card-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded img-raised"
                          src={require("assets/img/bg27.jpg")}
                        ></img>
                      </a>
                    </div>
                    <CardBody>
                      <h6 className="category text-success">Startups</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Lyft launching cross-platform service this week
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a
                        traditional boxed software company selling licenses.{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Read More
                        </a>
                      </p>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/michael.jpg")}
                        ></img>
                        <span>John Black</span>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-plain card-blog">
                    <div className="card-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded img-raised"
                          src={require("assets/img/bg21.jpg")}
                        ></img>
                      </a>
                    </div>
                    <CardBody>
                      <h6 className="category text-danger">
                        <i className="now-ui-icons media-2_sound-wave"></i>{" "}
                        Enterprise
                      </h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          6 insights into the French Fashion landscape
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a
                        traditional boxed software company selling licenses.{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Read More
                        </a>
                      </p>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/james.jpg")}
                        ></img>
                        <span>James Newman</span>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="section pt-0 pb-0">
            <div
              className="team-3 section-image"
              data-parallax={true}
              style={{
                backgroundImage: "url(" + require("assets/img/bg26.jpg") + ")",
              }}
            >
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="8">
                    <h2 className="title">Our little team.</h2>
                    <h4 className="description">
                      This is the paragraph where you can write more details
                      about your product. Keep you user engaged by providing
                      meaningful information.
                    </h4>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="7" xl="6">
                    <Card className="card-profile">
                      <Row>
                        <Col md="5">
                          <div className="card-image">
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                className="img"
                                src={require("assets/img/olivia.jpg")}
                              ></img>
                            </a>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <CardTitle tag="h3">Ariana Hazel</CardTitle>
                            <h6 className="category text-info">
                              Fashion Designer
                            </h6>
                            <p className="card-description">
                              Happiness resides not in possessions, and not in
                              gold, happiness dwells in the soul...
                            </p>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="7" xl="6">
                    <Card className="card-profile">
                      <Row>
                        <Col md="5">
                          <div className="card-image">
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                className="img"
                                src={require("assets/img/james.jpg")}
                              ></img>
                            </a>
                          </div>
                        </Col>
                        <Col md="7">
                          <CardBody>
                            <CardTitle tag="h3">Ryan Samuel</CardTitle>
                            <h6 className="category text-info">
                              Financial Examiner
                            </h6>
                            <p className="card-description">
                              Today you are you! That is truer than true! There
                              is no one alive who is you-er than you!..
                            </p>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="subscribe-line subscribe-line-white">
            <Container>
              <Row>
                <Col md="6">
                  <h4 className="title">Get Tips &amp; Tricks every Week!</h4>
                  <p className="description">
                    Join our newsletter and get news in your inbox every week!
                    We hate spam too, so no worries about this.
                  </p>
                </Col>
                <Col md="6">
                  <Card className="card-plain card-form-horizontal">
                    <div className="card-content">
                      <Form action="" method="">
                        <Row>
                          <Col sm="8">
                            <InputGroup
                              className={emailFocus ? "input-group-focus" : ""}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="now-ui-icons ui-1_email-85"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Email Name..."
                                type="text"
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
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
                    </div>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <FooterBlackSocial />
      </div>
    </>
  );
}

export default BlogPosts;
