

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


export const AVAILABILITY_CARD_DATA = gql`
  fragment AvailabilityCardData on AvailabilityMessage {
    skills {
      name
    }
    author {
      commonName {
        name
      }
    }
  }
`;


export const AvailabilityCard = ({ message })  => {
    console.log(message)
    return (
    <>
      <Card>
         <CardBody>
            <p>
              {/* FIXME whats the best way to do a comma separated list ? */}
            {message.author.commonName.name} is available for {message.skills.map(skill => skill.name).join(', ')}
            </p>
        </CardBody>
      </Card>
    </>
  );
}


  