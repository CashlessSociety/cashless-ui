import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function NucleoIcons() {
  return (
    <>
      <div className="section section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Nucleo Icons</h2>
              <h5 className="description">
                Now UI Kit PRO comes with 100 custom icons made by our friends
                from NucleoApp. The official package contains over 2.100 thin
                icons which are looking great in combination with Now UI Kit PRO
                Make sure you check all of them and use those that you like the
                most.
              </h5>
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
                href="https://nucleoapp.com/?ref=1712"
                className="btn-round"
                target="_blank"
                color="info"
                size="lg"
                outline
              >
                View All Icons
              </Button>
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
                <i className="now-ui-icons ui-1_send"></i>
                <i className="now-ui-icons ui-2_like"></i>
                <i className="now-ui-icons transportation_air-baloon"></i>
                <i className="now-ui-icons text_bold"></i>
                <i className="now-ui-icons tech_headphones"></i>
                <i className="now-ui-icons emoticons_satisfied"></i>
                <i className="now-ui-icons shopping_cart-simple"></i>
                <i className="now-ui-icons objects_spaceship"></i>
                <i className="now-ui-icons media-2_note-03"></i>
                <i className="now-ui-icons ui-2_favourite-28"></i>
                <i className="now-ui-icons design_palette"></i>
                <i className="now-ui-icons clothes_tie-bow"></i>
                <i className="now-ui-icons location_pin"></i>
                <i className="now-ui-icons objects_key-25"></i>
                <i className="now-ui-icons travel_istanbul"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
