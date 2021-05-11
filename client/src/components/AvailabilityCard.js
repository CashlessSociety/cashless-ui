

import { gql, useQuery } from "@apollo/client";
import React from "react";
// reactstrap components
import {
  Card,
  CardBody,
  CardFooter
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
    <div className="availability-card">
      <Card data-background-color="orange">
         <CardBody>
            <p>
              {/* FIXME whats the best way to do a comma separated list ? */}
              <i className="now-ui-icons business_bulb-63"></i>
              <div className="available-for">
                <span className="available-user">{message.author.commonName.name}</span>
                is available for 
              </div> 
            </p>
        </CardBody>
        <CardFooter>
          <span className="each-skill">{message.skills.map(skill => skill.name).join(', ')}</span>
        </CardFooter>
      </Card>
    </div>
  );
}


  