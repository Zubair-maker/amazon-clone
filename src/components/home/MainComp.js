import React from "react";
import Banner from "./Banner";
import "../home/home.css";
import Slide from "./Slide";
import { Divider } from "@mui/material";

const MainComp = () => {
  return (
    <>
    <div className="home_section">
      <div className="banner_part">
        <Banner />
      </div>
      <div className="slide_part">
        <div className="left_slide">
          <Slide title="Deal Of The Day"/>
        </div>
        <div className="right_slide">
          <h4>Festival latest launches</h4>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg"
            alt=""
          />
          <a href="#">see more</a>
        </div>
      </div>
      <Slide title="Today's Deal"/>
      <div className="center_img">
        <img
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt=""
        />
      </div>
      <Slide title="Best Seller" />
      <Slide title="Upto 80% off"/>
    </div>
    <Divider/>
    </>
  );
};

export default MainComp;
