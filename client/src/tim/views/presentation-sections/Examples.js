import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components

function Examples() {
  return (
    <>
      <div className="section section-examples" data-background-color="black">
        <Container>
          <Col className="ml-auto mr-auto text-center" md="8">
            <div className="section-description">
              <h2 className="title">Example Pages</h2>
              <h5 className="description">
                Forget about building everything from scratch. From landing
                pages to e-commerce or blog pages, you will be able jump start
                your development. Show your clients a quick prototype and get
                inspired for your next project!
              </h5>
            </div>
          </Col>
          <Row>
            <Col md="4">
              <h5 className="title">About Us</h5>
              <Card>
                <Link to="/about-us">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/about-us.jpg")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Landing Page</h5>
              <Card>
                <Link to="/landing-page">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/landing.jpg")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Login Page</h5>
              <Card>
                <Link to="/login-page">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/login.jpg")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Signup Page</h5>
              <Card>
                <Link to="/sign-up">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/signup.jpg")}
                  ></img>
                </Link>
              </Card>
            </Col>
            <Col md="4">
              <h5 className="title">Blog Post</h5>
              <Card>
                <Link to="/blog-post">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/blog-post.jpg")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Product Page</h5>
              <Card>
                <Link to="/product-page">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/product.jpg")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Profile Page</h5>
              <Card>
                <Link to="/profile-page">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/profile.jpg")}
                  ></img>
                </Link>
              </Card>
            </Col>
            <Col md="4">
              <h5 className="title">Pricing Page</h5>
              <Card>
                <Link to="/pricing">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/pricing.jpg")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Ecommerce</h5>
              <Card>
                <Link to="/e-commerce">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/ecommerce.jpg")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Blog Posts</h5>
              <Card>
                <Link to="/blog-posts">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/blog-posts.jpg")}
                  ></img>
                </Link>
              </Card>
              <h5 className="title">Contact Us</h5>
              <Card>
                <Link to="/contact-us">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/pages/contact.jpg")}
                  ></img>
                </Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Examples;
