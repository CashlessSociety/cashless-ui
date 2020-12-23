/*eslint-disable*/
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
  UncontrolledTooltip,
} from "reactstrap";

// core components

function Pricing() {
  return (
    <>
      <div className="section section-pricing" id="sectionBuy">
        <Container>
          <div className="our-clients">
            <Container>
              <Row>
                <Col className="ml-auto" md="2">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/vodafone.jpg")}
                  ></img>
                </Col>
                <Col md="2">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/microsoft.jpg")}
                  ></img>
                </Col>
                <Col md="2">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/harvard.jpg")}
                  ></img>
                </Col>
                <Col className="mr-auto" md="2">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/stanford.jpg")}
                  ></img>
                </Col>
              </Row>
            </Container>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Ready to grab Now UI Kit PRO?</h2>
            </Col>
            <Col className="text-center ml-auto mr-auto" md="8">
              <Button
                color="info"
                target="_blank"
                href="https://www.creative-tim.com/product/now-ui-kit-pro-react?ref=nukpr-presentation-page"
              >
                Buy now
              </Button>
              <Button
                color="neutral"
                target="_blank"
                href="https://www.creative-tim.com/product/now-ui-kit-react?ref=nukpr-presentation-page"
              >
                Check demo
              </Button>
            </Col>
            <Col className="text-center ml-auto mr-auto mt-5" md="8">
              <h3>Thank you for supporting us!</h3>
            </Col>
            <Col className="text-center ml-auto mr-auto" md="8">
              <Button
                className="btn-icon btn-round mr-1"
                color="twitter"
                id="tooltip477589936"
                size="lg"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip477589936">
                Tweet!
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon mr-1"
                color="facebook"
                id="tooltip46748914"
                size="lg"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip46748914">
                Share!
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon mr-1"
                color="linkedin"
                id="tooltip129912781"
                size="lg"
              >
                <i className="fab fa-linkedin"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip129912781">
                Share!
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon"
                color="github"
                href="https://github.com/creativetimofficial/ct-now-ui-kit-pro-react?ref=creativetim"
                target="_blank"
                id="tooltip156844414"
                size="lg"
              >
                <i className="fab fa-github"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip156844414">
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Pricing;
