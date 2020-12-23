import React from "react";

// reactstrap components
import { Button, Row, Col } from "reactstrap";

// core components

function BlogPostsHeader() {
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg44.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">
                A Place for Entrepreneurs to Share and Discover New Stories
              </h2>
              <Button className="btn-round btn-icon mr-1" color="info">
                <i className="fab fa-twitter"></i>
              </Button>
              <Button className="btn-round btn-icon" color="info">
                <i className="fab fa-instagram"></i>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default BlogPostsHeader;
