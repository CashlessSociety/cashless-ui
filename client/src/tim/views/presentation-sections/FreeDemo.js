import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function FreeDemo() {
  return (
    <>
      <div className="section section-free-demo">
        <Container>
          <Row>
            <Col lg="7" md="12">
              <div className="section-description">
                <h2 className="title">Free Demo</h2>
                <h5 className="description">
                  Do you want to test and see the benefits of this kit before
                  purchasing it? You can give the demo version a try. It
                  features enough basic components for you to get a feel of the
                  design and also test the quality of the code. Get it free on
                  GitHub!
                </h5>
                <div className="github-buttons">
                  <Button
                    className="btn-round"
                    color="info"
                    href="https://github.com/creativetimofficial/now-ui-kit-react?ref=creativetim"
                    target="_blank"
                  >
                    View Demo on Github
                  </Button>
                  <div className="github-button">
                    <a
                      className="github-button"
                      href="https://github.com/creativetimofficial/now-ui-kit-react"
                      data-icon="octicon-star"
                      data-size="large"
                      data-show-count="true"
                    >
                      Star
                    </a>{" "}
                    <a
                      className="github-button"
                      href="https://github.com/creativetimofficial/now-ui-kit-react/fork"
                      data-icon="octicon-repo-forked"
                      data-size="large"
                      data-show-count="true"
                    >
                      Fork
                    </a>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
              <Row>
                <Col className="pt-5" md="6">
                  <Card
                    className="card-pricing card-background"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/project1.jpg") + ")",
                    }}
                  >
                    <CardBody>
                      <CardTitle tag="h3">Free Demo</CardTitle>
                      <ul>
                        <li>
                          <b>60</b> Components
                        </li>
                        <li>
                          <b>3</b> Example Pages
                        </li>
                        <li>
                          <i className="now-ui-icons ui-1_simple-remove text-danger"></i>{" "}
                          Beautiful Cards
                        </li>
                        <li>
                          <i className="now-ui-icons ui-1_simple-remove text-danger"></i>{" "}
                          Sections
                        </li>
                        <li>
                          <i className="now-ui-icons ui-1_simple-remove text-danger"></i>{" "}
                          Premium Support
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="pt-5" md="6">
                  <Card
                    className="card-pricing card-background"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/pricing1.jpg") + ")",
                    }}
                  >
                    <CardBody>
                      <CardTitle tag="h3">PRO Version</CardTitle>
                      <ul>
                        <li>
                          <b>1000+</b> Components
                        </li>
                        <li>
                          <b>10</b> Example Pages
                        </li>
                        <li>
                          <i className="now-ui-icons ui-1_check text-success"></i>{" "}
                          Beautiful Cards
                        </li>
                        <li>
                          <i className="now-ui-icons ui-1_check text-success"></i>{" "}
                          Sections
                        </li>
                        <li>
                          <i className="now-ui-icons ui-1_check text-success"></i>{" "}
                          Premium Support
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col lg="5" md="12">
              <div className="github-background-container">
                <i className="fab fa-github"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FreeDemo;
