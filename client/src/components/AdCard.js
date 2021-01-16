

import { gql, useQuery } from "@apollo/client";
import React from "react";
// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
} from "reactstrap";


const AD_MESSAGE_QUERY = gql`
    query Query  {
    adMessage  {
        author {
            id
            commonName { name }
        }
        text
        timestamp
        adType
        maxHours
        minHours
        denomination
        rate
    }
}`

const AdCard = ({ messageId })  => {
    const { data, loading, error } = useQuery(AD_MESSAGE_QUERY, {
        variables: { messageId }
      }); 
    console.log("adcard") 
    if (loading) return <></>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    return (
    <>
      <Card>
         <CardBody>
            <h6 className="category text-danger">
                <i className="now-ui-icons media-2_sound-wave"></i>{" "}
                Trending
            </h6>
            <CardTitle tag="h5">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                Here Be Dragons
                </a>
            </CardTitle>
            <p className="card-description">
                An immersive production studio focused on virtual reality
                content, has closed a $10 million Series A round led by
                Discovery Communications
            </p>
            <CardFooter>
                <div className="author">
                <img
                    alt="..."
                    className="avatar img-raised"
                    src={require("assets/img/olivia.jpg")}
                ></img>
                <span>Lord Alex</span>
                </div>
                <div className="stats stats-right">
                <i className="now-ui-icons ui-2_favourite-28"></i>
                342 ·{" "}
                <i className="now-ui-icons files_single-copy-04"></i>
                45
                </div>
            </CardFooter>
        </CardBody>
      </Card>
    </>
  );
}

export default AdCard;
  