/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  NavLink,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Footers() {
  return (
    <>
      <div className="section section-footers" data-background-color="gray">
        <Container>
          <div className="title">
            <h3>Footer Areas</h3>
          </div>
        </Container>
        <div id="footer-areas">
          <footer className="footer footer-white">
            <Container>
              <a
                className="footer-brand"
                href="http://www.creative-tim.com?ref=nuk-pro-react-index"
                target="_blank"
              >
                Now Ui Kit PRO
              </a>
              <ul className="pull-center">
                <li>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Creative Tim
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Licenses
                  </NavLink>
                </li>
              </ul>
              <ul className="social-buttons pull-right">
                <li>
                  <Button
                    className="btn-icon btn-neutral"
                    color="twitter"
                    href="https://twitter.com/CreativeTim?ref=creativetim"
                    target="_blank"
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                </li>
                <li>
                  <Button
                    className="btn-icon btn-neutral"
                    color="dribbble"
                    href="https://www.facebook.com/CreativeTim?ref=creativetim"
                    target="_blank"
                  >
                    <i className="fab fa-dribbble"></i>
                  </Button>
                </li>
                <li>
                  <Button
                    className="btn-icon btn-neutral"
                    color="google"
                    href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                    target="_blank"
                  >
                    <i className="fab fa-google-plus"></i>
                  </Button>
                </li>
              </ul>
            </Container>
          </footer>
          <br></br>
          <br></br>
          <footer className="footer">
            <Container>
              <nav>
                <ul>
                  <li>
                    <NavLink
                      href="https://www.creative-tim.com?ref=nuk-pro-react-index"
                      target="_blank"
                    >
                      Creative Tim
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="http://presentation.creative-tim.com?ref=nuk-pro-react-index"
                      target="_blank"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="http://blog.creative-tim.com?ref=nuk-pro-react-index"
                      target="_blank"
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="https://www.creative-tim.com/license?ref=nuk-pro-react-index"
                      target="_blank"
                    >
                      License
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className="copyright">
                © {new Date().getFullYear()}, Designed by{" "}
                <a
                  className="copyright-link"
                  href="http://www.invisionapp.com?ref=creativetim"
                  target="_blank"
                >
                  Invision
                </a>
                . Coded by{" "}
                <a
                  className="copyright-link"
                  href="https://www.creative-tim.com?ref=nuk-pro-react-index"
                  target="_blank"
                >
                  Creative Tim
                </a>
                .
              </div>
            </Container>
          </footer>
          <br></br>
          <br></br>
          <footer className="footer" data-background-color="black">
            <Container>
              <a
                className="footer-brand"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Now Ui Kit PRO
              </a>
              <ul className="pull-center">
                <li>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Presentation
                  </a>
                </li>
                <li>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Discover
                  </a>
                </li>
                <li>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Payment
                  </a>
                </li>
                <li>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Contact Us
                  </a>
                </li>
              </ul>
              <ul className="social-buttons pull-right">
                <li>
                  <Button
                    className="btn-icon btn-neutral"
                    color="link"
                    href="https://twitter.com/CreativeTim?ref=creativetim"
                    target="_blank"
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                </li>
                <li>
                  <Button
                    className="btn-icon btn-neutral"
                    color="link"
                    href="https://www.facebook.com/CreativeTim?ref=creativetim"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                </li>
                <li>
                  <Button
                    className="btn-icon btn-neutral"
                    color="link"
                    href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </Button>
                </li>
              </ul>
            </Container>
          </footer>
          <br></br>
          <br></br>
          <footer className="footer footer-big footer-white">
            <Container>
              <div className="content">
                <Row>
                  <Col md="4">
                    <h5>About Us</h5>
                    <p>
                      Creative Tim is a startup that creates design tools that
                      make the web development process faster and easier.
                    </p>
                    <p>
                      We love the web and care deeply for how users interact
                      with a digital product. We power businesses and
                      individuals to create better looking web projects around
                      the world.
                    </p>
                  </Col>
                  <Col md="4">
                    <h5>Social Feed</h5>
                    <div className="social-feed">
                      <div className="feed-line">
                        <i className="fab fa-twitter"></i>
                        <p>
                          How to handle ethical disagreements with your clients.
                        </p>
                      </div>
                      <div className="feed-line">
                        <i className="fab fa-twitter"></i>
                        <p>
                          The tangible benefits of designing at 1x pixel
                          density.
                        </p>
                      </div>
                      <div className="feed-line">
                        <i className="fab fa-facebook-square"></i>
                        <p>
                          A collection of 25 stunning sites that you can use for
                          inspiration.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="4">
                    <h5>Instagram Feed</h5>
                    <div className="gallery-feed">
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/olivia.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/james.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/michael.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/emily.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/marie.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/usher.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/mike.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/julie.jpg")}
                      ></img>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <ul className="pull-left">
                <li>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Presentation
                  </a>
                </li>
                <li>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Discover
                  </a>
                </li>
                <li>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Payment
                  </a>
                </li>
                <li>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="copyright pull-right">
                Copyright © {new Date().getFullYear()} Creative Tim All Rights
                Reserved.
              </div>
            </Container>
          </footer>
          <br></br>
          <br></br>
          <footer className="footer footer-big" data-background-color="black">
            <Container>
              <div className="content">
                <Row>
                  <Col md="2">
                    <h5>About Us</h5>
                    <ul className="links-vertical">
                      <li>
                        <a
                          className="text-muted"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-muted"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-muted"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Presentation
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-muted"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col md="2">
                    <h5>Market</h5>
                    <ul className="links-vertical">
                      <li>
                        <a
                          className="text-muted"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Sales FAQ
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-muted"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          How to Register
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-muted"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Sell Goods
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-muted"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Receive Payment
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-muted"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Transactions Issues
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-muted"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Affiliates Program
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col md="4">
                    <h5>Social Feed</h5>
                    <div className="social-feed">
                      <div className="feed-line">
                        <i className="fab fa-twitter"></i>
                        <p>
                          How to handle ethical disagreements with your clients.
                        </p>
                      </div>
                      <div className="feed-line">
                        <i className="fab fa-twitter"></i>
                        <p>
                          The tangible benefits of designing at 1x pixel
                          density.
                        </p>
                      </div>
                      <div className="feed-line">
                        <i className="fab fa-facebook-square"></i>
                        <p>
                          A collection of 25 stunning sites that you can use for
                          inspiration.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="4">
                    <h5>Follow Us</h5>
                    <ul className="social-buttons">
                      <li>
                        <Button
                          className="btn-icon btn-neutral btn-round mr-1"
                          color="twitter"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-twitter"></i>
                        </Button>
                      </li>
                      <li>
                        <Button
                          className="btn-icon btn-neutral btn-round mr-1"
                          color="facebook"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-facebook-square"></i>
                        </Button>
                      </li>
                      <li>
                        <Button
                          className="btn-icon btn-neutral btn-round mr-1"
                          color="dribbble"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-dribbble"></i>
                        </Button>
                      </li>
                      <li>
                        <Button
                          className="btn-icon btn-neutral btn-round mr-1"
                          color="google"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-google-plus"></i>
                        </Button>
                      </li>
                      <li>
                        <Button
                          className="btn-icon btn-neutral btn-round"
                          color="instagram"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-instagram"></i>
                        </Button>
                      </li>
                    </ul>
                    <h5>
                      <small>Numbers Don't Lie</small>
                    </h5>
                    <h5>
                      14.521 <small className="text-muted">Freelancers</small>
                    </h5>
                    <h5>
                      1.423.183{" "}
                      <small className="text-muted">Transactions</small>
                    </h5>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <div className="copyright">
                Copyright © {new Date().getFullYear()} Creative Tim All Rights
                Reserved.
              </div>
            </Container>
          </footer>
          <br></br>
          <br></br>
          <footer className="footer footer-white footer-big">
            <Container>
              <div className="content">
                <Row>
                  <Col md="3">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <h5>Now Ui Kit PRO</h5>
                    </a>
                    <p>
                      Probably the best UI Kit in the world! We know you've been
                      waiting for it, so don't be shy!
                    </p>
                  </Col>
                  <Col md="2">
                    <h5>About</h5>
                    <ul className="links-vertical">
                      <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Presentation
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col md="2">
                    <h5>Market</h5>
                    <ul className="links-vertical">
                      <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Sales FAQ
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          How to Register
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Sell Goods
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Receive Payment
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Transactions Issues
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col md="2">
                    <h5>Legal</h5>
                    <ul className="links-vertical">
                      <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Transactions FAQ
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Licenses
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col md="3">
                    <h5>Subscribe to Newsletter</h5>
                    <p>
                      Join our newsletter and get news in your inbox every week!
                      We hate spam too, so no worries about this.
                    </p>
                    <Form action="" className="form form-newsletter" method="">
                      <FormGroup>
                        <Input placeholder="Your Email..." type="email"></Input>
                      </FormGroup>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        name="button"
                        type="button"
                      >
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <ul className="social-buttons">
                <li>
                  <Button
                    className="btn-icon btn-neutral"
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                </li>
                <li>
                  <Button
                    className="btn-icon btn-neutral"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                </li>
                <li>
                  <Button
                    className="btn-icon btn-neutral"
                    color="dribbble"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-dribbble"></i>
                  </Button>
                </li>
                <li>
                  <Button
                    className="btn-icon btn-neutral"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-google-plus"></i>
                  </Button>
                </li>
                <li>
                  <Button
                    className="btn-icon btn-neutral"
                    color="youtube"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-youtube"></i>
                  </Button>
                </li>
              </ul>
              <div className="copyright pull-center">
                Copyright © {new Date().getFullYear()} Creative Tim All Rights
                Reserved.
              </div>
            </Container>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Footers;
