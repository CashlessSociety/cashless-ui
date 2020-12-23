import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import ImageUpload from "components/CustomUpload/ImageUpload.js";

function FileUploader() {
  return (
    <>
      <div id="file-uploader">
        <Container>
          <div className="title">
            <h4>File Uploader</h4>
          </div>
          <Row>
            <Col md="5" sm="8">
              <h4>
                <small>Regular Image</small>
              </h4>
              <ImageUpload />
            </Col>
            <Col md="3" sm="4">
              <h4>
                <small>Avatar</small>
              </h4>
              <ImageUpload avatar />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FileUploader;
