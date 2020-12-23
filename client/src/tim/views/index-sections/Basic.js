import React from "react";
// react plugin that creates an input with badges
import TagsInput from "react-tagsinput";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Basic() {
  const [awesomeFocus, setAwesomeFocus] = React.useState(false);
  const [nucleoFocus, setNucleoFocus] = React.useState(false);
  const [singleSelect, setSingleSelect] = React.useState(null);
  const [chooseCity, setChooseCity] = React.useState(null);
  const [tagsValue, setTagsValue] = React.useState([
    "Amsterdam",
    "Washington",
    "Sydney",
    "Beijing",
  ]);
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [50],
        connect: [true, false],
        step: 0.5,
        range: { min: 0, max: 100 },
      });
    }
    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 80],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  });
  return (
    <>
      <div className="section section-basic" id="basic-elements">
        <Container>
          <h3 className="title">Basic Elements</h3>
          <h4>Buttons</h4>
          <p className="category">Pick your style</p>
          <Row>
            <Col md="10">
              <Button color="info" type="button">
                Default
              </Button>
              <Button className="btn-round" color="info" type="button">
                Round
              </Button>
              <Button className="btn-round" color="info" type="button">
                <i className="now-ui-icons ui-2_favourite-28"></i>
                With Icon
              </Button>
              <Button className="btn-icon btn-round" color="info" type="button">
                <i className="now-ui-icons ui-2_favourite-28"></i>
              </Button>
              <Button className="btn-round" color="info" outline type="button">
                Outline
              </Button>
            </Col>
          </Row>
          <p className="category">Pick your size</p>
          <Row>
            <Col md="10">
              <Button color="info" size="sm">
                Small
              </Button>
              <Button color="info">Regular</Button>
              <Button color="info" size="lg">
                Large
              </Button>
            </Col>
          </Row>
          <p className="category">Pick your color</p>
          <Row>
            <Col md="10">
              <Button color="default">Default</Button>
              <Button color="primary">Primary</Button>
              <Button color="info">Info</Button>
              <Button color="success">Success</Button>
              <Button color="warning">Warning</Button>
              <Button color="danger">Danger</Button>
              <Button className="btn-neutral" color="default">
                Neutral
              </Button>
            </Col>
          </Row>
          <h4>Links</h4>
          <Row>
            <Col md="8">
              <Button color="link">Default</Button>
              <Button className="btn-link" color="primary">
                Primary
              </Button>
              <Button className="btn-link" color="info">
                Info
              </Button>
              <Button className="btn-link" color="success">
                Success
              </Button>
              <Button className="btn-link" color="warning">
                Warning
              </Button>
              <Button className="btn-link" color="danger">
                Danger
              </Button>
            </Col>
          </Row>
          <div id="social-buttons">
            <h4>Social Buttons</h4>
            <Row>
              <Col md="4" sm="5">
                <p className="category">Default</p>
                <Button color="twitter">
                  <i className="fab fa-twitter"></i> Connect with Twitter
                </Button>
              </Col>
              <Col md="1" sm="1">
                <p className="category"> </p>
                <Button className="btn-icon" color="twitter">
                  <i className="fab fa-twitter"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <p className="category"> </p>
                <Button className="btn-icon btn-round" color="twitter">
                  <i className="fab fa-twitter"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <p className="category">Neutral</p>
                <Button className="btn-icon btn-neutral" color="twitter">
                  <i className="fab fa-twitter"></i>
                </Button>
              </Col>
              <Col md="3" sm="4">
                <p className="category"> </p>
                <Button className="btn-neutral" color="twitter">
                  <i className="fab fa-twitter"></i> Connect with Twitter
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md="4" sm="5">
                <Button color="facebook">
                  <i className="fab fa-facebook-square"></i> Share · 2.2k
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon" color="facebook">
                  <i className="fab fa-facebook"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon btn-round" color="facebook">
                  <i className="fab fa-facebook"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon btn-neutral" color="facebook">
                  <i className="fab fa-facebook-square"></i>
                </Button>
              </Col>
              <Col md="3" sm="4">
                <Button className="btn-neutral" color="facebook">
                  <i className="fab fa-facebook-square"></i> Share · 2.2k
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md="4" sm="5">
                <Button color="google">
                  <i className="fab fa-google"></i> Share on Google+
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon" color="google">
                  <i className="fab fa-google"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon btn-round" color="google">
                  <i className="fab fa-google"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon btn-neutral" color="google">
                  <i className="fab fa-google"></i>
                </Button>
              </Col>
              <Col md="3" sm="4">
                <Button className="btn-neutral" color="google">
                  <i className="fab fa-google"></i> Share on Google+
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md="4" sm="5">
                <Button color="linkedin">
                  <i className="fab fa-linkedin"></i> Connect with Linkedin
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon" color="linkedin">
                  <i className="fab fa-linkedin"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon btn-round" color="linkedin">
                  <i className="fab fa-linkedin"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon btn-neutral" color="linkedin">
                  <i className="fab fa-linkedin"></i>
                </Button>
              </Col>
              <Col md="3" sm="4">
                <Button className="btn-neutral" color="linkedin">
                  <i className="fab fa-linkedin"></i> Connect with Linkedin
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md="4" sm="5">
                <Button color="pinterest">
                  <i className="fab fa-pinterest"></i> Pint it · 212
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon" color="pinterest">
                  <i className="fab fa-pinterest"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon btn-round" color="pinterest">
                  <i className="fab fa-pinterest"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon btn-neutral" color="pinterest">
                  <i className="fab fa-pinterest"></i>
                </Button>
              </Col>
              <Col md="3" sm="4">
                <Button className="btn-neutral" color="pinterest">
                  <i className="fab fa-pinterest"></i> Pint it · 212
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md="4" sm="5">
                <Button color="youtube">
                  <i className="fab fa-youtube"></i> View on Youtube
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon" color="youtube">
                  <i className="fab fa-youtube"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon btn-round" color="youtube">
                  <i className="fab fa-youtube"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon btn-neutral" color="youtube">
                  <i className="fab fa-youtube"></i>
                </Button>
              </Col>
              <Col md="3" sm="4">
                <Button className="btn-neutral" color="youtube">
                  <i className="fab fa-youtube"></i> View on Youtube
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md="4" sm="5">
                <Button color="tumblr">
                  <i className="fab fa-tumblr-square"></i> Repost
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon" color="tumblr">
                  <i className="fab fa-tumblr"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon btn-round" color="tumblr">
                  <i className="fab fa-tumblr"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon btn-neutral" color="tumblr">
                  <i className="fab fa-tumblr-square"></i>
                </Button>
              </Col>
              <Col md="3" sm="4">
                <Button className="btn-neutral" color="tumblr">
                  <i className="fab fa-tumblr-square"></i> Repost
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md="4" sm="5">
                <Button color="github">
                  <i className="fab fa-github"></i> Connect with Github
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon" color="github">
                  <i className="fab fa-github"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon btn-round" color="github">
                  <i className="fab fa-github"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon btn-neutral" color="github">
                  <i className="fab fa-github"></i>
                </Button>
              </Col>
              <Col md="3" sm="4">
                <Button className="btn-neutral" color="github">
                  <i className="fab fa-github"></i> Connect with Github
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md="4" sm="5">
                <Button color="behance">
                  <i className="fab fa-behance-square"></i> Follow us
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon" color="behance">
                  <i className="fab fa-behance"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon btn-round" color="behance">
                  <i className="fab fa-behance"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon btn-neutral" color="behance">
                  <i className="fab fa-behance"></i>
                </Button>
              </Col>
              <Col md="3" sm="4">
                <Button className="btn-neutral" color="behance">
                  <i className="fab fa-behance-square"></i> Follow us
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md="4" sm="5">
                <Button color="dribbble">
                  <i className="fab fa-dribbble"></i> Find us on Dribble
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon" color="dribbble">
                  <i className="fab fa-dribbble"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon btn-round" color="dribbble">
                  <i className="fab fa-dribbble"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon btn-neutral" color="dribbble">
                  <i className="fab fa-dribbble"></i>
                </Button>
              </Col>
              <Col md="3" sm="4">
                <Button className="btn-neutral" color="dribbble">
                  <i className="fab fa-dribbble"></i> Find us on Dribble
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md="4" sm="5">
                <Button color="reddit">
                  <i className="fab fa-reddit"></i> Repost · 232
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon" color="reddit">
                  <i className="fab fa-reddit"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon btn-round" color="reddit">
                  <i className="fab fa-reddit"></i>
                </Button>
              </Col>
              <Col md="1" sm="1">
                <Button className="btn-icon btn-neutral" color="reddit">
                  <i className="fab fa-reddit"></i>
                </Button>
              </Col>
              <Col md="3" sm="4">
                <Button className="btn-neutral" color="reddit">
                  <i className="fab fa-reddit"></i> Repost · 232
                </Button>
              </Col>
            </Row>
          </div>
          <div className="space-70"></div>
          <div id="inputs">
            <h4>Inputs</h4>
            <p className="category">Form Controls</p>
            <Row>
              <Col lg="3" sm="6">
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder="Regular"
                    type="text"
                  ></Input>
                </FormGroup>
              </Col>
              <Col lg="3" sm="6">
                <FormGroup className="has-success">
                  <Input
                    className="form-control-success"
                    defaultValue="Success"
                    type="text"
                  ></Input>
                </FormGroup>
              </Col>
              <Col lg="3" sm="6">
                <FormGroup className="has-danger">
                  <Input
                    className="form-control-danger"
                    defaultValue="Error Input"
                    type="email"
                  ></Input>
                </FormGroup>
              </Col>
              <Col lg="3" sm="6">
                <InputGroup className={awesomeFocus ? "input-group-focus" : ""}>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-user-circle"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Left Font Awesome Icon"
                    type="text"
                    onFocus={() => setAwesomeFocus(true)}
                    onBlur={() => setAwesomeFocus(false)}
                  ></Input>
                </InputGroup>
              </Col>
              <Col lg="3" sm="6">
                <InputGroup className={nucleoFocus ? "input-group-focus" : ""}>
                  <Input
                    placeholder="Right Nucleo Icon"
                    type="text"
                    onFocus={() => setNucleoFocus(true)}
                    onBlur={() => setNucleoFocus(false)}
                  ></Input>
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="now-ui-icons users_single-02"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </Row>
          </div>
          <div className="space-70"></div>
          <div className="select">
            <Row>
              <Col md="6">
                <div className="title">
                  <h4>Customizable Select</h4>
                </div>
                <Row>
                  <Col lg="6" md="8" sm="5">
                    <Select
                      className="react-select react-select-info mt-2"
                      onChange={(value) => setSingleSelect(value)}
                      classNamePrefix="react-select"
                      placeholder="Single Select"
                      value={singleSelect}
                      name=""
                      options={[
                        {
                          value: "",
                          label: "Single Option",
                          isDisabled: true,
                        },
                        { value: "2", label: "Foobar" },
                        { value: "3", label: "Is great" },
                      ]}
                    ></Select>
                  </Col>
                  <Col lg="6" md="8" sm="5">
                    <Select
                      className="react-select react-select-info mt-2"
                      onChange={(value) => setChooseCity(value)}
                      classNamePrefix="react-select"
                      closeMenuOnSelect={false}
                      placeholder="Choose City"
                      value={chooseCity}
                      isMulti
                      name=""
                      options={[
                        {
                          value: "",
                          label: " Multiple Options",
                          isDisabled: true,
                        },
                        { value: "2", label: "Paris " },
                        { value: "3", label: "Bucharest" },
                        { value: "4", label: "Rome" },
                        { value: "5", label: "New York" },
                        { value: "6", label: "Miami " },
                        { value: "7", label: "Piatra Neamt" },
                        { value: "8", label: "Paris " },
                        { value: "9", label: "Bucharest" },
                        { value: "10", label: "Rome" },
                        { value: "11", label: "New York" },
                        { value: "12", label: "Miami " },
                        { value: "13", label: "Piatra Neamt" },
                        { value: "14", label: "Paris " },
                        { value: "15", label: "Bucharest" },
                        { value: "16", label: "Rome" },
                        { value: "17", label: "New York" },
                        { value: "18", label: "Miami " },
                        { value: "19", label: "Piatra Neamt" },
                      ]}
                    ></Select>
                  </Col>
                </Row>
              </Col>
              <Col md="4">
                <div className="title">
                  <h4>Dropdown &amp; Dropup</h4>
                </div>
                <Row>
                  <Col lg="5" md="8">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        caret
                        className="btn-round btn-block mt-2"
                        color="info"
                      >
                        Dropdown
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else here
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                  <Col lg="5" md="8">
                    <UncontrolledDropdown direction="up">
                      <DropdownToggle
                        caret
                        className="btn-round btn-block mt-2"
                        color="info"
                      >
                        Dropup
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else here
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="space-70"></div>
          <div id="textareaTags">
            <Row>
              <Col md="6">
                <div className="title">
                  <h4>Textarea</h4>
                </div>
                <Input
                  rows="4"
                  cols="80"
                  name="name"
                  type="textarea"
                  placeholder="You can write your text here..."
                ></Input>
              </Col>
              <Col md="6">
                <div className="title">
                  <h4>Tags</h4>
                </div>
                <TagsInput
                  tagProps={{
                    className: "react-tagsinput-tag badge badge-danger",
                  }}
                  onChange={(value) => setTagsValue(value)}
                  value={tagsValue}
                  onlyUnique
                ></TagsInput>
              </Col>
            </Row>
          </div>
          <div className="space-70"></div>
          <Row id="checkRadios">
            <Col className="mb-4" lg="3" sm="6">
              <p className="category">Checkboxes</p>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  Unchecked
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input defaultChecked type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  Checked
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input disabled type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  Disabled Unchecked
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input defaultChecked disabled type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  Disabled Checked
                </Label>
              </FormGroup>
            </Col>
            <Col className="mb-4" lg="3" sm="6">
              <p className="category">Radios</p>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Input
                    defaultValue="option1"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                  Radio is off
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue="option2"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                  Radio is on
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio" disabled>
                <Label check>
                  <Input
                    defaultValue="option3"
                    disabled
                    id="exampleRadios2"
                    name="exampleRadios1"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                  Disabled radio is off
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio" disabled>
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue="option4"
                    disabled
                    id="exampleRadios2"
                    name="exampleRadios1"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                  Disabled radio is on
                </Label>
              </FormGroup>
            </Col>
            <Col lg="3" sm="6">
              <p className="category">Toggle Buttons</p>
              <Switch offColor="" offText="" onColor="" onText=""></Switch>
              <br></br>
              <Switch defaultValue={false} offColor="" onColor=""></Switch>
            </Col>
            <Col lg="3" sm="6">
              <p className="category">Sliders</p>
              <div className="slider" id="sliderRegular"></div>
              <br></br>
              <div className="slider slider-info" id="sliderDouble"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Basic;
