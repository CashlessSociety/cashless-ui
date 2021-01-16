/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function FooterBlackSocial() {
  return (
    <>
      <footer className="footer" data-background-color="black">
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
                      The tangible benefits of designing at 1x pixel density.
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
                  1.423.183 <small className="text-muted">Transactions</small>
                </h5>
              </Col>
            </Row>
          </div>
          <hr></hr>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            <a
              href="https://www.invisionapp.com?ref=creativetim"
              target="_blank"
            >
              Invision
            </a>
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nuk-pro-react-footer-black-social"
              target="_blank"
            >
              Creative Tim
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlackSocial;
