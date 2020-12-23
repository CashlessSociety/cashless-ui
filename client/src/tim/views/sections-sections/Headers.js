import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Collapse,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components
const items = [
  {
    src: "url(" + require("assets/img/bg20.jpg") + ")",
    content: (
      <Row>
        <Col md="5">
          <div className="iframe-container">
            <iframe
              title="myIframe"
              allowFullScreen=""
              frameBorder="0"
              height="250"
              src="https://www.youtube.com/embed/rmfmdKOLzVI?rel=0&amp;controls=0&amp;showinfo=0"
            ></iframe>
          </div>
        </Col>
        <Col className="ml-auto mr-auto text-right" md="6">
          <h1 className="title">On the run tour.</h1>
          <h4 className="description">
            On the Run Tour: Beyoncé and Jay Z is a 2014 concert special which
            documents the September 12 and 13, 2014, shows of American singers
            {"'"}
            Beyoncé and Jay-Z joint co-headlining venture On the Run Tour.
          </h4>
        </Col>
      </Row>
    ),
    altText: "",
    caption: "",
  },
  {
    src: "url(" + require("assets/img/bg15.jpg") + ")",
    content: (
      <Row>
        <Col className="ml-auto mr-auto text-center" md="8">
          <h1 className="title">Island of legends.</h1>
          <h4 className="description">
            The islands of Malta and Gozo are brilliant for a family holiday,
            packed with fun places to visit whatever your children’s ages. The
            islands’ small size means everywhere is within easy reach.
          </h4>
          <br></br>
          <h5>Connect with us on:</h5>
          <div className="buttons">
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fab fa-twitter"></i>
            </Button>
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fab fa-facebook-square"></i>
            </Button>
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fab fa-google-plus"></i>
            </Button>
            <Button
              className="btn-icon btn-neutral btn-round mt-2"
              color="danger"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fab fa-instagram"></i>
            </Button>
          </div>
        </Col>
      </Row>
    ),
    altText: "",
    caption: "",
  },
  {
    src: "url(" + require("assets/img/bg17.jpg") + ")",
    content: (
      <Row>
        <Col className="text-left" md="6">
          <h1 className="title">Arctic Sea ice.</h1>
          <h4 className="description">
            According to the National Oceanic and Atmospheric Administration,
            Ted Scambos, NSIDC lead scientist, puts the potentially record low
            maximum sea ice extent this year down to low ice extent in the
            Pacific and a late drop in ice extent in the Barents Sea.
          </h4>
          <br></br>
          <div className="buttons">
            <Button
              className="btn-neutral mr-1"
              color="info"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
              size="lg"
            >
              <i className="now-ui-icons files_single-copy-04"></i> Read More..
            </Button>
            <Button
              color="info"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
              size="lg"
            >
              <i className="now-ui-icons arrows-1_share-66"></i> Subscribe
            </Button>
          </div>
        </Col>
      </Row>
    ),
    altText: "",
    caption: "",
  },
];

