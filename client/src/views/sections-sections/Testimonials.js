import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
} from "reactstrap";

// core components

const items = [
  {
    src: "0",
    altText: "",
    caption: "",
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src={require("assets/img/james.jpg")}
            ></img>
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
            "Take up one idea. Make that one idea your life - think of it, dream
            of it, live on that idea. Let the brain, muscles, nerves, every part
            of your body, be full of that idea, and just leave every other idea
            alone. This is the way to success. A single rose can be my garden...
            a single friend, my world."
          </h5>
          <CardTitle tag="h3">Isaac Hunter</CardTitle>
          <CardFooter>
            <h6 className="category text-info">Human Resource Director</h6>
          </CardFooter>
        </CardBody>
      </Card>
    ),
  },
  {
    src: "1",
    altText: "",
    caption: "",
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src={require("assets/img/olivia.jpg")}
            ></img>
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
            "When we are no longer able to change a situation - we are
            challenged to change ourselves. Spread love everywhere you go. Let
            no one ever come to you without leaving happier. Problems are not
            stop signs, they are guidelines."
          </h5>
          <CardTitle tag="h3">Alexa Hailey</CardTitle>
          <CardFooter>
            <h6 className="category text-info">Human Resource Director</h6>
          </CardFooter>
        </CardBody>
      </Card>
    ),
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  return (
    <>
      <div className="cd-section" id="testimonials">
        <div
          className="testimonials-1 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg19.jpg") + ")",
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">What is ALPHA?</h2>
                <h4 className="description">
                  If you’re selected for ALPHA you’ll also get 3 tickets,
                  opportunity to access Investor Office Hours and Mentor Hours
                  and much more all for €850.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-testimonial">
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
                    <p className="card-description">
                      The networking at Web Summit is like no other European
                      tech conference.
                    </p>
                  </CardBody>
                  <div className="icon icon-info">
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <CardFooter>
                    <CardTitle tag="h4">Michael Elijah</CardTitle>
                    <p className="category">@michaelelijah</p>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial">
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
                    <p className="card-description">
                      The connections you make at Web Summit are unparalleled,
                      we met users all over the world.
                    </p>
                  </CardBody>
                  <div className="icon icon-info">
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <CardFooter>
                    <CardTitle tag="h4">Olivia Harper</CardTitle>
                    <p className="category">@oliviaharper</p>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial">
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
                    <p className="card-description">
                      Web Summit will increase your appetite, your inspiration,
                      and your network.
                    </p>
                  </CardBody>
                  <div className="icon icon-info">
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <CardFooter>
                    <CardTitle tag="h4">James Logan</CardTitle>
                    <p className="category">@jameslogan</p>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="testimonials-2">
          <Container>
            <Row>
              <Col md="12">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        {item.content}
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <i className="now-ui-icons arrows-1_minimal-left"></i>
                  </a>
                  <a
                    className="carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <i className="now-ui-icons arrows-1_minimal-right"></i>
                  </a>
                </Carousel>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="testimonials-3">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">What Clients Say</h2>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/michael.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h3">Andrew John</CardTitle>
                    <h6 className="category text-info">Loan Counselor</h6>
                    <p className="card-description">
                      "Do not go where the path may lead, go instead where there
                      is no path and leave a trail."
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/olivia.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Zoe Gabriella</CardTitle>
                    <h6 className="category text-info">
                      Interpreter OR Translator
                    </h6>
                    <p className="card-description">
                      "Don't walk behind me; I may not lead. Don't walk in front
                      of me; I may not follow. Just walk beside me and be my
                      friend."
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/james.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Joshiah Luke</CardTitle>
                    <h6 className="category text-info">HR Specialist</h6>
                    <p className="card-description">
                      "The pessimist complains about the wind; the optimist
                      expects it to change; the realist adjusts the sails."
                    </p>
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

export default Testimonials;
