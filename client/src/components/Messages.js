
import { gql, useQuery } from "@apollo/client";
import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

import Loading from "./Loading"
import {AvailabilityCard, AVAILABILITY_CARD_DATA} from "./AvailabilityCard"
import {AdCard, AD_CARD_DATA} from "./AdCard"

const messagesQuery = gql`
    query Query {
      # passing a 'blank' userId just means 'all messages'
      allMessagesFor {

        ... on Message {
            type
            id
        }
        ...AdCardData
        ...AvailabilityCardData
      }
    }

  ${AD_CARD_DATA}
  ${AVAILABILITY_CARD_DATA}
`

// core components

const Messages = () => {
  const { data, loading, error } = useQuery(messagesQuery);

  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  return (
    <>
      <div
        className="section section-cards bg-dark"
        id="cards"
      >
        <div className="cards">
          <Container>
              { data.allMessagesFor.map((message) => (

                  {
                    'AdMessage': <AdCard message={message} key={message.id} />,
                    'AvailabilityMessage': <AvailabilityCard message={message} key={message.id} />
                  }[message.__typename]
                 
              ))}
            </Container>    
        </div>
      </div>
    </>
  );
}

export default Messages;
  