function Headers() {
  // navbar collapses states and functions
  const [navbarOpen1, setNavbarOpen1] = React.useState(false);
  const [navbarOpen2, setNavbarOpen2] = React.useState(false);
  const [navbarOpen3, setNavbarOpen3] = React.useState(false);
  // header 3 carousel states and functions
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
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      {navbarOpen1 || navbarOpen2 || navbarOpen3 ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setNavbarOpen1(false);
            setNavbarOpen2(false);
            setNavbarOpen3(false);
          }}
        />
      ) : null}
      <div className="cd-section" id="headers">
        <div className="header-1">
          <Navbar
            className="navbar-transparent bg-info navbar-absolute"
            expand="lg"
          >
            <Container>
              <div className="navbar-translate">
                <button
                  aria-expanded={navbarOpen1}
                  className="navbar-toggler"
                  data-toggle="collapse"
                  type="button"
                  onClick={() => {
                    document.documentElement.classList.toggle("nav-open");
                    setNavbarOpen1(!navbarOpen1);
                  }}
                >
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </button>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  Creative Tim
                </NavbarBrand>
              </div>
              <Collapse navbar isOpen={navbarOpen1}>
                <Nav className="mx-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      Contact Us
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="nav" navbar>
                  <NavItem>
                    <NavLink
                      href="https://twitter.com/CreativeTim?ref=creativetim"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.facebook.com/CreativeTim?ref=creativetim"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          <div className="page-header header-filter">
            <div
              className="page-header-image"
              style={{
                backgroundImage: "url(" + require("assets/img/bg16.jpg") + ")",
              }}
            ></div>
            <Container>
              <Row>
                <Col className="ml-auto text-right" md="7">
                  <h1 className="title">History of surfing</h1>
                  <h4 className="description">
                    The riding of waves has likely existed since humans began
                    swimming in the ocean. In this sense, bodysurfing is the
                    oldest type of wave-catching. Standing up on what is now
                    called a surfboard is a relatively recent innovation
                    developed by the Polynesians.
                  </h4>
                  <br></br>
                  <div className="buttons">
                    <Button
                      className="btn-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-get-pocket"></i>
                    </Button>
                    <Button
                      className="mr-3"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      Read More
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="header-2">
          <Navbar
            className="navbar-transparent bg-info navbar-absolute"
            expand="lg"
          >
            <Container>
              <div className="navbar-translate">
                <button
                  aria-expanded={navbarOpen2}
                  className="navbar-toggler"
                  data-toggle="collapse"
                  type="button"
                  onClick={() => {
                    document.documentElement.classList.toggle("nav-open");
                    setNavbarOpen1(!navbarOpen2);
                  }}
                >
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </button>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  Creative Tim
                </NavbarBrand>
              </div>
              <Collapse navbar isOpen={navbarOpen2}>
                <Nav className="mx-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      Products
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      Contact Us
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="nav navbar-right" navbar>
                  <NavItem>
                    <NavLink
                      href="https://twitter.com/CreativeTim?ref=creativetim"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.facebook.com/CreativeTim?ref=creativetim"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          <div className="page-header header-filter">
            <div
              className="page-header-image"
              style={{
                backgroundImage: "url(" + require("assets/img/bg14.jpg") + ")",
              }}
            ></div>
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h1 className="title">You should be here!</h1>
                  <h5 className="description">
                    5,000 capacity venue, holding some of the latest technology
                    lighting with a 24 colour laser system Amnesia is one of the
                    islands most legendary clubs.
                  </h5>
                </Col>
                <Col className="ml-auto mr-auto" md="10">
                  <Card
                    className="card-raised card-form-horizontal card-plain"
                    data-background-color=""
                  >
                    <CardBody>
                      <Form action="" method="">
                        <Row>
                          <Col md="3">
                            <FormGroup>
                              <Input
                                autoComplete="family-name"
                                defaultValue=""
                                placeholder="Full Name"
                                type="text"
                              ></Input>
                            </FormGroup>
                          </Col>
                          <Col md="3">
                            <FormGroup>
                              <Input
                                autoComplete="email"
                                placeholder="Your Email"
                                type="email"
                              ></Input>
                            </FormGroup>
                          </Col>
                          <Col md="3">
                            <FormGroup>
                              <Input
                                autoComplete="current-password"
                                placeholder="Password"
                                type="password"
                              ></Input>
                            </FormGroup>
                          </Col>
                          <Col md="3">
                            <Button
                              block
                              className="btn-round"
                              color="info"
                              type="button"
                            >
                              Join Us
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
        <div className="header-3">
          <Navbar
            className="navbar-transparent bg-info navbar-absolute"
            expand="lg"
          >
            <Container>
              <div className="navbar-translate">
                <button
                  aria-expanded={navbarOpen3}
                  className="navbar-toggler"
                  data-toggle="collapse"
                  type="button"
                  onClick={() => {
                    document.documentElement.classList.toggle("nav-open");
                    setNavbarOpen1(!navbarOpen3);
                  }}
                >
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </button>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  Creative Tim
                </NavbarBrand>
              </div>
              <Collapse navbar isOpen={navbarOpen3}>
                <Nav className="ml-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      Contact Us
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {items.map((item) => {
              return (
                <CarouselItem
                  onExiting={onExiting}
                  onExited={onExited}
                  key={item.src}
                >
                  <div className="page-header header-filter">
                    <div
                      className="page-header-image"
                      style={{
                        backgroundImage: item.src,
                      }}
                    ></div>
                    <div className="content">
                      <Container className="text-left">
                        {item.content}
                      </Container>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
            <a
              className="left carousel-control carousel-control-prev"
              data-slide="prev"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                previous();
              }}
              role="button"
            >
              <span className="now-ui-icons arrows-1_minimal-left" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control carousel-control-next"
              data-slide="next"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                next();
              }}
              role="button"
            >
              <span className="now-ui-icons arrows-1_minimal-right" />
              <span className="sr-only">Next</span>
            </a>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Headers;
