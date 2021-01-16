import React from "react";

// reactstrap components
import {
  Badge,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function PaginationSection() {
  return (
    <>
      <div className="section section-pagination">
        <Container>
          <Row>
            <Col md="6">
              <h4>Progress Bars</h4>
              <div className="progress-container">
                <span className="progress-badge">Default</span>
                <Progress max="100" value="25">
                  <span className="progress-value">25%</span>
                </Progress>
              </div>
              <div className="progress-container progress-primary">
                <span className="progress-badge">Primary</span>
                <Progress max="100" value="60">
                  <span className="progress-value">60%</span>
                </Progress>
              </div>
              <div className="progress-container progress-danger">
                <span className="progress-badge">Danger</span>
                <Progress max="100" value="60">
                  <span className="progress-value">60%</span>
                </Progress>
              </div>
              <div className="progress-container progress-warning">
                <span className="progress-badge">Warning</span>
                <Progress max="100" value="60">
                  <span className="progress-value">60%</span>
                </Progress>
              </div>
              <div className="progress-container progress-success">
                <span className="progress-badge">Success</span>
                <Progress max="100" value="60">
                  <span className="progress-value">60%</span>
                </Progress>
              </div>
              <div className="progress-container progress-info">
                <span className="progress-badge">Info</span>
                <Progress max="100" value="60">
                  <span className="progress-value">60%</span>
                </Progress>
              </div>
            </Col>
            <Col sm="6">
              <h4>Pagination</h4>
              <Pagination
                className="pagination pagination-info"
                listClassName="pagination-info"
              >
                <PaginationItem className="active">
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    4
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    5
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
              <Pagination>
                <PaginationItem>
                  <PaginationLink
                    aria-label="Previous"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span aria-hidden={true}>
                      <i
                        aria-hidden={true}
                        className="fa fa-angle-double-left"
                      ></i>
                    </span>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="active">
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    aria-label="Next"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span aria-hidden={true}>
                      <i
                        aria-hidden={true}
                        className="fa fa-angle-double-right"
                      ></i>
                    </span>
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
              <div className="pagination-container justify-content-center">
                <Pagination
                  className="pagination pagination-info"
                  listClassName="pagination-info"
                >
                  <PaginationItem className="arrow-margin-left">
                    <PaginationLink
                      aria-label="Previous"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span aria-hidden={true}>
                        <i
                          aria-hidden={true}
                          className="fa fa-angle-double-left"
                        ></i>
                      </span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="active">
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      4
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      5
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="arrow-margin-right">
                    <PaginationLink
                      aria-label="Next"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span aria-hidden={true}>
                        <i
                          aria-hidden={true}
                          className="fa fa-angle-double-right"
                        ></i>
                      </span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </div>
              <br></br>
              <h4>Labels</h4>
              <Badge color="default" className="mr-1">
                Default
              </Badge>
              <Badge color="primary" className="mr-1">
                Primary
              </Badge>
              <Badge color="success" className="mr-1">
                Success
              </Badge>
              <Badge color="info" className="mr-1">
                Info
              </Badge>
              <Badge color="warning" className="mr-1">
                Warning
              </Badge>
              <Badge color="danger" className="mr-1">
                Danger
              </Badge>
              <Badge color="neutral">Neutral</Badge>
            </Col>
          </Row>
          <br></br>
          <div className="space"></div>
          <h4>Notifications</h4>
        </Container>
      </div>
    </>
  );
}

export default PaginationSection;
