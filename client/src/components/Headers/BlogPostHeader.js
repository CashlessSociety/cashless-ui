import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

// core components

function BlogPostHeader() {
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
            backgroundImage: "url(" + require("assets/img/bg24.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">WeChat Lucky Money</h2>
              <h4>WeChat launched in 2013.</h4>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default BlogPostHeader;
