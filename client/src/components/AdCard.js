

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

export const AD_CARD_DATA = gql`
  fragment AdCardData on AdMessage {
        author {
            id
            commonName { name }
            profileImageSrc
        }
        skills {
            name
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
`;

export const AdCard = ({ message })  => {
    console.log(message)
    return (
    <div className="request-adcard">
      <Card>
         <CardBody>
            <div className="card-meta">
              <h6 className="card-subtitle">
                  <i className="now-ui-icons media-2_sound-wave"></i>{" "}
                  Looking For
              </h6>
              <small className="card-timestamp">m ago</small>
            </div>
            <CardTitle tag="h3">
                <a className="nav-link" href="#pablo" onClick={(e) => e.preventDefault()}>
                    {message.title}
                </a>
            </CardTitle>
            <p className="card-message">
                    {message.text}
            </p>
            <CardFooter>
                <div className="author">
                  <img
                      alt="..."
                      className="avatar img-raised"
                      src={require("assets/img/julie.jpg")}
                      //argh why doesnt this work?!?
                      //src={require(message.author.profileImageSrc)}
                  ></img>
                  <span>{message.author.commonName.name}</span>
                </div>

                <div className="tags">
                    {message.skills.map((skill) => 
                        <Badge variant="contained" color="success" key="`${skill.name}`">
                            {skill.name}
                        </Badge>
                    )}
                </div>
                
            </CardFooter>
        </CardBody>
      </Card>
    </div>
  );
}
  