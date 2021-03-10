

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


export const PROFILE_CARD_DATA = gql`
  fragment ProfileCardData on Profile {
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


export const ProfileCard = ({ message })  => {
    console.log(message)
    console.log(message.id)
    return (
    <div className="availability-card">
      <Card data-background-color="orange">
         <CardBody>
            <p>
              {/* FIXME whats the best way to do a comma separated list ? */}
              <i className="now-ui-icons business_bulb-63"></i>
              <div class="available-for">
                <span class="available-user">{message.author.commonName.name}</span>
                is available for 
              </div> 
              <span className="each-skill">{message.skills.map(skill => skill.name).join(', ')}</span>
            </p>
        </CardBody>
      </Card>
    </div>
  );
}


  