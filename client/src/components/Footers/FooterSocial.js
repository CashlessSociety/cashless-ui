import React from "react";

// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function FooterSocial() {
  return (
    <>
      <footer className="footer">
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
                  Join our newsletter and get news in your inbox every week! We
                  hate spam too, so no worries about this.
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
                className="btn-icon btn-neutral mr-1"
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
                className="btn-icon btn-neutral mr-1"
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
                className="btn-icon btn-neutral mr-1"
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
                className="btn-icon btn-neutral mr-1"
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
          <div className="copyright pull-center" id="copyright">
            Copyright © {new Date().getFullYear()} Creative Tim All Rights
            Reserved.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default FooterSocial;
