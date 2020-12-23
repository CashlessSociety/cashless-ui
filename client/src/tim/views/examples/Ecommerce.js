/*eslint-disable*/
import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Collapse,
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
  UncontrolledTooltip,
} from "reactstrap";

// core components
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import EcommerceHeader from "components/Headers/EcommerceHeader.js";
import Footer from "components/Footers/Footer.js";

function Ecommerce() {
  // focus for inputs
  const [emailFocus, setEmailFocus] = React.useState(false);
  // collapse states and functions
  const [collapses, setCollapses] = React.useState([1]);
  const changeCollapse = (collapse) => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter((prop) => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };
  // slider states and functions
  const [sliderMin, setSliderMin] = React.useState(100);
  const [sliderMax, setSliderMax] = React.useState(880);
  React.useEffect(() => {
    if (
      !document.getElementById("sliderRefine").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRefine"), {
        start: [sliderMin, sliderMax],
        connect: [false, true, false],
        step: 1,
        range: { min: 30, max: 900 },
      }).on("update", function (values) {
        setSliderMin(Math.round(values[0]));
        setSliderMax(Math.round(values[1]));
      });
    }

    document.body.classList.add("ecommerce-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("ecommerce-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ScrollTransparentNavbar />
      <div className="wrapper">
        <EcommerceHeader />
        <div className="main">
          <div className="section">
            <Container>
              <h2 className="section-title">Find what you need</h2>
              <Row>
                <Col md="3">
                  <div className="collapse-panel">
                    <CardBody>
                      <Card className="card-refine card-plain">
                        <CardTitle tag="h4">
                          Refine{" "}
                          <Button
                            className="btn-icon btn-neutral pull-right"
                            color="default"
                            id="tooltip633919451"
                          >
                            <i className="arrows-1_refresh-69 now-ui-icons"></i>
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip633919451"
                          >
                            Reset Filter
                          </UncontrolledTooltip>
                        </CardTitle>
                        <CardHeader id="headingOne" role="tab">
                          <h6 className="mb-0">
                            <a
                              className="text-info"
                              aria-expanded={collapses.includes(1)}
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(1);
                              }}
                            >
                              Price Range{" "}
                              <i className="now-ui-icons arrows-1_minimal-down"></i>
                            </a>
                          </h6>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(1)}>
                          <CardBody>
                            <span
                              className="price-left pull-left"
                              id="price-left"
                            >
                              €{sliderMin}
                            </span>
                            <span
                              className="price-right pull-right"
                              id="price-right"
                            >
                              €{sliderMax}
                            </span>
                            <div className="clearfix"></div>
                            <div
                              className="slider slider-refine"
                              id="sliderRefine"
                            ></div>
                          </CardBody>
                        </Collapse>
                      </Card>
                      <Card className="card-refine card-plain">
                        <CardHeader id="headingTwo" role="tab">
                          <h6>
                            <a
                              className="text-info"
                              aria-expanded={collapses.includes(2)}
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(2);
                              }}
                            >
                              Clothing{" "}
                              <i className="now-ui-icons arrows-1_minimal-down"></i>
                            </a>
                          </h6>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(2)}>
                          <CardBody>
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Casual Shirts
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Formal Shirts
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Jeans
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Polos
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Pijamas
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Shorts
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Blazers
                              </Label>
                            </FormGroup>
                          </CardBody>
                        </Collapse>
                      </Card>
                      <Card className="card-refine card-plain">
                        <CardHeader id="headingThree" role="tab">
                          <h6>
                            <a
                              className="text-info"
                              aria-expanded={collapses.includes(3)}
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(3);
                              }}
                            >
                              Designer{" "}
                              <i className="now-ui-icons arrows-1_minimal-down"></i>
                            </a>
                          </h6>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(3)}>
                          <CardBody>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                All
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Polo Ralph Lauren
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Wooyoungmi
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Alexander McQueen
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Tom Ford
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                AMI
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Berena
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Thom Sweeney
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Calvin Klein
                              </Label>
                            </FormGroup>
                          </CardBody>
                        </Collapse>
                      </Card>
                      <Card className="card-refine card-plain">
                        <CardHeader id="headingfour" role="tab">
                          <h6>
                            <a
                              className="text-info"
                              aria-expanded={collapses.includes(4)}
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                changeCollapse(4);
                              }}
                            >
                              Colour{" "}
                              <i className="now-ui-icons arrows-1_minimal-down"></i>
                            </a>
                          </h6>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(4)}>
                          <CardBody>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Black
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Blue
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Brown
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Gray
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Green
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Purple
                              </Label>
                            </FormGroup>
                          </CardBody>
                        </Collapse>
                      </Card>
                    </CardBody>
                  </div>
                </Col>
                <Col md="9">
                  <Row>
                    <Col lg="4" md="6">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              src={require("assets/img/polo.jpg")}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <CardTitle tag="h4">Polo Ralph Lauren</CardTitle>
                          </a>
                          <p className="card-description">
                            Impeccably tailored in Italy from lightweight navy
                            wool.
                          </p>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">€ 300</span>
                            </div>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="danger"
                              data-placement="left"
                              id="tooltip719224088"
                            >
                              <i className="now-ui-icons ui-2_favourite-28"></i>
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip719224088"
                            >
                              Remove from wishlist
                            </UncontrolledTooltip>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" md="6">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              src={require("assets/img/tom-ford.jpg")}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <CardTitle tag="h4">Tom Ford</CardTitle>
                          </a>
                          <p className="card-description">
                            Immaculate tailoring is TOM FORD's forte.
                          </p>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">€ 879</span>
                            </div>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="default"
                              data-placement="left"
                              id="tooltip44332731"
                            >
                              <i className="now-ui-icons ui-2_favourite-28"></i>
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip44332731"
                            >
                              Add to wishlist
                            </UncontrolledTooltip>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" md="6">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              src={require("assets/img/wooyoungmi.jpg")}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <CardTitle tag="h4">Wooyoungmi</CardTitle>
                          </a>
                          <p className="card-description">
                            Dark-grey slub wool, pintucked notch lapels.
                          </p>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">€ 555</span>
                            </div>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="default"
                              data-placement="left"
                              id="tooltip601285753"
                            >
                              <i className="now-ui-icons ui-2_favourite-28"></i>
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip601285753"
                            >
                              Add to wishlist
                            </UncontrolledTooltip>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" md="6">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              src={require("assets/img/sweeney.jpg")}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <CardTitle tag="h4">Thom Sweeney</CardTitle>
                          </a>
                          <p className="card-description">
                            It's made from lightweight grey wool woven.
                          </p>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">€ 680</span>
                            </div>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="default"
                              data-placement="left"
                              id="tooltip931109693"
                            >
                              <i className="now-ui-icons ui-2_favourite-28"></i>
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip931109693"
                            >
                              Add to wishlist
                            </UncontrolledTooltip>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" md="6">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              src={require("assets/img/kingsman.jpg")}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <CardTitle tag="h4">Kingsman</CardTitle>
                          </a>
                          <p className="card-description">
                            Crafted from khaki cotton and fully canvassed.
                          </p>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">€ 725</span>
                            </div>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="default"
                              data-placement="left"
                              id="tooltip512086450"
                            >
                              <i className="now-ui-icons ui-2_favourite-28"></i>
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip512086450"
                            >
                              Remove from wishlist
                            </UncontrolledTooltip>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" md="6">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              src={require("assets/img/boglioli.jpg")}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <CardTitle tag="h4">Boglioli</CardTitle>
                          </a>
                          <p className="card-description">
                            Masterfully crafted in Northern Italy.
                          </p>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">€ 699</span>
                            </div>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="default"
                              data-placement="left"
                              id="tooltip867244968"
                            >
                              <i className="now-ui-icons ui-2_favourite-28"></i>
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip867244968"
                            >
                              Add to wishlist
                            </UncontrolledTooltip>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="ml-auto mr-auto" md="3">
                      <Button
                        className="btn-round"
                        color="info"
                        id="tooltip51956639"
                      >
                        Load more...
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip51956639"
                      ></UncontrolledTooltip>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          <Container>
            <h2 className="section-title">News in fashion</h2>
          </Container>
          <div className="projects-4">
            <Container fluid>
              <Row>
                <Col className="px-0" md="6">
                  <Card
                    className="card-fashion card-background"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg35.jpg") + ")",
                    }}
                  >
                    <CardBody>
                      <CardTitle className="text-left" tag="div">
                        <h2>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            The New York Times Todd Snyder and Raf Simons Party
                            During Men’s Fashion Week
                          </a>
                        </h2>
                      </CardTitle>
                      <CardFooter className="text-left">
                        <div className="stats">
                          <span>
                            <i className="now-ui-icons users_circle-08"></i>
                            Emy Grace
                          </span>
                          <span>
                            <i className="now-ui-icons tech_watch-time"></i>
                            June 6, 2020
                          </span>
                        </div>
                        <div className="stats-link pull-right">
                          <a
                            className="footer-link"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Fashion Week
                          </a>
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="px-0" md="6">
                  <div className="card-container">
                    <Card className="card-fashion">
                      <CardTitle tag="div">
                        <h4>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Valentina Garavani Holds a Summer Lunch in Honor of
                            Sofia Coppola...
                          </a>
                        </h4>
                      </CardTitle>
                      <CardBody>
                        <CardFooter className="text-left">
                          <div className="stats">
                            <span>
                              <i className="now-ui-icons users_circle-08"></i>
                              Jerry McGregor
                            </span>
                            <span>
                              <i className="now-ui-icons tech_watch-time"></i>
                              June 10, 2020
                            </span>
                          </div>
                        </CardFooter>
                      </CardBody>
                    </Card>
                    <Card
                      className="card-fashion card-background"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/bg40.jpg") + ")",
                      }}
                    ></Card>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section">
            <Container>
              <h2 className="section-title">Latest Offers</h2>
              <Row>
                <Col md="4">
                  <Card className="card-product card-plain">
                    <div className="card-image">
                      <img
                        alt="..."
                        className="img rounded"
                        src={require("assets/img/saint-laurent1.jpg")}
                      ></img>
                    </div>
                    <CardBody>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Saint Laurent
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        The structured shoulders and sleek detailing ensure a
                        sharp silhouette. Team it with a silk pocket square and
                        leather loafers.
                      </p>
                      <CardFooter>
                        <div className="price-container">
                          <span className="price price-old mr-1">€1,430</span>
                          <span className="price price-new">€743</span>
                        </div>
                        <div className="stats stats-right">
                          <Button
                            className="btn-icon"
                            color="neutral"
                            id="tooltip777725160"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_favourite-28"></i>
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip777725160"
                          >
                            Saved to Wishlist
                          </UncontrolledTooltip>
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-product card-plain">
                    <div className="card-image">
                      <img
                        alt="..."
                        className="img rounded"
                        src={require("assets/img/saint-laurent.jpg")}
                      ></img>
                    </div>
                    <CardBody>
                      <CardTitle tag="h4">Saint Laurent</CardTitle>
                      <p className="card-description">
                        The structured shoulders and sleek detailing ensure a
                        sharp silhouette. Team it with a silk pocket square and
                        leather loafers.
                      </p>
                      <CardFooter>
                        <div className="price-container">
                          <span className="price price-old mr-1">€1,430</span>
                          <span className="price price-new">€743</span>
                        </div>
                        <div className="stats stats-right">
                          <Button
                            className="btn-icon"
                            color="neutral"
                            id="tooltip127778557"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_favourite-28"></i>
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip127778557"
                          >
                            Saved to Wishlist
                          </UncontrolledTooltip>
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-product card-plain">
                    <div className="card-image">
                      <img
                        alt="..."
                        className="img rounded"
                        src={require("assets/img/gucci.jpg")}
                      ></img>
                    </div>
                    <CardBody>
                      <CardTitle tag="h4">Gucci</CardTitle>
                      <p className="card-description">
                        The smooth woven-wool is water resistant to ensure you
                        stay pristine after a long-haul flight. Cut in a trim
                        yet comfortable regular fit.
                      </p>
                      <CardFooter>
                        <div className="price-container">
                          <span className="price price-old mr-1">€2,430</span>
                          <span className="price price-new">€890</span>
                        </div>
                        <div className="stats stats-right">
                          <Button
                            className="btn-icon btn-neutral"
                            color="default"
                            id="tooltip221340378"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_favourite-28"></i>
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip221340378"
                          >
                            Add to Wishlist
                          </UncontrolledTooltip>
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div
            className="subscribe-line subscribe-line-image"
            style={{
              backgroundImage: "url(" + require("assets/img/bg43.jpg") + ")",
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
                              className={emailFocus ? "input-group-focus" : ""}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="now-ui-icons ui-1_email-85"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Email Here..."
                                type="text"
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                              ></Input>
                            </InputGroup>
                          </Col>
                          <Col sm="4">
                            <Button block color="info" type="button">
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
        <Footer />
      </div>
    </>
  );
}

export default Ecommerce;
