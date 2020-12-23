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

function Teams() {
  return (
    <>
      <div className="cd-section" id="teams">
        <div className="team-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Our Awesome Team 1</h2>
                <h4 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h4>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="ml-1" md="4">
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
                    <CardTitle tag="h3">Oliver Atticus</CardTitle>
                    <h6 className="category text-info">Web Developer</h6>
                    <p className="card-description">
                      If you want to know what a man's like, take a good look at
                      how he treats his inferiors, not his equals.
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-facebook-square"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-1" md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/michael.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h3">Smith College</CardTitle>
                    <h6 className="category text-info">CEO / Co-Founder</h6>
                    <p className="card-description">
                      Two things are infinite: the universe and human stupidity;
                      and I'm not sure about the universe.
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-facebook-square"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-google"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-1 mt-4" md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/emily.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h3">Sophia Madison</CardTitle>
                    <h6 className="category text-info">Entrepreneur</h6>
                    <p className="card-description">
                      Be who you are and say what you feel, because those who
                      mind don't matter, and those who matter don't mind.
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-linkedin"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-1 mt-4" md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/olivia.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h3">Emily Chloe</CardTitle>
                    <h6 className="category text-info">Entrepreneur</h6>
                    <p className="card-description">
                      You know you're in love when you can't fall asleep because
                      reality is finally better than your dreams.
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-google"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="team-2">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Executive Team 2</h2>
                <h4 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/examples/card-profile1.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Sofia Scarlett</CardTitle>
                    <h6 className="category">Account Manager</h6>
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
                        color="dribbble"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/examples/card-profile2.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Lucas Jacob</CardTitle>
                    <h6 className="category">Aerospace Engineer</h6>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-round"
                        color="dribbble"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="facebook"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-facebook-square"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/examples/card-profile3.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Amelia Charlotte</CardTitle>
                    <h6 className="category">Photographer</h6>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-round"
                        color="linkedin"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-linkedin"></i>
                      </Button>
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
                        color="dribbble"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="team-3 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg21.jpg") + ")",
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Executive Team 3</h2>
                <h4 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto" lg="7" xl="6">
                <Card className="card-profile">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
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
                        <h6 className="category text-info">Fashion Designer</h6>
                        <p className="card-description">
                          Happiness resides not in possessions, and not in gold,
                          happiness dwells in the soul...
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
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
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
                          Today you are you! That is truer than true! There is
                          no one alive who is you-er than you!..
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
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/michael.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Joshua Jackson</CardTitle>
                        <h6 className="category text-info">
                          Landscape Architect
                        </h6>
                        <p className="card-description">
                          Success is not final, failure is not fatal: it is the
                          courage to continue that counts...
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
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/emily.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Nora Hazel</CardTitle>
                        <h6 className="category text-info">Legal Secretary</h6>
                        <p className="card-description">
                          Do not dwell in the past, do not dream of the future,
                          concentrate the mind...
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="team-4">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Executive Team 4</h2>
                <h4 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="6">
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
              <Col md="6">
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
                          Love cures people - both the ones who give it and the
                          ones who receive it...
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
              <Col md="6">
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
                            <i className="fab fa-youtube"></i>
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
              <Col md="6">
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
        <div
          className="team-5 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg9.jpg") + ")",
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Executive Team 5</h2>
                <h4 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-profile">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/olivia.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h3">Natalie Paisley</CardTitle>
                    <h6 className="category text-info">Credit Analyst</h6>
                    <p className="card-description">
                      Very little is needed to make a happy life; it is all
                      within yourself, in your way of thinking...
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-linkedin"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile">
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
                    <CardTitle tag="h4">Anthony Jackson</CardTitle>
                    <h6 className="category text-info">Desktop Publisher</h6>
                    <p className="card-description">
                      Let us be grateful to people who make us happy, they are
                      the charming gardeners who make our souls blossom...
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/emily.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Bella Audrey</CardTitle>
                    <h6 className="category text-info">Economist</h6>
                    <p className="card-description">
                      For it was not into my ear you whispered, but into my
                      heart. It was not my lips you kissed, but my soul...
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-pinterest"></i>
                      </Button>
                    </CardFooter>
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

export default Teams;
