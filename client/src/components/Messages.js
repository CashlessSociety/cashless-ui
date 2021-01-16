
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
import AdCard from "./AdCard"

const messagesQuery = gql`
    query Query {
      # passing a 'blank' userId just means 'all messages'
      allMessagesFor {
        type
        id
      }
    }
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
        className="section section-cards"
        data-background-color="gray"
        id="cards"
      >
        <div className="cards">
          <Container>
            <Row>
              <Col>
              { 
                data.allMessagesFor &&
                console.log(data.allMessagesFor) &&
                data.allMessagesFor.map(message => (
                  <h2>why doesnt this render?</h2>
                  
                ))}
                <AdCard />
                <AdCard />
                <AdCard />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Messages;
  