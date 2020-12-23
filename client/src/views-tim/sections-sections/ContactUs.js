import React from "react";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

const MapWrapper = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false,
        styles: [
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }, { lightness: 17 }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }, { lightness: 18 }],
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }, { lightness: 16 }],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#dedede" }, { lightness: 21 }],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              { visibility: "on" },
              { color: "#ffffff" },
              { lightness: 16 },
            ],
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              { saturation: 36 },
              { color: "#333333" },
              { lightness: 40 },
            ],
          },
          { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{ color: "#fefefe" }, { lightness: 20 }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
          },
        ],
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);

function ContactUs() {
  const [first1Focus, setFirst1Focus] = React.useState(false);
  const [last1Focus, setLast1Focus] = React.useState(false);
  const [email1Focus, setEmail1Focus] = React.useState(false);
  const [first2Focus, setFirst2Focus] = React.useState(false);
  const [email2Focus, setEmail2Focus] = React.useState(false);
  return (
    <>
      <div className="cd-section" id="contact-us">
        <div
          className="contactus-1 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/contact1.jpg") + ")",
          }}
        >
          <Container>
            <Row>
              <Col md="5">
                <h2 className="title">Get in Touch</h2>
                <h4 className="description">
                  You need more information? Check what other persons are saying
                  about our product. They are very happy with their purchase.
                </h4>
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                    <i className="now-ui-icons location_pin"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Find us at the office</h4>
                    <p className="description">
                      Bld Mihail Kogalniceanu, nr. 8, <br></br>
                      7652 Bucharest, <br></br>
                      Romania
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                    <i className="now-ui-icons tech_mobile"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Give us a ring</h4>
                    <p className="description">
                      Michael Jordan <br></br>
                      +40 762 321 762 <br></br>
                      Mon - Fri, 8:00-22:00
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" md="5">
                <Card className="card-contact card-raised">
                  <Form id="contact-form1" method="post" role="form">
                    <CardHeader className="text-center">
                      <CardTitle tag="h4">Contact Us</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="pr-2" md="6">
                          <label>First name</label>
                          <InputGroup
                            className={first1Focus ? "input-group-focus" : ""}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons users_circle-08"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="First Name..."
                              autoComplete="given-name"
                              placeholder="First Name..."
                              type="text"
                              onFocus={() => setFirst1Focus(true)}
                              onBlur={() => setFirst1Focus(false)}
                            ></Input>
                          </InputGroup>
                        </Col>
                        <Col className="pl-2" md="6">
                          <FormGroup>
                            <label>Last name</label>
                            <InputGroup
                              className={last1Focus ? "input-group-focus" : ""}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="now-ui-icons text_caps-small"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                aria-label="Last Name..."
                                autoComplete="family-name"
                                placeholder="Last Name..."
                                type="text"
                                onFocus={() => setLast1Focus(true)}
                                onBlur={() => setLast1Focus(false)}
                              ></Input>
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <label>Email address</label>
                        <InputGroup
                          className={email1Focus ? "input-group-focus" : ""}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons ui-1_email-85"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            autoComplete="email"
                            placeholder="Email Here..."
                            type="email"
                            onFocus={() => setEmail1Focus(true)}
                            onBlur={() => setEmail1Focus(false)}
                          ></Input>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <label>Your message</label>
                        <Input
                          id="message"
                          name="message"
                          rows="6"
                          type="textarea"
                        ></Input>
                      </FormGroup>
                      <Row>
                        <Col md="6">
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox"></Input>
                              <span className="form-check-sign"></span>
                              I'm not a robot
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <Button
                            className="btn-round pull-right"
                            color="info"
                            type="submit"
                          >
                            Send Message
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="contactus-2">
          <div className="big-map" id="contactUsMap">
            <MapWrapper
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
          <Col lg="6" md="10">
            <Card className="card-contact card-raised">
              <Form id="contact-form" method="post" role="form">
                <CardHeader className="text-center">
                  <CardTitle tag="h4">Contact Us</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="6">
                      <div className="info info-horizontal">
                        <div className="icon icon-info">
                          <i className="now-ui-icons tech_mobile"></i>
                        </div>
                        <div className="description">
                          <h5 className="info-title">Give us a ring</h5>
                          <p>
                            Michael Jordan <br></br>
                            +40 762 321 762 <br></br>
                            Mon - Fri, 8:00-22:00
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="info info-horizontal">
                        <div className="icon icon-info">
                          <i className="now-ui-icons location_pin"></i>
                        </div>
                        <div className="description">
                          <h5 className="info-title">Find us at the office</h5>
                          <p>
                            Bld Mihail Kogalniceanu, nr. 8, <br></br>
                            7652 Bucharest, <br></br>
                            Romania
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-2" md="6">
                      <label>Full name</label>
                      <InputGroup
                        className={first2Focus ? "input-group-focus" : ""}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          autoComplete="given-name"
                          placeholder="First Name..."
                          type="text"
                          onFocus={() => setFirst2Focus(true)}
                          onBlur={() => setFirst2Focus(false)}
                        ></Input>
                      </InputGroup>
                    </Col>
                    <Col className="pl-2" md="6">
                      <label>Email address</label>
                      <InputGroup
                        className={email2Focus ? "input-group-focus" : ""}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_email-85"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          autoComplete="email"
                          placeholder="Email Here..."
                          type="email"
                          onFocus={() => setEmail2Focus(true)}
                          onBlur={() => setEmail2Focus(false)}
                        ></Input>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox"></Input>
                          <span className="form-check-sign"></span>
                          I'm not a robot
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <Button
                        className="btn-round pull-right"
                        color="info"
                        type="submit"
                      >
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Form>
            </Card>
          </Col>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
