import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function PlainCards() {
  return (
    <>
      <div className="section section-plain-cards">
        <Container>
          <div className="title">
            <h3>Plain Cards</h3>
            <h3>
              <small>Blog Cards</small>
            </h3>
          </div>
          <Row>
            <Col lg="4" md="6">
              <Card className="card-blog card-plain">
                <div className="card-image">
                  <img
                    alt="..."
                    className="img rounded img-raised"
                    src={require("assets/img/project13.jpg")}
                  ></img>
                </div>
                <CardBody>
                  <h6 className="category text-warning">
                    <i className="now-ui-icons business_bulb-63"></i> Focus
                  </h6>
                  <CardTitle tag="h5">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Stay Focused: Train Your Brain
                    </a>
                  </CardTitle>
                  <p className="card-description">
                    Our brains are finely attuned to distraction, so today's
                    digital environment makes it especially hard to focus...
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-blog card-plain">
                <div className="card-image">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img rounded img-raised"
                      src={require("assets/img/card-blog2.jpg")}
                    ></img>
                  </a>
                </div>
                <CardBody>
                  <h6 className="category text-info">Features</h6>
                  <CardTitle tag="h5">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      That’s One Way To Ditch Your Passenger
                    </a>
                  </CardTitle>
                  <p className="card-description">
                    As near as we can tell, this guy must have thought he was
                    going over backwards and tapped the rear break to bring the
                    nose down...
                  </p>
                  <CardFooter>
                    <div className="author">
                      <img
                        alt="..."
                        className="avatar img-raised"
                        src={require("assets/img/julie.jpg")}
                      ></img>
                      <span>Mike John</span>
                    </div>
                    <div className="stats stats-right">
                      <i className="now-ui-icons tech_watch-time"></i>5 min read
                    </div>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-blog card-plain">
                <div className="card-image">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img img-raised rounded"
                      src={require("assets/img/examples/card-blog6.jpg")}
                    ></img>
                  </a>
                </div>
                <CardBody className="text-center">
                  <h6 className="category text-danger">
                    <i className="now-ui-icons media-2_sound-wave"></i> Business
                  </h6>
                  <CardTitle tag="h5">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Axel Springer Spends $343M To Buy Business Insider
                    </a>
                  </CardTitle>
                  <p className="card-description">
                    German media giant Axel Springer has announced it’s
                    acquiring online business news publication Business
                    Inside...
                  </p>
                  <CardFooter>
                    <Button
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Read Article
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="title">
            <h3>
              <small>Profile Cards</small>
            </h3>
          </div>
          <Row>
            <Col lg="3" md="6">
              <Card className="card-profile card-plain">
                <div className="card-image">
                  <img
                    alt="..."
                    className="img rounded"
                    src={require("assets/img/julie.jpg")}
                  ></img>
                </div>
                <CardBody>
                  <a href="pablo">
                    <CardTitle tag="h4">Julie Andrew</CardTitle>
                  </a>
                  <h6 className="card-category text-info">Web Designer</h6>
                  <CardFooter>
                    <Button
                      className="btn-icon btn-neutral"
                      color="twitter"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-neutral"
                      color="dribbble"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-dribbble"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-neutral"
                      color="instagram"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img img-raised"
                      src={require("assets/img/mike.jpg")}
                    ></img>
                  </a>
                </div>
                <CardBody>
                  <CardTitle tag="h4">Alec Mike</CardTitle>
                  <h6 className="category text-gray">Designer</h6>
                  <p className="card-description">
                    One of the co-founders. Alec drives the technical strategy
                    of the platform, customer support and brand.
                  </p>
                  <CardFooter>
                    <Button
                      className="btn-icon btn-round"
                      color="twitter"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="facebook"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="google"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google"></i>
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img img-raised"
                      src={require("assets/img/james.jpg")}
                    ></img>
                  </a>
                </div>
                <CardBody>
                  <h6 className="card-category">CEO / Co-Founder</h6>
                  <CardTitle tag="h4">James Thompson</CardTitle>
                  <p className="card-description">
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth.
                  </p>
                  <Button
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Follow
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-profile card-plain">
                <CardBody>
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/olivia.jpg")}
                      ></img>
                    </a>
                  </div>
                  <h6 className="category text-gray">Growth Hacker</h6>
                  <CardTitle tag="h4">Olivia Thompson</CardTitle>
                  <p className="card-description">"Work hard play harder."</p>
                  <CardFooter>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      outline
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      outline
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      outline
                    >
                      <i className="fab fa-google"></i>
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PlainCards;
