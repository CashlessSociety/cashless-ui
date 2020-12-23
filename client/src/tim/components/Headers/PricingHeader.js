import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

// core components

function PricingHeader() {
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg37.jpg") + ")",
          }}
        ></div>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h1 className="title">Let's get started</h1>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default PricingHeader;
