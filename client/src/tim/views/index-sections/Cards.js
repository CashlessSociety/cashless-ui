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

function Cards() {
  return (
    <>
      <div
        className="section section-cards"
        data-background-color="gray"
        id="cards"
      >
        <div className="cards">
          <Container>
            <div className="title">
              <h3 className="title">Cards</h3>
              <h3>
                <small>Blog Cards</small>
              </h3>
            </div>
            <Row>
              <Col lg="4" md="6">
                <Card data-background-color="red">
                  <CardBody>
                    <h6 className="category-social">
                      <i className="fa fa-fire"></i> Trending
                    </h6>
                    <p className="card-description">
                      "The supreme art of war is to subdue the enemy without
                      fighting."
                    </p>
                    <CardFooter>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/julie.jpg")}
                        ></img>
                        <span>Susan B. Anthony</span>
                      </div>
                      <div className="stats stats-right">
                        <i className="now-ui-icons ui-2_favourite-28"></i>
                        10.4K ·{" "}
                        <i className="now-ui-icons files_single-copy-04"></i>
                        425
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
                <Card className="card-blog">
                  <div className="card-image">
                    <img
                      alt="..."
                      className="img rounded"
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
                <Card>
                  <CardBody>
                    <h6 className="category text-danger">
                      <i className="now-ui-icons media-2_sound-wave"></i>{" "}
                      Trending
                    </h6>
                    <CardTitle tag="h5">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Here Be Dragons
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      An immersive production studio focused on virtual reality
                      content, has closed a $10 million Series A round led by
                      Discovery Communications
                    </p>
                    <CardFooter>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/olivia.jpg")}
                        ></img>
                        <span>Lord Alex</span>
                      </div>
                      <div className="stats stats-right">
                        <i className="now-ui-icons ui-2_favourite-28"></i>
                        342 ·{" "}
                        <i className="now-ui-icons files_single-copy-04"></i>
                        45
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4" md="6">
                <Card data-background-color="black">
                  <CardBody className="content-danger">
                    <h6 className="category-social">
                      <i className="fab fa-apple"></i> New Apps
                    </h6>
                    <CardTitle tag="h4">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        FiftyThree Files For Paper
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      Yesterday, as Facebook launched its news reader app Paper,
                      design-focused startup FiftyThree called out Facebook
                      publicly for using their brand name...
                    </p>
                    <CardFooter className="text-center">
                      <Button
                        className="btn-round"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Read Article
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
                <Card className="card-blog">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img rounded"
                        src={require("assets/img/card-blog2.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="category text-info">Features</h6>
                    <CardTitle tag="h5">
                      That’s One Way To Ditch Your Passenger
                    </CardTitle>
                    <p className="card-description">
                      As near as we can tell, this guy must have thought he was
                      going over backwards and tapped the rear break to bring
                      the nose down...
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
                        <i className="now-ui-icons tech_watch-time"></i>5 min
                        read
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
                <Card data-background-color="blue">
                  <CardBody>
                    <h6 className="category-social">
                      <i className="fab fa-twitter"></i> Twitter
                    </h6>
                    <p>
                      "You Don't Have to Sacrifice Joy to Build a Fabulous
                      Business and Life"
                    </p>
                    <CardFooter>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/james.jpg")}
                        ></img>
                        <span>Tania Andrew</span>
                      </div>
                      <div className="stats stats-right">
                        <i className="now-ui-icons ui-2_favourite-28"></i>
                        2.4K ·{" "}
                        <i className="now-ui-icons files_single-copy-04"></i>
                        45
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col className="offset-md-2 offset-lg-0" lg="4" md="8">
                <Card className="card-blog">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img rounded"
                        src={require("assets/img/examples/card-blog6.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody className="text-center">
                    <h6 className="category text-danger">
                      <i className="now-ui-icons media-2_sound-wave"></i>{" "}
                      Business
                    </h6>
                    <CardTitle tag="h5">
                      Axel Springer Spends $343M To Buy Business Insider
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
                <Card className="card-blog">
                  <div className="card-image">
                    <img
                      alt="..."
                      className="img rounded"
                      src={require("assets/img/card-blog3.jpg")}
                    ></img>
                  </div>
                  <CardBody>
                    <h6 className="category text-warning">
                      <i className="now-ui-icons media-1_camera-compact"></i>{" "}
                      Photo
                    </h6>
                    <CardTitle tag="h5">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Indispensible to nature photography: the hide
                      </a>
                    </CardTitle>
                    <CardFooter>
                      <div className="stats stats-right">
                        <i className="now-ui-icons ui-2_favourite-28"></i>
                        342 ·{" "}
                        <i className="now-ui-icons files_single-copy-04"></i>
                        45
                      </div>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/james.jpg")}
                        ></img>
                        <span>Devin Coldewey</span>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Container fluid>
          <Row>
            <Col className="px-0" md="6">
              <Card
                className="card-fashion card-background"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/bg26.jpg") + ")",
                }}
              >
                <CardBody>
                  <CardTitle className="text-left" tag="div">
                    <h2>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Walk of shame - Latest Urban Trend
                      </a>
                    </h2>
                  </CardTitle>
                  <CardFooter className="text-left">
                    <div className="stats">
                      <span>
                        <i className="now-ui-icons users_circle-08"></i>
                        Author
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
            <Col className="px-0" md="6">
              <div className="card-container">
                <Card className="card-fashion">
                  <CardTitle tag="h4">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      The view from south Texas in one Picture
                    </a>
                  </CardTitle>
                  <CardBody>
                    <CardFooter>
                      <div className="stats">
                        <span>
                          <i className="now-ui-icons users_circle-08"></i>
                          Author
                        </span>
                        <span>
                          <i className="now-ui-icons tech_watch-time"></i>
                          June 2, 2020
                        </span>
                      </div>
                      <div className="stats-link pull-right">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Mountains
                        </a>
                        ‚{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Outdoor
                        </a>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
                <Card
                  className="card-fashion card-background"
                  style={{
                    backgroundImage:
                      "url('http://mvpwp.com/demo/nowwp/wp-content/uploads/sites/6/2017/06/a-james-donovan-180375.jpg')",
                  }}
                ></Card>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="cards">
          <Container>
            <div className="title">
              <h3>
                <small>Profile Cards</small>
              </h3>
            </div>
            <Row>
              <Col lg="3" md="6">
                <Card className="card-profile">
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
                <Card className="card-profile">
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
                <Card className="card-profile" data-background-color="black">
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
                      Don't be scared of the truth because we need to restart
                      the human foundation in truth.
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
                <Card className="card-profile">
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
        <div className="cards">
          <Container>
            <div className="title">
              <h3>
                <small>Full Background Cards</small>
              </h3>
            </div>
            <Row>
              <Col md="6">
                <Card
                  className="card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/bg1.jpg") + ")",
                  }}
                >
                  <CardBody>
                    <CardTitle className="text-left" tag="div">
                      <h3>How wild Animals live in the National Forest</h3>
                    </CardTitle>
                    <CardFooter className="text-left">
                      <div className="stats">
                        <span>
                          <i className="now-ui-icons media-2_sound-wave"></i>
                          SPACE.com
                        </span>
                        <span>
                          <i className="now-ui-icons tech_watch-time"></i>
                          20min ago
                        </span>
                      </div>
                      <div className="stats-link pull-right">
                        <a
                          className="footer-link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Environment
                        </a>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card
                  className="card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/bg3.jpg") + ")",
                  }}
                >
                  <CardBody>
                    <CardTitle className="text-left" tag="div">
                      <h3>How wild Animals live in the National Forest</h3>
                    </CardTitle>
                    <CardFooter className="text-left">
                      <div className="stats-link">
                        <a
                          className="footer-link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Environment
                        </a>
                      </div>
                      <div className="stats stats-right">
                        <span>
                          <i className="now-ui-icons media-2_sound-wave"></i>
                          SPACE.com
                        </span>
                        <span>
                          <i className="now-ui-icons tech_watch-time"></i>
                          20min ago
                        </span>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="cards">
          <Container>
            <div className="title">
              <h3>
                <small>Pricing Cards</small>
              </h3>
            </div>
            <Row>
              <Col lg="3" md="6">
                <Card className="card-pricing">
                  <CardBody>
                    <h6 className="category">Alpha Pack</h6>
                    <div className="icon icon-info">
                      <i className="now-ui-icons objects_diamond"></i>
                    </div>
                    <CardTitle tag="h3">$67</CardTitle>
                    <p className="card-description">
                      This is good if your company size is between 100 and 299
                      employees.
                    </p>
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
              <Col lg="3" md="6">
                <Card className="card-pricing" data-background-color="blue">
                  <CardBody>
                    <CardTitle tag="h1">$40</CardTitle>
                    <ul>
                      <li>
                        <i className="now-ui-icons ui-1_check text-info"></i>
                        Unlimited MB
                      </li>
                      <li>
                        <i className="now-ui-icons ui-1_check text-info"></i>
                        Unlimited emails
                      </li>
                      <li>
                        <i className="now-ui-icons ui-1_check text-info"></i>
                        Unlimited Databases
                      </li>
                      <li>
                        <i className="now-ui-icons ui-1_check text-info"></i>
                        Full Support
                      </li>
                    </ul>
                    <Button
                      className="btn-neutral disabled btn-round"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Current Plan
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card
                  className="card-pricing card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project12.jpg") + ")",
                  }}
                >
                  <CardBody>
                    <h6 className="category">Professional</h6>
                    <div className="icon icon-info">
                      <i className="now-ui-icons objects_spaceship"></i>
                    </div>
                    <CardTitle tag="h2">$67</CardTitle>
                    <p className="card-description">
                      This is good if you are a freelancer of photographer.
                    </p>
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
              <Col lg="3" md="6">
                <Card className="card-pricing">
                  <CardBody>
                    <h6 className="category">Starter</h6>
                    <CardTitle tag="h1">
                      <small>$</small>
                      10
                    </CardTitle>
                    <ul>
                      <li>
                        <i className="now-ui-icons ui-1_check text-success"></i>
                        1000 MB
                      </li>
                      <li>
                        <i className="now-ui-icons ui-1_simple-remove text-danger"></i>
                        3 email
                      </li>
                      <li>
                        <i className="now-ui-icons ui-1_simple-remove text-danger"></i>
                        5 Databases
                      </li>
                      <li>
                        <i className="now-ui-icons ui-1_simple-remove text-danger"></i>
                        No Support
                      </li>
                    </ul>
                    <Button
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Register
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Cards;
