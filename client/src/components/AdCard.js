

import { gql, useQuery } from "@apollo/client";
import React from "react";
// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Button,
} from "reactstrap";


// This needs to be a fragment read into the parent graphql bit
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
            <h6 className="category text-danger">
                <i className="now-ui-icons media-2_sound-wave"></i>{" "}
                Looking For
            </h6>
            <CardTitle tag="h5">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    {message.title}
                </a>
            </CardTitle>
            <p className="card-description">
                user description of what the card is 
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
                    <Button variant="contained" className="tag" color="secondary">
                    Web Development
                    </Button>
                </div>
            </CardFooter>
        </CardBody>
      </Card>
    </>
  );
}

export default AdCard;
  