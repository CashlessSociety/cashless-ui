import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
import axios from 'axios';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardLink,
  CardTitle,
  Collapse,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components
import TopNavbar from "components/Navbars/TopNavbar.js";
import HomeHeader from "components/Headers/HomeHeader.js";
import FooterSocial from "components/Footers/FooterSocial.js";

import { ApolloClient, gql } from "@apollo/client";
import { cache } from "../cache";

// FIXME should load this elsewhere and inject but 
// for now we only have one page so..
const apollo = new ApolloClient({
  cache,
  uri: "/graphql"
});


const messagesQuery = gql`
    query Query {
      # passing a 'blank' userId just means 'all messages'
      allMessagesFor {
        type
        id
      }
    }
`

function IndexPage() {

  const [items, setItems] = React.useState([]);

  const load = async () => {
    let r = await axios.get("/ads");
    //console.log(r.data);
    setItems(r.data);

    apollo.query({
      query: messagesQuery
    })
    .then(result => console.log(result));

    // doesnt work for some reason 
    // const result = await apollo.query({
    //   query: messagesQuery
    // })
    // console.log(result);

  }

  // states and functions
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  // collapse states and functions
  const [collapses, setCollapses] = React.useState([1]);
  const changeCollapse = (collapse) => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter((prop) => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };

  // select states and functions
  const [colorSelect, setColorSelect] = React.useState(null);
  const [sizeSelect, setSizeSelect] = React.useState(null);
  React.useEffect(() => {
    (async () => await load())();
    document.body.classList.add("product-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("product-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <TopNavbar />
      <div className="wrapper">
        <HomeHeader />
        <div className="section">
          <Container>
            <Row>
              <Col md="5">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img
                          //src={require(item.src)}
                          src={require("assets/img/pp-1.jpg")}
                          alt={item.altText}
                          className="d-block img-raised"
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      name="button"
                      size="sm"
                      type="button"
                    >
                      <i className="now-ui-icons arrows-1_minimal-left"></i>
                    </Button>
                  </a>
                  <a
                    className="carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      name="button"
                      size="sm"
                      type="button"
                    >
                      <i className="now-ui-icons arrows-1_minimal-right"></i>
                    </Button>
                  </a>
                </Carousel>
      
              </Col>
              <Col className="ml-auto mr-auto" md="6">
                <h2 className="title">Feed</h2>

                <div
                  aria-multiselectable={true}
                  className="card-collapse"
                  id="accordion"
                  role="tablist"
                >
                  <Card className="card-plain">
                    <CardHeader id="headingOne" role="tab">
                      <a
                        aria-expanded={collapses.includes(1)}
                        data-parent="#accordion"
                        data-toggle="collapse"
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          changeCollapse(1);
                        }}
                      >
                        Description{" "}
                        <i className="now-ui-icons arrows-1_minimal-down"></i>
                      </a>
                    </CardHeader>
                    <Collapse isOpen={collapses.includes(1)}>
                      <CardBody>
                        <p>
                          Eres' daring 'Grigri Fortune' swimsuit has the fit and
                          coverage of a bikini in a one-piece silhouette. This
                          fuchsia style is crafted from the label's sculpting
                          peau douce fabric and has flattering cutouts through
                          the torso and back. Wear yours with mirrored
                          sunglasses on vacation.
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>

                </div>

              </Col>
            </Row>
          </Container>
        </div>

        <FooterSocial />
      </div>
    </>
  );
}

export default IndexPage;
