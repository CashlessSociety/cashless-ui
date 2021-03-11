import React from "react";
// react plugin used to create DropdownMenu for selecting messages
import Select from "react-select";
import axios from 'axios';
// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import TopNavbar from "components/Navbars/TopNavbar.js";
import HomeHeader from "components/Headers/HomeHeader.js";
import FooterSocial from "components/Footers/FooterSocial.js";
import ProfileCard from "components/ProfileCard.js"

function JoinPage() {

  const load = async () => {
    console.log("join page load");
  }
  // select states and functions
  React.useEffect(() => {
    (async () => await load())();
    
    return function cleanup() {
    };
  }, []);

  return (
    <>
      <TopNavbar />
      <div className="wrapper">
        <ProfileCard />
      </div>
    </>
  );
}

export default JoinPage;
