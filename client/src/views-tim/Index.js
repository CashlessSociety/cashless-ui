import React from "react";

// reactstrap components

// core components
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import FooterBlack from "components/Footers/FooterBlack.js";

// sections for this page
import Images from "./index-sections/Images.js";
import Basic from "./index-sections/Basic.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
import Pills from "./index-sections/Pills.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import PreFooter from "./index-sections/PreFooter.js";
import Footers from "./index-sections/Footers.js";
import Typography from "./index-sections/Typography.js";
import ContentAreas from "./index-sections/ContentAreas.js";
import Cards from "./index-sections/Cards.js";
import PlainCards from "./index-sections/PlainCards.js";
import Javascript from "./index-sections/Javascript.js";
import FileUploader from "./index-sections/FileUploader.js";
import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <ScrollTransparentNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Images />
          <Basic />
          <Navbars />
          <Tabs />
          <Pills />
          <Pagination />
          <Notifications />
          <PreFooter />
          <Footers />
          <Typography />
          <ContentAreas />
          <Cards />
          <PlainCards />
          <Javascript />
          <FileUploader />
          <Carousel />
          <NucleoIcons />
          <FooterBlack />
        </div>
      </div>
    </>
  );
}

export default Index;
