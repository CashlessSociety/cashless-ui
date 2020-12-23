/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function Icons() {
  return (
    <>
      <div className="section section-icons" data-background-color="black">
        <Container fluid>
          <Row>
            <Col md="3">
              <div className="icons-nucleo">
                <i className="first-left-icon now-ui-icons ui-1_send"></i>
                <i className="second-left-icon now-ui-icons ui-2_like"></i>
                <i className="third-left-icon now-ui-icons transportation_air-baloon"></i>
                <i className="fourth-left-icon now-ui-icons text_bold"></i>
                <i className="fifth-left-icon now-ui-icons tech_headphones"></i>
                <i className="sixth-left-icon now-ui-icons emoticons_satisfied"></i>
                <i className="seventh-left-icon now-ui-icons shopping_cart-simple"></i>
                <i className="eighth-left-icon now-ui-icons objects_spaceship"></i>
                <i className="ninth-left-icon now-ui-icons media-2_note-03"></i>
                <i className="tenth-left-icon now-ui-icons ui-2_favourite-28"></i>
              </div>
            </Col>
            <Col className="text-center" md="6">
              <h2 className="title">Custom Icons</h2>
              <h5 className="description">
                Now UI Kit PRO comes with 100 custom demo icons made by our
                friends from{" "}
                <a href="https://nucleoapp.com/?ref=1712" target="_blank">
                  NucleoApp
                </a>
                . The official package contains over 20.729 icons which are
                looking great in combination with Now UI Kit PRO. Make sure you
                check all of them and use those that you like the most.
              </h5>
              <br></br>
              <Button
                className="btn-round mr-1"
                to="/nucleo-icons"
                target="_blank"
                color="info"
                tag={Link}
                size="lg"
              >
                View Demo Icons
              </Button>
              <Button
                className="btn-round"
                color="default"
                href="https://nucleoapp.com/?ref=1712"
                target="_blank"
                size="lg"
              >
                View All Icons
              </Button>
            </Col>
            <Col md="3">
              <div className="icons-nucleo icons-nucleo-right">
                <i className="first-right-icon now-ui-icons design_palette"></i>
                <i className="second-right-icon now-ui-icons clothes_tie-bow"></i>
                <i className="third-right-icon now-ui-icons location_pin"></i>
                <i className="fourth-right-icon now-ui-icons objects_key-25"></i>
                <i className="fifth-right-icon now-ui-icons travel_istanbul"></i>
                <i className="sixth-right-icon now-ui-icons business_briefcase-24"></i>
                <i className="seventh-right-icon now-ui-icons design_image"></i>
                <i className="eighth-right-icon now-ui-icons location_world"></i>
                <i className="ninth-right-icon now-ui-icons objects_planet"></i>
                <i className="tenth-right-icon now-ui-icons education_atom"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Icons;
