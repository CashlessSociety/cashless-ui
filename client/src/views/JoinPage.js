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
import Messages from "components/Messages.js"

function JoinPage() {

  const load = async () => {
    console.log("join page load");

  }
  // select states and functions
  React.useEffect(() => {
    (async () => await load())();
    //document.body.classList.add("product-page");
    //document.body.classList.add("sidebar-collapse");
    //window.scrollTo(0, 0);
    //document.body.scrollTop = 0;
    return function cleanup() {
      //document.body.classList.remove("product-page");
      //document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <>
      <TopNavbar />
      <div className="wrapper">
      join
      </div>
    </>
  );
}

export default JoinPage;
