import React from "react";
import "../home/banner.css";
import Carousel from "react-material-ui-carousel";

const data = [
  "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
  " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
];

const Banner = () => {
  return (
    <Carousel 
    className="carousel"
    animation="slide"
    autoPlay={true}
    indicators={false}
    navButtonsAlwaysVisible={true}
    >
          {
            data.map((image)=>{
                return(
                    <>
                       <img src={image} alt="" className="banner_img" />
                    </>
                )
            })
          }
    </Carousel>
  )
};

export default Banner;
