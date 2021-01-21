

import { gql, useQuery } from "@apollo/client";
import React from "react";
// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Badge,
} from "reactstrap";

// FIXME this actually needs to be a fragment read into the parent (or any related) graphql query
const AD_MESSAGE_QUERY = gql`
    query Query  {
    adMessage  {
        author {
            id
            commonName { name }
        }
        title
        text
        timestamp
        adType
        maxHours
        minHours
        denomination
        rate
    }
}`

const AdCard = ({ message })  => {
    console.log(message)
    return (
    <>
      <Card>
         <CardBody>
            <div className="card-meta">
              <h6 className="text-primary">
                  <i className="now-ui-icons media-2_sound-wave"></i>{" "}
                  Looking For
              </h6>
              <small className="text-muted">m ago</small>
            </div>
            <CardTitle tag="h3">
                <a className="nav-link" href="#pablo" onClick={(e) => e.preventDefault()}>
                    {message.title}
                </a>
            </CardTitle>
            <p>
                    {message.text}
            </p>
            <CardFooter>
                <div className="author">
                  <img
                      alt="..."
                      className="avatar img-raised"
                      src={require("assets/img/olivia.jpg")}
                  ></img>
                  <span>Ariene McCoy</span>
                </div>
                <div className="tags tags-right">
                    <Badge variant="contained" color="success">
                    Web Development
                    </Badge>
                </div>
            </CardFooter>
        </CardBody>
      </Card>
    </>
  );
}

export default AdCard;
  