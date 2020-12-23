import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardTitle,
  Input,
  Media,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar.js";
import BlogPostHeader from "components/Headers/BlogPostHeader.js";
import FooterBlack from "components/Footers/FooterBlack.js";

function BlogPost() {
  React.useEffect(() => {
    document.body.classList.add("blog-post");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-post");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <FixedTransparentNavbar />
      <div className="wrapper">
        <BlogPostHeader />
        <div className="section">
          <Container>
            <Row>
              <Col md="12">
                <div className="button-container">
                  <Button
                    className="btn-round mr-1"
                    color="info"
                    size="lg"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="now-ui-icons text_align-left"></i> Read
                    Article
                  </Button>
                  <Button
                    className="btn-icon btn-round mr-1"
                    color="twitter"
                    size="lg"
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button
                    className="btn-icon btn-round mr-1"
                    color="facebook"
                    size="lg"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                  <Button
                    className="btn-icon btn-round"
                    color="google"
                    size="lg"
                  >
                    <i className="fab fa-google"></i>
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="section">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h3 className="title">
                    The Castle Looks Different at Night...
                  </h3>
                  <p>
                    This is the paragraph where you can write more details about
                    your product. Keep you user engaged by providing meaningful
                    information. Remember that by this time, the user is
                    curious, otherwise he wouldn't scroll to get here. Add a
                    button if you want the user to see more. We are here to make
                    life better. <br></br>
                    <br></br>
                    And now I look and look around and there’s so many Kanyes
                    I've been trying to figure out the bed design for the master
                    bedroom at our Hidden Hills compound... and thank you for
                    turning my personal jean jacket into a couture piece.
                  </p>
                  <p className="blockquote blockquote-info">
                    “And thank you for turning my personal jean jacket into a
                    couture piece.” <br></br>
                    <br></br>
                    <small>Kanye West, Producer.</small>
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <Col className="section section-blog ml-auto mr-auto" md="10">
            <Container>
              <div className="section-story-overview">
                <Row>
                  <Col md="6">
                    <div
                      className="image-container image-left"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/bg35.jpg") + ")",
                      }}
                    >
                      <p className="blockquote blockquote-info">
                        "Over the span of the satellite record, Arctic sea ice
                        has been declining significantly, while sea ice in the
                        Antarctichas increased very slightly" <br></br>
                        <br></br>
                        <small>-NOAA</small>
                      </p>
                    </div>
                    <div
                      className="image-container image-left-bottom"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/bg29.jpg") + ")",
                      }}
                    ></div>
                  </Col>
                  <Col md="5">
                    <div
                      className="image-container image-right"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/project16.jpg") + ")",
                      }}
                    ></div>
                    <h3>
                      So what does the new record for the lowest level of winter
                      ice actually mean
                    </h3>
                    <p>
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens with climate change. Even if the
                      Arctic continues to be one of the fastest-warming regions
                      of the world, it will always be plunged into bitterly cold
                      polar dark every winter. And year-by-year, for all kinds
                      of natural reasons, there’s huge variety of the state of
                      the ice.
                    </p>
                    <p>
                      For a start, it does not automatically follow that a
                      record amount of ice will melt this summer. More important
                      for determining the size of the annual thaw is the state
                      of the weather as the midnight sun approaches and
                      temperatures rise. But over the more than 30 years of
                      satellite records, scientists have observed a clear
                      pattern of decline, decade-by-decade.
                    </p>
                    <p>
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens with climate change. Even if the
                      Arctic continues to be one of the fastest-warming regions
                      of the world, it will always be plunged into bitterly cold
                      polar dark every winter. And year-by-year, for all kinds
                      of natural reasons, there’s huge variety of the state of
                      the ice.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </Col>
          <div className="section">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h3 className="title">Rest of the Story:</h3>
                  <p>
                    We are here to make life better. And now I look and look
                    around and there’s so many Kanyes I've been trying to figure
                    out the bed design for the master bedroom at our Hidden
                    Hills compound... and thank you for turning my personal jean
                    jacket into a couture piece. <br></br>I speak yell scream
                    directly at the old guard on behalf of the future. daytime
                    All respect prayers and love to Phife’s family Thank you for
                    so much inspiration.
                  </p>
                  <p>
                    Thank you Anna for the invite thank you to the whole Vogue
                    team And I love you like Kanye loves Kanye Pand Pand Panda
                    I've been trying to figure out the bed design for the master
                    bedroom at our Hidden Hills compound...The Pablo pop up was
                    almost a pop up of influence. All respect prayers and love
                    to Phife’s family Thank you for so much inspiration daytime
                    I love this new Ferg album! The Life of Pablo is now
                    available for purchase I have a dream. Thank you to
                    everybody who made The Life of Pablo the number 1 album in
                    the world! I'm so proud of the nr #1 song in the country.
                    Panda! Good music 2016!
                  </p>
                  <p>
                    I love this new Ferg album! The Life of Pablo is now
                    available for purchase I have a dream. Thank you to
                    everybody who made The Life of Pablo the number 1 album in
                    the world! I'm so proud of the nr #1 song in the country.
                    Panda! Good music 2016!
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section section-blog-info">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <Row>
                    <Col md="6">
                      <div className="blog-tags">
                        Tags:{" "}
                        <label className="label label-info mr-1">
                          Photography
                        </label>
                        <label className="label label-info mr-1">Stories</label>
                        <label className="label label-info">Castle</label>
                      </div>
                    </Col>
                    <Col md="6">
                      <Button
                        className="btn-round pull-right"
                        color="google"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-google"></i> 232
                      </Button>
                      <Button
                        className="btn-round pull-right"
                        color="twitter"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i> 910
                      </Button>
                      <Button
                        className="btn-round pull-right"
                        color="facebook"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-facebook-square"></i> 872
                      </Button>
                    </Col>
                  </Row>
                  <hr></hr>
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="2">
                        <div className="card-avatar">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised"
                              src={require("assets/img/mike.jpg")}
                            ></img>
                          </a>
                          <div className="ripple-container"></div>
                        </div>
                      </Col>
                      <Col md="8">
                        <CardTitle tag="h4">Alec Thompson</CardTitle>
                        <p className="description">
                          I've been trying to figure out the bed design for the
                          master bedroom at our Hidden Hills compound...I like
                          good music from Youtube.
                        </p>
                      </Col>
                      <Col md="2">
                        <Button
                          className="pull-right btn-round"
                          color="default"
                          type="button"
                        >
                          Follow
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section section-comments">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <div className="media-area">
                    <h3 className="title text-center">3 Comments</h3>
                    <Media>
                      <a
                        className="pull-left"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <div className="avatar">
                          <Media
                            alt="..."
                            className="img-raised"
                            object
                            src={require("assets/img/james.jpg")}
                          ></Media>
                        </div>
                      </a>
                      <Media body>
                        <Media heading tag="h5">
                          Tina Andrew{" "}
                          <small className="text-muted">· 7 minutes ago</small>
                        </Media>
                        <p>
                          Chance too good. God level bars. I'm so proud of
                          @LifeOfDesiigner #1 song in the country. Panda! Don't
                          be scared of the truth because we need to restart the
                          human foundation in truth I stand with the most
                          humility. We are so blessed!
                        </p>
                        <p>
                          All praises and blessings to the families of people
                          who never gave up on dreams. Don't forget, You're
                          Awesome!
                        </p>
                        <div className="media-footer">
                          <Button
                            className="btn-neutral pull-right"
                            color="info"
                            href="#pablo"
                            id="tooltip963306905"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="now-ui-icons ui-1_send"></i> Reply
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip963306905"
                          >
                            Reply to Comment
                          </UncontrolledTooltip>
                          <Button
                            className="btn-neutral pull-right"
                            color="danger"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="now-ui-icons ui-2_favourite-28"></i>{" "}
                            243
                          </Button>
                        </div>
                      </Media>
                    </Media>
                    <Media>
                      <a
                        className="pull-left"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <div className="avatar">
                          <Media
                            alt="..."
                            className="img-raised"
                            object
                            src={require("assets/img/michael.jpg")}
                          ></Media>
                        </div>
                      </a>
                      <Media body>
                        <Media heading tag="h5">
                          John Camber{" "}
                          <small className="text-muted">· Yesterday</small>
                        </Media>
                        <p>
                          Hello guys, nice to have you on the platform! There
                          will be a lot of great stuff coming soon. We will keep
                          you posted for the latest news.
                        </p>
                        <p>Don't forget, You're Awesome!</p>
                        <div className="media-footer">
                          <Button
                            className="btn-neutral pull-right"
                            color="info"
                            href="#pablo"
                            id="tooltip319050281"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="now-ui-icons ui-1_send"></i> Reply
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip319050281"
                          >
                            Reply to Comment
                          </UncontrolledTooltip>
                          <Button
                            className="btn-neutral pull-right"
                            color="danger"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="now-ui-icons ui-2_favourite-28"></i>{" "}
                            25
                          </Button>
                        </div>
                        <Media>
                          <a
                            className="pull-left"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <div className="avatar">
                              <Media
                                alt="..."
                                className="img-raised"
                                object
                                src={require("assets/img/julie.jpg")}
                              ></Media>
                            </div>
                          </a>
                          <Media body>
                            <Media heading tag="h5">
                              Tina Andrew{" "}
                              <small className="text-muted">· 2 Days Ago</small>
                            </Media>
                            <p>
                              Hello guys, nice to have you on the platform!
                              There will be a lot of great stuff coming soon. We
                              will keep you posted for the latest news.
                            </p>
                            <p>Don't forget, You're Awesome!</p>
                            <div className="media-footer">
                              <Button
                                className="btn-neutral pull-right"
                                color="info"
                                href="#pablo"
                                id="tooltip70762922"
                                onClick={(e) => e.preventDefault()}
                              >
                                <i className="now-ui-icons ui-1_send"></i> Reply
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                target="tooltip70762922"
                              >
                                Reply to Comment
                              </UncontrolledTooltip>
                              <Button
                                className="btn-neutral pull-right"
                                color="danger"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <i className="now-ui-icons ui-2_favourite-28"></i>{" "}
                                2
                              </Button>
                            </div>
                          </Media>
                        </Media>
                      </Media>
                    </Media>
                  </div>
                  <h3 className="title text-center">Post your comment</h3>
                  <Media className="media-post">
                    <a
                      className="pull-left author"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <div className="avatar">
                        <Media
                          alt="..."
                          className="img-raised"
                          object
                          src={require("assets/img/olivia.jpg")}
                        ></Media>
                      </div>
                    </a>
                    <Media body>
                      <Input
                        placeholder="Write a nice reply or go home..."
                        rows="4"
                        type="textarea"
                      ></Input>
                      <div className="media-footer">
                        <Button
                          className="pull-right"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="now-ui-icons ui-1_send"></i> Reply
                        </Button>
                      </div>
                    </Media>
                  </Media>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section">
            <Container>
              <Col md="12">
                <h2 className="title text-center">Similar Stories</h2>
                <br></br>
                <div className="blogs-1" id="blogs-1">
                  <Row>
                    <Col className="ml-auto mr-auto" md="10">
                      <Card className="card-plain card-blog">
                        <Row>
                          <Col md="5">
                            <div className="card-image">
                              <img
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/examples/card-blog4.jpg")}
                              ></img>
                            </div>
                          </Col>
                          <Col md="7">
                            <h6 className="category text-info">Enterprise</h6>
                            <CardTitle tag="h3">
                              <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Warner Music Group buys concert discovery
                                service Songkick
                              </a>
                            </CardTitle>
                            <p className="card-description">
                              Warner Music Group announced today it’s acquiring
                              the selected assets of the music platform
                              Songkick, including its app for finding concerts
                              and the company’s trademark.
                            </p>
                            <p className="author">
                              by{" "}
                              <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <b>Sarah Perez</b>
                              </a>
                              , 2 days ago
                            </p>
                          </Col>
                        </Row>
                      </Card>
                      <Card className="card-plain card-blog">
                        <Row>
                          <Col md="7">
                            <h6 className="category text-danger">
                              <i className="now-ui-icons now-ui-icons media-2_sound-wave"></i>{" "}
                              Startup
                            </h6>
                            <CardTitle tag="h3">
                              <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Insticator raises $5.2M to help publishers
                              </a>
                            </CardTitle>
                            <p className="card-description">
                              Insticator is announcing that it has raised $5.2
                              million in Series A funding. The startup allows
                              online publishers to add quizzes, polls and other
                              interactive elements...
                            </p>
                            <p className="author">
                              by{" "}
                              <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <b>Anthony Ha</b>
                              </a>
                              , 5 days ago
                            </p>
                          </Col>
                          <Col md="5">
                            <div className="card-image">
                              <img
                                alt="..."
                                className="img img-raised rounded"
                                src={require("assets/img/examples/card-blog6.jpg")}
                              ></img>
                            </div>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Container>
          </div>
        </div>
        <FooterBlack />
      </div>
    </>
  );
}

export default BlogPost;
