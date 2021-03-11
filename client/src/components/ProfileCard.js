

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
   
  }
`;


export const ProfileCard = ({ message })  => {
    return (
    <div className="profile-card">
      <Card>
         <CardBody>
            <p>
              Profile Image, Name, Bio go here
            </p>
        </CardBody>
      </Card>
    </div>
  );
}


  