import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Image() {
  return (
    <>
      <div
        className="section features-7 section-image"
        style={{
          backgroundImage: "url(" + require("assets/img/bg51.jpg") + ")",
        }}
      >
        <Container fluid>
          <Row>
            <Col className="px-0" md="6">
              <Col sm="12">
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="now-ui-icons business_money-coins"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">Save Time &amp; Money</h5>
                    <p className="description">
                      Creating your design from scratch with dedicated designers
                      can be very expensive.Using Now UI Kit PRO you don't have
                      to worry about customising the basic Bootstrap 4 design or
                      its components.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="now-ui-icons text_bold"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">Bootstrap 4 &amp; Flexbox</h5>
                    <p className="description">
                      It is built over Bootstrap 4, it's fully responsive and
                      has all the benefits of the flexbox for the layout, grid
                      system and components. This is a huge advantage when you
                      work with columns.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="now-ui-icons education_paper"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">Fast Prototype</h5>
                    <p className="description">
                      Using Now UI Kit PRO you can create hundreds of components
                      combinations within seconds and present them to your
                      client. You just need to change some classes and colors.
                    </p>
                  </div>
                </div>
              </Col>
            </Col>
            <Col md="6">
              <div className="image-container">
                <img alt="..." src={require("assets/img/ipad3.png")}></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Image;
