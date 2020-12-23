import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function BasicComponents() {
  return (
    <>
      <div className="section section-basic-components">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="5" md="7">
              <h2 className="title">Basic Elements</h2>
              <h6 className="category">The core elements of your website</h6>
              <h5 className="description">
                We re-styled every Bootstrap 4 element to match the Now UI Kit
                style. All the Bootstrap 4 components that you need in a
                development have been re-design with the new look. Besides the
                numerous basic elements, we have also created additional
                classes. All these items will help you take your project to the
                next level.
              </h5>
            </Col>
            <Col lg="6" md="12">
              <div className="image-container">
                <img
                  alt="..."
                  className="components-macbook"
                  src={require("assets/img/ipad.png")}
                ></img>
                <img
                  alt="..."
                  className="table-img"
                  src={require("assets/img/presentation-page/table.jpg")}
                ></img>
                <img
                  alt="..."
                  className="share-btn-img"
                  src={require("assets/img/presentation-page/share-btn.jpg")}
                ></img>
                <img
                  alt="..."
                  className="coloured-card-btn-img"
                  src={require("assets/img/presentation-page/coloured-card-with-btn.jpg")}
                ></img>
                <img
                  alt="..."
                  className="coloured-card-img"
                  src={require("assets/img/presentation-page/coloured-card.jpg")}
                ></img>
                <img
                  alt="..."
                  className="social-img"
                  src={require("assets/img/presentation-page/social-row.jpg")}
                ></img>
                <img
                  alt="..."
                  className="linkedin-btn-img"
                  src={require("assets/img/presentation-page/linkedin-btn.jpg")}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BasicComponents;
